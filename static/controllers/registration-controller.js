function RegistrationController($scope, $http, toastr, $location){
  console.log("Hello from Registration Controller");

  $scope.add_user = function(){
      $http.post('/register', $scope.user).then(function(data){
        $scope.user = null;
        toastr.success("Uspješno ste se registrovali! Molimo vas da se logujete!", "Uspješna Registracija!");
        $location.url('/home');
        $scope.users_list.push(data);
      });
    }
}