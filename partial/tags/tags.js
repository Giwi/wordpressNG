angular.module('wordpressNG').controller('TagsCtrl', function ($scope, wpService, $log, $routeParams) {
    $scope.page = 0;
    $scope.limit = 5;
    $scope.posts = [];
    wpService.getPostsByTag($scope.page, $scope.limit, $routeParams.tag).success(function (posts) {
        $scope.posts = posts;
        $log.debug(posts);
    });
});
