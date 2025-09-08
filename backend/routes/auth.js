const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/users");

const router = express.Router();

// Helper: Generate JWT Tokens
const generateTokens = (user) => {
  const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "15m",
  });

  const refreshToken = jwt.sign({ id: user._id }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: "30d",
  });

  return { accessToken, refreshToken };
};

// ================== REGISTER ==================
router.post("/register", async (req, res) => {
  try {
    const { username, email, password, branch, semester, section } = req.body;

    if (!username || !email || !password || !branch || !semester || !section) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      branch,
      semester,
      section,
      role: "student",
    });

    await newUser.save();

    return res.status(201).json({ success: true, message: "User registered successfully!" });
  } catch (err) {
    console.error("🔥 REGISTER ERROR:", err);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// ================== LOGIN ==================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }

    const { accessToken, refreshToken } = generateTokens(user);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    return res.json({
      success: true,
      accessToken,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        branch: user.branch,
        semester: user.semester,
        section: user.section,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("🔥 LOGIN ERROR:", err);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// ================== REFRESH TOKEN ==================
router.post("/refresh", (req, res) => {
  try {
    const token = req.cookies.refreshToken;
    if (!token) {
      return res.status(401).json({ success: false, message: "No refresh token provided" });
    }

    jwt.verify(token, process.env.JWT_REFRESH_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ success: false, message: "Invalid refresh token" });
      }

      const accessToken = jwt.sign({ id: decoded.id }, process.env.JWT_SECRET, {
        expiresIn: "15m",
      });

      return res.json({ success: true, accessToken });
    });
  } catch (err) {
    console.error("🔥 REFRESH TOKEN ERROR:", err);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// ================== LOGOUT ==================
router.post("/logout", (req, res) => {
  try {
    res.clearCookie("refreshToken");
    return res.json({ success: true, message: "Logged out successfully" });
  } catch (err) {
    console.error("🔥 LOGOUT ERROR:", err);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// ================== PROTECTED USER INFO ==================
router.get("/me", async (req, res) => {
  try {
    const token = req.header("Authorization")?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ success: false, message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    return res.json({ success: true, user });
  } catch (err) {
    console.error("🔥 GET USER INFO ERROR:", err);
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
});

module.exports = router;
