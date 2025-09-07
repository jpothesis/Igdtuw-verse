const mongoose = require("mongoose");

const materialSchema = new mongoose.Schema({
  subject: { type: String, required: true }, 
  resources: {
    books: { type: String },       
    notes: { type: String },
    pyqs: { type: String },
    assignments: { type: String }
  }
});

module.exports = mongoose.model("Material", materialSchema);
