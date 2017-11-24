require('../dist/node-test/index.js');
var expect = require('chai').expect;

describe('Promise', function() {
	describe('State', function () {
		var promiseA;
		var promiseB;
		beforeEach(function () {
			promiseA = createPromise("resolve", 1);
			promiseB = createPromise("reject", 1);
			promiseB.catch(function () {});
		});
		
		it('Should return pending to start', function (done) {
			var promises = [];
			promises.push(promiseA.state().then(function (state) {
				expect(state).to.deep.equal("pending");
			}));
			promises.push(promiseB.state().then(function (state) {
				expect(state).to.deep.equal("pending");
			}));
			Promise.all(promises).then(function () {
				done();
			}).catch(function (err) {
				done(err);
			});
		});		
		it('Should return fulfilled when fulfilled', function (done) {
			promiseA.then(function () {
				return promiseA.state();
			}, function () {
				return promiseA.state();
			}).then(function (state) {
				expect(state).to.deep.equal("fulfilled");
			}).then(function () {
				done()
			}).catch(function (err) {
				done(err);
			});
		});
		it('Should return rejected when rejceted', function (done) {
			promiseB.then(function () {
				return promiseB.state();
			}, function () {
				return promiseB.state();
			}).then(function (state) {
				expect(state).to.deep.equal("rejected");
			}).then(function () {
				done()
			}).catch(function (err) {
				done(err);
			});
		});
	}); // end "State" describe
}); // end "Promise" describe


function createPromise(status, timeout) {
	return new Promise(function(resolve, reject) {
		if (status == "resolve") {
			setTimeout(function () {
				resolve("OK");
			}, timeout);
		} else if (status == "reject") {
			setTimeout(function () {
				reject("Fail");
			}, timeout);
		}
	});
}