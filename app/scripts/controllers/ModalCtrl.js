(function() {
    function ModalCtrl($uibModal) {
        this.open = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalInstanceCtrl as modalInstance'
            })
            console.log('modal opened')
        }
    }
    angular
        .module('angularModals')
        .controller('ModalCtrl', ['$uibModal', ModalCtrl])
})()