(function () {
    "use strict";

    angular
        .module("contactManager")
        .controller("contactListController", contactListController);

    function contactListController($scope, $state, contactResource) {
        loadContactList();

        $scope.showDeleteContactConfirm = function (contactId) {
            storeContactIdForDelete(contactId);
            openDeleteContactConfirmModal();
        };

        $scope.deleteContact = function () {
            var contactId = getContactIdToDelete();
            contactResource.delete({ contactId: contactId });
            closeDeleteContactConfirmModal();
            loadContactList();
        }

        function loadContactList() {
            $scope.contacts = contactResource.query();
        }

        function storeContactIdForDelete(contactId) {
            $("#deleteContactButton").data("contactId", contactId);
        }

        function getContactIdToDelete() {
            return $("#deleteContactButton").data("contactId");
        }

        function openDeleteContactConfirmModal() {
            $("#deleteConfirmModal").modal();
        }

        function closeDeleteContactConfirmModal() {
            $("#deleteConfirmModal").modal("hide");
        }
    }

}());