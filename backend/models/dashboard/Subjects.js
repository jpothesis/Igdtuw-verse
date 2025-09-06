const mongoose = require("mongoose");

const materialSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["book", "notes", "pyq", "tutorial", "playlist"],
    required: true,
  },
  driveLink: { type: String, required: true },
});

const subjectSchema = new mongoose.Schema({
  branch: { type: String, required: true },
  semester: { type: Number, required: true },
  name: { type: String, required: true }, // e.g., DBMS
  materials: [materialSchema],            // array of material objects
});

module.exports = mongoose.model("Subject", subjectSchema);
