angular.module('wordpressNG').controller('PostDetailCtrl', function ($scope, $routeParams, wpService) {
    wpService.getPostDetail($routeParams.id).success(function (post) {
        $scope.post = post.post;
    });
});
