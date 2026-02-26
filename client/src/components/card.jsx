import '../App.css'

function Card({cardId, turnedDown}) {
  if (turnedDown) {
    return <img src={"../public/card-back.png"} alt="Back of card" className="playing-card" />
  }
  else {
    return <img src={`../public/card-faces/${cardId}.png`} alt={cardId} className="playing-card" />
  }
}

export default Card