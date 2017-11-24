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
	return self;
};
