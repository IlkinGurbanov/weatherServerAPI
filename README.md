Country Weather API

A RESTful API to manage country weather information with JWT authentication and MongoDB.
Includes Swagger documentation and ready to deploy to Render or run locally.

🌟 Features

Register and login users (JWT authentication)

Add weather information (protected route)

Get weather by country (protected route)

Swagger documentation for all endpoints

MongoDB Atlas connection

Node.js + Express.js backend

Ready for deployment

🚀 Running Locally

Install dependencies:

npm install


Start the server:

npm run dev

Deployment (Render)

Push project to GitHub

Create a Web Service in Render → Node environment

Set environment variables (MONGO_URI, JWT_SECRET, PORT)

Deploy → API will be live

📚 Technologies

Node.js

Express.js

MongoDB Atlas

JWT Authentication

Swagger (OpenAPI)

bcryptjs

⚠️ Notes

Make sure MongoDB Atlas allows connections from all IPs (0.0.0.0/0)

Use HTTPS when deploying production

Tokens expire after 1 hour
