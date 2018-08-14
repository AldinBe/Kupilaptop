function userController($scope, $http, toastr){
  console.log("ADD USER");
  $scope.submit = true;

  var refresh_users = function () {
      $http.get('/users').then(function (response) {
        $scope.users = response.data
      })
    }
    refresh_users()
  
  //Create Laptop
  $scope.addUser = function() {

    //$http POST function
    $http({

      method: 'POST',
      url: '/users',
      data: $scope.user

    }).then(function successCallback(response) {

     
      $scope.users = response.data;
      console.log($scope.users);

      toastr.success("Uspješna Registracija");
      refresh_users()

    }, function errorCallback(response) {

      alert("Error. while created user Try Again!");

    });

  };

  
  $scope.openModal = function () {
    $scope.visible = false;
    $scope.visible = $scope.visible = true;
  }

  $scope.closeModal = function () {
    $scope.visible = true;
    $scope.visible = $scope.visible = false;
  }
}