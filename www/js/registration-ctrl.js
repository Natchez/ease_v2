(function() {
    'use strict';

    angular
        .module('ease')
        .controller('reqCtrl', Controller);

    Controller.$inject = [];

    /* @ngInject */
    function Controller(){
        var vm = this;
        vm.property = 'Controller';
        

        activate();

        ////////////////

        function activate() {
        }
    }
})();