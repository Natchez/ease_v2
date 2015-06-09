(function () {
    'use strict';

    angular
        .module('ease')
        .controller('archCtrl', Controller);

    Controller.$inject = ['$scope', 'archService'];

    /* @ngInject */
    function Controller($scope, archService) {
        var vm = this;
        vm.property = 'Controller';

        activate();

        ////////////////

        function activate() {
            /* CLient List */

            archService.getArchiveList()
                .success(function (data) {
                    console.log('Clients.getList: ', data);
                    $scope.archive = data;

                })
                .error(function (data) {
                    console.log('There was an error: ', data.message);
                });

        }
    }
})();