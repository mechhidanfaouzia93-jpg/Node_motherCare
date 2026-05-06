const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nom: String,
  email: { type: String, unique: true },
  password: String,
  pregnancyStart: Date,
});

module.exports = mongoose.model("User", userSchema);