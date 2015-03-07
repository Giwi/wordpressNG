angular.module('wordpressNG').directive('postsList', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            page: '=',
            limit: '='
        },
        templateUrl: 'directive/posts-list/posts-list.html',
        controller: function ($scope, wpService, $log) {
            wpService.getPosts($scope.page, $scope.limit).success(function (posts) {
                $scope.posts = posts;
            });

        }
    };
});
