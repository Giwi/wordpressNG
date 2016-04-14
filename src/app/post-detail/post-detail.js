angular.module('wordpressNG').controller('PostDetailCtrl', function ($scope, $routeParams, wpService, $log) {
    wpService.getPostDetail($routeParams.id).then(function (data) {
        $scope.post = data.data;
    });
});
