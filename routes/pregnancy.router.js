const express = require("express");

const router = express.Router();

const User = require("../models/User");

// GET PREGNANCY DATA
router.get("/", async (req, res) => {
  try {

    // récupère le dernier user inscrit
    const user = await User.findOne().sort({
      createdAt: -1,
    });

    if (!user) {
      return res.status(404).json({
        message: "Utilisateur introuvable",
      });
    }

    res.json(user);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      error: err.message,
    });

  }
});

module.exports = router;