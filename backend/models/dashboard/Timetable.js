const mongoose = require("mongoose");

const timetableSchema = new mongoose.Schema({
  branch: { type: String, required: true },
  semester: { type: Number, required: true, min: 1, max: 8 },
  section: { type: Number, required: true, enum: [1, 2, 3] },

  // Just save the Google Drive / Cloud link
  fileUrl: { type: String, required: true },
});

module.exports = mongoose.model("Timetable", timetableSchema);
