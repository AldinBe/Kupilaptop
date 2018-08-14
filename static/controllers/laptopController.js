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

    $scope.deleteLaptop = function (id) {
      console.log('delete laptop')
      console.log(id)
      $http.delete('/laptopi/' + id).then(function (response) {
        console.log('removed')
        toastr.error("Laptop izbrisan")
      })
      refresh_laptop()
    }

    $scope.editLaptop = function (id) {
      console.log('Selected Laptop')
      console.log(id)
      $http.get('/laptopi/' + id).then(function (response) {
        console.log('selected')
        $scope.laptop = response.data
      })
    }

    $scope.updateLaptop = function () {
      console.log('Update Laptop')
      console.log($scope.laptopi._id)
      $http.put('/laptopi/' + $scope.laptop._id, $scope.laptop).then(function (response) {
        console.log('update')
        $scope.laptop.ime = ''
        $scope.laptop.brend = ''
        $scope.laptop.vrsta = ''
        $scope.laptop.procesor = ''
        $scope.laptop.procesorGeneracija = ''
        $scope.laptop.brzinaProcesora = ''
        $scope.laptop.ram = ''
        $scope.laptop.graficka = ''
        $scope.laptop.vrstaGraficke = ''
        $scope.laptop.kapacitetGraficke = ''
        $scope.laptop.vrstaMemorije = ''
        $scope.laptop.kapacitetMemorije = ''
        $scope.laptop.velicina = ''
        $scope.laptop.tourName = ''
        $scope.laptop.cijena = ''

        toastr.success("Laptop updated successfully")
        refresh_laptop()
      })
    }
    
    $scope.openModal = function () {
      $scope.visible = false;
      $scope.visible = $scope.visible = true;
    }
  
    $scope.closeModal = function () {
      $scope.visible = true;
      $scope.visible = $scope.visible = false;
    }
  }