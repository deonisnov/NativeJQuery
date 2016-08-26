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
// var jquery = '<script src="native-jquery.js"></script>';
var jquery = '<script src="bliss.js"></script>';
// var jquery = '<script src="jquery-3.js"></script>';
var testdata = '<form><input required></form>';

gulp.task('page', function() {
    gulp.src('README.md')
        .pipe(markdown())
        .pipe(rename('index.html'))
        .pipe(inject.append(jquery))
        .pipe(inject.append(test))
        .pipe(inject.append(testdata))
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


// production
gulp.task('js:production', function() {
    gulp.src('./modules.json')
        .pipe(builder())
        .pipe(uglify())
        // .pipe(jscrush())
        .pipe(gulp.dest('./'))
        .pipe(connect.reload());
});

gulp.task('watch:production',function(){
    gulp.watch("./assets/**/*.js", ["js:production"]);
    gulp.watch("./test/*.js", ["js:production"]);
    gulp.watch("./modules.json", ["js:production"]);
    gulp.watch("./README.md", ["page"]);
});

gulp.task('production', ["js:production", "page", "connect", "watch:production"]);


// Connect
gulp.task('connect', function() {
    connect.server({
        root: './public',
        livereload: true,
        port: 8889,
        https: false
    });
});
