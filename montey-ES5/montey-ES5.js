var randomNumber = function(maxNumber) {
  maxNumber = maxNumber || 3;
  return Math.floor(Math.random() * maxNumber);
}

var Player = function() {
  this.wins = 0;
  this.choice = 0;
}

Player.prototype.chooseDoor = function() {
  this.choice = randomNumber();
}

Player.prototype.addWin = function(number) {
  this.wins += number;
}

var DoorsGame = function(player, config) {
  this.player = player;
  this.doors = [];
  this.prizeArrayPosition = 0;
  this.playerWins = 0;
  this.stick = config.stick == 'true';
  this.times = config.times;
}

DoorsGame.prototype.prepDoors = function() {
  this.doors = ["goat", "goat", "goat"];
  this.prizeArrayPosition = randomNumber();
  this.doors[this.prizeArrayPosition] = "car";
}

DoorsGame.prototype.prepPlayer = function() {
  this.player.chooseDoor();
}

DoorsGame.prototype.checkWin = function() {
  return this.doors[this.player.choice] == 'car' ? 1 : 0;
}

DoorsGame.prototype.remainingDoors = function() {
  return [0,1,2].filter((i) => {
    return i != this.player.choice
  });
}

DoorsGame.prototype.report = function() {
  console.log("runs: ", this.times);
  console.log("wins: ", this.player.wins);
  console.log("% win: ", (100/this.times)*this.player.wins + "%");
}

DoorsGame.prototype.simulate = function() {
  if(!this.stick) {
    var remainingDoors = this.remainingDoors();
    this.player.choice = (this.doors[remainingDoors[0]] == "goat") ? remainingDoors[1] : remainingDoors[0];
  }

  return this.checkWin();
}

DoorsGame.prototype.run = function() {
  for(var i=0; i < this.times; i++) {
    this.prepDoors();
    this.prepPlayer();
    this.player.addWin(this.simulate());
  }
  this.report()
}

module.exports = {
  Player: Player,
  DoorsGame: DoorsGame
}
