(function () {
    "use strict";

    angular
        .module("contactManager")
        .controller("contactListController", contactListController);

    function contactListController($scope) {
        $scope.message = "Message from contact list";
    }

}());