angular.module('wordpressNG').directive('tagCloud', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {

        },
        templateUrl: 'directive/tag-cloud/tag-cloud.html',
        controller: function ($scope, wpService, $log, $location) {
            $scope.words = [];
            wpService.getTags().success(function (data, status, headers, config) {
                $log.debug("getTags", data, status, headers, config);
                data.tags.forEach(function (t) {
                    this.push({
                        text: t.title,
                        weight: t.post_count,
                        link: "#/tags/" + t.id
                    });
                }, $scope.words);
            });
        }
    };
});
