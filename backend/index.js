const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Import routes
const authRoutes = require("./routes/auth");
const timetableRoutes = require("./routes/timetable");

dotenv.config();
const app = express();

// ================== MIDDLEWARE ==================
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000", // frontend URL
  credentials: true
}));
app.use(cookieParser());

// ================== ROUTES ==================
app.use("/api/auth", authRoutes);
app.use("/api/timetable", timetableRoutes);

// ================== DB CONNECTION ==================
const connectDB = require("./config/db");
connectDB();

// ================== DEFAULT ROUTE ==================
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// ================== START SERVER ==================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
