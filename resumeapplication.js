                 <script>
                    var app = angular.module('myApp', []);
                    app.controller('formCtrl',function($scope){
                        $scope.master = {firstName:"", lastName:""};
                        $scope.submit = function(){
                            $scope.user = angular.copy($scope.master);
                        };
                        $scope.submit();
                    });
                  </script>