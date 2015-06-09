(function () {
    'use strict';

    angular
        .module('ease')
        .service('archService', Service);

    Service.$inject = ['$http'];

    /* @ngInject */
    function Service($http) {
        var service = {
            getArchiveList: getArchiveList,
            getSingleTimer: getSingleTimer,
        };
        return service;

        function getArchiveList() {
            //            return $http.get('http://104.154.45.71/getArchiveList');
            return $http.get('/getArchiveList');
        };

        function getSingleTimer(timerid) {
            //            return $http.get('http://104.154.45.71/getSingleTimer/?id=' + timerid);
            return $http.get('/getClient/?id=' + timerid);

        };
    }
})();