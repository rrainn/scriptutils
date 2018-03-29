var scriptutils = require('../dist/node-test/index.js');
var expect = require('chai').expect;

describe('Other', function() {
	describe('Number', function() {
		describe('Get Random Integer', function() {
			describe('No parameters', function() {
				it('Should return number if nothing is passed in', function() {
					var result = scriptutils.randomInt();
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if nothing is passed in', function() {
					var result = scriptutils.randomInt();
					expect(result).to.not.be.NaN;
				});
			});
			describe('One parameter', function() {
				it('Should return number if string is passed in', function() {
					var result = scriptutils.randomInt('test');
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if string is passed in', function() {
					var result = scriptutils.randomInt('test');
					expect(result).to.not.be.NaN;
				});
				it('Should return number if array is passed in', function() {
					var result = scriptutils.randomInt([]);
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if array is passed in', function() {
					var result = scriptutils.randomInt([]);
					expect(result).to.not.be.NaN;
				});
				it('Should return number if object is passed in', function() {
					var result = scriptutils.randomInt({});
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if object is passed in', function() {
					var result = scriptutils.randomInt({});
					expect(result).to.not.be.NaN;
				});
				it('Should return number if undefined is passed in', function() {
					var result = scriptutils.randomInt(undefined);
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if undefined is passed in', function() {
					var result = scriptutils.randomInt(undefined);
					expect(result).to.not.be.NaN;
				});
				it('Should return number if function is passed in', function() {
					var result = scriptutils.randomInt(function() {});
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if function is passed in', function() {
					var result = scriptutils.randomInt(function() {});
					expect(result).to.not.be.NaN;
				});
				it('Should return number if number is passed in', function() {
					var result = scriptutils.randomInt(1);
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if number is passed in', function() {
					var result = scriptutils.randomInt(1);
					expect(result).to.not.be.NaN;
				});
			});
			describe('Two parameters', function() {
				it('Should return number if string is passed in', function() {
					var result = scriptutils.randomInt('test', 'test');
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if string is passed in', function() {
					var result = scriptutils.randomInt('test', 'test');
					expect(result).to.not.be.NaN;
				});
				it('Should return number if array is passed in', function() {
					var result = scriptutils.randomInt([], []);
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if array is passed in', function() {
					var result = scriptutils.randomInt([], []);
					expect(result).to.not.be.NaN;
				});
				it('Should return number if object is passed in', function() {
					var result = scriptutils.randomInt({}, {});
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if object is passed in', function() {
					var result = scriptutils.randomInt({}, {});
					expect(result).to.not.be.NaN;
				});
				it('Should return number if undefined is passed in', function() {
					var result = scriptutils.randomInt(undefined, undefined);
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if undefined is passed in', function() {
					var result = scriptutils.randomInt(undefined, undefined);
					expect(result).to.not.be.NaN;
				});
				it('Should return number if function is passed in', function() {
					var result = scriptutils.randomInt(function() {}, function() {});
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if function is passed in', function() {
					var result = scriptutils.randomInt(function() {}, function() {});
					expect(result).to.not.be.NaN;
				});
				it('Should return number if number is passed in', function() {
					var result = scriptutils.randomInt(1, 5);
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if number is passed in', function() {
					var result = scriptutils.randomInt(1, 5);
					expect(result).to.not.be.NaN;
				});
				it('Should return number if first number is passed in is greater than second', function() {
					var result = scriptutils.randomInt(5, 1);
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if first number is passed in is greater than second', function() {
					var result = scriptutils.randomInt(5, 1);
					expect(result).to.not.be.NaN;
				});
				it('Should return int', function() {
					var result = scriptutils.randomInt(1, 5);
					expect(result % 1 === 0).to.be.true;
				});
			});
		}); // end "Get Random Integer" describe
		describe('Get Random Float', function() {
			describe('No parameters', function() {
				it('Should return number if nothing is passed in', function() {
					var result = scriptutils.randomFloat();
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if nothing is passed in', function() {
					var result = scriptutils.randomFloat();
					expect(result).to.not.be.NaN;
				});
			});
			describe('One parameter', function() {
				it('Should return number if string is passed in', function() {
					var result = scriptutils.randomFloat('test');
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if string is passed in', function() {
					var result = scriptutils.randomFloat('test');
					expect(result).to.not.be.NaN;
				});
				it('Should return number if array is passed in', function() {
					var result = scriptutils.randomFloat([]);
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if array is passed in', function() {
					var result = scriptutils.randomFloat([]);
					expect(result).to.not.be.NaN;
				});
				it('Should return number if object is passed in', function() {
					var result = scriptutils.randomFloat({});
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if object is passed in', function() {
					var result = scriptutils.randomFloat({});
					expect(result).to.not.be.NaN;
				});
				it('Should return number if undefined is passed in', function() {
					var result = scriptutils.randomFloat(undefined);
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if undefined is passed in', function() {
					var result = scriptutils.randomFloat(undefined);
					expect(result).to.not.be.NaN;
				});
				it('Should return number if function is passed in', function() {
					var result = scriptutils.randomFloat(function() {});
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if function is passed in', function() {
					var result = scriptutils.randomFloat(function() {});
					expect(result).to.not.be.NaN;
				});
				it('Should return number if number is passed in', function() {
					var result = scriptutils.randomFloat(1);
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if number is passed in', function() {
					var result = scriptutils.randomFloat(1);
					expect(result).to.not.be.NaN;
				});
			});
			describe('Two parameters', function() {
				it('Should return number if string is passed in', function() {
					var result = scriptutils.randomFloat('test', 'test');
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if string is passed in', function() {
					var result = scriptutils.randomFloat('test', 'test');
					expect(result).to.not.be.NaN;
				});
				it('Should return number if array is passed in', function() {
					var result = scriptutils.randomFloat([], []);
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if array is passed in', function() {
					var result = scriptutils.randomFloat([], []);
					expect(result).to.not.be.NaN;
				});
				it('Should return number if object is passed in', function() {
					var result = scriptutils.randomFloat({}, {});
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if object is passed in', function() {
					var result = scriptutils.randomFloat({}, {});
					expect(result).to.not.be.NaN;
				});
				it('Should return number if undefined is passed in', function() {
					var result = scriptutils.randomFloat(undefined, undefined);
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if undefined is passed in', function() {
					var result = scriptutils.randomFloat(undefined, undefined);
					expect(result).to.not.be.NaN;
				});
				it('Should return number if function is passed in', function() {
					var result = scriptutils.randomFloat(function() {}, function() {});
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if function is passed in', function() {
					var result = scriptutils.randomFloat(function() {}, function() {});
					expect(result).to.not.be.NaN;
				});
				it('Should return number if number is passed in', function() {
					var result = scriptutils.randomFloat(1, 5);
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if number is passed in', function() {
					var result = scriptutils.randomFloat(1, 5);
					expect(result).to.not.be.NaN;
				});
				it('Should return number if first number is passed in is greater than second', function() {
					var result = scriptutils.randomFloat(5, 1);
					expect(result).to.be.a('number');
				});
				it('Should not return NaN if first number is passed in is greater than second', function() {
					var result = scriptutils.randomFloat(5, 1);
					expect(result).to.not.be.NaN;
				});
				it('Should return float', function() {
					var result = scriptutils.randomFloat(1, 5);
					expect(result % 1 === 0).to.be.false;
				});
			});
		}); // end "Get Random Float" describe
		describe('isInt', function() {
			it('Should return false if NaN is passed in', function() {
				var input = NaN;
				expect(input.isInt()).to.be.false;
			});
			it('Should return true if 0 is passed in', function() {
				var input = 0;
				expect(input.isInt()).to.be.true;
			});
			it('Should return true if 1 is passed in', function() {
				var input = 1;
				expect(input.isInt()).to.be.true;
			});
			it('Should return true if 2 is passed in', function() {
				var input = 2;
				expect(input.isInt()).to.be.true;
			});
			it('Should return true if 3 is passed in', function() {
				var input = 3;
				expect(input.isInt()).to.be.true;
			});
			it('Should return true if -1 is passed in', function() {
				var input = -1;
				expect(input.isInt()).to.be.true;
			});
			it('Should return false if 1.2 is passed in', function() {
				var input = 1.2;
				expect(input.isInt()).to.be.false;
			});
			it('Should return false if 5.7 is passed in', function() {
				var input = 1.2;
				expect(input.isInt()).to.be.false;
			});
			it('Should return false if 9.12 is passed in', function() {
				var input = 9.12;
				expect(input.isInt()).to.be.false;
			});
			it('Should return false if -1.9 is passed in', function() {
				var input = -1.9;
				expect(input.isInt()).to.be.false;
			});
		}); // end "isInt" describe
		describe('isFloat', function() {
			it('Should return false if NaN is passed in', function() {
				var input = NaN;
				expect(input.isFloat()).to.be.false;
			});
			it('Should return false if 0 is passed in', function() {
				var input = 0;
				expect(input.isFloat()).to.be.false;
			});
			it('Should return false if 1 is passed in', function() {
				var input = 1;
				expect(input.isFloat()).to.be.false;
			});
			it('Should return false if 2 is passed in', function() {
				var input = 2;
				expect(input.isFloat()).to.be.false;
			});
			it('Should return false if 3 is passed in', function() {
				var input = 3;
				expect(input.isFloat()).to.be.false;
			});
			it('Should return false if -1 is passed in', function() {
				var input = -1;
				expect(input.isFloat()).to.be.false;
			});
			it('Should return true if 1.2 is passed in', function() {
				var input = 1.2;
				expect(input.isFloat()).to.be.true;
			});
			it('Should return true if 5.7 is passed in', function() {
				var input = 1.2;
				expect(input.isFloat()).to.be.true;
			});
			it('Should return true if 9.12 is passed in', function() {
				var input = 9.12;
				expect(input.isFloat()).to.be.true;
			});
			it('Should return true if -1.9 is passed in', function() {
				var input = -1.9;
				expect(input.isFloat()).to.be.true;
			});
		}); // end "isFloat" describe
	}); // end "Number" describe
}); // end "Other" describe