'use strict';
 
var gulp      = require('gulp');
var sass      = require('gulp-sass');
sass.compiler = require('node-sass');
var babel     = require('gulp-babel');
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('jsx', function() {
	return gulp.src('./layout/*.jsx')
	 .pipe(babel({
	 	plugins: ['transform-react-jsx']
	 }))
	 .pipe(gulp.dest('js/'));
});
 
gulp.task('watch', function () {
  gulp.watch('./sass/**/*.sass', gulp.series('sass'));
  gulp.watch('./layout/*.jsx', gulp.series('jsx'));
});