(function() {
    'use strict';

    angular
        .module('ease')
        .controller('clientDetailCtrl', Controller);

    Controller.$inject = ['$scope', '$stateParams', '$interval', 'clService', '$interval'];

    /* @ngInject */
    function Controller($scope, $stateParams, $interval, clService){
        var vm = this;
        $scope.clientId = $stateParams.clientid;
        console.log('$stateParams: ', $stateParams);
        clService.getClient($stateParams.clientid)
        .success(function (data) {
//                console.log('Client.getclient: ', data);
                $scope.client = data.client[0];
            })
            .error(function (data) {
                console.log('There was an error: ', data);

            });
        
         $scope.showStart = false;

        $scope.startStopTimer = function () {
            $scope.showStart = !$scope.showStart;
            console.log($scope.showStart);
           if ($scope.showStart)
                startTimer();
           else
               stopTimer();
        }
    
       $scope.addHours = function () {
           console.log('1H Added');
         $scope.hTouchHours++;
       }
       $scope.addMins = function () {
           console.log('1m Added');
         $scope.hTouchMinutes++;
       }
       $scope.addSecs = function () {
           console.log('10s Added');
         $scope.hTouchSeconds += 10;
       }
           
        
        $scope.hTouchHours = 0;
        $scope.hTouchMinutes = 0;
        $scope.hTouchSeconds = 0;
        function startTimer() {
            $scope.start = new Date();
//            getHistoricalTouchTime() // needs to be .then()
            $scope.countTouchTime = $interval(function () {
                getTouchTime();
            }, 1000);
        }

        function getTouchTime() {
            var now = new Date();
            var historicalTouchSecs = $scope.hTouchHours * 3600 + $scope.hTouchMinutes * 60 + $scope.hTouchSeconds;
            var diff = Math.floor(Math.abs(now - $scope.start) / 1000) + historicalTouchSecs;
            var hrs = Math.floor(diff / 3600);
            var mins = Math.floor((diff - hrs * 3600) / 60);
            var secs = Math.floor(diff - mins * 60 - hrs * 3600);

            $scope.touchHours = ('0' + hrs).slice(-2);
            $scope.touchMinutes = ('0' + mins).slice(-2);
            $scope.touchSeconds = ('0' + secs).slice(-2);
        }

        function getHistoricalTouchTime() {
            // Historical touch time needs to come from some service
        }

        function setHistoricalTime() {
            // Historical touch time needs to come from some service
            $scope.hTouchHours = parseInt($scope.touchHours);
            $scope.hTouchMinutes = parseInt($scope.touchMinutes);
            $scope.hTouchSeconds = parseInt($scope.touchSeconds);
        }

        function stopTimer() {
            if (angular.isDefined($scope.countTouchTime)) {
                $interval.cancel($scope.countTouchTime);
                $scope.countTouchTime = undefined;
            }
                setHistoricalTime();
        };
    };
})();