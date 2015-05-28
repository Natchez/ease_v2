// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('ease', ['ionic', 'chart.js'])

.run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'views/tabs.html'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'views/login.html',
                controller: 'loginCtrl',
                controllerAs: 'login'
            })
            .state(' signup', {
                url: '/signup',
                templateUrl: 'views/signup.html',
                controller: 'loginCtrl',
                controllerAs: 'login'
            })
            .state('tab.profile', {
                url: '/profile',
                views: {
                    'tab-profile': {
                        templateUrl: 'views/profile.html',
                        controller: 'profileCtrl',
                        controllerAs: 'profile'
                    }

                }

            })
            .state('tab.addclient', {
                url: '/addclient',
                templateUrl: 'views/add_client.html',
                controller: 'clListCtrl',
                controllerAs: 'clist'
            })
            .state('tab.clients', {
                url: '/clients',
                views: {
                    'tab-clients': {
                        templateUrl: 'views/clients.html',
                        controller: 'clListCtrl',
                        controllerAs: 'clist'
                    }
                }

            })
            .state('tab.client-detail', {
                url: '/clients/:clientid',
                views: {
                    'tab-clients': {
                        templateUrl: 'views/client_detail.html',
                        controller: 'clientDetailCtrl',
                        controllerAs: 'clientDetail'

                    }
                }
            })
            .state('tab.archive', {
                url: '/archive',
                views: {
                    'tab-archive': {
                        templateUrl: 'views/archive.html',
                        controller: 'archCtrl',
                        controllerAs: 'archive'
                    }
                }

            });
        $urlRouterProvider.otherwise('/login');
    })