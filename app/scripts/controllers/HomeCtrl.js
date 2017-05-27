(function() {
    function HomeCtrl(Quote) {
        this.greeting = 'Let\'s have fun with modals!'
        this.quotes = Quote.all
    }
    angular
        .module('angularModals')
        .controller('HomeCtrl', ['Quote', HomeCtrl])
})()