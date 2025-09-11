const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String }, // optional for Google users
  role: { type: String, default: "student" },
  authProvider: { type: String, default: "local" }, // "local" | "google"
});

module.exports = mongoose.model("User", userSchema);

