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

Tokens expire after 24 hour

Register a new user

POST http://localhost:5000/auth/register
Content-Type: application/json

{
  "username": "testuser",
  "password": "123456"
}


Login with that user

POST http://localhost:5000/auth/login
Content-Type: application/json

{
  "username": "testuser",
  "password": "123456"
}


👉 Response will contain a JWT token, like:

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}


Use that token in your weather request

GET http://localhost:5000/weather/Azerbaijan
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

