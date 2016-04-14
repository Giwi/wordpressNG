(function () {
    'use strict';
    angular.module('wordpressNG').directive('authorName', function (wpService) {
        return {
            restrict: 'AE',
            replace: true,
            scope: {
                author: '='
            },
            controllerAs: 'ctrl',
            bindToController: true,
            templateUrl: 'app/components/author-name/author-name.html',
            controller: function ($scope) {
                console.log(this.author);
                var ctrl = this;
                wpService.getAuthor(ctrl.author).then(function (data) {
                    ctrl.auth = data.data;
                });
            }
        };
    });
}());