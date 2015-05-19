var Device = require('./device');
var Channel = require('./channels');
var moment = require('moment');

function random (low, high) {
  return Math.random() * (high - low) + low;
}

function randomPower(power) {
  return random(10, 100)
}

function incrementalEnergy(energy) {
  return energy + random(1, 5);
}

module.exports = [
  new Device('box01', 1000,
    [new Channel('power', 0, moment(), randomPower),
      new Channel('energy', 0, moment(), incrementalEnergy)
    ]),
  new Device('box02', 6000,
    [new Channel('power', 0, moment(), randomPower),
      new Channel('energy', 0, moment(), incrementalEnergy)
    ])
];
