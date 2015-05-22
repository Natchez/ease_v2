(function() {
    'use strict';

    angular
        .module('ease')
        .controller('profileCtrl', Controller);

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