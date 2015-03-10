angular.module('wordpressNG').directive('tagCloud', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {

        },
        templateUrl: 'directive/tag-cloud/tag-cloud.html',
        controller: function ($scope, wpService, $log, $location) {
            $scope.words = [];
            //file:///home/xavier/Dropbox/Eclipse/wordpressNG/index.html#/tags/android
            wpService.getTags().success(function (data) {
                data.tags.forEach(function (t) {
                    this.push({
                        text: t.title,
                        weight: t.post_count,
                        link: "#/tags/" + t.slug
                    });
                }, $scope.words);
            });
        }
    };
});
