'use strict';

var _monteyES = require('./montey-ES6');

var config = {
  times: process.argv[2] || 1000,
  stick: process.argv[3] || false
};

var args = [new _monteyES.Player(), config];
new (Function.prototype.bind.apply(_monteyES.Montey, [null].concat(args)))().run();
