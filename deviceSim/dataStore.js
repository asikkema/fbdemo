var config = require('./config');
var Firebase = require("firebase");

var fb = new Firebase("https://" + config.firebaseProjectId + ".firebaseio.com");
var fbDevices = fb.child('devices');

exports.write = function(device, channel, time, value) {
  console.log('persisting', device, channel, time, value);
  var dfb = fbDevices.child(device).child(channel);
  dfb.set({
    time: time,
    value: value
  });
}