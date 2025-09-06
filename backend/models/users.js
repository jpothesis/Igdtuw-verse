const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  branch: { type: String, required: true },   
  semester: { type: Number, required: true },   
  section: { type: Number, required: true },     

  role: {
    type: String,
    enum: ["student", "admin"],
    default: "student", // everyone signing up is student by default
  },
});

module.exports = mongoose.model("User", userSchema);
