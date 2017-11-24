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
	describe('Reflect', function () {
		var promiseA;
		var promiseB;
		var promiseC;
		beforeEach(function () {
			promiseA = createPromise("resolve", 1);
			promiseB = createPromise("reject", 1);
			promiseC = createPromise("resolve", 1);
			promiseB.catch(function () {});
		});
    
		it('Should resolve no matter what', function (done) {
			Promise.reflect([promiseA, promiseB, promiseC]).then(function () {
				done();
			}).catch(function (err) {
				done(err);
			});
		});
		it('Should only succeed if all promises are settled', function (done) {
			Promise.reflect([promiseA, promiseB, promiseC]).then(function () {
				var promises = [];
				promises.push(promiseA.then(function () {
					return promiseA.state();
				}, function () {
					return promiseA.state();
				}).then(function (state) {
					expect(state).to.deep.equal("fulfilled");
				}));
				promises.push(promiseB.then(function () {
					return promiseB.state();
				}, function () {
					return promiseB.state();
				}).then(function (state) {
					expect(state).to.deep.equal("rejected");
				}));
				promises.push(promiseC.then(function () {
					return promiseC.state();
				}, function () {
					return promiseC.state();
				}).then(function (state) {
					expect(state).to.deep.equal("fulfilled");
				}));
				
				Promise.all(promises).then(function () {
					done();
				}).catch(function (err) {
					done(err);
				});
			}).catch(function (err) {
				done(err);
			});
		});
		it('Should have status for each element in array', function (done) {
			Promise.reflect([promiseA, promiseB, promiseC]).then(function (data) {
				expect(data[0].status).to.exist;
				expect(data[1].status).to.exist;
				expect(data[2].status).to.exist;
				done();
			}).catch(function (err) {
				done(err);
			});
		});
		it('Should only have e property for each element in array where there was an rejection', function (done) {
			Promise.reflect([promiseA, promiseB, promiseC]).then(function (data) {
				expect(data[0].e).to.not.exist;
				expect(data[1].e).to.exist;
				expect(data[2].e).to.not.exist;
				done();
			}).catch(function (err) {
				done(err);
			});
		});
		it('Should only have v property for each element in array where there was an fulfillment', function (done) {
			Promise.reflect([promiseA, promiseB, promiseC]).then(function (data) {
				expect(data[0].v).to.exist;
				expect(data[1].v).to.not.exist;
				expect(data[2].v).to.exist;
				done();
			}).catch(function (err) {
				done(err);
			});
		});
		it('Should only have correct status for each element in array', function (done) {
			Promise.reflect([promiseA, promiseB, promiseC]).then(function (data) {
				expect(data[0].status).to.equal("fulfilled");
				expect(data[1].status).to.equal("rejected");
				expect(data[2].status).to.equal("fulfilled");
				done();
			}).catch(function (err) {
				done(err);
			});
		});
		it('Should only have correct e property for each element in array', function (done) {
			Promise.reflect([promiseA, promiseB, promiseC]).then(function (data) {
				expect(data[0].e).to.equal(undefined);
				expect(data[1].e).to.equal("Fail");
				expect(data[2].e).to.equal(undefined);
				done();
			}).catch(function (err) {
				done(err);
			});
		});
		it('Should only have correct v property for each element in array', function (done) {
			Promise.reflect([promiseA, promiseB, promiseC]).then(function (data) {
				expect(data[0].v).to.equal("OK");
				expect(data[1].v).to.equal(undefined);
				expect(data[2].v).to.equal("OK");
				done();
			}).catch(function (err) {
				done(err);
			});
		});
	}); // end "Reflect" describe
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