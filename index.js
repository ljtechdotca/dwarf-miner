const DwarfMiner = require("./characters/dwarf-miner");

const landon = new DwarfMiner("Landon");

for (let time = 0; time < 10; time++) {
  landon.mine();
}

const checkItems = () => {
  let result = Object.entries(landon.items);
  console.log(landon.items)
  if (result.length > 0) {
    return result.map(([name, amount]) => `${name} x ${amount}`).join(", ");
  } else {
    return "nothing";
  }
};
console.log(`You ended this session with ${checkItems()}.`);
