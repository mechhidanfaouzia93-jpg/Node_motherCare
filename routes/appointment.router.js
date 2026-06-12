const express = require("express");
const router = express.Router();

const Appointment = require("../models/Appointment");
const authMiddleware = require("../middlewares/authMiddleware");


// CREATE APPOINTMENT
router.post("/", authMiddleware, async (req, res) => {
  try {
    const appointment = await Appointment.create({
      ...req.body,
      userId: req.user.id,
    });

    return res.status(201).json({
      success: true,
      data: appointment,
    });

  } catch (error) {
    console.log("CREATE ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


// GET ALL APPOINTMENTS
router.get("/", authMiddleware, async (req, res) => {
  try {
    const appointments = await Appointment.find({
      userId: req.user.id,
    }).sort({ date: 1 });

    return res.status(200).json({
      success: true,
      count: appointments.length,
      data: appointments,
    });

  } catch (error) {
    console.error("GET ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


// DELETE APPOINTMENT
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const deleted = await Appointment.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Rendez-vous introuvable",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Rendez-vous supprimé",
    });

  } catch (error) {
    console.error("DELETE ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;