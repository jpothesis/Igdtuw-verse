const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  branch: { type: String, required: true },    
  semester: { type: Number, required: true },   
  section: { type: String, required: true }, 
});

module.exports = mongoose.model("User", UserSchema);
