'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('./array/index.js');
require('./string/index.js');
require('./promise/index.js');

var otherNumber = require('./other/number.js');
var timeout = require('./other/timeout.js');
var hash = require('./hash/index.js');
module.exports = _extends({}, otherNumber, hash, timeout);