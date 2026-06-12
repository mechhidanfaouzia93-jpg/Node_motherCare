const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log("MongoDB connecté ✅");
    // console.log("MONGO URI:", process.env.DB_CONNECTION);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;


// MONGO URI: mongodb+srv://della_duck:CJuvQHKzw4CYls0C@faouziacluster.8ijkqn7.mongodb.net/?appName=FaouziaCluster