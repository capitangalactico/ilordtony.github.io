var gulp = require('gulp');
var stylus = require('gulp-stylus');
var nib = require('nib');
var concat = require('gulp-concat-css');
var minify = require('gulp-minify-css'); // Es necesario porque stylus compress no me deja cambiarle el nombre

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
