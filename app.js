(function () {
    "use strict";
    angular.module('wordpressNG', ['ui.bootstrap', 'ui.utils', 'ngRoute', 'ngSanitize', 'ngAnimate', 'config', 'tmh.dynamicLocale', 'pascalprecht.translate']);

    angular.module('wordpressNG').factory('httpInterceptor', ['$q', function ($q) {
        return {
            // Everytime a request starts
            request: function (config) {
                if (config.url.startsWith('/api')) {
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
                console.error(response);
                return $q.reject(response);
            }
        };
}]);

    angular.module('wordpressNG').config(function ($routeProvider, $httpProvider, tmhDynamicLocaleProvider) {
        tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $httpProvider.interceptors.push('httpInterceptor');
        $routeProvider.when('/', {
            templateUrl: 'partial/welcome/welcome.html'
        }).otherwise({
            redirectTo: '/'
        });

    });



    angular.module('wordpressNG').run(function ($rootScope, $locale, $translate, tmhDynamicLocale, $log) {
        $log.debug($locale.id);
        $locale.id = $translate.proposedLanguage();
        tmhDynamicLocale.set($locale.id);
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
})();
