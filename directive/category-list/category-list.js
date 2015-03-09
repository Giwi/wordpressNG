angular.module('wordpressNG').directive('categoryList', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {

        },
        templateUrl: 'directive/category-list/category-list.html',
        controller: function ($scope, wpService, $log) {
            $scope.categories = [];
            wpService.getCategories(0).success(function (data) {
                $scope.categories = data.categories;
                $log.debug("getCategories", data);
            });
        }
    };
});
