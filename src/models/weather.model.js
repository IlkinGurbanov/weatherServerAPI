const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema({
  country: { type: String, required: true },
  temperature: { type: Number, required: true },
  condition: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Weather", weatherSchema);
