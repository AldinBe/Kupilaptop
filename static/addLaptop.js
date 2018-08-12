function addLaptop($scope, $http, toastr){
  console.log("ADD LAPTOP");
  $scope.submit = true;
  
  //Create Laptop
  $scope.addLaptop = function() {

    //$http POST function
    $http({

      method: 'POST',
      url: '/laptopi',
      data: $scope.laptop

    }).then(function successCallback(response) {

     
      $scope.laptopi = response.data;
      console.log($scope.laptopi);

      toastr.success("User has created Successfully");

    }, function errorCallback(response) {

      alert("Error. while created user Try Again!");

    });

  };
}