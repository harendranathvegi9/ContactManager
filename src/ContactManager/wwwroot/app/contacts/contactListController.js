(function () {
    "use strict";

    angular
        .module("contactManager")
        .controller("contactListController", contactListController);

    function contactListController($scope, contactResource) {
        $scope.contacts = contactResource.query();
    }

}());