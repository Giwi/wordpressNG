angular.module('wordpressNG').directive('postDetail', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            post: '='
        },
        templateUrl: 'directive/post-detail/post-detail.html',
        controller: function ($scope) {

        }
    };
});
