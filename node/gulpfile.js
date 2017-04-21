var gulp = require('gulp')
var babel = require('gulp-babel')
var livereload = require('gulp-livereload');

gulp.task('scripts', function() {
  return gulp.src('server.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'))
    .pipe(livereload({ start: true }));
});

gulp.task('watch', function() {
  livereload.listen(8100);
  gulp.watch('server.js', ['scripts'])
})

