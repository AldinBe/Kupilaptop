function getLaptop($scope, $http){
    http();

    function http(){
        $http.get("/laptopi").then(function(response){
            $scope.laptopi = response.data
        });
    }
};