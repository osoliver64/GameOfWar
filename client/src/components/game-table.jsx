import { useState } from "react";
import "../App.css"
import Card from "./card.jsx"
import axios from "axios";

function GameTable() {

  const [hand, setHand] = useState(null);
  const [handsPlayed, setHandsPlayed] = useState(0);

  const gameOver = handsPlayed >= 26;

  console.log(hand);


  const startGame = async () => {
      setHand(null);
      setHandsPlayed(0);
    try {
      await axios.get("http://localhost:8080/api/startGame");
    }
    catch (error) {
      console.error("Start game error", error.message);
    }
  }

  const retrieveHand = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/playTurn");
      setHand(response.data);
      setHandsPlayed(prev => prev + 1);
    }
    catch (error) {
      console.error("Fetch error", error.message);
    }
  }

  return (
    <div className="table">
      {gameOver ? (
        <>
        <h2>Game Over!</h2>
        <button onClick={startGame}>Play again</button>
        </>
      ) : (
        <>
        {hand ? (
          <>
            <Card cardId={hand.cardA.value+hand.cardA.suit} turnedDown={false} />
            <Card cardId={hand.cardB.value+hand.cardB.suit} turnedDown={false} />
          </>
        ) : (
          <>
            <Card turnedDown={true} />
            <Card turnedDown={true} />
          </>
        )}
          <button onClick={retrieveHand}>Deal hand</button>
        </>
      )}
    </div>
  )
}

export default GameTable