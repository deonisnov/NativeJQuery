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

    gulp.src('README.md')
        .pipe(markdown())
        .pipe(rename('index.html'))
        .pipe(
            inject.append('<script src="test.js"></script>')
        )
        .pipe(gulp.dest('./public/'));
});


// Connect
gulp.task('connect', function() {
    connect.server({
        root: './public',
        livereload: true,
        port: 8888,
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