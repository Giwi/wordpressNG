(function () {
    'use strict';
    angular.module('wordpressNG').controller('WelcomeController', function (wpService, $log) {
        var vm = this;
        vm.page = 0;
        vm.limit = 5;
        vm.posts = [];
        wpService.getPosts(vm.page, vm.limit).success(function (posts) {
            vm.posts = posts;
            $log.debug(posts);
        });

        wpService.getCategories(0).success(function (data) {
            vm.cats = data;
            $log.debug(data);
        });


    });
}());