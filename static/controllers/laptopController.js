function laptopController($scope, $http, toastr){
    console.log("ADD LAPTOP");
    $scope.submit = true;

    var refresh_laptop = function () {
        $http.get('/laptopi').then(function (response) {
          $scope.laptopi = response.data
        })
      }
      refresh_laptop()
    
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
  
        toastr.success("Uspješno Dodano");
        refresh_laptop()
  
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