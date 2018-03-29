var scriptutils = require('../dist/node-test/index.js');
var expect = require('chai').expect;

describe('Timeout', function() {
	describe('Promise based', function() {
		it('Should return promise', function() {
			var myTimeout = scriptutils.timeout(1);
			expect(myTimeout).to.be.a("promise");
		});
		it('Should resolve in x miliseconds', function(done) {
			var timeA = Date.now();
			var myTimeout = scriptutils.timeout(100).then(function() {
				expect(Date.now() - timeA).to.be.at.least(100);
				done();
			});
		});
		it('Should reject if invalid number passed in', function(done) {
			var myTimeout = scriptutils.timeout("test").then(function() {
				done("Did not fail");
			}).catch(function() {
				done();
			});
		});
	});
}); //End Timeout tests
