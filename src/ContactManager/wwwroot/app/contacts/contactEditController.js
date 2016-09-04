(function () {
    "use strict";

    angular
        .module("contactManager")
        .controller("contactEditController", contactEditController);

    function contactEditController($scope, $state, $stateParams, contactResource, contact) {

        $('#birthday').datetimepicker({
            format: 'DD/MM/YYYY'
        });

        $("#birthday").on("dp.change", function () {
            $scope.contact.birthday = $("#birthday").val();
        });

        $scope.contact = contact;
        if (contact && contact.birthday) {
            $scope.contact.birthday = moment.utc(contact.birthday).local().format("DD/MM/YYYY");
        }

        $scope.submit = function (isValid) {
            
            $scope.submitted = true;

            if (!isValid) {
                showErrorMessage();
            } else {
                var birthdayUtc = moment($scope.contact.birthday, "DD/MM/YYYY").utc();
                if (birthdayUtc.isValid()) {
                    $scope.contact.birthday = birthdayUtc.format();
                }

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