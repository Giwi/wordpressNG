angular.module('wordpressNG', ['ui.bootstrap', 'ui.utils', 'ngRoute', 'ngAnimate', 'config']);

angular.module('wordpressNG').config(function ($routeProvider) {

    /* Add New Routes Above */
    $routeProvider.otherwise({
        redirectTo: '/home'
    });

});

angular.module('wordpressNG').run(function ($rootScope) {

    $rootScope.safeApply = function (fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof (fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});