require('./array/index.js');
require('./string/index.js');
require('./promise/index.js');

var otherNumber = require('./other/number.js');
var timeout = require('./other/timeout.js');
var hash = require('./hash/index.js');
module.exports = {...otherNumber, ...hash, ...timeout};
