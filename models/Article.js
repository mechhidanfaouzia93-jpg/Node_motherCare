const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    title: String,

    content: String,

    category: String,

    image: String,

    author: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Article",
  articleSchema
);