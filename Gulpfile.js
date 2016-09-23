var gulp = require('gulp');
var copy = require('gulp-contrib-copy');
var replace = require('gulp-replace');

gulp.task('copy-html', function() {
    gulp.src('node_modules/localized-responsive-google-play-badge/test/*.html')
        .pipe(replace('<img src="../dist/', '<img src="img/'))
        .pipe(gulp.dest('./'));
});

gulp.task('copy-images', function() {
    gulp.src('node_modules/localized-responsive-google-play-badge/dist/*.svg')
        .pipe(copy())
        .pipe(gulp.dest('./img'));
});

gulp.task('default', ['copy-html', 'copy-images']);