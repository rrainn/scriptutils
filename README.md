# scriptutils [![Build Status](https://travis-ci.org/rrainn/scriptutils.svg?branch=master)](https://travis-ci.org/rrainn/scriptutils) [![Coverage Status](https://coveralls.io/repos/github/rrainn/scriptutils/badge.svg?branch=master)](https://coveralls.io/github/rrainn/scriptutils?branch=master) [![BrowserStack Status](https://www.browserstack.com/automate/badge.svg?badge_key=ZCt5dzFZV1Vvd0ZTUXR6dEtkTy9XOEZNdmNQOC9WN2VOcWNxR3Q5d09qMD0tLXhrUWNLdEJDMTNEYzFGV3d5dDlIUFE9PQ==--72fdff953eba74306eb1bdbb0a9729cb5c4ab122)](https://www.browserstack.com/automate/public-build/ZCt5dzFZV1Vvd0ZTUXR6dEtkTy9XOEZNdmNQOC9WN2VOcWNxR3Q5d09qMD0tLXhrUWNLdEJDMTNEYzFGV3d5dDlIUFE9PQ==--72fdff953eba74306eb1bdbb0a9729cb5c4ab122) [![Known Vulnerabilities](https://snyk.io/test/github/rrainn/scriptutils/badge.svg)](https://snyk.io/test/github/rrainn/scriptutils) [![Dependencies](https://david-dm.org/rrainn/scriptutils.svg)](https://david-dm.org/rrainn/scriptutils) [![Dev Dependencies](https://david-dm.org/rrainn/scriptutils/dev-status.svg)](https://david-dm.org/rrainn/scriptutils?type=dev) [![NPM version](https://badge.fury.io/js/scriptutils.svg)](http://badge.fury.io/js/scriptutils) [![unpkg](https://img.shields.io/badge/browser-unpkg-brightgreen.svg)](https://unpkg.com/scriptutils)

### Install

#### Node.js

`npm install --save scriptutils`

`var scriptutils = require('scriptutils');`

#### Browser

`<script src="https://unpkg.com/scriptutils"></script>` (will run latest version)

`<script src="https://unpkg.com/scriptutils@X.Y.Z/dist/browser/index.js"></script>` (will run specific version, replace `X.Y.Z` with version you wish to run)

In browser mode it automatically creates a variable in the global scope called `scriptutils`. All examples will work on browser and Node.js.

### Arrays

#### Array.insert(index, items)

This function will insert item(s) into an array at the index you specify. `index` will be the new index of the item(s) you wish to insert. `items` can refer to an object or array of objects. If `index` is less than 1 it will insert the item(s) at the beginning of the array. If `index` is greater than or equal to the last index of the array the item(s) will be inserted at the end of the array.

```
var myArray = ["Hello", "World"];
myArray = myArray.insert(1, "My");
console.log(myArray); // ["Hello", "My", "World"]
```

```
var myArray = ["Hello", "World"];
myArray = myArray.insert(1, ["My", "Amazing"]);
console.log(myArray); // ["Hello", "My", "Amazing", "World"]
```

#### Array.remove(index, [index, index, ...])

This function will remove the item at the corresponding index. `index` corresponds to a number. If multiple parameters are passed in all indexes will be deleted. If `index` is less than 1 it will insert the item(s) at the beginning of the array. If `index` is greater than or equal to the last index of the array the item(s) will be inserted at the end of the array.

```
var myArray = ["Hello", "World"];
myArray = myArray.remove(1);
console.log(myArray); // ["Hello"]
```

```
var myArray = ["Hello", "World"];
myArray = myArray.remove(1, 2);
console.log(myArray); // []
```

#### Array.shuffle()

This function will shuffle the array. This function has the potential to have different outputs every time it is run.

```
var myArray = ["Hello", "World"];
myArray = myArray.shuffle();
console.log(myArray); // ["World", "Hello"]
```

#### Array.randomElement()

This function will return a random element in the given array. This function has the potential to have different outputs every time it is run.

