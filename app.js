(function () {
    "use strict";
    angular.module('wordpressNG', ['angular-loading-bar', 'ui.bootstrap', 'ui.utils', 'ngRoute', 'ngSanitize', 'ngAnimate', 'config', 'tmh.dynamicLocale', 'pascalprecht.translate', 'hljs', 'angular-jqcloud']);

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
}])

    .config(function ($routeProvider, $httpProvider, tmhDynamicLocaleProvider, cfpLoadingBarProvider, $translateProvider) {
        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: 'i18n/{part}/{lang}.json'
        });

        $translateProvider.useLoaderCache(false);
        $translateProvider.registerAvailableLanguageKeys(['fr', 'en', 'de'], {
            'fr_FR': 'fr',
            'en_US': 'en',
            'en_UK': 'en',
            'de_DE': 'de',
            'de_CH': 'de'
        });
        $translateProvider.preferredLanguage('fr');
        $translateProvider.determinePreferredLanguage();
        tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');

        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $httpProvider.interceptors.push('httpInterceptor');
        $routeProvider.when('/', {
            templateUrl: 'partial/welcome/welcome.html'
        }).when('/post-detail/:id', {
            templateUrl: 'partial/post-detail/post-detail.html'
        }).when('/tags/:tag', {
            templateUrl: 'partial/tags/tags.html'
        }).when('/category/:cat', {
            templateUrl: 'partial/category-list/category-list.html'
        }).otherwise({
            redirectTo: '/'
        });

    })

    .run(function ($rootScope, $locale, $translate, tmhDynamicLocale, $log) {
        $locale.id = $translate.proposedLanguage();
        tmhDynamicLocale.set($locale.id);
        $log.debug($locale.id);
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
