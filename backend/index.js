const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");

// ================== IMPORT ROUTES ==================
const authRoutes = require("./routes/auth");
const timetableRoutes = require("./routes/dashboard_routes/timetable");
const materialsRoutes = require("./routes/materials");
const assignmentRoutes = require("./routes/dashboard_routes/Assignments"); 

const app = express();

// ================== MIDDLEWARE ==================
app.use(express.json());
app.use(
  cors({
    origin: [
      "https://igdtuw-verse.netlify.app",
      "http://localhost:5173"
    ], // ✅ allow deployed + local
    credentials: true,
  })
);
app.use(cookieParser());

// ================== ROUTES ==================
app.use("/api/auth", authRoutes);
app.use("/api/timetable", timetableRoutes);
app.use("/api/materials", materialsRoutes);
console.log("assignmentRoutes:", assignmentRoutes);
app.use("/api/assignments", assignmentRoutes); // ✅ new

// ================== DB CONNECTION ==================
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
