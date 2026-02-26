// Load variables from .env
require("dotenv").config();

// Import express framwork to create web server
const express = require("express");

// Create Express application instance
const app = express();

// Define the port number where the server will listen for requests
const PORT = process.env.PORT;

// Enable server to automatically parse incoming JSON data in request bodies
app.use(express.json());

// Define a GET route at "/api/hello" that responds to HTTP GET requests
app.get("/api/hello", (request, response) => {
  response.json({ message: "Hello from Node.js server!" });
});

app.get("/api/dorothea", (req, res) => {
  res.json({"Drink": ["Coffee", "Tea", "Yerba Mate"]});
});

// Start the server and make it listen on the specified port
app.listen(PORT, () => {
  // Log a message to the console when the server successfully starts
  console.log(`Server running on http://localhost:${PORT}`);
});

