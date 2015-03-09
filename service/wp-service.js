(function () {
    "use strict";
    angular.module('wordpressNG').factory('wpService', function ($http, url) {

        var wpService = {
            getPosts: function (page, limit) {
                return $http({
                    url: url + '?json=1&count=' + limit + '&page=' + page,
                    method: "GET"
                });
            },
            getPostDetail: function (id) {
                return $http({
                    url: url + '?json=1&p=' + id,
                    method: "GET"
                });
            },
            getPostsByTag: function (page, limit, tag) {
                return $http({
                    url: url + '?json=get_tag_posts&tag_slug=' + tag + '&count=' + limit + '&page=' + page,
                    method: "GET"
                });
            },
            getPostsByAuthor: function (page, limit, auth) {
                return $http({
                    url: url + '?json=get_author_posts&author_id=' + auth + '&count=' + limit + '&page=' + page,
                    method: "GET"
                });
            },
            getCategories: function (parent) {
                return $http({
                    url: url + '?json=get_category_index&parent=' + parent,
                    method: "GET"
                });
            },
            getTags: function () {
                return $http({
                    url: url + '?json=get_tag_index',
                    method: "GET"
                });
            },
            getPages: function () {
                return $http({
                    url: url + '?json=get_page_index',
                    method: "GET"
                });
            }
        };

        return wpService;
    });
})();
