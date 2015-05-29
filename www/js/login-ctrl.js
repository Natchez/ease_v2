(function () {
    'use strict';

    angular
        .module('ease')
        .controller('loginCtrl', Controller);

    Controller.$inject = ['$ionicModal', '$scope', 'loginService', '$ionicPopup', '$state'];

    /* @ngInject */
    function Controller($ionicModal, $scope, loginService, $ionicPopup, $state) {
        var vm = this;
        vm.property = 'Controller';
        
        /* SIGN UP MODAL*/

        $ionicModal.fromTemplateUrl('views/signup.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $scope.regModal = function () {
            $scope.modal.show();
        }
        $scope.regModalClose = function () {
            $scope.modal.hide();
        }
        
        /* SIGN UP SERVICE */
        
        $scope.signup = function (create) {
            
            loginService.userRegister(create)
            .success(function (data, status, headers, config) {
                    if (status == 201 && data.message) 
                        $scope.modal.hide();
                        var alertPopup = $ionicPopup.alert({
                            title: 'Success!',
                            template: vm.message = data.message
                        });
                })
                .error(function (data, status, headers, config) {
                    console.log(data, status, headers, config);
                    var alertPopup = $ionicPopup.alert({
                        title: 'There was an error submittin the form',
                        template: vm.message = data.message
                    });
                });
            
        }
    };
})();