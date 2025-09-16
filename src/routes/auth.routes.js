const express = require("express");
const { register, login } = require("../controllers/auth.controller");
const router = express.Router();

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a user
 */
router.post("/register", register);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login a user
 */
router.post("/login", login);

module.exports = router;
