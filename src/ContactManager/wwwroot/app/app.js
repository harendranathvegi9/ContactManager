(function () {
    "use strict";

    var app = angular.module("contactManager",
        ["ui.router", "ngMessages", "common.services"]);

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
                    controller: "contactEditController",
                    resolve: {
                        contactResource: "contactResource",

                        contact: function (contactResource, $stateParams) {
                            var contactId = $stateParams.contactId;
                            if (contactId != "0") {
                                return contactResource.get({ contactId: contactId }).$promise;
                            }
                        }
                    }
                })
                .state("contactDetail",
                {
                    url: "/contacts/view/:contactId",
                    templateUrl: "/app/contacts/contactDetailView.html",
                    controller: "contactDetailController",
                    resolve: {
                        contactResource: "contactResource",

                        contact: function (contactResource, $stateParams) {
                            var contactId = $stateParams.contactId;
                            return contactResource.get({ contactId: contactId }).$promise;
                        }
                    }
                });
        }]);

}());