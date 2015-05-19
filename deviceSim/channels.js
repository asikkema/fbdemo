var moment = require('moment');

function Channel(name, startValue, startTime, updateFunc) {
  this.name = name;
  this.value = startValue;
  this.time = startTime;
  this.updateFunc = updateFunc;
}

Channel.prototype.updateState = function() {
  console.log('channel', this.name, 'updateState');
  this.time = moment();
  this.value = this.updateFunc(this.value);
}

module.exports = Channel;