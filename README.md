# montey-hall
JS solution to the Montey Hall problem
https://en.wikipedia.org/wiki/Monty_Hall_problem

This repo provides scripts to simulate the Montey Hall problem.
When run it logs a small report of the success rate based on:
Number of runs/simulations & whether or not to switch door.

# Setup
* npm install
* npm run build

# Run
* npm run monteyES5 1000 true
* npm run monteyES6 1000 false

# Explainer
* monteyES5/6 = which JS version of the simulation to run
* 1000 = number of times to simulate the Montey Hall problem
* true = stick with your original door
* false = switch door
