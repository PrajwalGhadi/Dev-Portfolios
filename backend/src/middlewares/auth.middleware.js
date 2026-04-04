const express = require('express');
const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ success: false, message: 'Unauthorized' });
        }

        const  decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user_id = decoded.id;
        next();

    } catch (error) {
        console.log('Auth Middleware Error: ', error.message);
        res.status(500).json({ success: false, message: 'Unauthorized' });
    }
}

module.exports = authMiddleware;