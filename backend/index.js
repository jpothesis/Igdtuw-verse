const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Import routes
const authRoutes = require("./routes/auth");
const timetableRoutes = require("./routes/dashboard_routes/timetable");
const materialsRoutes = require("./routes/materials");

const app = express();

// ================== MIDDLEWARE ==================
app.use(express.json());
app.use(cors({
  origin: ["https://igdtuw-verse.netlify.app", 'http://localhost:5173'], // frontend domain
  credentials: true, // if you send cookies/session
}));
app.use(cookieParser());

// ================== ROUTES ==================
app.use("/api/auth", authRoutes);
app.use("/api/timetable", timetableRoutes);
app.use("/api/materials", materialsRoutes);

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
