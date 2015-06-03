(function () {
    'use strict';

    angular
        .module('ease')
        .controller('profileCtrl', Controller);

    
    /* @ngInject */
    function Controller($scope) {
        Controller.$inject = ['$scope'];
        var vm = this;
        $scope.property = 'Controller';
        // CHART DATA
        $scope.labels = ["Wk 1", "Wk 2", "Wk 3", "Wk 4", "Wk 5", ];
        $scope.series = ['Hours Worked'];
        $scope.data = [
    [13, 30, 40, 35, 56]
  ];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };

    }
})();
