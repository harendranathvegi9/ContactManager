(function () {
    "use strict";

    angular
        .module("contactManager")
        .controller("contactEditController", contactEditController);

    function contactEditController($scope, $state) {

        $('#birthday').datetimepicker({
            format: 'DD/MM/YYYY'
        });

        $scope.submit = function (isValid) {
            
            $scope.submitted = true;

            if (!isValid) {
                new PNotify({
                    title: 'Validation Error',
                    text: 'Please correct the validation errors!',
                    buttons: {
                        sticker: false
                    },
                    delay: 2000,
                    type: "error",
                    styling: "bootstrap3"
                });
            }
        }
        
        $scope.cancel = function () {
            $state.go("contactList");
        }
    }

}());