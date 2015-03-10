angular.module('wordpressNG').controller('CategoryListCtrl', function ($scope, wpService, $routeParams, $log) {
    $scope.page = 0;
    $scope.limit = 5;
    $scope.posts = [];
    wpService.getPostsByCategory($scope.page, $scope.limit, $routeParams.cat).success(function (posts) {
        $scope.posts = posts;
        $log.debug(posts);
    });
});
