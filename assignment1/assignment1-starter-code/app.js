(function () {
'use strict';
angular.module('lunchChecker',[])
.controller('checkLunch', function ($scope){
  $scope.name="";
  $scope.textMessage = "";

  $scope.checkForTooMuch = function() {
    if($scope.name == ""){
      $scope.textMessage = "Please enter data first";
      return;
    }
    // count number of items
    var str_array = $scope.name.split(',');
    var count=0;
    for(var i = 0; i < str_array.length; i++) {
      if(str_array[i].length > 0) count++;
    }
    if(count > 3){
      $scope.textMessage = "Too much!";
    } else {
      $scope.textMessage = "Enjoy!";
    }
  };
});


})();
