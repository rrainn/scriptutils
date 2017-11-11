var gulp = require('gulp');
var browserify = require('gulp-browserify');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
    gulp.src('index.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : false
        }))
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
});