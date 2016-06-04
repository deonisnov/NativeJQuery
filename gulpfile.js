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


var test = '<script src="test.js"></script>';
var jquery = '<script src="native-jquery.js"></script>';
// var jquery = '<script src="jquery-3.js"></script>';


gulp.task('page', function() {
    gulp.src('README.md')
        .pipe(markdown())
        .pipe(rename('index.html'))
        .pipe(inject.append(jquery))
        .pipe(inject.append(test))
        .pipe(gulp.dest('./public/'))
        .pipe(connect.reload());
});

// Test
gulp.task('js:test', function() {
    gulp.src('./modules-test.json')
        .pipe(builder())
        .pipe(gulp.dest('./public/'))
        .pipe(connect.reload());
});

gulp.task('watch:test',function(){
    gulp.watch("./assets/**/*.js", ["js:test"]);
    gulp.watch("./test/*.js", ["js:test"]);
    gulp.watch("./modules-test.json", ["js:test"]);
    gulp.watch("./README.md", ["page"]);
});

gulp.task('default', ["js:test", "page", "connect", "watch:test"]);


// Deploy
gulp.task('js:deploy', function() {
    gulp.src('./modules.json')
        .pipe(builder())
        .pipe(uglify())
        .pipe(jscrush())
        .pipe(gulp.dest('./public/'))
        .pipe(connect.reload());
});

gulp.task('watch:deploy',function(){
    gulp.watch("./assets/**/*.js", ["js:deploy"]);
    gulp.watch("./test/*.js", ["js:deploy"]);
    gulp.watch("./modules.json", ["js:deploy"]);
    gulp.watch("./README.md", ["page"]);
});

gulp.task('deploy', ["js:deploy", "page", "connect", "watch:deploy"]);


// Connect
gulp.task('connect', function() {
    connect.server({
        root: './public',
        livereload: true,
        port: 8889,
        https: false
    });
});