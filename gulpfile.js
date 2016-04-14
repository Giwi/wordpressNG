/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are splitted in several files in the gulp directory
 *  because putting all here was really too long
 */

'use strict';

var gulp = require('gulp');
var wrench = require('wrench');
var conf = require('./gulp/conf');
var gulpNgConfig = require('gulp-ng-config');

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp').filter(function (file) {
    return (/\.(js|coffee)$/i).test(file);
}).map(function (file) {
    require('./gulp/' + file);
});

gulp.task('ngConfig', function () {
    gulp.src('conf/configFile.json')
        .pipe(gulpNgConfig('wordpressNG.config'))
        .pipe(gulp.dest(conf.paths.src + '/app'));
});
/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], function () {
    gulp.start('build');
});
