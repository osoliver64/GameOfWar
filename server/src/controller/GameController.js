import express from "express";
import {GameService} from "./GameService.js";

const router = express.Router();
const gameService = new GameService();


router.get("/playTurn", (req, res) => {
  const result = gameService.playTurn();
  res.json(result);
})

export default router;