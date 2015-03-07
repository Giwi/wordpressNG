angular.module('wordpressNG').controller('PostDetailCtrl', function ($scope, $routeParams) {
    $scope.postId = $routeParams.id;
});
