const express = require("express");
const Timetable = require('../../models/dashboard/Timetable');

const adminOnly = require('../../middleware/adminOnly');


const router = express.Router();

// ✅ Get timetable for students
router.get("/", async (req, res) => {
  try {
    const { branch, semester, section } = req.query;

    if (!branch || !semester || !section) {
      return res.status(400).json({ message: "branch, semester, and section are required" });
    }

    const timetable = await Timetable.findOne({ branch, semester, section });

    if (!timetable) {
      return res.status(404).json({ message: "Timetable not found" });
    }

    res.json(timetable);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Add / Update timetable (admins only)
router.post("/", adminOnly, async (req, res) => {
  try {
    const { branch, semester, section, fileUrl } = req.body;

    if (!branch || !semester || !section || !fileUrl) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const updated = await Timetable.findOneAndUpdate(
      { branch, semester, section },
      { branch, semester, section, fileUrl },
      { new: true, upsert: true }
    );

    res.json({ message: "Timetable saved successfully", timetable: updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
