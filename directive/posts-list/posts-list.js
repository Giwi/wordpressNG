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
            $scope.collapsed = [];
            wpService.getPosts($scope.page, $scope.limit).success(function (posts) {
                $scope.posts = posts;
                $scope.posts.posts.forEach(function (p) {
                    $scope.collapsed[p.id] = true
                });
                $log.debug(posts);
            });

        }
    };
});
