"use strict";

Promise.reflect = function (promises) {
	return Promise.all(promises.map(function (promise) {
		return promise.then(function (v) {
			return { v: v, status: "fulfilled" };
		}, function (e) {
			return { e: e, status: "rejected" };
		});
	}));
};

Promise.prototype.state = function () {
	var promiseCheck = {};
	return Promise.race([this, promiseCheck]).then(function (value) {
		return value === promiseCheck ? "pending" : "fulfilled";
	}, function () {
		return "rejected";
	});
};