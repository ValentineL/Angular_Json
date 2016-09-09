'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('app/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app'));
});

gulp.task('watch', function() {
    // Watch .scss files
    gulp.watch('app/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);