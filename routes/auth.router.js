const express = require("express");
const router = express.Router();

const User = require("../models/User");

// REGISTER
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const hashedPassword = await argon2.hash(req.body.password);

    const user = new User({
      nom: req.body.nom,
      email: req.body.email,
      password: hashedPassword,
      pregnancyStart: req.body.pregnancyStart,
      hasBaby: req.body.hasBaby,
      babyName: req.body.babyName,
      babyBirthDate: req.body.babyBirthDate,
    });

    await user.save();

    res.status(201).json({
      message: "Utilisateur créé ✅",
      user,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});
// LOGIN
router.post("/login", async (req, res) => {
  try {

    console.log("LOGIN BODY:", req.body);

    const user = await User.findOne({ email: req.body.email });

    console.log("USER:", user);

    if (!user) {
      return res.status(404).json({
        message: "Utilisateur introuvable",
      });
    }

    const isPasswordValid = await argon2.verify(
      user.password,
      req.body.password
    );

    console.log("PASSWORD CHECK:", isPasswordValid);

    if (!isPasswordValid) {
      return res.status(400).json({
        message: "Mot de passe incorrect",
      });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Connexion réussie ✅",
      user,
      token,
    });

  } catch (err) {
    console.log("LOGIN ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});
   

module.exports = router;