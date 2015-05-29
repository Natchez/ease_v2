(function () {
    'use strict';

    angular
        .module('ease')
        .controller('mainCtrl', Controller);

        Controller.$inject = ['$http', '$ionicPopup', '$state', '$scope', 'loginService'];

    function Controller($http, $ionicPopup, $state, $scope, loginService) {
        var vm = this;
        /* LOGIN SERVIC */
        $scope.login = function (loginData) {
            
            loginService.userLogin(loginData)
                .success(function (data, status, headers, config) {
                    if (status == 200) {
                        $scope.user = data.user[0];
                    }
                    if (data.message)
                        var alertPopup = $ionicPopup.alert({
                            title: 'Welcome ' + data.user[0].username,
                            template: vm.message = data.message
                        });
                    alertPopup.then(function () {
                        $state.go('tab.profile');
                    });
                })
                .error(function (data, status, headers, config) {
                    console.log(data, status, headers, config);
                    var alertPopup = $ionicPopup.alert({
                        title: 'Login Information Incorrect',
                        template: vm.message = data.message
                    });
                });
        }
    };
})();