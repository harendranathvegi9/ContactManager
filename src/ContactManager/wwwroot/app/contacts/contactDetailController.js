(function () {
    "use strict";

    angular
        .module("contactManager")
        .controller("contactDetailController", contactDetailController);

    function contactDetailController($scope) {
        $scope.message = "Message from contact detail";
    }
}());