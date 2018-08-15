angular.module('test').directive('userExist', function($http, $q) {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            ngModel.$asyncValidators.userExist = function(modelValue, viewValue) {
                return $http.post('/users', {ime: viewValue})
                    .then(
                     function(response) {
                             if (!response.data.status) {
                                  return $q.reject(); 
                                 //Server will give me a  notify if it exist or not. I will throw a error If it exist with "reject"
                             }
                        return true;
                    }
                );
            };
        }
    };
});