(function () {

"use strict";

var assert = require("chai").assert;
var n = require("../");

describe("sum", function () {

    var test = function (t) {
        it(JSON.stringify(t.input) + " -> " + t.expected, function () {
            assert.strictEqual(n.sum(t.input), t.expected);
        });
    };

    test({
        input: [0],
        expected: 0
    });
    test({
        input: [1],
        expected: 1
    });
    test({
        input: [0, 0, 0, 0],
        expected: 0
    });
    test({
        input: [-2, 1],
        expected: -1
    });
    test({
        input: [-3, -3, 0, -3],
        expected: -9
    });
    test({
        input: [0.1, 0.2],
        expected: 0.30000000000000004
    });

});

describe("mean", function () {

    var test = function (t) {
        it(JSON.stringify(t.input) + " -> " + t.expected, function () {
            assert.strictEqual(n.mean(t.input), t.expected);
        });
    };

    test({
        input: [0],
        expected: 0
    });
    test({
        input: [1],
        expected: 1
    });
    test({
        input: [0, 0, 0, 0],
        expected: 0
    });
    test({
        input: [-2, 1],
        expected: -0.5
    });
    test({
        input: [-3, -3, 0, -3],
        expected: -2.25
    });
    test({
        input: [0.1, 0.2],
        expected: 0.15000000000000002
    });

});

describe("norm", function () {

    var test = function (t) {
        it(JSON.stringify(t.input) + ", " + t.type + " -> " + t.expected, function () {
            assert.strictEqual(n.norm(t.input, t.type), t.expected);
        });
    };

    test({
        input: [0],
        expected: 0
    });
    test({
        input: [1],
        expected: 1
    });
    test({
        input: [0, 0, 0, 0],
        expected: 0
    });
    test({
        input: [-2, 1],
        expected: -1
    });
    test({
        input: [-3, -3, 0, -3],
        expected: -9
    });
    test({
        input: [0.1, 0.2],
        expected: 0.30000000000000004
    });
    test({
        input: [0.1, 3, 1.21, -1, 0.2],
        expected: 3.5100000000000007
    });

    test({
        input: [0],
        type: "l1",
        expected: 0
    });
    test({
        input: [1],
        type: "l1",
        expected: 1
    });
    test({
        input: [0, 0, 0, 0],
        type: "l1",
        expected: 0
    });
    test({
        input: [-2, 1],
        type: "l1",
        expected: 3
    });
    test({
        input: [-3, -3, 0, -3],
        type: "l1",
        expected: 9
    });
    test({
        input: [0.1, 0.2],
        type: "l1",
        expected: 0.30000000000000004
    });
    test({
        input: [0.1, 3, 1.21, -1, 0.2],
        type: "l1",
        expected: 5.5100000000000007
    });

    test({
        input: [0],
        type: "euclidean",
        expected: 0
    });
    test({
        input: [1],
        type: "euclidean",
        expected: 1
    });
    test({
        input: [0, 0, 0, 0],
        type: "euclidean",
        expected: 0
    });
    test({
        input: [-2, 1],
        type: "euclidean",
        expected: 2.23606797749979
    });
    test({
        input: [-3, -3, 0, -3],
        type: "euclidean",
        expected: 5.196152422706632
    });
    test({
        input: [0.1, 0.2],
        type: "euclidean",
        expected: 0.223606797749979
    });
    test({
        input: [0.1, 3, 1.21, -1, 0.2],
        type: "euclidean",
        expected: 3.393243286297049
    });

    test({
        input: [0],
        type: "max",
        expected: 0
    });
    test({
        input: [1],
        type: "max",
        expected: 1
    });
    test({
        input: [0, 0, 0, 0],
        type: "max",
        expected: 0
    });
    test({
        input: [-2, 1],
        type: "max",
        expected: 1
    });
    test({
        input: [-3, -3, 0, -3],
        type: "max",
        expected: 0
    });
    test({
        input: [0.1, 0.2],
        type: "max",
        expected: 0.2
    });
    test({
        input: [0.1, 3, 1.21, -1, 0.2],
        type: "max",
        expected: 3
    });

    test({
        input: [0],
        type: "min",
        expected: 0
    });
    test({
        input: [1],
        type: "min",
        expected: 1
    });
    test({
        input: [0, 0, 0, 0],
        type: "min",
        expected: 0
    });
    test({
        input: [-2, 1],
        type: "min",
        expected: -2
    });
    test({
        input: [-3, -3, 0, -3],
        type: "min",
        expected: -3
    });
    test({
        input: [0.1, 0.2],
        type: "min",
        expected: 0.1
    });
    test({
        input: [0.1, 3, 1.21, -1, 0.2],
        type: "min",
        expected: -1
    });

});

describe("variance", function () {

    var test_throws = function (t) {
        it(JSON.stringify(t.input) + ", " + t.bessel + " throws Error", function () {
            assert.throws(function () { n.variance(t.input, t.bessel); });
        });
    };

    var test = function (t) {
        it(JSON.stringify(t.input) + ", " + t.type + " -> " + t.expected, function () {
            assert.strictEqual(n.variance(t.input, t.bessel), t.expected);
        });
    };

    test_throws({
        input: []
    });
    test_throws({
        input: [0]
    });
    test_throws({
        input: [1]
    });
    test_throws({
        input: [2]
    });
    test({
        input: [0, 0, 0, 0],
        expected: 0
    });
    test({
        input: [-2, 1],
        bessel: 0,
        expected: 2.25
    });
    test({
        input: [-3, -3, 0, -3],
        bessel: 0,
        expected: 1.6875
    });
    test({
        input: [0.1, 0.2],
        bessel: 0,
        expected: 0.0025000000000000005
    });
    test({
        input: [0.1, 3, 1.21, -1, 0.2],
        bessel: 0,
        expected: 1.8100160000000003
    });
    test({
        input: [-2, 1],
        bessel: 1,
        expected: 4.5
    });
    test({
        input: [-3, -3, 0, -3],
        bessel: 1,
        expected: 2.25
    });
    test({
        input: [0.1, 0.2],
        bessel: 1,
        expected: 0.005000000000000001
    });
    test({
        input: [0.1, 3, 1.21, -1, 0.2],
        bessel: 1,
        expected: 2.2625200000000003
    });

    test_throws({
        input: {}
    });
    test_throws({
        input: {a: 0}
    });
    test_throws({
        input: {a: 1}
    });
    test_throws({
        input: {a: 2}
    });
    test({
        input: {a: 0, b: 0, c: 0, d: 0},
        expected: 0
    });
    test({
        input: {a: -2, b: 1},
        bessel: 0,
        expected: 2.25
    });
    test({
        input: {a: -3, b: -3, c: 0, d: -3},
        bessel: 0,
        expected: 1.6875
    });
    test({
        input: {a: 0.1, b: 0.2},
        bessel: 0,
        expected: 0.0025000000000000005
    });
    test({
        input: {a: 0.1, b: 3, c: 1.21, d: -1, e: 0.2},
        bessel: 0,
        expected: 1.8100160000000003
    });
    test({
        input: {a: -2, b: 1},
        bessel: 1,
        expected: 4.5
    });
    test({
        input: {a: -3, b: -3, c: 0, d: -3},
        bessel: 1,
        expected: 2.25
    });
    test({
        input: {a: 0.1, b: 0.2},
        bessel: 1,
        expected: 0.005000000000000001
    });
    test({
        input: {a: 0.1, b: 3, c: 1.21, d: -1, e: 0.2},
        bessel: 1,
        expected: 2.2625200000000003
    });

});

describe("std", function () {

    var test_throws = function (t) {
        it(JSON.stringify(t.input) + ", " + t.bessel + " throws Error", function () {
            assert.throws(function () { n.std(t.input, t.bessel); });
        });
    };

    var test = function (t) {
        it(JSON.stringify(t.input) + ", " + t.type + " -> " + t.expected, function () {
            assert.strictEqual(n.std(t.input, t.bessel), t.expected);
        });
    };

    test_throws({
        input: []
    });
    test_throws({
        input: [0]
    });
    test_throws({
        input: [1]
    });
    test_throws({
        input: [2]
    });
    test({
        input: [0, 0, 0, 0],
        expected: 0
    });
    test({
        input: [-2, 1],
        bessel: 0,
        expected: 1.5
    });
    test({
        input: [-3, -3, 0, -3],
        bessel: 0,
        expected: 1.299038105676658
    });
    test({
        input: [0.1, 0.2],
        bessel: 0,
        expected: 0.050000000000000003
    });
    test({
        input: [0.1, 3, 1.21, -1, 0.2],
        bessel: 0,
        expected: 1.3453683510474002
    });
    test({
        input: [-2, 1],
        bessel: 1,
        expected: 2.1213203435596424
    });
    test({
        input: [-3, -3, 0, -3],
        bessel: 1,
        expected: 1.5
    });
    test({
        input: [0.1, 0.2],
        bessel: 1,
        expected: 0.070710678118654766
    });
    test({
        input: [0.1, 3, 1.21, -1, 0.2],
        bessel: 1,
        expected: 1.5041675438593936
    });

    test_throws({
        input: {}
    });
    test_throws({
        input: {a: 0}
    });
    test_throws({
        input: {a: 1}
    });
    test_throws({
        input: {a: 2}
    });
    test({
        input: {a: 0, b: 0, c: 0, d: 0},
        expected: 0
    });
    test({
        input: {a: -2, b: 1},
        bessel: 0,
        expected: 1.5
    });
    test({
        input: {a: -3, b: -3, c: 0, d: -3},
        bessel: 0,
        expected: 1.299038105676658
    });
    test({
        input: {a: 0.1, b: 0.2},
        bessel: 0,
        expected: 0.050000000000000003
    });
    test({
        input: {a: 0.1, b: 3, c: 1.21, d: -1, e: 0.2},
        bessel: 0,
        expected: 1.3453683510474002
    });
    test({
        input: {a: -2, b: 1},
        bessel: 1,
        expected: 2.1213203435596424
    });
    test({
        input: {a: -3, b: -3, c: 0, d: -3},
        bessel: 1,
        expected: 1.5
    });
    test({
        input: {a: 0.1, b: 0.2},
        bessel: 1,
        expected: 0.070710678118654766
    });
    test({
        input: {a: 0.1, b: 3, c: 1.21, d: -1, e: 0.2},
        bessel: 1,
        expected: 1.5041675438593936
    });

});

describe("standardize", function () {

    var test_throws = function (t) {
        it(JSON.stringify(t.input) + ", " + t.bessel + " throws Error", function () {
            assert.throws(function () { n.standardize(t.input, t.bessel); });
        });
    };

    var test = function (t) {
        it(JSON.stringify(t.input) + ", " + t.type + " -> " + t.expected, function () {
            var output = n.standardize(t.input, t.bessel);
            if (output.constructor === Array) {
                assert.strictEqual(output.length, t.expected.length);
                for (var i = 0, len = output.length; i < len; ++i) {
                    assert.strictEqual(output[i], t.expected[i]);
                }
            } else {
                assert.isObject(output);
                for (var k in t.expected) {
                    if (!t.expected.hasOwnProperty(k)) continue;
                    assert.property(output, k);
                    assert.strictEqual(output[k], t.expected[k]);
                }
            }
        });
    };

    test_throws({
        input: []
    });
    test_throws({
        input: [0]
    });
    test_throws({
        input: [1]
    });
    test_throws({
        input: [2]
    });
    test({
        input: [0, 0, 0, 0],
        expected: [0, 0, 0, 0]
    });
    test({
        input: [-2, 1],
        bessel: 0,
        expected: [-1.3333333333333333, 0.6666666666666666]
    });
    test({
        input: [-3, -3, 0, -3],
        bessel: 0,
        expected: [
            -2.3094010767585029,
            -2.3094010767585029,
             0.0000000000000000,
             -2.3094010767585029
        ]
    });
    test({
        input: [0.1, 0.2],
        bessel: 0,
        expected: [2, 4]
    });
    test({
        input: [0.1, 3, 1.21, -1, 0.2],
        bessel: 0,
        expected: [
            0.07432908609909525,
            2.2298725829728574,
            0.8993819417990524,
            -0.7432908609909524,
            0.1486581721981905
        ]
    });
    test({
        input: [-2, 1],
        bessel: 1,
        expected: [-0.9428090415820635, 0.47140452079103173]
    });
    test({
        input: [-3, -3, 0, -3],
        bessel: 1,
        expected: [-2.0, -2.0, 0.0, -2.0]
    });
    test({
        input: [0.1, 0.2],
        bessel: 1,
        expected: [1.414213562373095, 2.82842712474619]
    });
    test({
        input: [0.1, 3, 1.21, -1, 0.2],
        bessel: 1,
        expected: [
            0.06648195568920466,
            1.9944586706761396,
            0.8044316638393763,
            -0.6648195568920465,
            0.13296391137840932
        ]
    });

    test_throws({
        input: {}
    });
    test_throws({
        input: {a: 0}
    });
    test_throws({
        input: {a: 1}
    });
    test_throws({
        input: {a: 2}
    });
    test({
        input: {a: 0, b: 0, c: 0, d: 0},
        expected: {a: 0, b: 0, c: 0, d: 0}
    });
    test({
        input: {a: -2, b: 1},
        bessel: 0,
        expected: {a: -1.3333333333333333, b: 0.6666666666666666}
    });
    test({
        input: {a: -3, b: -3, c: 0, d: -3},
        bessel: 0,
        expected: {
            a: -2.3094010767585029,
            b: -2.3094010767585029,
            c: 0.0000000000000000,
            d: -2.3094010767585029
        }
    });
    test({
        input: {a: 0.1, b: 0.2},
        bessel: 0,
        expected: {a: 2, b: 4}
    });
    test({
        input: {a: 0.1, b: 3, c: 1.21, d: -1, e: 0.2},
        bessel: 0,
        expected: {
            a: 0.07432908609909525,
            b: 2.2298725829728574,
            c: 0.8993819417990524,
            d: -0.7432908609909524,
            e: 0.1486581721981905
        }
    });
    test({
        input: {a: -2, b: 1},
        bessel: 1,
        expected: {a: -0.9428090415820635, b: 0.47140452079103173}
    });
    test({
        input: {a: -3, b: -3, c: 0, d: -3},
        bessel: 1,
        expected: {a: -2.0, b: -2.0, c: 0.0, d: -2.0}
    });
    test({
        input: {a: 0.1, b: 0.2},
        bessel: 1,
        expected: {a: 1.414213562373095, b: 2.82842712474619}
    });
    test({
        input: {a: 0.1, b: 3, c: 1.21, d: -1, e: 0.2},
        bessel: 1,
        expected: {
            a: 0.06648195568920466,
            b: 1.9944586706761396,
            c: 0.8044316638393763,
            d: -0.6648195568920465,
            e: 0.13296391137840932
        }
    });

});

describe("normalize", function () {

    var test = function (t) {
        it(JSON.stringify(t.input) + ", " + t.type + " -> " + t.expected, function () {
            var output = n.normalize(t.input, t.type);
            if (output.constructor === Array) {
                assert.strictEqual(output.length, t.expected.length);
                for (var i = 0, len = output.length; i < len; ++i) {
                    assert.strictEqual(output[i], t.expected[i]);
                }
            } else {
                assert.isObject(output);
                for (var k in t.expected) {
                    if (!t.expected.hasOwnProperty(k)) continue;
                    assert.property(output, k);
                    assert.strictEqual(output[k], t.expected[k]);
                }
            }
        });
    };

    test({
        input: [0],
        expected: [0]
    });
    test({
        input: [1],
        expected: [1]
    });
    test({
        input: [2],
        expected: [1]
    });
    test({
        input: [0, 0, 0, 0],
        expected: [0, 0, 0, 0]
    });
    test({
        input: [-2, 1],
        expected: [2, -1]
    });
    test({
        input: [-3, -3, 0, -3],
        expected: [1/3, 1/3, 0, 1/3]
    });
    test({
        input: [0.1, 0.2],
        expected: [1/3, 2/3]
    });
    test({
        input: [0.1, 3, 1.21, -1, 0.2],
        expected: [
            0.028490028490028487,
            0.8547008547008546,
            0.34472934472934463,
            -0.28490028490028485,
            0.056980056980056974
        ]
    });

    test({
        input: {a: 0},
        expected: {a: 0}
    });
    test({
        input: {a: 1},
        expected: {a: 1}
    });
    test({
        input: {a: 2},
        expected: {a: 1}
    });
    test({
        input: {a: 0, b: 0, c: 0, d: 0},
        expected: {a: 0, b: 0, c: 0, d: 0}
    });
    test({
        input: {a: -2, b: 1},
        expected: {a: 2, b: -1}
    });
    test({
        input: {a: -3, b: -3, c: 0, d: -3},
        expected: {a: 1/3, b: 1/3, c: 0, d: 1/3}
    });
    test({
        input: {a: 0.1, b: 0.2},
        expected: {a: 1/3, b: 2/3}
    });
    test({
        input: {a: 0.1, b: 3, c: 1.21, d: -1, e: 0.2},
        expected: {
            a: 0.028490028490028487,
            b: 0.8547008547008546,
            c: 0.34472934472934463,
            d: -0.28490028490028485,
            e: 0.056980056980056974
        }
    });

});

})();
