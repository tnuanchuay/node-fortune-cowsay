var gulp = require('gulp');

gulp.task('build-run', () => {
})

gulp.task('default', () => {
  gulp.watch('index.js', ['build-run']);
});
