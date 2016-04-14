(function () {
    'use strict';
    angular
        .module('wordpressNG')
        .config(routeConfig);

    function routeConfig($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/welcome/welcome.html'
        }).when('/post-detail/:id', {
            templateUrl: 'app/post-detail/post-detail.html'
        }).when('/tags/:tag', {
            templateUrl: 'app/tags/tags.html'
        }).when('/category/:cat', {
            templateUrl: 'app/category-list/category-list.html'
        }).otherwise({
            redirectTo: '/'
        });
    }
})();
