(function() {
    'use strict';

    angular
        .module('ease')
        .controller('archCtrl', Controller);

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