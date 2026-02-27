// Load variables from .env
import "dotenv/config";
// Import express framwork to create web server
import express, { json } from "express";
import {Deck} from "./model/Deck.js";
import cors from "cors";

// Create Express application instance
const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
};
app.use(cors(corsOptions));

// Define the port number where the server will listen for requests
const PORT = process.env.PORT || 8080;

// Enable server to automatically parse incoming JSON data in request bodies
app.use(json());

// Define a GET route at "/api/hello" that responds to HTTP GET requests
app.get("/api/hello", (request, response) => {
  response.json({ message: "Hello from Node.js server!" });
});

app.get("/api/dorothea", (req, res) => {
  res.json({"drinks": ["Coffee", "Tea", "Yerba Mate"]});
});

app.get("/api/deck", (req, res) => {
  const deckManager = new Deck();
  const deck = deckManager.getDeck();
  res.json(deck);
})

// Start the server and make it listen on the specified port
app.listen(PORT, () => {
  // Log a message to the console when the server successfully starts
  console.log(`Server running on http://localhost:${PORT}`);
});

