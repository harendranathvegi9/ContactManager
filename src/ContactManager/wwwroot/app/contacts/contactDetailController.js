(function () {
    "use strict";

    angular
        .module("contactManager")
        .controller("contactDetailController", contactDetailController);

    function contactDetailController($scope, contact) {
        $scope.contact = contact;
    }
}());