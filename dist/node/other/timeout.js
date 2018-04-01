"use strict";

module.exports.timeout = function (ms) {
	ms = parseInt(ms);
	return new Promise(function (resolve, reject) {
		if (isNaN(ms)) {
			reject("Invalid miliseconds passed in: " + ms);
		}
		setTimeout(function () {
			return resolve();
		}, ms);
	});
};