String.prototype.removeAfter = function (character) {
	let self = this;
	if (!Array.isArray(character)) {
		character = [character];
	}
	character.forEach((element) => {
		self = self.substring(0, (self.indexOf(element) >= 0 && element.length > 0) ? self.indexOf(element) : self.length);
	});
	return self;
};

String.prototype.removeBefore = function (character) {
	let self = this;
	if (!Array.isArray(character)) {
		character = [character];
	}
	character.forEach((element) => {
		if (element) {
			self = self.substring((self.lastIndexOf(element[element.length-1]) >= 0 && element.length > 0) ? self.lastIndexOf(element[element.length-1])+1 : 0);
		}
	});
	self = IEObjectToString(self);
	return self;
};


// IE 9 fix where String.removeAfter and String.removeBefore returned an object when passing an empty array in, this function will convert that object back to a string
function IEObjectToString(string) {
	/* istanbul ignore if */
	if (typeof string == "object") {
		string = Object.keys(string).filter(function (item) {
			return !isNaN(parseInt(item));
		}).sort(function (a,b) {
			return a>b;
		}).map(function (value) {
			return string[value];
		}).reduce(function (a,b) {
			return a + b;
		});
	}
	return string;
}
