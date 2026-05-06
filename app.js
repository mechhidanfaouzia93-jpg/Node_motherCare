const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const server = express();

server.use(express.json());
server.use(cors({ origin: "http://localhost:5173" }));

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => console.log("MongoDB connected ✅"))
  .catch(err => console.log(err));

/* 🔐 MOCK USER (pour test) */
const fakeUser = {
  email: "test@gmail.com",
  password: "1234",
  token: "abc123token"
};

/* REGISTER */
server.post("/api/register", (req, res) => {
  console.log(req.body);
  res.json({ message: "User registered" });
});

/* LOGIN */
server.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (email === fakeUser.email && password === fakeUser.password) {
    return res.json({ token: fakeUser.token });
  }

  return res.status(401).json({ message: "Invalid credentials" });
});

server.listen(3000, () => {
  console.log("Server running on port 3000 🚀");
});