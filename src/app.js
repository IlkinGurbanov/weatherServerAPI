require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const authRoutes = require("./routes/auth.routes");
const weatherRoutes = require("./routes/weather.routes");
const swaggerDocs = require("./swagger");

const app = express();
app.use(express.json());

connectDB();

app.use("/auth", authRoutes);
app.use("/weather", weatherRoutes);

swaggerDocs(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
