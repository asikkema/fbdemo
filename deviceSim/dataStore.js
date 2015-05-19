var Firebase = require("firebase");

var fb = new Firebase("https://blazing-inferno-521.firebaseio.com/devices");

exports.write = function(device, channel, time, value) {
  console.log('persisting', device, channel, time, value);
  var dfb = fb.child(device);  
  dfb.set({
    time: time,
    value: value
  });
}