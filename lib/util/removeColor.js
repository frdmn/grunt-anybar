/*
 * grunt-anybar
 * https://github.com/frdmn/grunt-anybar
 *
 * Copyright (c) 2015 Jonas Friedmann
 * Licensed under the MIT license.
 */

function removeColor(str) {
  return typeof str === 'string' ? str.replace(/\x1B\[([0-9]{1,2}(;[0-9]{1,2})?)?[m|K]/g, '').trim() : str;
}

module.exports = removeColor;
