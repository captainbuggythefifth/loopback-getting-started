// include gulp
var gulp = require('gulp');

// include plug-ins
var jshint = require('gulp-jshint');

// JS hint task
gulp.task('jshint', function() {
    gulp.src([
            './bower_components/angular/angular.min.js',
            './bower_components/angular-resource/angular-resource.min.js',
            './bower_components/angular-ui-router/release/angular-ui-router.min.js',

            './bower_components/jquery/dist/jquery.min.js',
            './bower_components/bootstrap/dist/js/bootstrap.min.js',
            './bower_components/bootstrap-material-design/dist/js/material.min.js',
            './bower_components/bootstrap-material-design/dist/js/ripples.min.js',

            './bower_components/momentjs/src/moment.js',
            './bower_components/momentjs/min/moment-with-locales.min.js',
            './bower_components/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker.js',

            './bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
        ])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(gulp.dest('./client/vendor/scripts'));


    //CSS Tasks
    gulp.src([
            './bower_components/bootstrap/dist/css/bootstrap.min.css',
            './bower_components/bootstrap-material-design/dist/css/bootstrap-material-design.min.css',
            './bower_components/bootstrap-material-design/dist/css/ripples.min.css',

            './bower_components/bootstrap-material-datetimepicker/css/bootstrap-material-datetimepicker.css',

            './bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css'
        ])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(gulp.dest('./client/vendor/css'));


    //Fonts Tasks
    gulp.src([
            './bower_components/bootstrap/dist/fonts/*',
            './bower_components/bootstrap-material-datetimepicker/font/*'
        ])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(gulp.dest('./client/vendor/fonts'));
});