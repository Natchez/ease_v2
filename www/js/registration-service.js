(function () {
    'use strict';

    angular
        .module('ease')
        .service('regService', Service);

    Service.$inject = ['dependencies'];

    /* @ngInject */
    function Service(dependencies) {
        this.func = func;

        ////////////////

        function func() {
            
        }
    }
})();