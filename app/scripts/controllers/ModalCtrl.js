(function() {
    function ModalCtrl($uibModal, Quote) {
        this.open = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalInstanceCtrl as modalInstance'
            })
            console.log('modal opened')
            
            modalInstance.result.then(function(quote) {
                Quote.createNewQuote(quote)
                console.log(Quote.all)
            })
        }
    }
    angular
        .module('angularModals')
        .controller('ModalCtrl', ['$uibModal', 'Quote', ModalCtrl])
})()