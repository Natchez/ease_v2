(function () {
        'use strict';

        angular
            .module('ease')
            .service('loginService', Service);

        Service.$inject = ['$http'];

        /* @ngInject */
        function Service($http) {
            var User = {};
            var service = {
                userLogin: userLogin,
                userRegister: userRegister
            };
            return service;
            
            function userLogin(user) {
//                return $http.post('http://104.154.45.71/userLogin', user);
                return $http.post('/userLogin', user);
            };
                
            function userRegister(create) {
//                return $http.post('http://104.154.45.71/userRegister', create);
                return $http.post('/userRegister', create);
                
            };

        }
        
})();