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

gulp.task('build', function() {
    gulp.src('./modules.json')
        .pipe(builder())
        .pipe(uglify())
        .pipe(jscrush())
        .pipe(gulp.dest('./public/'));

    gulp.src('README.md')
        .pipe(markdown())
        .pipe(rename('index.html'))
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
    gulp.watch("./assets/*.js", ["build"]);
    gulp.watch("./modules.json", ["build"]);
});

gulp.task('default', ["build", "connect", "watch"]);