


class Card {
  constructor() {
    /** @type {g.Sprite} */
    this.spr = null;
  }

  initialize(param) {
    const size = param.size || 64;
    const spr = new g.Sprite({

    });
    this.spr = spr;
  }

}

module.exports.Card = Card;

