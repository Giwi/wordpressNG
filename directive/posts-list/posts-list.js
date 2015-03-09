angular.module('wordpressNG').directive('postsList', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            page: '=',
            limit: '=',
            posts: '='
        },
        templateUrl: 'directive/posts-list/posts-list.html',
        controller: function ($scope) {


        }
    };
});
