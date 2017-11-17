Array.prototype.insert = function(index) {
    index = Math.min(index, this.length);
    arguments.length > 1 && this.splice.apply(this, [index, 0].concat([].pop.call(arguments))) && this.insert.apply(this, arguments);
    return this;
};

Array.prototype.remove = function () {
    // If no arguments passed into remove function
	if (Object.keys(arguments).length <= 0) {
        // Should do nothing
        return this;
	}
    Object.keys(arguments).forEach((key) => {
        var index = arguments[key];
        if (this[index] && this[index] != undefined && this[index] != null && index > 0 && index < (this.length - 1)) {
            this.splice(index, 1);
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