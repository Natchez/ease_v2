(function () {
    'use strict';

    angular
        .module('ease')
        .controller('loginCtrl', Controller);

    Controller.$inject = ['$ionicModal', '$scope'];

    /* @ngInject */
    function Controller($ionicModal, $scope) {
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
    };
})();