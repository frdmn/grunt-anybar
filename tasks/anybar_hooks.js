/*
 * grunt-anybar
 * https://github.com/frdmn/grunt-anybar
 *
 * Copyright (c) 2015 Jonas Friedmann
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function gruntTask(grunt) {

  // All of these settings are customizable via notify_hooks
  var defaults = {
    port: 1738,
    status: ''
  };

  var anybarFail = require('../lib/fail-hook')(grunt, defaults);

  grunt.registerTask('anybar_hooks', 'Config the automatic notification hooks.', function(){
    var options = this.options(defaults);
    anybarFail.setOptions(options);
  });
};
