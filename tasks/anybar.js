/*
 * grunt-anybar
 * https://github.com/frdmn/grunt-anybar
 *
 * Copyright (c) 2015 Jonas Friedmann
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  var anybar = require('anybar');

  var defaults = {
    port:       1738,
    status:     ''
  };

  grunt.registerMultiTask('anybar', 'Plugin to show the current build status of Grunt in the AnyBar menu bar.', function() {
    var options = this.options(defaults);
    var done = this.async();

    if (options.status) {
      anybar(options.status, options, done);
    } else {
      done(new Error('AnyBar status is required. Make sure your AnyBar configuration is inside an options object.'));
    }
  });
};
