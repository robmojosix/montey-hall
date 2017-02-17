var montey = require('./montey-ES5.js');

var Player = new montey.Player();

var config = {
  times: process.argv[2] || 1000,
  stick: process.argv[3] || false
}

new montey.DoorsGame(Player, config).run();
