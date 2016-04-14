(function () {
    'use strict';
    angular.module('wordpressNG', [
        'ngAnimate',
        'ngCookies',
        'ngTouch',
        'ngSanitize',
        'ngMessages',
        'ngAria',
        'ngRoute',
        'ui.bootstrap',
        'toastr',
        'angular-loading-bar',
        'ui.utils',
        'tmh.dynamicLocale',
        'pascalprecht.translate',
        'hljs',
        'angular-jqcloud',

        'wordpressNG.config'
    ])

        .factory('httpInterceptor', httpInterceptor)
    ;
    httpInterceptor.$inject = ['$q', '$log'];
    function httpInterceptor($q, $log) {
        return {
            // Everytime a request starts
            request: function (config) {
                if (config.url.startsWith('/wp-json')) {
                    config.headers['Content-Type'] = 'application/json';
                }
                return config || $q.when(config);
            },
            // When a request ends
            response: function (response) {
                return response || $q.when(response);
            },
            // When a request fails
            responseError: function (response) {
                $log.error(response);
                return $q.reject(response);
            }
        };
    }
})();
