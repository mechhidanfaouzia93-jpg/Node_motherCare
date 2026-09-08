const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const server = express();

connectDB();

server.use(cors());
server.use(express.json());


// ROUTES
server.use("/api", require("./routes/auth.router"));

server.use("/api/pregnancy", require("./routes/pregnancy.router"));

server.use("/api/baby", require("./routes/baby.router"));

server.use("/api/growth", require("./routes/growth.router"));


// HOME
server.get("/", (req, res) => {
  res.json({
    message: "Backend works ✅",
  });
});

// // REGISTER
// server.post("/api/register", async (req, res) => {

//   console.log("FORM DATA:", req.body);

//   res.status(201).json({
//     message: "Utilisateur créé ✅",
//     user: req.body,
//   });

// });
// server.get("/api/advice-test", (req, res) => {
//   res.json({ ok: true });
// });




const appointmentRoutes = require("./routes/appointment.router");

server.use("/appointments", appointmentRoutes);



// ADVICE ROUTE
const adviceRouter = require("./routes/advice.router");
server.use("/api/advice", adviceRouter);

console.log("ADVICE ROUTER LOAD TEST");
console.log("AFTER ADVICE ROUTER");

server.use("/api/articles", require("./routes/article.router"));


// SERVER
// server.listen(3000, () => {
//   console.log("Server running on port 3000 ");
// });

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});

