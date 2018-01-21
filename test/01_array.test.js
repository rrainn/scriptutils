require('../dist/node-test/index.js');
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
		it('Should remove elements if multiple indexes are passed in and second index passed in doesn\'t exist', function () {
			array.remove(0, 1);
			expect(array).to.deep.equal([]);
		});
		it('Should remove elements if multiple indexes are passed in and second index passed in doesn\'t exist and elements still exist in array', function () {
			array = ["Hello", "World", "Earth", "Universe"];
			array.remove(1, 2);
			expect(array).to.deep.equal(["Hello", "Universe"]);
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
	describe('Swap', function () {
		var array = [];
		beforeEach(function () {
			array = ["Hello", "World"];
		});
		
		it('Should return original array if nothing is passed in', function () {
			array.swap();
			expect(array).to.deep.equal(["Hello", "World"]);
		});
		it('Should return original array if index is function', function () {
			array.swap(function(){});
			expect(array).to.deep.equal(["Hello", "World"]);
		});
		it('Should return original array if index is array', function () {
			array.swap([]);
			expect(array).to.deep.equal(["Hello", "World"]);
		});
		it('Should return original array if index is negitive number', function () {
			array.swap(-5);
			expect(array).to.deep.equal(["Hello", "World"]);
		});
		it('Should return original array if index is greater than array length', function () {
			array.swap(100);
			expect(array).to.deep.equal(["Hello", "World"]);
		});
		it('Should return original array if only 1 index is passed in', function () {
			array.swap(1);
			expect(array).to.deep.equal(["Hello", "World"]);
		});
		it('Shouldn\'t swap elements if index passed in is greater than array length', function () {
			array.swap(0, 5);
			expect(array).to.deep.equal(["Hello", "World"]);
		});
		it('Shouldn\'t swap elements if index passed in is less than 0', function () {
			array.swap(-5, 1);
			expect(array).to.deep.equal(["Hello", "World"]);
		});
		it('Should swap elements if multiple indexes are passed in', function () {
			array.swap(0, 1);
			expect(array).to.deep.equal(["World", "Hello"]);
		});
		it('Should swap elements if multiple indexes are passed in, in reverse order', function () {
			array.swap(1, 0);
			expect(array).to.deep.equal(["World", "Hello"]);
		});
		it('Should swap elements if multiple indexes are passed in and array has more than two elements', function () {
			array = ["Hello", "World", "Earth", "Universe"]
			array.swap(0, 1);
			expect(array).to.deep.equal(["World", "Hello", "Earth", "Universe"]);
		});
	}); // end "Swap" describe
	describe('Max', function () {
		var array = [];
		beforeEach(function () {
			array = ["Hello", "World"];
		});
		
		it('Should return NaN if array is words', function () {
			expect(array.max()).to.deep.equal(NaN);
		});
		it('Should return 5 if 5 is the largest number in array', function () {
			array = [1,2,3,4,5];
			expect(array.max()).to.deep.equal(5);
		});
		it('Should return 5 if 5 is the largest number in array and elements are in random order', function () {
			array = [5,2,1,3,4];
			expect(array.max()).to.deep.equal(5);
		});
		it('Should return -1 if -1 is the largest number in array', function () {
			array = [-1,-2,-3,-4,-5];
			expect(array.max()).to.deep.equal(-1);
		});
		it('Should return -1 if -1 is the largest number in array and elements are in random order', function () {
			array = [-5,-2,-1,-3,-4];
			expect(array.max()).to.deep.equal(-1);
		});
	}); // end "Max" describe
	describe('Min', function () {
		var array = [];
		beforeEach(function () {
			array = ["Hello", "World"];
		});
		
		it('Should return NaN if array is words', function () {
			expect(array.min()).to.deep.equal(NaN);
		});
		it('Should return 1 if 1 is the lowest number in array', function () {
			array = [1,2,3,4,5];
			expect(array.min()).to.deep.equal(1);
		});
		it('Should return 1 if 1 is the lowest number in array and elements are in random order', function () {
			array = [5,2,1,3,4];
			expect(array.min()).to.deep.equal(1);
		});
		it('Should return -1 if -1 is the lowest number in array', function () {
			array = [-1,2,3,4,5];
			expect(array.min()).to.deep.equal(-1);
		});
		it('Should return -1 if -1 is the lowest number in array and elements are in random order', function () {
			array = [5,2,-1,3,4];
			expect(array.min()).to.deep.equal(-1);
		});
	}); // end "Min" describe
	describe('First', function () {
		var array = [];
		beforeEach(function () {
			array = ["Hello", "World"];
		});
		
		it('Should return undefined if array empty', function () {
			array = [];
			expect(array.first()).to.be.undefined;
		});
		it('Should return "Hello" if "Hello" is the first element in array', function () {
			expect(array.first()).to.deep.equal("Hello");
		});
	}); // end "First" describe
}); // end "Array" describe