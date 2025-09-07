const express = require("express");
const Subject = require("../models/dashboard/Subjects");

const router = express.Router();

// ================== USER ROUTES ==================
// Fetch all subjects + materials for a branch/semester
router.get("/:branch/:semester", async (req, res) => {
  try {
    const { branch, semester } = req.params;
    const data = await Subject.find({ branch, semester: Number(semester) });

    if (!data || data.length === 0) {
      return res.status(404).json({ message: "No subjects found" });
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ================== ADMIN ROUTES ==================
// Middleware to check admin
const adminAuth = (req, res, next) => {
  const adminKey = req.headers["x-admin-key"];
  if (adminKey !== process.env.ADMIN_SECRET) {
    return res.status(403).json({ error: "Unauthorized: Admin only" });
  }
  next();
};

// Add or update a subject with materials (ADMIN only)
router.post("/", adminAuth, async (req, res) => {
  try {
    const { branch, semester, name, materials } = req.body;

    let subject = await Subject.findOne({ branch, semester, name });
    if (subject) {
      subject.materials = materials; // update
      await subject.save();
    } else {
      subject = new Subject({ branch, semester, name, materials });
      await subject.save();
    }

    res.json(subject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a subject (ADMIN only)
router.delete("/:branch/:semester/:name", adminAuth, async (req, res) => {
  try {
    const { branch, semester, name } = req.params;
    const result = await Subject.deleteOne({ branch, semester, name });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Subject not found" });
    }

    res.json({ message: "Subject deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
