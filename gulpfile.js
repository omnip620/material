var gulp        = require('gulp'),
    inject      = require('gulp-inject'),
    uglify      = require('gulp-uglify'),
    concat      = require('gulp-concat'),
    minifyCSS   = require('gulp-minify-css'),
    clean       = require('gulp-rimraf'),
    git         = require('gulp-git'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync').create(),
    shortId     = require('shortid'),
    randomId    = '',
    stylus      = require('gulp-stylus');

var resources = {
  css: ['public/css/app.css'],
  js : ['public/js/jquery.min.js', 'public/js/pop.js', 'public/js/app.js']
};

gulp.task('browser-sync', function () {
  browserSync.init({
    proxy: "127.0.0.1:8081"
  });
  gulp.watch(["views/**/*", 'public/**/*.js', 'public/css/index.css']).on("change", browserSync.reload);
});

gulp.task('compileStylus',function(){
  gulp.src('public/css/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('public/css/'));

});

gulp.task('watch',function(){
  gulp.watch('public/css/*.styl',['compileStylus']);
});

gulp.task('default',['watch','browser-sync']);