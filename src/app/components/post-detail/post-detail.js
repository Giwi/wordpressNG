(function () {
    'use strict';
    angular.module('wordpressNG').directive('postDetail', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                post: '='
            },
            templateUrl: 'app/components/post-detail/post-detail.html',
            controller: function () {
            }
        };
    });
}());