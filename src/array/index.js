Array.prototype.insert = function(index) {
	let array = [...this];
	index = Math.min(index, array.length);
	arguments.length > 1 && array.splice.apply(array, [index, 0].concat([].pop.call(arguments))) && array.insert.apply(array, arguments);
	return array;
};

Array.prototype.remove = function() {
	let array = [...this];
	// If no arguments passed into remove function
	if (arguments.length <= 0) {
		// Should do nothing
		return array;
	}
	delete arguments.length;
	var indexesToRemove = Object.keys(arguments).map((key) => {
		return arguments[key];
	}).sort((a, b) => {
		return b - a; // sort descending order
	});
	indexesToRemove.forEach((index) => {
		if (array[index] != undefined && array[index] != null && index >= 0 && index < array.length) {
			array.splice(index, 1);
		}
	});
	return array;
};

Array.prototype.shuffle = function() {
	let array = [...this];
	var currentIndex = array.length;
	var temporaryValue;
	var randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
};

Array.prototype.randomElement = function() {
	return this[Math.floor(Math.random() * this.length)];
};

Array.prototype.swap = function(a, b) {
	let array = [...this];
	if (!array[a] || !array[b]) {
		return array;
	}
	var tmp = array[a];
	array[a] = array[b];
	array[b] = tmp;
	return array;
};

Array.prototype.max = function() {
	return Math.max(...this);
};

Array.prototype.min = function() {
	return Math.min(...this);
};

Array.prototype.first = function() {
	return this[0];
};

Array.prototype.last = function() {
	return this[this.length - 1];
};

/* istanbul ignore if */
if (!Array.prototype.fill) {
  Object.defineProperty(Array.prototype, 'fill', {
    value: function(value) {

      // Steps 1-2.
      if (this == null) {
        throw new TypeError('this is null or not defined');
      }

      var O = Object(this);

      // Steps 3-5.
      var len = O.length >>> 0;

      // Steps 6-7.
      var start = arguments[1];
      var relativeStart = start >> 0;

      // Step 8.
      var k = relativeStart < 0 ?
        Math.max(len + relativeStart, 0) :
        Math.min(relativeStart, len);

      // Steps 9-10.
      var end = arguments[2];
      var relativeEnd = end === undefined ?
        len : end >> 0;

      // Step 11.
      var final = relativeEnd < 0 ?
        Math.max(len + relativeEnd, 0) :
        Math.min(relativeEnd, len);

      // Step 12.
      while (k < final) {
        O[k] = value;
        k++;
      }

      // Step 13.
      return O;
    }
  });
}

Array.prototype.frontPad = function (item, length) {
	if (isNaN(length)) {
		return this;
	}
	return [...Array((length - this.length) > this.length ? (length - this.length) : 0).fill(item), ...this];
};

Array.prototype.backPad = function (item, length) {
	if (isNaN(length)) {
		return this;
	}
	return [...this, ...Array((length - this.length) > this.length ? (length - this.length) : 0).fill(item)];
};
