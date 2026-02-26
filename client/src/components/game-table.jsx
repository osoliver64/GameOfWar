import "../App.css"
import Card from "./card.jsx"

function GameTable() {

  const deck = []
  const suits = ['S', 'C', 'H', 'D']

  for (let i = 1; i <= 13; i++) {
    for (let suit of suits)
      deck.push(<Card 
        key={`${i}${suit}`}
        cardId={`${i}${suit}`}
        turnedDown={false} />)
  }

  return <>{deck}</>
}


export default GameTable