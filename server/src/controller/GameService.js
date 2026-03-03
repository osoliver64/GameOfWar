import DeckManager from "../model/DeckManager.js";


export class GameService {
    constructor() {
      this.deck = new DeckManager();
    }

    playTurn() {
      let cards = this.deck.dealTwoCards();
      let cardA = cards[0];
      let cardB = cards[1];

      let winner = (cardA.value > cardB.value) ? "A" : "B";

      return {
        cardA,
        cardB,
        winner: winner
      }
    }
}