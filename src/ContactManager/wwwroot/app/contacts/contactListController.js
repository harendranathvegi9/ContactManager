(function () {
    "use strict";

    angular
        .module("contactManager")
        .controller("contactListController", contactListController);

    function contactListController($scope, $state, contactResource) {
        loadContactList();

        $scope.showDeleteContactConfirm = function (contactId) {
            $scope.contactIdToDelete = contactId;
            openDeleteContactConfirmModal();
        };

        $scope.deleteContact = function (contactId) {
            contactResource.delete({ contactId: contactId });
            closeDeleteContactConfirmModal();
            loadContactList();
        }

        function loadContactList() {
            $scope.contacts = contactResource.query();
        }

        function openDeleteContactConfirmModal() {
            $("#deleteConfirmModal").modal();
        }

        function closeDeleteContactConfirmModal() {
            $("#deleteConfirmModal").modal("hide");
        }
    }

}());