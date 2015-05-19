var config = require('./config');
var Firebase = require("firebase");

var fb = new Firebase("https://" + config.firebaseProjectId + ".firebaseio.com");
var fbDevices = fb.child('devices');

exports.writeDataPoint = function(device, channel, time, value) {
  console.log('persisting', device, channel, time, value);
  var dfb = fbDevices.child(device).child(channel);
  dfb.set({
    time: time,
    value: value
  });
}

exports.saveDeviceMetaInformation = function(device) {
  var deviceFb = fbDevices.child(device.name);
  deviceFb.set({
    writeInterval: device.writeInterval
  });
}

exports.onChangeWriteInterval = function(device, callback) {
  var dfb = fbDevices.child(device.name).child('writeInterval');
  dfb.on('value', function(res) {
    callback(res.val());
  })
}