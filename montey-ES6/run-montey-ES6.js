import { Player, Montey } from './montey-ES6';

const config = {
  times: process.argv[2] || 1000,
  stick: process.argv[3] || false
}

const args = [new Player(), config];
new Montey(...args).run();
