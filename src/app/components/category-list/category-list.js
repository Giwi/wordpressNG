angular.module('wordpressNG').directive('categoryList', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        templateUrl: 'app/components/category-list/category-list.html',
        controller: function ($scope, wpService) {
            $scope.categories = [];
            wpService.getCategories(0).then(function (data) {
                $scope.categories = data.data;
            });
        }
    };
});
