// Import Express
import express from "express";

// Express application instance
const app = express();

// Set the port
const PORT = 3000;

//  Basic route
app.get("/", (req, res) => {
  res.send("Welcome to our API!");
});

// user route
app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
  ];
  res.json(users);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
