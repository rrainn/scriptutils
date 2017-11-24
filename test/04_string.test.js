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
}); // end "string" describe
