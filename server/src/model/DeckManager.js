import {Card} from "./Card.js";

export default class DeckManager {
  #stack = []
  
  constructor() {
    const suits = ['S', 'C', 'D', 'H'];
    for (let cardValue = 1; cardValue <= 13; cardValue++) {
      for (let suit of suits) {
        this.#stack.push(new Card(cardValue, suit));
      }
    }
    this.#shuffleDeck();
  }

  getAllCards() {
    return this.#stack;
  }
  
  dealTwoCards() {
    return this.#stack.splice(-2);
  }

  #shuffleDeck() {
    let m = this.#stack.length, t, i;

    while(m) {
      i = Math.floor(Math.random() * m--);

      t = this.#stack[m];
      this.#stack[m] = this.#stack[i];
      this.#stack[i] = t;
    }
    return this.#stack;
  }
}