const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function register(req, res) {
  try {
    const { username, email, password } = req.body;

    // checking if user already exists
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // if user does not exist, create new user
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
      username,
      email,
      password: hashedPassword,
    })

    // Storing cookies
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.cookie("token", token, { httpOnly: true });

    // respond with success message
    res.status(201).json({ success: true, message: "User registered successfully"});

  } catch (error) {
    console.log("Register Error: ", error.message);
    res.status(500).json({ success: false, message: `Registration Failed: ${error.message}` });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    // checking if email and password are provided in the request body
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password are required" });
    }

    // fetching user from database based on email provided in the request body
    const user = await userModel.findOne({email});

    // checking if user exists 
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // comparing the provided password with the hashed password stored in the database using bcrypt
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // if password is not valid, respond with an error message
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    // storing the token in cookies
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "24h" });
    res.cookie("token", token, { httpOnly: true });

    // respond with success message
    res.status(200).json({ success: true, message: "Login successful" });
  } catch (error) {
    console.log("Login Error: ", error.message);
    res.status(500).json({ success: false, message: `Login Failed: ${error.message}` });
  }
}

async function logout(req, res) {
  try {
    res.clearCookie("token");

    res.status(200).json({ success: true, message: "Logout successful" });

  } catch (error) {
    console.log("Logout Error: ", error.message);
    res.status(500).json({ success: false, message: `Logout Failed: ${error.message}` });
  }
}

async function getUser(req, res) {
  try {
    const user = await userModel.findById(req.user_id).select("-password");

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log("Get User Error: ", error.message);
    res.status(500).json({ success: false, message: `Failed to fetch user: ${error.message}` });
  }
}

async function updateUser(req, res) {
  try {
    const { username, password } = req.body;

    // fetching user from database to compare with new data for update
    const user = await userModel.findById(req.user_id);

    // checking if user exists or if there are any changes to update
    if (username === user.username || password === user.password) { 
      return res.status(400).json({ success: false, message: "No changes detected" });
    }

    // using spread operator to conditionally update fields only if they are provided in the request body
    const updatedData = {
      ...username && { username },
      ...password && { password: await bcrypt.hash(password, 10) },
    };

    // udpating the new user data in the database and returning the updated user details without password
    const updatedUser = await userModel.findByIdAndUpdate(req.user_id, updatedData, { new: true }).select("-password");

    res.status(200).json({ success: true, message: "User updated successfully", user: updatedUser });

  } catch (error) {
    console.log("Update User Error: ", error.message);
    res.status(500).json({ success: false, message: `User Update Failed: ${error.message}` });
  }
}

async function deleteUser(req, res) {
  try {
    if (!req.user_id) {
      return res.status(400).json({ success: false, message: "User ID is required" });
    }

    const deletedUser = await userModel.findByIdAndDelete(req.user_id);

    if (!deletedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, message: "User deleted successfully" });

  } catch (error) {
    console.log("Delete User Error: ", error.message);
    res.status(500).json({ success: false, message: `User Delete Failed: ${error.message}` });
  }
}

module.exports = {
  register,
  login,
  logout,
  getUser,
  updateUser,
  deleteUser,
};