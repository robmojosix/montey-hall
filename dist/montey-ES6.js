"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var randomNumber = function randomNumber() {
  var maxNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;

  return Math.floor(Math.random() * maxNumber);
};

var Player = function () {
  function Player() {
    _classCallCheck(this, Player);

    this.wins = 0;
    this.choice = 0;
  }

  _createClass(Player, [{
    key: "chooseDoor",
    value: function chooseDoor() {
      this.choice = randomNumber();
    }
  }, {
    key: "addWin",
    value: function addWin(number) {
      this.wins += number;
    }
  }]);

  return Player;
}();

var Montey = function () {
  function Montey(player, config) {
    _classCallCheck(this, Montey);

    var times = config.times,
        stick = config.stick;

    this.game = {
      doors: [],
      prizeArrayPosition: 0,
      playerWins: 0
    };
    this.state = {
      times: times,
      stick: stick == 'true'
    };
    this.player = player;
  }

  _createClass(Montey, [{
    key: "prepDoors",
    value: function prepDoors() {
      this.game.doors = [,,,].fill("goat");
      this.game.prizeArrayPosition = randomNumber();
      this.game.doors[this.game.prizeArrayPosition] = "car";
    }
  }, {
    key: "prepPlayer",
    value: function prepPlayer() {
      this.player.chooseDoor();
    }
  }, {
    key: "checkWin",
    value: function checkWin() {
      return this.game.doors[this.player.choice] == 'car' ? 1 : 0;
    }
  }, {
    key: "calculateRemainingDoors",
    value: function calculateRemainingDoors() {
      var _this = this;

      return [0, 1, 2].filter(function (i) {
        return i != _this.player.choice;
      });
    }
  }, {
    key: "report",
    value: function report() {
      console.log("runs: " + this.state.times + "\nwins: " + this.player.wins + "\n% wins: " + 100 / this.state.times * this.player.wins + "%");
    }
  }, {
    key: "simulate",
    value: function simulate() {
      if (!this.state.stick) {
        var remainingDoors = this.calculateRemainingDoors();
        this.player.choice = this.game.doors[remainingDoors[0]] == "goat" ? remainingDoors[1] : remainingDoors[0];
      }
      return this.checkWin();
    }
  }, {
    key: "run",
    value: function run() {
      for (var i = 0; i < this.state.times; i++) {
        this.prepDoors();
        this.prepPlayer();
        this.player.addWin(this.simulate());
      }
      this.report();
    }
  }]);

  return Montey;
}();

exports.Player = Player;
exports.Montey = Montey;
