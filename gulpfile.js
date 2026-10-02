const { src, dest, watch, series, parallel } = require('gulp')
const gulpSass = require('gulp-sass')(require('sass'))
const gulpCache = require('gulp-cache')
const del = require('del')
const gulpImagemin = require('gulp-imagemin')
const gulpIf = require('gulp-if')
const gulpPug = require('gulp-pug')
const browserSync = require('browser-sync').create()
const fs = require('fs')

const paths = {
  scssEntry: 'src/scss/main.scss',
  scssSource: 'src/scss/**/*.scss',
  pugSource: 'src/pug/*.pug',
  dataFile: './src/data/data.json',
  images: 'src/img/*.+(png|jpg|jpeg|gif|svg)',
  favicons: 'src/favicons/*.+(png|jpg|jpeg|gif|svg|ico|xml|json|webmanifest)',
  js: 'src/js/*.js',
  assets: 'src/assets/*',
  blog: 'src/blog/public/**/*',
  blogStatic: 'blog/static/**/*',
}

function serve(done) {
  browserSync.init({
    server: {
      baseDir: './',
    },
  })
  done()
}

async function getPugData() {
  try {
    const rawData = await fs.promises.readFile(paths.dataFile, 'utf-8')
    return JSON.parse(rawData)
  } catch (error) {
    console.warn('Unable to parse Pug data file; falling back to empty object.', error)
    return {}
  }
}

async function pugTask() {
  const data = await getPugData()

  return src(paths.pugSource)
    .pipe(
      gulpPug({ data }).on('error', (error) => {
        console.error(error)
      }),
    )
    .pipe(dest('./'))
}

function sassTask() {
  return src(paths.scssEntry).pipe(gulpSass().on('error', gulpSass.logError)).pipe(dest('css'))
}

function jsTask() {
  return src(paths.js).pipe(dest('js'))
}

function imagesTask() {
  return src(paths.images).pipe(gulpCache(gulpImagemin())).pipe(dest('img'))
}

function assetsTask() {
  return src(paths.assets).pipe(dest('assets'))
}

function faviconsTask() {
  return src(paths.favicons)
    .pipe(gulpIf('*.+(png|jpg|jpeg|gif|svg)', gulpCache(gulpImagemin())))
    .pipe(dest('favicons'))
}

function copyBlog() {
  return src(paths.blog).pipe(dest('blog'))
}

function copyBlogStatic() {
  return src(paths.blogStatic).pipe(dest('static'))
}

async function cleanDist() {
  await del([
    './js',
    './css',
    './favicons',
    './img',
    './index.html',
    './404.html',
    './blog/',
    './static/',
  ])
}

function watchFiles() {
  watch('src/pug/**', series(pugTask, browserSync.reload))
  watch('src/data/*.json', series(pugTask, browserSync.reload))
  watch(paths.scssSource, series(sassTask, browserSync.reload))
  watch('src/*.html').on('change', browserSync.reload)
  watch(paths.js, browserSync.reload)
}

exports.clean = cleanDist
exports.watch = series(
  parallel(pugTask, sassTask, imagesTask, faviconsTask, jsTask, assetsTask),
  serve,
  watchFiles,
)
exports.build = series(
  cleanDist,
  pugTask,
  sassTask,
  imagesTask,
  faviconsTask,
  jsTask,
  assetsTask,
  copyBlog,
  copyBlogStatic,
)
exports.default = exports.watch
