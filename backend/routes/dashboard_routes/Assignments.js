const express = require("express");
const Assignment = require("../../models/dashboard/Assignments"); 
const { verifyToken } = require("../auth");

const router = express.Router();

// ================== GET ALL ASSIGNMENTS ==================
router.get("/", verifyToken, async (req, res) => {
  try {
    const assignments = await Assignment.find({ user: req.user.id });
    res.json(assignments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ================== CREATE NEW ASSIGNMENT ==================
router.post("/", verifyToken, async (req, res) => {
  try {
    const dueDate = new Date(req.body.dueDate);

    const assignment = new Assignment({
      ...req.body,
      user: req.user.id,
      expireAt: new Date(dueDate.getTime() + 7 * 24 * 60 * 60 * 1000), // add expireAt on create
    });

    const saved = await assignment.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ================== UPDATE ASSIGNMENT ==================
router.put("/:id", verifyToken, async (req, res) => {
  try {
    let updateData = { ...req.body };

    // If dueDate is being updated, refresh expireAt = dueDate + 7 days
    if (req.body.dueDate) {
      const dueDate = new Date(req.body.dueDate);
      updateData.expireAt = new Date(dueDate.getTime() + 7 * 24 * 60 * 60 * 1000);
    }

    const updated = await Assignment.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      updateData,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: "Assignment not found or not authorized" });
    }

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ================== DELETE ASSIGNMENT ==================
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const deleted = await Assignment.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });
    if (!deleted) {
      return res.status(404).json({ message: "Assignment not found" });
    }
    res.json({ message: "Assignment deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
