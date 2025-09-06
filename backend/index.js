const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000", // frontend URL
  credentials: true
}));
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);

// Connect to Database
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
