'use strict';
const merge = require('merge-stream');

// ------------------------------------------------
//   Task: Copy extra files for deployment
//    Most files are included in the bundle, these are exceptions.
// ------------------------------------------------

module.exports = function(gulp) {
  return function() {
    var outputDir = './build/default/';
    // These directories contain files that are not included in the polymer build output for various reasons.
    // (Whenever possible files should be imported using HTML imports, so they're included in the polymer build.)
    var extraDirectories = [
      'public/bower_components/polymer',
      'public/bower_components/webcomponentsjs',

      'public/bower_components/px-typography-design',
      'public/bower_components/px-theme',
      'public/bower_components/px-dark-theme',
      'public/bower_components/px-vis',
      'public/bower_components/pxd3',
    ];

    var extraStreams = [];

    extraDirectories.forEach(function(bc) {
      extraStreams.push(gulp.src([bc + '/**/*.*']).pipe(gulp.dest(outputDir + bc)));
    });

    var imageFiles = gulp.src(['public/*_config.json']).pipe(gulp.dest(outputDir + 'public/'));
    var configFiles = gulp.src(['public/images/**/*.*']).pipe(gulp.dest(outputDir + 'public/images'));

    return merge(extraStreams, imageFiles, configFiles);
  };
};
