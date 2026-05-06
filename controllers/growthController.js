const { createGrowth, getGrowthByUser } = require("../services/growthService");

exports.addGrowth = async (req, res) => {
  try {
    const growth = await createGrowth({
      ...req.body,
      userId: req.user.id,
    });

    res.json(growth);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getGrowth = async (req, res) => {
  try {
    const data = await getGrowthByUser(req.user.id);
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};