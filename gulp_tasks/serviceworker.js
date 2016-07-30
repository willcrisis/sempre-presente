const gulp = require('gulp');
const swPrecache = require('sw-precache');
const path = require('path');

const conf = require('../conf/gulp.conf');

gulp.task('serviceworker', serviceworker);

function serviceworker(callback) {
  const rootDir = conf.path.dist('/');

  swPrecache.write(path.join(rootDir, 'service-worker.js'), {
    staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff,woff2}'],
    stripPrefix: rootDir,
    replacePrefix: '/'
  }, callback);
}
