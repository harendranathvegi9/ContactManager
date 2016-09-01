(function () {
    "use strict";

    angular
        .module("contactManager")
        .controller("contactEditController", contactEditController);

    function contactEditController($scope, $state) {

        $('#birthday').datetimepicker({
            format: 'DD/MM/YYYY'
        });

        $scope.submit = function () {
            
        }
        
        $scope.cancel = function () {
            $state.go("contactList");
        }
    }

}());