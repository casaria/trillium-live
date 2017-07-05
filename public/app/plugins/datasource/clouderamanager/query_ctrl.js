define([
  'angular',
],
function (angular) {
  'use strict';

  var module = angular.module('grafana.controllers');

  module.controller('ClouderaManagerQueryCtrl', function($scope) {
    $scope.init = function() {
      if ($scope.target) {
        $scope.target.target = $scope.target.target || '';
      }
    };
  });
});
