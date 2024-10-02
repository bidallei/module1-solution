(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
      $scope.lunchMenu = "";
      $scope.message = "";
    
      $scope.checkLunch = function () {
        if ($scope.lunchMenu.trim() === "") {
          $scope.message = "Please enter data first";
        } else {
          var dishes = $scope.lunchMenu.split(',')
                      .filter(item => item.trim() !== "");
          if (dishes.length > 3) {
            $scope.message = "Too much!";
          } else {
            $scope.message = "Enjoy!";
          }
        }
      };  
    }
    
    })();