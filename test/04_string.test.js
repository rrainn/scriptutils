require('../dist/node-test/index.js');
var expect = require('chai').expect;

describe('String', function() {
	describe('Remove After', function () {
		var string = "";
		beforeEach(function () {
			string = "Hello World";
		});
		afterEach(function () {
			expect(string).to.deep.equal("Hello World");
		});
		
		it('Should return original string if nothing is passed in', function () {
			expect(string.removeAfter()).to.deep.equal("Hello World");
		});
		it('Should return original string if number is passed in', function () {
			expect(string.removeAfter(1)).to.deep.equal("Hello World");
		});
		it('Should return original string if parameter doesn\'t exist', function () {
			expect(string.removeAfter("5")).to.deep.equal("Hello World");
		});
		it('Should return original string if function is passed in', function () {
			expect(string.removeAfter(function(){})).to.deep.equal("Hello World");
		});
		it('Should return original string if array is passed in', function () {
			expect(string.removeAfter([])).to.deep.equal("Hello World");
		});
		it('Should return correct string if 1 character is passed in', function () {
			expect(string.removeAfter(" ")).to.deep.equal("Hello");
		});
		it('Should return correct string if multiple characters are passed in', function () {
			expect(string.removeAfter("ello ")).to.deep.equal("H");
		});
		it('Should return correct string if first letter of string is passed in', function () {
			expect(string.removeAfter("H")).to.deep.equal("");
		});
		it('Should return correct string if array of strings is passed in', function () {
			expect(string.removeAfter([" ", "e"])).to.deep.equal("H");
		});
		it('Should return same string no matter the order of elements passed in', function () {
			expect(string.removeAfter([" ", "e"])).to.deep.equal(string.removeAfter(["e", " "]));
		});
		it('Should return original string if array of numbers is passed in', function () {
			expect(string.removeAfter([1, 7])).to.deep.equal("Hello World");
		});
	}); // end "Remove After" describe
	describe('Remove Before', function () {
		var string = "";
		beforeEach(function () {
			string = "Hello World";
		});
		afterEach(function () {
			expect(string).to.deep.equal("Hello World");
		});
		
		it('Should return original string if nothing is passed in', function () {
			expect(string.removeBefore()).to.deep.equal("Hello World");
		});
		it('Should return original string if number is passed in', function () {
			expect(string.removeBefore(1)).to.deep.equal("Hello World");
		});
		it('Should return original string if parameter doesn\'t exist', function () {
			expect(string.removeBefore("5")).to.deep.equal("Hello World");
		});
		it('Should return original string if function is passed in', function () {
			expect(string.removeBefore(function(){})).to.deep.equal("Hello World");
		});
		it('Should return original string if array is passed in', function () {
			expect(string.removeBefore([])).to.deep.equal("Hello World");
		});
		it('Should return correct string if 1 character is passed in', function () {
			expect(string.removeBefore(" ")).to.deep.equal("World");
		});
		it('Should return correct string if multiple characters are passed in', function () {
			expect(string.removeBefore(" Worl")).to.deep.equal("d");
		});
		it('Should return correct string if last letter of string is passed in', function () {
			expect(string.removeBefore("d")).to.deep.equal("");
		});
		it('Should return correct string if array of strings is passed in', function () {
			expect(string.removeBefore([" ", "l"])).to.deep.equal("d");
		});
		it('Should return same string no matter the order of elements passed in', function () {
			expect(string.removeBefore([" ", "l"])).to.deep.equal(string.removeBefore(["l", " "]));
		});
		it('Should return original string if array of numbers is passed in', function () {
			expect(string.removeBefore([1, 7])).to.deep.equal("Hello World");
		});
		it('Should return correct string if string to remove occurs multiple times', function () {
			expect(string.removeBefore("l")).to.deep.equal("d");
		});
		it('Should return correct string if last letter in string passed in occurs multiple times but string passed in only occurs once', function () {
			expect(string.removeBefore("Hel")).to.deep.equal("lo World");
		});
	}); // end "Remove Before" describe
}); // end "string" describe
