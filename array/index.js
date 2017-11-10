Array.prototype.insert = function(index) {
    index = Math.min(index, this.length);
    arguments.length > 1 && this.splice.apply(this, [index, 0].concat([].pop.call(arguments))) && this.insert.apply(this, arguments);
    return this;
};