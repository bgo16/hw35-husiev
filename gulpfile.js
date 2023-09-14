const gulp = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cssMinify = require('gulp-clean-css');
const jsMinify = require('gulp-terser');
const browserSync = require('browser-sync');
const babel = require('gulp-babel');

function styles() {
  return gulp.src('./src/scss/*.scss').pipe(scss()).pipe(autoprefixer('last 4 version')).pipe(cssMinify()).pipe(gulp.dest('./dist/')).pipe(browserSync.stream());
}

function scripts() {
  return gulp.src('./src/js/*.js').pipe(jsMinify()).pipe(gulp.dest('./dist')).pipe(browserSync.stream());
}

function transform() {
  return gulp
    .src('./src/js/*.js')
    .pipe(
      babel({
        presets: ['@babel/preset-env']
      })
    )
    .pipe(gulp.dest('./dist'));
}

function watchTask() {
  browserSync.init({
    server: './'
  });

  gulp.watch(['./src/scss/*.scss', './src/js/*.js', './*.html'], gulp.series(styles, transform, scripts));
}

exports.default = gulp.series(styles, scripts, watchTask);
