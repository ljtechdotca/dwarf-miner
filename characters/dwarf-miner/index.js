const PreciousStone = require("../../items/precious-stone");

class DwarfMiner {
  name = "Unknown Dwarf";
  level = 1;
  exp = 0;
  goal = 2;

  items = {
    coal: 0,
    iron: 0,
    gold: 0,
  };

  constructor(name) {
    this.name = name;
  }

  /**
   * @returns { string } A list of items on the character represented as a string.
   */
  _items() {
    let result = Object.entries(this.items);
    if (result.length > 0) {
      return result.map(([name, amount]) => `${name} x ${amount}`).join(", ");
    } else {
      return "nothing";
    }
  }

  /**
   * Controls experience gains, goals, and levels.
   *
   * @param experience The experience gained.
   */
  _experience(exp) {
    if (exp > 0) {
      this.exp += exp;
      console.log(
        `[XP: ${this.exp}/${this.goal}] ${this.name} has gained ${exp} experience.`
      );
    }
    if (this.exp >= this.goal) {
      this.exp -= this.goal;
      this.level++;
      this.goal = this.goal * this.level;
      if (this.exp >= this.goal) {
        this._experience();
      }
      console.log(
        `[XP: ${this.exp}/${this.goal}] ⭐${this.name} is now level ${this.level}!`
      );
    }
  }

  /**
   * Mine for precious stones to gain experience and items.
   */
  mine() {
    const preciousStone = new PreciousStone().extract();
    if (preciousStone.item) {
      this._experience(preciousStone.experience);

      this.items[preciousStone.item]++;
    }
  }

  /**
   * Logs details at the end of a mining season.
   */
  end() {
    console.log(
      `You ended this season with ${this._items()} at level ${this.level}.`
    );
  }
}

module.exports = DwarfMiner;
