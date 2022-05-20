const DwarfMiner = require("./characters/dwarf-miner");

const landon = new DwarfMiner("Landon");

for (let days = 0; days < 200; days++) {
  landon.mine();
}

landon.end();
