(function () {
    'use strict';

    angular
        .module('ease')
        .service('clService', Service);

    Service.$inject = ['$http'];

    /* @ngInject */
    function Service($http) {
        var service = {
            getList: getList,
            getClient: getClient,
            addClient: addClient,
            delClient: delClient
            
        };
        return service;
        
        function getList () {
            return $http.get('http://104.154.45.71/getList');
//            return $http.get('/getList');
        };
        
        function getClient (clientid) {
            return $http.get('http://104.154.45.71/getClient/?id=' + clientid);
//            return $http.get('/getClient/?id=' + clientid);
            
        };
        
        function addClient (createc) {
            return $http.post('http://104.154.45.71/addClient', createc);
//            return $http.post('/addClient', createc);
            
        };
        function delClient (clientid) {
            return $http.post('http://104.154.45.71/delClient', {id:clientid});
//            return $http.post('/delClient', {id:clientid});
            
        };
    }
})();