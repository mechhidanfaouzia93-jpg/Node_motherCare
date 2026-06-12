const mongoose = require("mongoose");

const BabySchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Bébé",
  },
  week: {
    type: Number,
    default: 0,
  },
  weight: {
    type: Number,
    default: 0,
  },
  height: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Baby", BabySchema);