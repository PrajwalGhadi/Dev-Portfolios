require('dotenv').config();
const express = require('express');
const app = express();
const authRoute = require('./routers/auth.routes');
const connectDB = require('./configs/db.config');
const cors = require('cors');
const cookieParser = require('cookie-parser');

connectDB()
app.use(cors());
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({extended: true})) 

app.use('/auth', authRoute);

module.exports = app;