var votes = require("../lib/votes");

module.exports = function() {

  return {

    name: "Mafia",
    desc: "Vous devez assassiner tous les innocents villageois...",
    side: "mafia",

    actions: {
      vote: votes.getVoteAction("mafia", "mafia")
    },
    channels: {
      mafia: {r: true, w: false, n: "Mafia", p: 10}
    }

  };

};
