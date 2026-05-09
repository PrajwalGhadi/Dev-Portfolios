require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./routers/auth.routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoute);

module.exports = app;
