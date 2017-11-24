'use strict';

var fs = require('fs');
var crypto = require('crypto');
var path = require('path');

var hashFolder = module.exports.hashFolder = function (directory) {
	var files = fs.readdirSync(directory);
	var hashes = files.filter(function (file) {
		return fs.statSync(path.join(directory, file)).isFile();
	}).map(function (file) {
		var content = fs.readFileSync(path.join(directory, file));
		var hash = crypto.createHash('sha256').update(content).digest('hex');
		return hash;
	}).sort().reduce(function (a, b) {
		return a + b;
	}, "");
	if (hashes == "") {
		throw new Error("Directory is empty");
	}
	var hash = crypto.createHash('sha256').update(hashes).digest('hex');
	return hash;
};