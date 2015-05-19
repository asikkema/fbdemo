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
  });
