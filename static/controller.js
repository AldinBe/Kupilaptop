var myApp = angular.module('myApp', []);
myApp.controller('myController', ['$scope', '$http', function($scope, $http) {

  //Buttons Settings
  $scope.submit = true;
  $scope.update = false;
  $scope.cancel = false;
  $scope.userid = true;


  //Getting Users List
  //$http GET function
  $http({
    method: 'GET',
    url: '/laptopi'

  }).then(function successCallback(response) {

    $scope.laptopi = response.data;

  }, function errorCallback(response) {

    alert("Error. Try Again!");

  });


  
  //Create Laptop
  $scope.addLaptop = function() {

    //$http POST function
    $http({

      method: 'POST',
      url: '/laptopi',
      data: $scope.laptop

    }).then(function successCallback(response) {


      $scope.laptopi.push(response.data);


      alert("User has created Successfully")

    }, function errorCallback(response) {

      alert("Error. while created user Try Again!");

    });

  };



}]);