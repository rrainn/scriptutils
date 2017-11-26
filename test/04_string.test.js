require('../dist/node-test/index.js');
var expect = require('chai').expect;

describe('String', function() {
	describe('Remove After', function () {
		var string = "";
		beforeEach(function () {
			string = "Hello World";
		});
		
		it('Should return original string if nothing is passed in', function () {
			string = string.removeAfter();
			expect(string).to.deep.equal("Hello World");
		});
		it('Should return original string if number is passed in', function () {
			string = string.removeAfter(1);
			expect(string).to.deep.equal("Hello World");
		});
		it('Should return original string if parameter doesn\'t exist', function () {
			string = string.removeAfter("5");
			expect(string).to.deep.equal("Hello World");
		});
		it('Should return original string if function is passed in', function () {
			string = string.removeAfter(function(){});
			expect(string).to.deep.equal("Hello World");
		});
		it('Should return original string if array is passed in', function () {
			string = string.removeAfter([]);
			expect(string).to.deep.equal("Hello World");
		});
		it('Should return correct string if 1 character is passed in', function () {
			string = string.removeAfter(" ");
			expect(string).to.deep.equal("Hello");
		});
		it('Should return correct string if multiple characters are passed in', function () {
			string = string.removeAfter("ello ");
			expect(string).to.deep.equal("H");
		});
		it('Should return correct string if first letter of string is passed in', function () {
			string = string.removeAfter("H");
			expect(string).to.deep.equal("");
		});
		it('Should return correct string if array of strings is passed in', function () {
			string = string.removeAfter([" ", "e"]);
			expect(string).to.deep.equal("H");
		});
		it('Should return same string no matter the order of elements passed in', function () {
			expect(string.removeAfter([" ", "e"])).to.deep.equal(string.removeAfter(["e", " "]));
		});
		it('Should return original string if array of numbers is passed in', function () {
			string = string.removeAfter([1, 7]);
			expect(string).to.deep.equal("Hello World");
		});
	}); // end "Remove After" describe
	describe('Remove Before', function () {
		var string = "";
		beforeEach(function () {
			string = "Hello World";
		});
		
		it('Should return original string if nothing is passed in', function () {
			string = string.removeBefore();
			expect(string).to.deep.equal("Hello World");
		});
		it('Should return original string if number is passed in', function () {
			string = string.removeBefore(1);
			expect(string).to.deep.equal("Hello World");
		});
		it('Should return original string if parameter doesn\'t exist', function () {
			string = string.removeBefore("5");
			expect(string).to.deep.equal("Hello World");
		});
		it('Should return original string if function is passed in', function () {
			string = string.removeBefore(function(){});
			expect(string).to.deep.equal("Hello World");
		});
		it('Should return original string if array is passed in', function () {
			string = string.removeBefore([]);
			expect(string).to.deep.equal("Hello World");
		});
		it('Should return correct string if 1 character is passed in', function () {
			string = string.removeBefore(" ");
			expect(string).to.deep.equal("World");
		});
		it('Should return correct string if multiple characters are passed in', function () {
			string = string.removeBefore(" Worl");
			expect(string).to.deep.equal("d");
		});
		it('Should return correct string if last letter of string is passed in', function () {
			string = string.removeBefore("d");
			expect(string).to.deep.equal("");
		});
		it('Should return correct string if array of strings is passed in', function () {
			string = string.removeBefore([" ", "l"]);
			expect(string).to.deep.equal("d");
		});
		it('Should return same string no matter the order of elements passed in', function () {
			expect(string.removeBefore([" ", "l"])).to.deep.equal(string.removeBefore(["l", " "]));
		});
		it('Should return original string if array of numbers is passed in', function () {
			string = string.removeBefore([1, 7]);
			expect(string).to.deep.equal("Hello World");
		});
		it('Should return correct string if string to remove occurs multiple times', function () {
			string = string.removeBefore("l");
			expect(string).to.deep.equal("d");
		});
		it('Should return correct string if last letter in string passed in occurs multiple times but string passed in only occurs once', function () {
			string = string.removeBefore("Hel");
			expect(string).to.deep.equal("lo World");
		});
	}); // end "Remove Before" describe
}); // end "string" describe
