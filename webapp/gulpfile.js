var gulp = require('gulp'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    changed = require('gulp-changed'),
    runSequence = require('run-sequence'),
     webserver = require('gulp-webserver');


gulp.task('scripts.app', function () {
    return gulp.src(['app/*.js', 'app/modules/**/*.js', 'app/config/*.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('public/js/'));
});

gulp.task('styles.app', function () {
    return gulp.src(['bower_components/bootstrap/dist/css/*.css', 'bower_components/bootstrap/dist/css/*.css.map', 'styles.css'])
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('public/css/'));
});

gulp.task('vendor.app', function () {
    var source = [
        'bower_components/jquery/dist/jquery.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js',
        'bower_components/lodash/dist/lodash.js',
        'bower_components/restangular/dist/restangular.js',
        'bower_components/bootstrap/dist/js/bootstrap.js'
    ];
    gulp.src(source)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('public/js/'));
});

gulp.task('templates.direct', function () {
    return gulp.src(['app/**/**/*.html', 'app/*.html', 'index.html'])
        .pipe(changed('public'))
        .pipe(gulp.dest('public'));
})

gulp.task('clean', function () {
    return gulp.src('public/**/*.*')
        .pipe(clean());
});

gulp.task('build', function (callback) {
    runSequence = require('run-sequence').use(gulp)
    runSequence(
        'clean',
        'scripts.app',
        'vendor.app',
        'templates.direct',
        'styles.app',
        callback
    );
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('default', ['build', 'webserver'], function () { });

