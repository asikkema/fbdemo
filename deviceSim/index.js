var _ = require('lodash');
var demoDevices = require('./demoDevices');


exports.start = function() {
  console.log('starting', demoDevices.length);

  _.each(demoDevices, function(device) {
    device.writeMeta();
    device.start();
  });
}


this.start();