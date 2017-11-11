require('../dist/node.js');
var expect = require('chai').expect;

describe('Array', function() {
	describe('Insert', function () {
		var array = [];
		beforeEach(function () {
			array = ["Hello", "World"];
		});
		
		it('Should return original array if nothing is passed in', function () {
			array.insert();
			expect(array).to.deep.equal(["Hello", "World"]);
		});
		it('Should return original array if just index is passed in', function () {
			array.insert(1);
			expect(array).to.deep.equal(["Hello", "World"]);
		});
		it('Should return original array if index is string', function () {
			array.insert("5");
			expect(array).to.deep.equal(["Hello", "World"]);
		});
		it('Should return original array if index is function', function () {
			array.insert(function(){});
			expect(array).to.deep.equal(["Hello", "World"]);
		});
		it('Should return original array if index is array', function () {
			array.insert([]);
			expect(array).to.deep.equal(["Hello", "World"]);
		});
		it('Should insert element at beginning of array if index is negitive number', function () {
			array.insert(-5, "First Element");
			expect(array).to.deep.equal(["First Element", "Hello", "World"]);
		});
		it('Should insert element at end of array if index is greater than array length', function () {
			array.insert(100, "Last Element");
			expect(array).to.deep.equal(["Hello", "World", "Last Element"]);
		});
		it('Should insert element after first element if index is 1', function () {
			array.insert(1, "Test");
			expect(array).to.deep.equal(["Hello", "Test", "World"]);
		});
		it('Should insert elements if elements is an array', function () {
			array.insert(1, ["First Test", "Second Test"]);
			expect(array).to.deep.equal(["Hello", "First Test", "Second Test", "World"]);
		});
		it('Should return correct array after inserting', function () {
			expect(array.insert(1, ["First Test", "Second Test"])).to.deep.equal(["Hello", "First Test", "Second Test", "World"]);
		});
	}); // end "Insert" describe
	describe('Remove', function () {
		var array = [];
		beforeEach(function () {
			array = ["Hello", "World"];
		});
		
		it('Should return original array if nothing is passed in', function () {
			array.remove();
			expect(array).to.deep.equal(["Hello", "World"]);
		});
		it('Should return original array if index is function', function () {
			array.remove(function(){});
			expect(array).to.deep.equal(["Hello", "World"]);
		});
		it('Should return original array if index is array', function () {
			array.remove([]);
			expect(array).to.deep.equal(["Hello", "World"]);
		});
		it('Should return original array if index is negitive number', function () {
			array.remove(-5);
			expect(array).to.deep.equal(["Hello", "World"]);
		});
		it('Should return original array if index is greater than array length', function () {
			array.remove(100);
			expect(array).to.deep.equal(["Hello", "World"]);
		});
		it('Should remove element', function () {
			array.remove(1);
			expect(array).to.deep.equal(["Hello"]);
		});
		it('Should remove elements if multiple indexes are passed in', function () {
			array.remove(1, 0);
			expect(array).to.deep.equal([]);
		});
		it('Should return correct array after inserting', function () {
			expect(array.remove(1)).to.deep.equal(["Hello"]);
		});
	}); // end "Remove" describe
	describe('Shuffle', function () {
		var array = [];
		beforeEach(function () {
			array = ["Hello", "World"];
		});
		
		it('Should return array', function () {
			array.shuffle();
			expect(array).to.be.an("array");
		});
	}); // end "Shuffle" describe
	describe('Random Element', function () {
		var array = [];
		beforeEach(function () {
			array = ["Hello", "World"];
		});
		
		it('Should not return array', function () {
			var element = array.randomElement();
			expect(element).to.not.be.an("array");
		});
		it('Should not change array', function () {
			var element = array.randomElement();
			expect(array).to.deep.equal(["Hello", "World"]);
		});
		it('Should return element that exists in array', function () {
			var element = array.randomElement();
			expect(array.indexOf(element)).to.be.above(-1);
		});
	}); // end "Random Element" describe
}); // end "Array" describe