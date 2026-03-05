import { useState } from "react";
import "../App.css"
import Card from "./card.jsx"
import axios from "axios";

function GameTable() {

  const [hand, setHand] = useState(null);
  const [handsPlayed, setHandsPlayed] = useState(0);

  console.log(hand);

  const retrieveHand =  async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/playTurn");
      setHand(response.data);
      setHandsPlayed(handsPlayed + 1);
    }
    catch (error) {
      console.error("Fetch error", error.message);
    }
  }


    if (handsPlayed >= 26) {
    return (
      <div>
        <p>Game Over</p>
      </div>
    )
  }

  return (
    <div className="table">
      {hand ? (
        <>
        <Card cardId={hand.cardA.value+hand.cardA.suit} turnedDown={false} />
        <Card cardId={hand.cardB.value+hand.cardB.suit} turnedDown={false} />
        </>
      ) : (
        <p>No hand dealt yet.</p>
      )}
      <button onClick={retrieveHand}>Deal hand</button>
    </div>
  )
}



export default GameTable