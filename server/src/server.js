// Load variables from .env
import "dotenv/config";
// Import express framwork to create web server
import express, { json } from "express";
import cors from "cors";
import GameController from "./controller/GameController.js";

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

app.use("/api", GameController);

// Start the server and make it listen on the specified port
app.listen(PORT, () => {
  // Log a message to the console when the server successfully starts
  console.log(`Server running on http://localhost:${PORT}`);
});

