const express = require("express");
const { getWeather, addWeather } = require("../controllers/weather.controller");
const auth = require("../middlewares/auth.middleware");
const router = express.Router();

/**
 * @swagger
 * /weather/{country}:
 *   get:
 *     summary: Get weather by country
 */
router.get("/:country", auth, getWeather);

/**
 * @swagger
 * /weather:
 *   post:
 *     summary: Add weather info
 */
router.post("/", auth, addWeather);

module.exports = router;
