angular.module('wordpressNG').directive('pageList', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        templateUrl: 'app/components/page-list/page-list.html',
        controller: function ($scope, wpService, $log) {
            $scope.pages = [];
            wpService.getPages().then(function (data) {
                $scope.pages = data.data;
            });

        }
    };
});
