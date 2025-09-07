const express = require("express");
const Material = require("../models/Material");
const router = express.Router();

// ================== Get resources by single subject ==================
router.get("/:subject", async (req, res) => {
  try {
    const material = await Material.findOne({ subject: req.params.subject });
    if (!material) return res.status(404).json({ message: "Not found" });
    res.json(material);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ================== Batch fetch multiple subjects ==================
router.post("/batch", async (req, res) => {
  try {
    const { subjects } = req.body; // array of subject names
    if (!Array.isArray(subjects)) {
      return res.status(400).json({ message: "Subjects must be an array" });
    }

    const materials = await Material.find({ subject: { $in: subjects } });

    // Convert to an object for easier frontend mapping
    const result = {};
    subjects.forEach(sub => {
      const mat = materials.find(m => m.subject === sub);
      result[sub] = mat ? mat.resources : {}; // default empty object if not found
    });

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ================== Admin-only: Add new subject materials ==================
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

// ================== Admin-only: Update subject materials ==================
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
