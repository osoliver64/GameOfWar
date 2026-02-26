import {Card} from "./Card.js";

export class Deck {
  #deck = []
  
  constructor() {
    const suits = ['S', 'C', 'D', 'H'];
    for (let cardValue = 1; cardValue <= 13; cardValue++) {
      for (let suit of suits) {
        this.#deck.push(new Card(cardValue, suit));
      }
    }
  }

  getDeck() {
    return this.#deck;
  }
}