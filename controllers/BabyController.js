const { getBabyByUser } = require("../services/babyService");

exports.getBaby = async (req, res) => {
  try {
    const baby = await getBabyByUser(req.user.id);
    res.json(baby);
  } catch (err) {
    res.status(500).json(err);
  }
};