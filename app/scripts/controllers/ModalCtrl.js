(function() {
    /*
        our ModalCtrl listens for instructions from the button 
        in home.html. once it gets instructions from the view, it 
        reaches out to the $uibModal service and calls the service's 
        open() method, passing optional values to it in a javascript 
        object.  
    */
    function ModalCtrl($uibModal) {
        this.open = function() {
            /*
                in the future, we'll need to do something with this 
                modalInstance variable in the ModalCtrl, but for now, 
                we won't be doing anything with it. 

                we use the $uibModal service to open up our modal and 
                to link our modal.html template with our 
                ModalInstanceCtrl.
            */
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