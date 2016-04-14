(function () {
    "use strict";
    angular.module('wordpressNG').factory('wpService', function ($http, url) {

        var wpService = {
            getPosts: function (page, limit) {
                return $http({
                    url: url + '/posts?per_page=' + limit + '&page=' + page,
                    method: "GET"
                });
            },
            getPostDetail: function (id) {
                return $http({
                    url: url + '/posts/' + id,
                    method: "GET"
                });
            },
            getPostsByTag: function (page, limit, tag) {
                return $http({
                    url: url + '?json=get_tag_posts&id=' + tag + '&count=' + limit + '&page=' + page,
                    method: "GET"
                });
            },
            getPostsByCategory: function (page, limit, cat) {
                return $http({
                    url: url + '?json=get_category_posts&id=' + cat + '&count=' + limit + '&page=' + page,
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
