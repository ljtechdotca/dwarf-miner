const precious_stones = require("./data/precious-stones.json");
const preciousStones = Object.entries(precious_stones).map(([name, data]) => ({
  name,
  data,
}));
const preciousStonesAmount = preciousStones.length;

class PreciousStone {
  exp;
  name;
  chance;

  constructor() {
    const find = Math.floor(Math.random() * preciousStonesAmount);
    const {
      name,
      data: { chance, experience },
    } = preciousStones[find];

    this.exp = experience;
    this.name = name;
    this.chance = chance;
  }

  extract() {
    let result = { item: null, experience: 0 };
    const swing = Math.random();
    if (swing <= this.chance) {
      console.log(
        `${this.name} was extracted successfully!`
      );
      result = { item: this.name, experience: this.exp };
    }
    return result;
  }
}

module.exports = PreciousStone;
