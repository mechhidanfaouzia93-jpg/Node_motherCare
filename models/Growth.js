const mongoose = require("mongoose");

const growthSchema = new mongoose.Schema({
  weight: Number,
  height: Number,
  date: Date,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Growth", growthSchema);