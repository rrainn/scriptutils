Promise.reflect = function(promises) {
	return Promise.all(promises.map((promise) => {
		return promise.then((v) => {
			return {v, status: "fulfilled"};
		}, (e) => {
			return {e, status: "rejected"};
		});
	}));
};

Promise.prototype.state = function() {
	const promiseCheck = {};
	return Promise.race([this, promiseCheck]).then(
		value => (value === promiseCheck)
		? "pending"
		: "fulfilled",
	() => "rejected");
};