```
var myArray = ["Hello", "World"];
console.log(myArray.randomElement()); // "World"
```

#### Array.swap(firstIndex, secondIndex)

This function will swap item(s) into an array at the indexes you specify. `firstIndex` and `secondIndex` reference the two items indexes that will be swapped in the array. If `firstIndex` or `secondIndex` don't exist in the array the array won't be changed.

```
var myArray = ["Hello", "World"];
myArray = myArray.swap(0, 1);
console.log(myArray); // ["World", "Hello"]
```

#### Array.max()

This function will return the largest number in an array. If no numbers exist in array NaN will be returned.

```
var myArray = [1, 2, 3, 4, 5];
console.log(myArray.max()); // 5
```

#### Array.min()

This function will return the smallest number in an array. If no numbers exist in array NaN will be returned.

```
var myArray = [1, 2, 3, 4, 5];
console.log(myArray.min()); // 1
```

#### Array.first()

This function will return the first element in an array. If array is empty undefined will be returned.

```
var myArray = [1, 2, 3, 4, 5];
console.log(myArray.first()); // 1
```

#### Array.last()

This function will return the last element in an array. If array is empty undefined will be returned.

```
var myArray = [1, 2, 3, 4, 5];
console.log(myArray.last()); // 5
```

#### Array.frontPad(item, length)

This function will return a new array with padding to the length specified. If length specified is less than array length the same array will be returned.

```
var myArray = [1, 2, 3, 4, 5];
console.log(myArray.frontPad("item", 8)); // ["item", "item", "item", 1, 2, 3, 4, 5]
```

```
var myArray = [1, 2, 3, 4, 5];
console.log(myArray.frontPad("item", 3)); // [1, 2, 3, 4, 5]
```

#### Array.backPad(item, length)

This function will return a new array with padding to the length specified. If length specified is less than array length the same array will be returned.

```
var myArray = [1, 2, 3, 4, 5];
console.log(myArray.backPad("item", 8)); // [1, 2, 3, 4, 5, "item", "item", "item"]
```

```
var myArray = [1, 2, 3, 4, 5];
console.log(myArray.backPad("item", 3)); // [1, 2, 3, 4, 5]
```


### Numbers

#### randomInt([min, max])

This function will return a random integer based on the minimum and maximum values passed in. If no minimum or maximum values are passed in the function will output a random number between 1 and 100. This function has the potential to have different outputs every time it is run.

```
var randomNumber = scriptutils.randomInt(5, 50);
console.log(randomNumber); // a random number between 5 and 50
```

```
var randomNumber = scriptutils.randomInt();
console.log(randomNumber); // a random number between 1 and 100
```

#### randomFloat([min, max])

This function will return a random float based on the minimum and maximum values passed in. If no minimum or maximum values are passed in the function will output a random number between 1 and 100. This function has the potential to have different outputs every time it is run.

```
var randomNumber = scriptutils.randomFloat(5, 50);
console.log(randomNumber); // a random number (float) between 5 and 50
```

```
var randomNumber = scriptutils.randomFloat();
console.log(randomNumber); // a random number (float) between 1 and 100
```

#### Number.isInt()

This function will return a boolean depending on if the number is an integer.

```
var randomNumber = 5;
console.log(randomNumber.isInt()); // true
```

```
var randomNumber = 1.25;
console.log(randomNumber.isInt()); // false
```


#### Number.isFloat()

This function will return a boolean depending on if the number is an float.

```
var randomNumber = 5;
console.log(randomNumber.isFloat()); // false
```

```
var randomNumber = 1.25;
console.log(randomNumber.isFloat()); // true
```


### Hash

#### hashFolder(folderpath)

This function will return a hash of the files in the folder you pass in. **This function is only available in the Node.js version of scriptutils**.

```
var folderHash = scriptutils.hashFolder("/");
console.log(folderHash); // folder hash of files in "/" directory
```


### String

#### String.removeAfter(character)

This function will return a new string removing the character you pass in and everything after. *Unlike other scriptutils functions this function will not mutate the original string.*

