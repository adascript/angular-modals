(function() {
    function ModalInstanceCtrl($uibModalInstance) {
        this.cancel = function() {
            $uibModalInstance.dismiss('dismiss')
        }
        this.ok = function() {
            $uibModalInstance.close(this.quote)
        }
    }

    angular
        .module('angularModals')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl])
})()