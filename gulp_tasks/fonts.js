const gulp = require('gulp');
const rename = require('gulp-rename');

const conf = require('../conf/gulp.conf');

gulp.task('fonts', fonts);

function fonts() {
  return gulp
    .src(conf.path.bower('**/*.{ttf,woff,woff2,eof,svg}'))
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest(conf.path.dist('fonts')));
}