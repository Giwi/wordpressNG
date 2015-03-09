angular.module('wordpressNG').controller('WelcomeCtrl', function ($scope, wpService, $log) {
    $scope.page = 0;
    $scope.limit = 5;
    $scope.posts = [];
    wpService.getPosts($scope.page, $scope.limit).success(function (posts) {
        $scope.posts = posts;
        $log.debug(posts);
    });

    wpService.getCategories(0).success(function (data) {
        $scope.cats = data;
        $log.debug(data);
    });


});
