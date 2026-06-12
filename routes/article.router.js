const express = require("express");

const router = express.Router();

const Article = require("../models/Article");


// GET ALL ARTICLES
router.get("/", async (req, res) => {
  try {

    const articles = await Article.find().sort({
      createdAt: -1,
    });

    res.json(articles);

  } catch (err) {

    res.status(500).json({
      error: err.message,
    });

  }
});


// CREATE ARTICLE
router.post("/", async (req, res) => {
  try {

    const article = await Article.create({
      title: req.body.title,

      content: req.body.content,

      category: req.body.category,

      image: req.body.image,

      author: req.body.author,
    });

    res.status(201).json(article);

  } catch (err) {

    res.status(500).json({
      error: err.message,
    });

  }
});

module.exports = router;