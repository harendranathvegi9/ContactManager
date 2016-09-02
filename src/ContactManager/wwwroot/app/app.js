(function () {
    "use strict";

    var app = angular.module("contactManager",
        ["ui.router", "ngMessages"]);

    app.config(["$stateProvider", "$urlRouterProvider",
        function ($stateProvider, $urlRouteProvider) {

            $urlRouteProvider.otherwise("/contacts");

            $stateProvider
                .state("contactList",
                {
                    url: "/contacts",
                    templateUrl: "/app/contacts/contactListView.html",
                    controller: "contactListController"
                })
                .state("contactEdit",
                {
                    url: "/contacts/edit/:contactId",
                    templateUrl: "/app/contacts/contactEditView.html",
                    controller: "contactEditController"
                })
                .state("contactDetail",
                {
                    url: "/contacts/view/:contactId",
                    templateUrl: "/app/contacts/contactDetailView.html",
                    controller: "contactDetailController"
                });
        }]);

}());