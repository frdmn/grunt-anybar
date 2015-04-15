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

  // run on warning
  grunt.util.hooker.hook(grunt, 'warn', anybar('red', options));
  grunt.util.hooker.hook(grunt, 'error', anybar('exlamation', options));
  grunt.util.hooker.hook(grunt, 'fail', anybar('exlamation', options));
  grunt.util.hooker.hook(grunt, 'fatal', anybar('exlamation', options));

  function setOptions(opts) {
    options = opts;
  }

  return {
    setOptions: setOptions
  };
};
