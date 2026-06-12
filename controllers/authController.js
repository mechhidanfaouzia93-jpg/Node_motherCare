const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.register = async (req, res) => {
  try {
    const { nom, email, password } = req.body;

    const hashedPassword = await argon2.hash(password);

    const user = await User.create({
      nom,
      email,
      password: hashedPassword,
    });

    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};