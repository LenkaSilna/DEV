const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const watch = require('gulp-watch');

// sestavení souborů Sass
gulp.task('sass', function() {
    return gulp.src('./assets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'));
});

// sledování změn v souborech Sass
gulp.task('watch', function() {
    gulp.watch('./assets/sass/**/*.scss', gulp.series('sass'));
});
