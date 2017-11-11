var scriptutils = require('../index.js');
var expect = require('chai').expect;

describe('Other', function() {
	describe('Number', function() {
		describe('Get Random Integer', function () {
			describe('No parameters', function () {
				it('Should return number if nothing is passed in', function () {
					var result = scriptutils.randomInt();
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if nothing is passed in', function () {
					var result = scriptutils.randomInt();
					expect(result).to.not.be.NaN;
				});
			});
			describe('One parameter', function () {
				it('Should return number if string is passed in', function () {
					var result = scriptutils.randomInt('test');
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if string is passed in', function () {
					var result = scriptutils.randomInt('test');
					expect(result).to.not.be.NaN;
				});
				it('Should return number if array is passed in', function () {
					var result = scriptutils.randomInt([]);
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if array is passed in', function () {
					var result = scriptutils.randomInt([]);
					expect(result).to.not.be.NaN;
				});
				it('Should return number if object is passed in', function () {
					var result = scriptutils.randomInt({});
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if object is passed in', function () {
					var result = scriptutils.randomInt({});
					expect(result).to.not.be.NaN;
				});
				it('Should return number if undefined is passed in', function () {
					var result = scriptutils.randomInt(undefined);
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if undefined is passed in', function () {
					var result = scriptutils.randomInt(undefined);
					expect(result).to.not.be.NaN;
				});
				it('Should return number if function is passed in', function () {
					var result = scriptutils.randomInt(function () {});
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if function is passed in', function () {
					var result = scriptutils.randomInt(function () {});
					expect(result).to.not.be.NaN;
				});
				it('Should return number if number is passed in', function () {
					var result = scriptutils.randomInt(1);
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if number is passed in', function () {
					var result = scriptutils.randomInt(1);
					expect(result).to.not.be.NaN;
				});
			});
			describe('Two parameters', function () {
				it('Should return number if string is passed in', function () {
					var result = scriptutils.randomInt('test', 'test');
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if string is passed in', function () {
					var result = scriptutils.randomInt('test', 'test');
					expect(result).to.not.be.NaN;
				});
				it('Should return number if array is passed in', function () {
					var result = scriptutils.randomInt([], []);
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if array is passed in', function () {
					var result = scriptutils.randomInt([], []);
					expect(result).to.not.be.NaN;
				});
				it('Should return number if object is passed in', function () {
					var result = scriptutils.randomInt({}, {});
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if object is passed in', function () {
					var result = scriptutils.randomInt({}, {});
					expect(result).to.not.be.NaN;
				});
				it('Should return number if undefined is passed in', function () {
					var result = scriptutils.randomInt(undefined, undefined);
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if undefined is passed in', function () {
					var result = scriptutils.randomInt(undefined, undefined);
					expect(result).to.not.be.NaN;
				});
				it('Should return number if function is passed in', function () {
					var result = scriptutils.randomInt(function () {}, function () {});
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if function is passed in', function () {
					var result = scriptutils.randomInt(function () {}, function () {});
					expect(result).to.not.be.NaN;
				});
				it('Should return number if number is passed in', function () {
					var result = scriptutils.randomInt(1, 5);
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if number is passed in', function () {
					var result = scriptutils.randomInt(1, 5);
					expect(result).to.not.be.NaN;
				});
				it('Should return number if first number is passed in is greater than second', function () {
					var result = scriptutils.randomInt(5, 1);
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if first number is passed in is greater than second', function () {
					var result = scriptutils.randomInt(5, 1);
					expect(result).to.not.be.NaN;
				});
			});
		}); // end "Get Random Integer" describe
	}); // end "Number" describe
}); // end "Other" describe