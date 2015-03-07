(function () {
    "use strict";
    angular.module('wordpressNG').factory('wpService', function ($http, url) {

        var wpService = {
            getPosts: function (page, limit) {

                return $http({
                    url: url + 'count=' + limit + '&page=' + page,
                    method: "GET"
                });
            }
        };

        return wpService;
    });
})();
