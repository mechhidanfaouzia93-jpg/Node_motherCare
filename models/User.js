const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    nom: String,

    email: {
      type: String,
      unique: true,
    },

    password: String,

    pregnancyStart: Date,

    hasBaby: Boolean,

    babyName: String,

    babyBirthDate: Date,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);