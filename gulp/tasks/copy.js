'use strict';

var gulp   = require('gulp');
var config = require('../config');

gulp.task('copy', function() {

  // merge all components
  var components = [];
  for(var file in config.copy){
    components = components.concat(config.copy[file]);
  }

  // Copy bower components, bootstrap etc etc into 'public/js/libs'
  return gulp.src(components)
    .pipe(gulp.dest(config.scripts.dest + '/libs'));

});