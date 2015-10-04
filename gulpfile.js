var gulp = require('gulp');
var stylus = require('gulp-stylus');
var nib = require('nib');
var concat = require('gulp-concat-css');
var minify = require('gulp-minify-css'); // Es necesario porque stylus compress no me deja cambiarle el nombre
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');

gulp.task('styl', function () {
    return styl();
});

function styl() {
    return gulp.src('./lib/app.styl')
      .pipe(stylus({ use: nib() }))
      .pipe(concat('app.min.css'))
      .pipe(minify())
      .pipe(gulp.dest('./public'));
}

gulp.task('js', function() {
  return browserify({
    entries: './lib/app.js', //punto de entrada js
  })
  .bundle()
  .pipe(source('app.min.js')) // archivo destino
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('./public/')); // en dónde va a estar el archivo destino
});
