/*
 * grunt-anybar
 * https://github.com/frdmn/grunt-anybar
 *
 * Copyright (c) 2015 Jonas Friedmann
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt, options) {

  var anybar = require('anybar');
  var anybarSync = require('deasync')(anybar);

  function hook() {
    // require('child_process').execFileSync('nc', ['-4u', '-w0', 'localhost', options.port], { input: 'exclamation' });
    anybarSync('exclamation', options);
  }

  // run on warning
  grunt.util.hooker.hook(grunt, 'warn', hook);
  grunt.util.hooker.hook(grunt.fail, 'warn', hook);
  // run on error
  grunt.util.hooker.hook(grunt.fail, 'error', hook);
  grunt.util.hooker.hook(grunt.log, 'fail', hook);
  grunt.util.hooker.hook(grunt.log, 'error', hook);
  // run on fatal
  grunt.util.hooker.hook(grunt.fail, 'fatal', hook);

  function setOptions(opts) {
    options = opts;
  }

  return {
    setOptions: setOptions
  };
};
