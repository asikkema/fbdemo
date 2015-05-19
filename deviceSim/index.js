var moment = require('moment');
var _ = require('lodash');
var Device = require('./device');
var Channel = require('./channels');
var config = require('./config');

function random (low, high) {
  return Math.random() * (high - low) + low;
}

function randomPower(power) {
  return random(10, 100)
}

function incrementalEnergy(energy) {
  return energy + random(1, 5);
}

var devices = [
  new Device('box01', 
    [new Channel('power', 0, moment(), randomPower), 
    new Channel('energy', 0, moment(), incrementalEnergy)
  ]),
  new Device('box02', 
    [new Channel('power', 0, moment(), randomPower), 
    new Channel('energy', 0, moment(), incrementalEnergy)
  ])    
];

exports.start = function() {
  console.log('starting');
  setInterval(function() {
    _.each(devices, function(device) {
      device.saveState();
    });
  }, config.writeInterval);
}


this.start();