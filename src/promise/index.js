Promise.prototype.state = function () {
  const promiseCheck = {};
  return Promise.race([this, promiseCheck]).then(value => (value === promiseCheck) ? "pending" : "fulfilled", () => "rejected");
};
