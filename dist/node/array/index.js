"use strict";

Array.prototype.insert = function (index) {
    index = Math.min(index, this.length);
    arguments.length > 1 && this.splice.apply(this, [index, 0].concat([].pop.call(arguments))) && this.insert.apply(this, arguments);
    return this;
};

Array.prototype.remove = function () {
    var _arguments = arguments,
        _this = this;

    Object.keys(arguments).forEach(function (key) {
        var index = _arguments[key];
        if (_this[index]) {
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