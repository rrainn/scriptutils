require('./array/index.js');
require('./promise/index.js');

var otherNumber = require('./other/number.js');
var hash = require('./hash/index.js');
module.exports = {...otherNumber, ...hash};