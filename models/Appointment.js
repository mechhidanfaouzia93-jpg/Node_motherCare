

const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    required: true,
  },

  doctor: String,
  location: String,
  notes: String,

  reminderSent: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model(
  "Appointment",
  appointmentSchema
);