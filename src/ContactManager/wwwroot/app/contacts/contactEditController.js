(function () {
    "use strict";

    angular
        .module("contactManager")
        .controller("contactEditController", contactEditController);

    function contactEditController($scope, $state, $stateParams, contactResource, contact) {

        $('#birthday').datetimepicker({
            format: 'DD/MM/YYYY'
        });

        $scope.contact = contact;

        $scope.submit = function (isValid) {
            
            $scope.submitted = true;

            if (!isValid) {
                showErrorMessage();
            } else {
                if ($stateParams.contactId == "0") {
                    contactResource.save($scope.contact, function () {
                        showSaveSuccessMessage();
                    });
                } else {
                    contactResource.update($scope.contact, function () {
                        showSaveSuccessMessage();
                    });
                }

                $state.go("contactList");
            }
        }
        
        $scope.cancel = function () {
            $state.go("contactList");
        }

        function showSaveSuccessMessage() {
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
        }

        function showErrorMessage() {
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

}());