var moment = require('moment');

function Channel(name, startValue, startTime, updateFunc) {
  this.name = name;
  this.value = startValue;
  this.time = startTime;
  this.updateFunc = updateFunc;
}

Channel.prototype.updateState = function() {
  this.time = moment();
  this.value = this.updateFunc(this.value);
}

module.exports = Channel;