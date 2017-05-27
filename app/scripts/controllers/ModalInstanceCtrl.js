(function() {
    function ModalInstanceCtrl($uibModalInstance) {
        this.cancel = function() {
            $uibModalInstance.dismiss('dismiss')
        }
    }

    angular
        .module('angularModals')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl])
})()