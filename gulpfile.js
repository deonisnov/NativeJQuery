var gulp = require('gulp');
// Build
var builder = require('gulp-module-builder');
var uglify = require('gulp-uglify');
var jscrush = require('gulp-jscrush');
// Testing
var markdown = require('gulp-markdown');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');
var rename = require("gulp-rename");
var inject = require('gulp-inject-string');

var testData = '';


var jquery = '<script src="native-jquery.js"></script>';
// var jquery = '<script src="jquery-3.js"></script>';


gulp.task('build:deploy', function() {
    gulp.src('./modules.json')
        .pipe(builder())
        .pipe(uglify())
        .pipe(jscrush())
        .pipe(gulp.dest('./public/'));
});

gulp.task('build:test', function() {
    gulp.src('./modules-test.json')
        .pipe(builder())
        .pipe(gulp.dest('./public/'));

    gulp.src('./node_modules/select2/dist/css/select2.css')
        .pipe(gulp.dest('./public/'));


    gulp.src('README.md')
        .pipe(markdown())
        .pipe(rename('index.html'))
        .pipe(inject.append(jquery))
        .pipe(inject.append(testData))
        .pipe(inject.append('<script src="test.js"></script>'))
        .pipe(gulp.dest('./public/'));
});


// Connect
gulp.task('connect', function() {
    connect.server({
        root: './public',
        livereload: true,
        port: 8889,
        https: false
    });
});

// Watch
gulp.task('watch',function(){
    gulp.watch("./assets/*.js", ["build:test"]);
    gulp.watch("./test/*.js", ["build:test"]);
    gulp.watch("./modules-test.json", ["build:test"]);
    gulp.watch("./README.md", ["build:test"]);
});

gulp.task('default', ["build:test", "connect", "watch"]);
gulp.task('deploy', ["build:deploy"]);
gulp.task('start', ["connect", "watch"]);