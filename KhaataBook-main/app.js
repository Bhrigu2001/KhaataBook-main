// packages imports
require("dotenv").config();

const express = require("express");
const path = require("path");
const dbgr = require("debug")("development:app");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const session = require("express-session");

// dotenv configuration
require("dotenv").config();

// Initialize app
const app = express();

// Database configuration
const db = require("./config/database-connection");

// Routes
const indexRoute = require("./routes/index-route");
const hisaabRoute = require("./routes/hisaab-route");

// View engine
app.set("view engine", "ejs");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET || "your_default_secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(flash());

// Routes
app.use("/", indexRoute);
app.use("/hisaab", hisaabRoute);

// Server listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  dbgr("Server is running on port " + PORT);
  console.log("Server is running on port " + PORT); // <- Optional: adds visible log
});
