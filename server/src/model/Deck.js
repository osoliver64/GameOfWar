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
    this.#shuffleDeck();
  }

  getDeck() {
    return this.#deck;
  }
  
  #shuffleDeck() {
    let m = this.#deck.length, t, i;

    while(m) {
      i = Math.floor(Math.random() * m--);

      t = this.#deck[m];
      this.#deck[m] = this.#deck[i];
      this.#deck[i] = t;
    }
    return this.#deck;
  }
}