const Weather = require("../models/weather.model");

exports.getWeather = async (req, res) => {
  try {
    const { country } = req.params;
    const weather = await Weather.findOne({ country });
    if (!weather) return res.status(404).json({ message: "Weather not found" });
    res.json(weather);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllWeather = async(req,res) => {
  try{
    const weathers = await Weather.find(); // fetch all documents
    res.json(weathers);
  }catch(err){
    res.status(500).json({ error: err.message })
  }
}

exports.addWeather = async (req, res) => {
  try {
    const { country, temperature, condition } = req.body;
    const weather = new Weather({ country, temperature, condition });
    await weather.save();
    res.json(weather);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
