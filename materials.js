const express = require("express");
const Material = require("../models/Material");
const router = express.Router();

// Get resources by subject
router.get("/:subject", async (req, res) => {
  try {
    const material = await Material.findOne({ subject: req.params.subject });
    if (!material) return res.status(404).json({ message: "Not found" });
    res.json(material);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Admin-only: Add new subject materials
router.post("/", async (req, res) => {
  try {
    const { subject, resources } = req.body;
    const material = new Material({ subject, resources });
    await material.save();
    res.json(material);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Admin-only: Update subject materials
router.put("/:subject", async (req, res) => {
  try {
    const material = await Material.findOneAndUpdate(
      { subject: req.params.subject },
      req.body,
      { new: true }
    );
    res.json(material);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
