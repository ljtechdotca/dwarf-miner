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
   * Controls experience gains, goals, and levels.
   *
   * @param { number } experience The experience gained.
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
}

module.exports = DwarfMiner;
