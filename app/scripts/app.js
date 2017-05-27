(function() {
    /*
        nothing special or modal-specific in this file. 
    */
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            })
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            })
    }
    angular
        .module('angularModals', ['ui.bootstrap', 'ui.router'])
        .config(config)
})()