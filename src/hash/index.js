const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

const hashFolder = module.exports.hashFolder = function(directory) {
	let files = fs.readdirSync(directory);
	let hashes = files.filter((file) => {
		return fs.statSync(path.join(directory, file)).isFile();
	}).map((file) => {
		let content = fs.readFileSync(path.join(directory, file));
		let hash = crypto.createHash('sha256').update(content).digest('hex');
		return hash;
	}).sort().reduce((a, b) => {
		return a + b;
	}, "");
	if (hashes == "") {
		throw new Error("Directory is empty");
	}
	let hash = crypto.createHash('sha256').update(hashes).digest('hex');
	return hash;
}
