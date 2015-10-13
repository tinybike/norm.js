norm.js
=======

[![Build Status](https://travis-ci.org/tinybike/norm.js.svg)](https://travis-ci.org/tinybike/norm.js)
[![Coverage Status](https://coveralls.io/repos/tinybike/norm.js/badge.svg?branch=master&service=github)](https://coveralls.io/github/tinybike/norm.js?branch=master)
[![npm version](https://badge.fury.io/js/norm.js.svg)](https://badge.fury.io/js/norm.js)

A small collection of methods for array and object normalization, standardization, and simple statistics.

Usage
-----
```
$ npm install norm.js
```
```javascript
var n = require("norm.js");
```
All of norm.js's methods accept both arrays and objects as inputs.  If an object is used, then calculations are done on the object's values.  The adjusted (normalized) values remain associated with the same key.

`n.norm` calculates the norm (length) of the input array/object.  It accepts an optional second argument, which specifies the length type.  This can take the following values: Euclidean, L1, max, min.  If no second argument is supplied, then a simple sum is used.
```javascript
n.norm([0.1, 3, 1.21, -1, 0.2], "Euclidean"); // 3.393243286297049
```
`n.normalize` divides all elements of the input array/object by a constant value (the norm).  It accepts an optional second argument, the same as `n.norm`.  If no second argument is supplied, then normalization simply divides by the sum (so that elements of the array/object will sum to 1).
```javascript
n.normalize({a: 0.1, b: 0.2});
// outputs:
{
    a: 0.3333333333333333,
    b: 0.6666666666666666
}
```
`n.standardize` divides all elements of the input array/object by their standard deviation.  It accepts an optional second argument, which specifies whether Bessel's correction is used; this should be set to `true` if the inputs are sample values.  (If left blank, elements are assumed to be population values.)
```javascript
n.standardize({a: 0.1, b: 3, c: 1.21, d: -1, e: 0.2}, true);
// outputs:
{
    a: 0.06648195568920466,
    b: 1.9944586706761396,
    c: 0.8044316638393763,
    d: -0.6648195568920465,
    e: 0.13296391137840932
}
```
norm.js also includes `n.variance`, `n.std`, `n.rescale`, `n.mean`, and `n.sum` methods.  Examples (and function signatures, etc.) can be found in `test/norm.js`.

Tests
-----

Unit tests are included in `test/`, and can be run using npm:
```
$ npm test
```
