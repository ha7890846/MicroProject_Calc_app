const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/calculator", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Schema
const CalculationSchema = new mongoose.Schema({
  expression: String,
  result: String,
  date: { type: Date, default: Date.now },
});

const Calculation = mongoose.model("Calculation", CalculationSchema);

// Routes
app.post("/log", async (req, res) => {
  const { expression, result } = req.body;
  const newLog = new Calculation({ expression, result });
  await newLog.save();
  res.json({ message: "Logged successfully" });
});

app.get("/logs", async (req, res) => {
  const logs = await Calculation.find();
  res.json(logs);
});

// Start Server
app.listen(5000, () => console.log("Server running on port 5000"));
