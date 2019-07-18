var gulp = require('gulp')
var sass = require('gulp-sass')
var useref = require('gulp-useref')
var runSequence = require('run-sequence')
var cache = require('gulp-cache')
var del = require('del')
var imagemin = require('gulp-imagemin')
var cssnano = require('gulp-cssnano')
var gulpIf = require('gulp-if')
var pug = require('gulp-pug')
var browserSync = require('browser-sync').create()
var fs = require('fs')

// var ghpages = require('gh-pages')
// var path = require('path')
// var uglify = require('gulp-uglify')

const scssSource = 'src/scss/**'

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: 'src'
    }
  })
})

gulp.task('sass', function () {
  return gulp
    .src(scssSource)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'))
    .pipe(gulp.dest('src/css'))
    .pipe(cssnano({ zindex: false }))
    .pipe(browserSync.stream())
})

gulp.task('useref', function () {
  return (
    gulp
      .src('src/*.html')
      .pipe(useref())
      // .pipe(gulpIf('src/js/*.js', gulp.dest('dist')))
      // .pipe(gulpIf('*.css', cssnano({zindex: false})))
      .pipe(gulp.dest(''))
  )
})

gulp.task('js', function () {
  return gulp.src('src/js/*.js').pipe(gulp.dest('js'))
})

gulp.task('css', function () {
  return gulp
    .src('src/css/*.css')
    .pipe(gulp.dest('css'))
    .pipe(gulp.dest('src/css'))
})

gulp.task('images', function () {
  return gulp
    .src('src/img/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(cache(imagemin()))
    .pipe(gulp.dest('img'))
})

gulp.task('assets', function () {
  return gulp.src('src/assets/*').pipe(gulp.dest('assets'))
})

gulp.task('favicons', function () {
  return gulp
    .src('src/favicons/*.+(png|jpg|jpeg|gif|svg|ico|xml|json|webmanifest)')
    .pipe(gulpIf('*.+(png|jpg|jpeg|gif|svg)', cache(imagemin())))
    .pipe(gulp.dest('favicons'))
})

gulp.task('pug', function buildHTML () {
  return fs.readFile('./src/data/data.json', 'utf-8', (err, data) => {
    if (err) throw err

    data = JSON.parse(data)

    return gulp
      .src('src/pug/*.pug')
      .pipe(
        pug({ data: data }).on('error', function (err) {
          console.log(err)
        })
      )
      .pipe(gulp.dest('src/'))
  })
})

gulp.task('clean:dist', function () {
  return del.sync(['dist/**/*'])
})

gulp.task('watch', ['browserSync', 'pug', 'sass'], function (callback) {
  gulp.watch('src/pug/**', ['pug'])
  gulp.watch('src/data/*.json', ['pug'])
  gulp.watch(scssSource, ['sass'])
  gulp.watch('src/*.html').on('change', browserSync.reload)
  gulp.watch('src/js/*.js', browserSync.reload)
})

gulp.task('build', function (callback) {
  runSequence(
    ['pug', 'sass', 'images', 'favicons', 'js', 'css', 'assets'],
    'useref',
    callback
  )
})

gulp.task('default', function (callback) {
  runSequence(['sass', 'pug'], 'watch', callback)
})
