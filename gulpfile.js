var gulp = require('gulp');
var browserify = require('gulp-browserify');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");


gulp.task('default', function() {
    // Browser Version
    gulp.src("./src/index.js")
        .pipe(browserify({
          insertGlobals : true,
          debug : false
        }))
        .pipe(babel())
        .pipe(uglify())
        .pipe(rename("index.js"))
        .pipe(gulp.dest("./dist/browser"))
        
    // Node version
    gulp.src("./src/**")
		.pipe(babel())
        .pipe(gulp.dest("./dist/node"))
});