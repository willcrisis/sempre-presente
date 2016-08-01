const gulp = require('gulp');
const swPrecache = require('sw-precache');
const path = require('path');

const conf = require('../conf/gulp.conf');

gulp.task('serviceworker', serviceworker);

function serviceworker(callback) {
  swPrecache.write(path.join('dist/', 'service-worker.js'), {
    staticFileGlobs: ['dist/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff,woff2}'],
    stripPrefix: 'dist/',
    runtimeCaching: [{
      urlPattern: /sempre-presente-ec920\.firebaseio\.com\//,
      handler: 'fastest'
    }, {
      default: 'networkFirst'
    }]
  }, callback);
}
