// Frontend validation helper functions
const authValidator = {
  // Validate email format
  isValidEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // Validate password length
  isValidPassword: (password) => {
    return password && password.length >= 8;
  },

  // Validate username is not empty
  isValidUsername: (username) => {
    return username && username.trim().length > 0;
  },

  // Validate login form
  validateLogin: (data) => {
    const errors = [];

    if (!data.email) {
      errors.push({ path: "email", msg: "Email is required" });
    } else if (!authValidator.isValidEmail(data.email)) {
      errors.push({ path: "email", msg: "Invalid email address" });
    }

    if (!data.password) {
      errors.push({ path: "password", msg: "Password is required" });
    } else if (!authValidator.isValidPassword(data.password)) {
      errors.push({
        path: "password",
        msg: "Password must be at least 8 characters long",
      });
    }

    return errors;
  },

  // Validate register form
  validateRegister: (data) => {
    const errors = [];

    if (!data.username) {
      errors.push({ path: "username", msg: "Username is required" });
    } else if (!authValidator.isValidUsername(data.username)) {
      errors.push({ path: "username", msg: "Username cannot be empty" });
    }

    if (!data.email) {
      errors.push({ path: "email", msg: "Email is required" });
    } else if (!authValidator.isValidEmail(data.email)) {
      errors.push({ path: "email", msg: "Invalid email address" });
    }

    if (!data.password) {
      errors.push({ path: "password", msg: "Password is required" });
    } else if (!authValidator.isValidPassword(data.password)) {
      errors.push({
        path: "password",
        msg: "Password must be at least 8 characters long",
      });
    }

    if (!data.confirmPassword) {
      errors.push({
        path: "confirmPassword",
        msg: "Confirm password is required",
      });
    } else if (data.password !== data.confirmPassword) {
      errors.push({ path: "confirmPassword", msg: "Passwords do not match" });
    }

    return errors;
  },
};

export default authValidator;
