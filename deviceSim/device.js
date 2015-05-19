var moment = require('moment');
var _ = require('lodash');
var config = require('./config');
var dataStore = require('./dataStore');

function Device(name, channels) {
  this.name = name;
  this.channels = channels;
  console.log('Device constructor', this.name);
  var self = this;
  setInterval(function() { self.updateState() }, config.deviceInterval);
}

Device.prototype.updateState = function() {
  console.log('updateState', this.name);
  _.each(this.channels, function(channel) { 
    channel.updateState(); 
  });
}

Device.prototype.saveState = function() {
  console.log('saveState', this.name);
  _.each(this.channels, function(channel) {
    dataStore.write(this.name, channel.name, channel.time.format(), channel.value);
  }, this);
}

module.exports = Device;