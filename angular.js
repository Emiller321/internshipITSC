angular.module('myApp', []).controller('myCtrl',function($scope, $http)
   {
       $scope.getPositions = function($scope, $http) {
           $http.get(`http://localhost:3000/position`)
           .success(data => {
               console.log(data);
           })
       }

       $scope.positions = ["Manager", "Developer", "Intern", "Front Desk"];

       $http.submit = function(User){
             console.log(User);
       };
   });
