(function () {
    "use strict";
    angular.module('wordpressNG').factory('wpService', function ($http, url) {

        var wpService = {
            getPosts: function (page, limit) {
                return $http({
                    url: url + 'count=' + limit + '&page=' + page,
                    method: "GET"
                });
            },
            getPostDetail: function (id) {
                return $http({
                    url: url + 'p=' + id,
                    method: "GET"
                });
            }
        };

        return wpService;
    });
})();
