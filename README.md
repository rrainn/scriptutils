# scriptutils [![Build Status](https://travis-ci.org/rrainn/scriptutils.svg?branch=master)](https://travis-ci.org/rrainn/scriptutils) [![Coverage Status](https://coveralls.io/repos/github/rrainn/scriptutils/badge.svg?branch=master)](https://coveralls.io/github/rrainn/scriptutils?branch=master) [![Known Vulnerabilities](https://snyk.io/test/github/rrainn/scriptutils/badge.svg)](https://snyk.io/test/github/rrainn/scriptutils) [![NPM version](https://badge.fury.io/js/scriptutils.svg)](http://badge.fury.io/js/scriptutils) [![unpkg](https://img.shields.io/badge/browser-unpkg-brightgreen.svg)](https://unpkg.com/scriptutils)

### Install
`npm install --save scriptutils`

`require('scriptutils');`

### Arrays

#### Array.insert(index, items)

This function will insert item(s) into an array at the index you specify. `index` will be the new index of the item(s) you wish to insert. `items` can refer to an object or array of objects. If `index` is less than 1 it will insert the item(s) at the beginning of the array. If `index` is greater than or equal to the last index of the array the item(s) will be inserted at the end of the array.

```
var myArray = ["Hello", "World"];
myArray.insert(1, "My");
console.log(myArray); // ["Hello", "My", "World"]
```

```
var myArray = ["Hello", "World"];
myArray.insert(1, ["My", "Amazing"]);
console.log(myArray); // ["Hello", "My", "Amazing", "World"]
```

#### Array.remove(index, [index, index, ...])

This function will remove the item at the corresponding index. `index` corresponds to a number. If multiple parameters are passed in all indexes will be deleted. If `index` is less than 1 it will insert the item(s) at the beginning of the array. If `index` is greater than or equal to the last index of the array the item(s) will be inserted at the end of the array.

```
var myArray = ["Hello", "World"];
myArray.remove(1);
console.log(myArray); // ["Hello"]
```

```
var myArray = ["Hello", "World"];
myArray.insert(1, 2);
console.log(myArray); // []
```


#### Array.shuffle()

This function will shuffle the array. This function has the potential to have different outputs every time it is run.

```
var myArray = ["Hello", "World"];
myArray.shuffle();
console.log(myArray); // ["World", "Hello"]
```


#### Array.randomElement()

This function will return a random element in the given array. This function has the potential to have different outputs every time it is run.

```
var myArray = ["Hello", "World"];
myArray.randomElement();
console.log(myArray); // "World"
```
