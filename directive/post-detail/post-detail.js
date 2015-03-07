angular.module('wordpressNG').directive('postDetail', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            id: '='
        },
        templateUrl: 'directive/post-detail/post-detail.html',
        controller: function ($scope, wpService, $log) {
            wpService.getPostDetail($scope.id).success(function (post) {
                $scope.post = post.post;
            });
        }
    };
});
