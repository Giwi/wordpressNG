(function () {
    'use strict';
    angular.module('wordpressNG').controller('WelcomeController', function (wpService) {
        var vm = this;
        vm.page = 1;
        vm.limit = 5;
        vm.posts = [];
        wpService.getPosts(vm.page, vm.limit).then(function (data) {
            vm.posts = data.data;
        });
        wpService.getCategories(0).success(function (data) {
            vm.cats = data;
        });
    });
}());