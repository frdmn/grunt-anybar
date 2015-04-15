/*
 * grunt-anybar
 * https://github.com/frdmn/grunt-anybar
 *
 * Copyright (c) 2015 Jonas Friedmann
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

var projectName;

function packageJson() {
  var packageObj,
    projectName;
  try {
    packageObj = require(process.cwd() + path.sep + 'package.json');
    projectName = packageObj.name;
  } catch (e) {
    // package.json not found
  }

  return projectName;
}

function currentWorkingDirectory() {
  projectName = process.cwd().split(path.sep).pop();
  return projectName;
}


module.exports = function guessProjectName(){
  return projectName || packageJson() || currentWorkingDirectory();
};
