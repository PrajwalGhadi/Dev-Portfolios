const { body } = require("express-validator");

const authValidator = {
  validateLogin: [
    body("email").isEmail().withMessage("Invalid email address"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
  ],

  validateRegister: [
    body("email").isEmail().withMessage("Invalid email address"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
    body("username").notEmpty().withMessage("Username is required"),
  ],
};

module.exports = authValidator;
