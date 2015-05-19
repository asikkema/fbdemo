exports.random = function(low, high) {
  return Math.random() * (high - low) + low;
}

exports.randomPower = function(power) {
  return this.random(10, 100)
}

exports.incrementalEnergy = function(energy) {
  return energy + this.random(1, 5);
}