const express = require("express");
const { getWeather, addWeather ,getAllWeather  } = require("../controllers/weather.controller");
const auth = require("../middlewares/auth.middleware");
const router = express.Router();

/**
 * @swagger
 * /weather/{country}:
 *   get:
 *     summary: Get weather by country
 */
router.get("/:country", auth, getWeather);
router.get("/", auth, getAllWeather);
/**
 * @swagger
 * /weather:
 *   post:
 *     summary: Add weather info
 */
router.post("/", auth, addWeather);

module.exports = router;
