const express = require("express");
const Assignment = require("../models/Assignment");
const router = express.Router();

// Middleware to check user ID from request (assumes user is logged in)
const authMiddleware = (req, res, next) => {
  // Example: req.userId is set after authentication
  if (!req.userId) return res.status(401).json({ message: "Unauthorized" });
  next();
};

router.use(authMiddleware);

// Create new assignment
router.post("/", async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;
    const newAssignment = new Assignment({
      user: req.userId,
      title,
      description,
      dueDate,
    });
    await newAssignment.save();
    res.status(201).json(newAssignment);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Get all assignments for this user
router.get("/", async (req, res) => {
  try {
    const assignments = await Assignment.find({ user: req.userId }).sort({ dueDate: 1 });
    res.json(assignments);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Mark assignment as submitted
router.patch("/:id/submit", async (req, res) => {
  try {
    const assignment = await Assignment.findOne({ _id: req.params.id, user: req.userId });
    if (!assignment) return res.status(404).json({ message: "Assignment not found" });

    assignment.submitted = true;
    await assignment.save();
    res.json(assignment);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Delete assignment
router.delete("/:id", async (req, res) => {
  try {
    const assignment = await Assignment.findOneAndDelete({ _id: req.params.id, user: req.userId });
    if (!assignment) return res.status(404).json({ message: "Assignment not found" });
    res.json({ message: "Assignment deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
