(function () {
    "use strict";

    angular.module("common.services")
        .factory("contactResource", contactResource);

    function contactResource($resource) {
        return $resource("api/contacts/:contactId", { contactId: "@contactId" }, {
            update: {
                method: 'PUT'
            }
        });
    }

}());