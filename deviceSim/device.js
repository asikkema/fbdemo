var moment = require('moment');
var _ = require('lodash');
var config = require('./config');
var dataStore = require('./dataStore');

function Device(name, writeInterval, channels) {
  this.name = name;
  this.channels = channels;
  this.writeInterval = writeInterval;
  console.log('Device constructor ['+ this.name + '] interval: ' + writeInterval);
}

Device.prototype.start = function() {
  var self = this;
  setInterval(function() { self.updateState() }, config.deviceInterval);
  setInterval(function() { self.saveState() }, self.writeInterval);
}

Device.prototype.updateState = function() {
  _.each(this.channels, function(channel) {
    channel.updateState();
  });
}


Device.prototype.saveState = function() {
  _.each(this.channels, function(channel) {
    dataStore.write(this.name, channel.name, channel.time.format(), channel.value);
  }, this);
}

module.exports = Device;