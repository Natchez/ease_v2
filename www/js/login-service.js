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
            
            function userLogin() {
                return $http.post('/userLogin');
            };
                
            function userRegister() {
                return $http.post('/userRegister');
                
            };

        }
        
})();