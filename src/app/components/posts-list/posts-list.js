(function () {
    'use strict';
    angular.module('wordpressNG').directive('postsList', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                page: '=',
                limit: '=',
                posts: '='
            },
            controllerAs: 'ctrl',
            bindToController: true,
            templateUrl: 'app/components/posts-list/posts-list.html',
            controller: function ($scope) {


            }
        };
    });
}());