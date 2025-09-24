// Import Express
import express from "express";

// Express application instance
const app = express();

// Set the port
const PORT = 3000;

// Middleware
app.use(express.json());

//  Get -Greet
app.get("/greet", (req, res) => {
  res.send("Hello, developer!");
});

// Post - Submit
app.post("/submit", (req, res) => {
  const { name, age } = req.body;
  res.json(`Hello, ${name}. You are ${age} years old.`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
