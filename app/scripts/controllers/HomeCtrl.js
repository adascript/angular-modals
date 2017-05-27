(function() {
    function HomeCtrl() {
        this.greeting = 'let\'s make some modals!'
    }
    angular
        .module('angularModals')
        .controller('HomeCtrl', [HomeCtrl])
})()