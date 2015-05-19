'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:DevicesCtrl
 * @description
 * # DevicesCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('DevicesCtrl', function ($scope, Ref, $firebaseArray) {

    $scope.devices = $firebaseArray(Ref.child('devices'));
    $scope.intervals = [];

    $scope.updateInterval = function(device, newInterval) {
      var d = $scope.devices.$getRecord(device.$id);
      d.writeInterval = newInterval;
      $scope.devices.$save(d).then(function() {
        console.log('updated!');
      });
    }
  });
