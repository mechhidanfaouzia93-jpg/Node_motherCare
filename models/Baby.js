const mongoose = require("mongoose");

const babySchema = new mongoose.Schema({
  name: String,
  birthDate: Date,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Baby", babySchema);