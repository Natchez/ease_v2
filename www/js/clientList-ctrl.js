(function () {
    'use strict';

    angular
        .module('ease')
        .controller('clListCtrl', Controller);

    Controller.$inject = ['$scope', '$ionicPopup', 'clService', '$stateParams', '$ionicModal', '$state'];

    /* @ngInject */
    function Controller($scope, $ionicPopup, clService, $stateParams, $ionicModal, $state) {
        var vm = this;
        var alertPopup = $ionicPopup;

        /* Ionic Edits */

        $scope.shouldShowDelete = false;
        $scope.shouldShowReorder = false;
        $scope.listCanSwipe = true;

        /* Client Modal */

        $ionicModal.fromTemplateUrl('views/add_client.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $scope.ClientModal = function () {
            $scope.modal.show();
        }

        $scope.CloseModal = function () {
            $scope.modal.hide();
        }

        /* CLient List */

        clService.getList()
            .success(function (data) {
                console.log('Clients.getList: ', data);
                $scope.clients = data;

            })
            .error(function (data) {
                console.log('There was an error: ', data.message);
            });

        /* Add Client */
        $scope.addClient = function (createc) {
                clService.addClient(createc)
                    .success(function (data, status, headers, config) {
                        if (status == 201 && data.message)
                            $scope.modal.hide();
                        clService.getList()
                            .success(function (data) {
                                console.log('Clients.getList: ', data);
                                $scope.clients = data;

                            })
                            .error(function (data) {
                                console.log('There was an error: ', data.message);
                            });
                        alertPopup.alert({
                            title: 'Client Added',
                            template: $scope.message = data.message
                        });
                    })
                    .error(function (data, status, headers, config) {
                        console.log(data, status, headers, config);
                        if (data.message)
                            $scope.message = data.message;
                    });
            }
            /* Delete Client */
        $scope.delClient = function (client, $index) {
            var clientid = $scope.clients[client].idclients;
            clService.delClient(clientid)
                .success(function (data, status, headers, config) {
                    if (status = 200 && data.message)
                        $scope.clients.splice(client, 1);
                    $state.go('tab.clients');
                    alertPopup.alert({
                        title: 'Success',
                        template: vm.message = data.message
                    });
                })
                .error(function (data, status, headers, config) {
                    console.log(data, status, headers, config);
                    if (data.message)
                        vm.message = data.message;
                })
        }
    }
})();