const express = require("express");
const router = express.Router();

const Growth = require("../models/Growth");

router.get("/", async (req, res) => {
  const data = await Growth.find();

  console.log("GROWTH FROM DB:", data);

  res.json(data);
});

module.exports = router;