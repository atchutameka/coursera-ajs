(function () {
'use strict';
angular.module('lunchChecker',[])
.controller('checkLunch', function ($scope){
  $scope.name="";
  $scope.textMessage = "";
  $scope.textColor = "white";

  $scope.checkForTooMuch = function() {
    if($scope.name == ""){
      $scope.textMessage = "Please enter data first";
      $scope.textColor = "red";
      return;
    }
    $scope.textColor = "green";
    // count number of items
    var str_array = $scope.name.split(',');
    var count=0;
    for(var i = 0; i < str_array.length; i++) {
      var val=str_array[i].replace(/^\s+|\s+$/g, '');//.trim() doesn't work in chrome.
      if(val.length > 0) count++;
    }
    if(count > 3){
      $scope.textMessage = "Too much!";
    } else {
      $scope.textMessage = "Enjoy!";
    }
  };
});


})();
