(function () {
    "use strict";

    angular
        .module("contactManager")
        .controller("contactEditController", contactEditController);

    function contactEditController($scope, $state, contactResource, contact) {

        $('#birthday').datetimepicker({
            format: 'DD/MM/YYYY'
        });

        $scope.contact = contact;

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
            } else {
                contactResource.save($scope.contact, function () {
                    new PNotify({
                        title: 'Saved',
                        text: 'The contact save successfully!',
                        buttons: {
                            sticker: false
                        },
                        delay: 2000,
                        type: "success",
                        styling: "bootstrap3"
                    });
                });

                $state.go("contactList");
            }
        }
        
        $scope.cancel = function () {
            $state.go("contactList");
        }
    }

}());