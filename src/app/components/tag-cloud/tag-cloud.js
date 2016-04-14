angular.module('wordpressNG').directive('tagCloud', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {       },
        templateUrl: 'app/components/tag-cloud/tag-cloud.html',
        controller: function ($scope, wpService) {
            $scope.words = [];
            wpService.getTags().then(function (data) {
                data.data.forEach(function (t) {
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
