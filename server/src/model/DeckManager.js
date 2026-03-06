import {Card} from "./Card.js";

export default class DeckManager {
  #stack = []

  makeNewDeck() {
    const suits = ['S', 'C', 'D', 'H'];
    for (let cardValue = 1; cardValue <= 13; cardValue++) {
      for (let suit of suits) {
        this.#stack.push(new Card(cardValue, suit));
      }
    }
    for (let card of this.#stack) {
      console.log(card);
    }
    this.#shuffleDeck();
  }

  getAllCards() {
    return this.#stack;
  }
  
  dealTwoCards() {
    if (this.#stack.length > 1) {
      return this.#stack.splice(-2);
    }
    else {
      return null;
    }
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