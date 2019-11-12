   angular.module('myApp', []).controller('formCtrl',function($scope, $http)
   {
       $scope.submit = function(user){
             console.log(user);
       };
   });