module.exports.randomInt = function(min, max) {
	if (typeof min != 'number' || typeof max != 'number') {
		return Math.floor(Math.random() * 100) + 1;
	} else {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}

module.exports.randomFloat = function(min, max) {
	if (typeof min != 'number' || typeof max != 'number') {
		return (Math.random() * 100) + 1;
	} else {
		return (Math.random() * (max - min + 1)) + min;
	}
}

Number.prototype.isFloat = function() {
	return this % 1 !== 0 && !isNaN(this);
};
