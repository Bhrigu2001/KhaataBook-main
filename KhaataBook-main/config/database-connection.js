const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/KhaataBook";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

module.exports = mongoose;
