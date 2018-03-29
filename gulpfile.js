var gulp = require('gulp');
var browserify = require('browserify');
var babel = require('gulp-babel');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');


gulp.task('default', ["browser", "node"]);

gulp.task('browser', function () {
    return browserify({entries: './index.js', extensions: ['.js'], debug: true, basedir: __dirname + '/src', standalone: 'scriptutils'})
      .ignore('./src/hash/index.js')
	  .ignore('./src/promise/index.js')
	  .ignore('./src/other/timeout.js')
      .transform(babelify)
      .bundle()
      .pipe(source('index.js'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(rename("index.js"))
      .pipe(gulp.dest("./dist/browser"))
});

gulp.task('node', function () {
    gulp.src("./src/**")
        .pipe(babel())
        .pipe(gulp.dest("./dist/node"))
})

gulp.task('node-test', function () {
    gulp.src("./src/**")
        .pipe(babel({plugins: ["istanbul"]}))
        .pipe(gulp.dest("./dist/node-test"))
})