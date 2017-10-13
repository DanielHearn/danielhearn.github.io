var gulp = require('gulp');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');
var cache = require('gulp-cache');
var cssnano = require('gulp-cssnano');
var pug = require('gulp-pug');
var browserSync = require('browser-sync').create();

const scssSource = 'assets/styles/*.scss';
const cssDest = 'assets/styles/';

gulp.task('sass', function() {
  return gulp.src(scssSource)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(cssDest))
    .pipe(browserSync.stream())
    .pipe(cssnano({zindex: false}))
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
});

gulp.task('watch', ['browserSync', 'sass'], function (callback){
  gulp.watch(scssSource, ['sass']);
  gulp.watch('*.html').on('change', browserSync.reload)
  gulp.watch('js/*.js', browserSync.reload)
  /*runSequence(['pug'], 'watch-files',
    callback
  )*/
})

gulp.task('watch-files', function(callback) {
  gulp.watch(scssSource, ['sass']);
  gulp.watch('*.html').on('change', browserSync.reload)
  gulp.watch('js/*.js', browserSync.reload)
})

gulp.task('default', function(callback) {
  runSequence(['sass', 'browserSync'], 'watch',
    callback
  )
})
