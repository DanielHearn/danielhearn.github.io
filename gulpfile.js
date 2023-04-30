;(() => {
  const gulp = require('gulp'),
    gulpSass = require('gulp-sass')(require('sass')),
    gulpUseref = require('gulp-useref'),
    gulpCache = require('gulp-cache'),
    del = require('del'),
    gulpImagemin = require('gulp-imagemin'),
    gulpCssnano = require('gulp-cssnano'),
    gulpIf = require('gulp-if'),
    gulpPug = require('gulp-pug'),
    browserSync = require('browser-sync').create(),
    fs = require('fs'),
    scssSource = 'src/scss/**'

  function server(done) {
    browserSync.init({
      server: {
        baseDir: './',
      },
    })
    done()
  }

  function sass() {
    return gulp
      .src('src/scss/main.scss')
      .pipe(gulpSass().on('error', gulpSass.logError))
      .pipe(gulp.dest('css'))
  }

  function js() {
    return gulp.src('src/js/*.js').pipe(gulp.dest('js'))
  }

  function images() {
    return gulp
      .src('src/img/*.+(png|jpg|jpeg|gif|svg)')
      .pipe(gulpCache(gulpImagemin()))
      .pipe(gulp.dest('img'))
  }

  function assets() {
    return gulp.src('src/assets/*').pipe(gulp.dest('assets'))
  }

  function blog() {
    return gulp.src('src/blog/public/**/**').pipe(gulp.dest('blog'))
  }

  function favicons() {
    return gulp
      .src('src/favicons/*.+(png|jpg|jpeg|gif|svg|ico|xml|json|webmanifest)')
      .pipe(gulpIf('*.+(png|jpg|jpeg|gif|svg)', gulpCache(gulpImagemin())))
      .pipe(gulp.dest('favicons'))
  }

  function pug(done) {
    fs.readFile('./src/data/data.json', 'utf-8', (err, data) => {
      if (err) throw err

      try {
        data = JSON.parse(data)
      } catch (e) {
        console.log(e)
        data = {}
      }

      return gulp
        .src('src/pug/*.pug')
        .pipe(
          gulpPug({ data: data }).on('error', function (err) {
            console.log(err)
          }),
        )
        .pipe(gulp.dest('./'))
    })
    done()
  }

  function cleanDist(done) {
    del.sync(['./js', './css', './favicons', './img', './index.html', './404.html', './blog/'])
    done()
  }

  function watch(done) {
    gulp.watch('src/pug/**', pug)
    gulp.watch('src/data/*.json', pug)
    gulp.watch(scssSource, sass)
    gulp.watch('src/*.html').on('change', browserSync.reload)
    gulp.watch('src/js/*.js', browserSync.reload)
    done()
  }

  exports.clean = gulp.series(cleanDist)

  exports.watch = gulp.series(watch, server)

  exports.build = gulp.series(cleanDist, pug, sass, images, favicons, js, assets, blog)

  exports.default = gulp.series(watch, server)
})()
