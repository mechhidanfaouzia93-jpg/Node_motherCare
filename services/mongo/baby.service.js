const express = require("express");
const router = express.Router();
const Baby = require("../models/Baby");


// 📥 GET baby (on prend le premier document)
router.get("/", async (req, res) => {
  try {
    let baby = await Baby.findOne();

    // si aucun bébé en DB → on le crée
    if (!baby) {
      baby = await Baby.create({
        name: "Bébé",
        week: 0,
        weight: 0,
        height: 0,
      });
    }

    res.json(baby);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ➕ UPDATE week
router.put("/week", async (req, res) => {
  try {
    const { week } = req.body;

    if (week === undefined) {
      return res.status(400).json({ message: "Week is required" });
    }

    let baby = await Baby.findOne();

    if (!baby) {
      baby = await Baby.create({ week: 0 });
    }

    baby.week = week;
    baby.weight = +(0.2 * week + 2.5).toFixed(1);
    baby.height = Math.round(4.5 * week + 50);

    await baby.save();

    res.json(baby);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// 🔄 RESET baby
router.post("/reset", async (req, res) => {
  try {
    let baby = await Baby.findOne();

    if (!baby) {
      baby = await Baby.create({});
    } else {
      baby.week = 0;
      baby.weight = 0;
      baby.height = 0;
      await baby.save();
    }

    res.json({ message: "Baby reset", baby });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;