```
var myString = "Hello World";
myString = myString.removeAfter(" ");
console.log(myString); // "Hello"
```

#### String.removeBefore(character)

This function will return a new string removing the character you pass in and everything before. *Unlike other scriptutils functions this function will not mutate the original string.*

```
var myString = "Hello World";
myString = myString.removeBefore(" ");
console.log(myString); // "World"
```


### Promise

#### Promise.state()

This function will return a new promise that will resolve with one of three options, "pending", "fulfilled", or "rejected". **This function is only available in the Node.js version of scriptutils**.

```
var myPromise = new Promise(function (resolve, reject) {
	setTimeout(function() {
		resolve("OK");
	}, 1000);
});
myPromise.state().then(function (state) {
	console.log(state); // "pending"
});
```

```
var myPromise = new Promise(function (resolve, reject) {
	resolve("OK");
});
myPromise.state().then(function (state) {
	console.log(state); // "fulfilled"
});
```

```
var myPromise = new Promise(function (resolve, reject) {
	reject("Fail");
});
myPromise.state().then(function (state) {
	console.log(state); // "rejected"
});
```

#### Promise.reflect(promises)

This function will return a new promise that will resolve when all promises passed into array `promises` are settled (fulfilled or rejected). The `value` passed into the `Promise.then()` function will be an array of objects containing the status of the promise (fulfilled or rejected) and the `value` the promise itself settled with. If the promise settled with an rejection, the `e` property will hold the value passed by that rejection. Similarly, if the promise settled with a fulfillment, the `v` property will hold the value passed by that fulfillment. **This function is only available in the Node.js version of scriptutils**.

```
var myPromise = new Promise(function (resolve, reject) {
	setTimeout(function() {
		resolve("OK");
	}, 1000);
});
var myPromiseB = new Promise(function (resolve, reject) {
	setTimeout(function() {
		resolve("OK");
	}, 1000);
});
Promise.reflect([myPromise, myPromiseB]).then(function (state) {
	// At this point both myPromise and myPromiseB have been settled
	console.log(state); // [{v:"OK", status:"fulfilled"}, {v:"OK", status:"fulfilled"}]
});
```

```
var myPromise = new Promise(function (resolve, reject) {
	setTimeout(function() {
		resolve("OK");
	}, 1000);
});
var myPromiseB = new Promise(function (resolve, reject) {
	setTimeout(function() {
		reject("Fail");
	}, 1000);
});
Promise.reflect([myPromise, myPromiseB]).then(function (state) {
	// At this point both myPromise and myPromiseB have been settled
	console.log(state); // [{v:"OK", status:"fulfilled"}, {e:"Fail", status:"rejected"}]
});
```

```
var myPromise = new Promise(function (resolve, reject) {
	setTimeout(function() {
		resolve("OK");
	}, 1000);
});
var myPromiseB = new Promise(function (resolve, reject) {
	setTimeout(function() {
		reject("Fail");
	}, 1000);
});
var myPromiseC = new Promise(function (resolve, reject) {
	setTimeout(function() {
		resolve("OK");
	}, 1000);
});
Promise.reflect([myPromise, myPromiseB, myPromiseC]).then(function (state) {
	// At this point both myPromise, myPromiseB, and myPromiseC have been settled
	// Unlike Promise.all, this function won't resolve after the first rejection but will only resolve after ALL promises have been settled
	console.log(state); // [{v:"OK", status:"fulfilled"}, {e:"Fail", status:"rejected"}, {v:"OK", status:"fulfilled"}]
});
```

### Timeout

#### scriptutils.timeout(ms)

This function will return a promise that will resolve after the number of milliseconds passed in. The promise will reject if an invalid number of milliseconds are passed in. **This function is only available in the Node.js version of scriptutils**.

```
scriptutils.timeout(1000).then(function() {
	console.log("This will be run after 1 second");
});
```

```
scriptutils.timeout("test").catch(function() {
	console.log("This will be run because the number of milliseconds is invalid");
});
```

### Mutation

All functions in scriptutils are non-mutating. You must set your variable to the new variable that is returned.
