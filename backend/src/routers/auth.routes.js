const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const authValidator = require('../middlewares/auth.validator');
const {register, login, logout, updateUser, deleteUser, getUser} = require('../controllers/auth.controller');

// Backend Health Check Route
router.get('/healthCheck', (req, res)=> {
    res.status(200).json({ success: true, message: 'Server is Healthy'})
})

// Public Routes - No Authentication Required
router.post('/register', authValidator.validateRegister, register);
router.post('/login', authValidator.validateLogin, login);

// Protected Routes - Require Authentication
router.get('/logout', authMiddleware, logout);
router.get('/getUser', authMiddleware, getUser);
router.patch('/updateUser', authMiddleware, updateUser);
router.delete('/deleteUser', authMiddleware, deleteUser);

module.exports = router