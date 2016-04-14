(function () {
    'use strict';

    angular
        .module('wordpressNG')
        .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, $locale, $translate, tmhDynamicLocale, $log) {
        $locale.id = $translate.proposedLanguage();
        tmhDynamicLocale.set($locale.id);
        $log.debug($locale.id);
        $rootScope.safeApply = function (fn) {

            var phase = $rootScope.$$phase;
            if (phase === '$apply' || phase === '$digest') {
                if (fn && (angular.isFunction(fn))) {
                    fn();
                }
            } else {
                this.$apply(fn);
            }
        };

        $log.debug('runBlock end');
    }

})();
