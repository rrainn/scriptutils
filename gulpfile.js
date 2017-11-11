var gulp = require('gulp');
var browserify = require('gulp-browserify');
 
gulp.task('default', function() {
    gulp.src('index.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : false
        }))
        .pipe(gulp.dest('./dist'))
});