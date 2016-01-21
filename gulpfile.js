var gulp = require('gulp');
var stylus = require('gulp-stylus');
var nib = require('nib');
var concat = require('gulp-concat-css');
var minify = require('gulp-minify-css'); // Es necesario porque stylus compress no me deja cambiarle el nombre
var browserify = require('browserify');

var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');

var watchify = require('watchify');
var assign = require('lodash.assign');

var opts = {
    entries: './lib/main.js'
};

opts = assign({}, watchify.args, opts);

gulp.task('build', ['styl', 'js']);

gulp.task('watch', ['styl:watch', 'js:watch']);

gulp.task('styl', function () {
    return styl();
});

gulp.task('styl:watch', function () {
    return gulp.watch(['./lib/app.styl', './lib/**/*.styl'], ['styl']);
});

function styl() {
    return gulp.src('./lib/app.styl')
      .pipe(stylus({ use: nib() }))
      .pipe(concat('app.min.css'))
      .pipe(minify())
      .pipe(gulp.dest('./public'));
}

gulp.task('js', function () {
    return generateBundle(browserify(opts));
});

gulp.task('js:watch', function () {
    var w = watchify(browserify(opts));

    w.on('update', function (file) {
        console.log('file modified, rebuilding', file);

        var bdl = generateBundle(w);
        console.log('rebuild finished');
        return bdl;
    });

    // livereload es un singleton
    return generateBundle(w);
});

function generateBundle(b) {
    return b
    .bundle()
    .pipe(source('main.min.js')) // archivo destino
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./public/')); // endonde va a estar el archivo destino
}
