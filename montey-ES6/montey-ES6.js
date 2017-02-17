const randomNumber = (maxNumber = 3) => {
  return Math.floor(Math.random() * maxNumber);
}

class Player {
  constructor() {
    this.wins = 0;
    this.choice = 0;
  }

  chooseDoor() {
    this.choice = randomNumber();
  }

  addWin(number) {
    this.wins += number;
  }
}

class Montey {
  constructor(player, config) {
    const {times, stick} = config;
    this.game = {
      doors: [],
      prizeArrayPosition: 0,
      playerWins: 0
    };
    this.state = {
      times,
      stick: stick == 'true'
    };
    this.player = player;
  }

  prepDoors() {
    this.game.doors = [,,,].fill("goat");
    this.game.prizeArrayPosition = randomNumber();
    this.game.doors[this.game.prizeArrayPosition] = "car";
  }

  prepPlayer() {
    this.player.chooseDoor();
  }

  checkWin() {
    return this.game.doors[this.player.choice] == 'car' ? 1 : 0;
  }

  calculateRemainingDoors() {
    return [0,1,2].filter((i) => {
	    return i != this.player.choice
    });
  }

  report() {
    console.log(
`runs: ${this.state.times}
wins: ${this.player.wins}
% wins: ${(100/this.state.times)*this.player.wins}%`
    );
  }

  simulate() {
    if(!this.state.stick) {
      let remainingDoors = this.calculateRemainingDoors();
      this.player.choice = (this.game.doors[remainingDoors[0]] == "goat") ?
                            remainingDoors[1] :
                            remainingDoors[0];
    }
    return this.checkWin();
  }

  run() {
    for(let i=0; i < this.state.times; i++) {
      this.prepDoors();
      this.prepPlayer();
      this.player.addWin(this.simulate());
    }
    this.report();
  }
}

export { Player, Montey };
