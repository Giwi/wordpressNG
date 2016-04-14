(function () {
    'use strict';

    angular
        .module('wordpressNG')
        .config(config);

    /** @ngInject */
    function config($logProvider, $httpProvider, toastrConfig, tmhDynamicLocaleProvider, cfpLoadingBarProvider, $translateProvider) {
        // Enable log
        $logProvider.debugEnabled(true);

        // Set options third-party lib
        toastrConfig.allowHtml = true;
        toastrConfig.timeOut = 3000;
        toastrConfig.positionClass = 'toast-top-right';
        toastrConfig.preventDuplicates = true;
        toastrConfig.progressBar = true;
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
    }

})();
