const express = require("express");
const router = express.Router();

const adviceData = require("../data/advice.json");

adviceData.sort((a, b) => a.week - b.week);

router.get("/", (req, res) => {
  res.json({
    totalWeeks: adviceData.length,
    data: adviceData,
  });
});

router.get("/:week", (req, res) => {
  const week = Number(req.params.week);

  const advice = adviceData.find(
    (a) => Number(a.week) === week
  );

  if (!advice) {
    return res.status(404).json({
      message: `Aucun conseil trouvé pour la semaine ${week}`,
    });
  }

  res.json(advice);
});

module.exports = router;