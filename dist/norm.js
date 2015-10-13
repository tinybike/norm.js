(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
var normjs = global.normjs || require("./");
global.normjs = normjs;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./":2}],2:[function(require,module,exports){
/**
 * Array and object normalization.
 * @author Jack Peterson (jack@tinybike.net)
 */

"use strict";

var normjs = {

    sum: function (o) {
        var s = 0;
        if (o.constructor === Array && o.length) {
            for (var i = 0, l = o.length; i < l; ++i) {
                s += o[i];
            }
        } else if (o.constructor === Object) {
            for (var k in o) {
                if (!o.hasOwnProperty(k)) continue;
                s += o[k];
            }
        }
        return s;
    },

    mean: function (o) {
        var l, m = this.sum(o);
        if (o.constructor === Array && o.length) {
            l = o.length;
        } else if (o.constructor === Object) {
            l = 0;
            for (var k in o) {
                if (!o.hasOwnProperty(k)) continue;
                ++l;
            }
        }
        return m / l;
    },

    variance: function (o, bessel) {
        bessel = (bessel) ? 1 : 0;
        var m = this.mean(o);
        var len = 0;
        var v = 0;
        if (o.constructor === Array && o.length) {
            len = o.length;
            for (var i = 0; i < len; ++i) {
                v += Math.pow(o[i] - m, 2);
            }
        } else if (o.constructor === Object) {
            len = 0;
            for (var k in o) {
                if (!o.hasOwnProperty(k)) continue;
                v += Math.pow(o[k] - m, 2);
                ++len;
            }
        }
        if (len < 2) {
            throw new Error("variance not defined for length < 2");
        } else {
            return v / (len - bessel);
        }
    },

    std: function (o, bessel) {
        return Math.sqrt(this.variance(o, bessel));
    },

    norm: function (o, type) {
        var i, k, l, s = 0;
        if (o) {
            if (type) {
                switch (type.toLowerCase()) {
                case "l1":
                    if (o.constructor === Array && o.length) {
                        l = o.length;
                        for (i = 0; i < l; ++i) {
                            s += Math.abs(o[i]);
                        }
                    } else if (o.constructor === Object) {
                        for (k in o) {
                            if (!o.hasOwnProperty(k)) continue;
                            s += Math.abs(o[k]);
                        }
                    }
                    break;
                case "euclidean":
                    if (o.constructor === Array && o.length) {
                        l = o.length;
                        for (i = 0; i < l; ++i) {
                            s += Math.pow(o[i], 2);
                        }
                    } else if (o.constructor === Object) {
                        for (k in o) {
                            if (!o.hasOwnProperty(k)) continue;
                            s += Math.pow(o[k], 2);
                        }
                    }
                    s = Math.sqrt(s);
                    break;
                case "max":
                    if (o.constructor === Array && o.length) {
                        s = Math.max.apply(null, o);
                    } else if (o.constructor === Object) {
                        s = null;
                        for (k in o) {
                            if (!o.hasOwnProperty(k)) continue;
                            if (s === null) {
                                s = o[k];
                            } else {
                                s = Math.max(s, o[k]);
                            }
                        }
                    }
                    break;
                case "min":
                    if (o.constructor === Array && o.length) {
                        s = Math.min.apply(null, o);
                    } else if (o.constructor === Object) {
                        s = null;
                        for (k in o) {
                            if (!o.hasOwnProperty(k)) continue;
                            if (s === null) {
                                s = o[k];
                            } else {
                                s = Math.min(s, o[k]);
                            }
                        }
                    }
                    break;
                default:
                    s = this.sum(o);
                }
            } else {
                s = this.sum(o);
            }
        }
        return s;
    },

    rescale: function (o, factor) {
        if (o && factor) {
            if (o.constructor === Array && o.length) {
                for (var i = 0, l = o.length; i < l; ++i) {
                    o[i] /= factor;
                }
            } else if (o.constructor === Object) {
                for (var k in o) {
                    if (!o.hasOwnProperty(k)) continue;
                    o[k] /= factor;
                }
            }
        }
        return o;
    },

    standardize: function (o, bessel) {
        return this.rescale(o, this.std(o, bessel));
    },

    normalize: function (o, type) {
        return this.rescale(o, this.norm(o, type));
    }

};

module.exports = normjs;

},{}]},{},[1]);
