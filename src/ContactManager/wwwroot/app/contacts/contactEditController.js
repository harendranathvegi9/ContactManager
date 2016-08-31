(function () {
    "use strict";

    angular
        .module("contactManager")
        .controller("contactEditController", contactEditController);

    function contactEditController($scope) {
        $scope.message = "Message from edit contact";
    }

}());