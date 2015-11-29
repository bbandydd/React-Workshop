var myApp = angular.module('myApp', []);

myApp.controller('todoController', ['$scope', function($scope){
    $scope.items = [];
    $scope.text = '';
    var i = 0;

    $scope.add = function(){

        var obj = {
            id: i,
            text: $scope.text
        }

        $scope.items.push(obj);

        i++;
        $scope.text = '';
    }

    $scope.delete = function(index){
        $scope.items.splice(index, 1);
    };
}])