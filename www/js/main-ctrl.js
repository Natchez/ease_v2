(function () {
    'use strict';

    angular
        .module('ease')
        .controller('mainCtrl', Controller);


    function Controller($http, $ionicPopup, $state, $scope, loginService) {
        Controller.$inject = ['$scope','$http'];
        var vm = this;
        var User = {};
        console.log('Main Controller');
        $scope.login = function (loginData) {
            console.log('clicked');
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