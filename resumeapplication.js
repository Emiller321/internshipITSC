   angular.module('myApp', []).controller('formCtrl',function($scope)
   {
       $scope.submit = function(user){
             console.log(user);
       };
   });