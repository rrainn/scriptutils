"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

Array.prototype.insert = function (index) {
	index = Math.min(index, this.length);
	arguments.length > 1 && this.splice.apply(this, [index, 0].concat([].pop.call(arguments))) && this.insert.apply(this, arguments);
	return this;
};

Array.prototype.remove = function () {
	var _arguments = arguments,
	    _this = this;

	// If no arguments passed into remove function
	if (arguments.length <= 0) {
		// Should do nothing
		return this;
	}
	delete arguments.length;
	var indexesToRemove = Object.keys(arguments).map(function (key) {
		return _arguments[key];
	}).sort(function (a, b) {
		return b - a; // sort descending order
	});
	indexesToRemove.forEach(function (index) {
		if (_this[index] != undefined && _this[index] != null && index >= 0 && index < _this.length) {
			_this.splice(index, 1);
		}
	});
	return this;
};

Array.prototype.shuffle = function () {
	var currentIndex = this.length;
	var temporaryValue;
	var randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = this[currentIndex];
		this[currentIndex] = this[randomIndex];
		this[randomIndex] = temporaryValue;
	}

	return this;
};

Array.prototype.randomElement = function () {
	return this[Math.floor(Math.random() * this.length)];
};

Array.prototype.swap = function (a, b) {
	if (!this[a] || !this[b]) {
		return this;
	}
	var tmp = this[a];
	this[a] = this[b];
	this[b] = tmp;
	return this;
};

Array.prototype.max = function () {
	return Math.max.apply(Math, _toConsumableArray(this));
};

Array.prototype.min = function () {
	return Math.min.apply(Math, _toConsumableArray(this));
};

Array.prototype.first = function () {
	return this[0];
};

Array.prototype.last = function () {
	return this[this.length - 1];
};