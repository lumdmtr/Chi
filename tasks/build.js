import gulp from 'gulp';

gulp.task('build', gulp.series(
  'clean',
  'build:chi',
  'build:test',
  'build:website'
));
