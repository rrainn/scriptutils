String.prototype.removeAfter = function (character) {
	return this.substring(0, (this.indexOf(character) >= 0 && character.length > 0) ? this.indexOf(character) : this.length);
};
