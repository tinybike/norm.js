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
                        for (k in o) {
                            if (!o.hasOwnProperty(k)) continue;
                            s = Math.max(s, o[k]);
                        }
                    }
                    break;
                case "min":
                    if (o.constructor === Array && o.length) {
                        s = Math.min.apply(null, o);
                    } else if (o.constructor === Object) {
                        for (k in o) {
                            if (!o.hasOwnProperty(k)) continue;
                            s = Math.min(s, o[k]);
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

    standardize: function (o, bessel) {
        var s = this.std(o, bessel);
        if (o && s) {
            if (o.constructor === Array && o.length) {
                for (var i = 0, l = o.length; i < l; ++i) {
                    o[i] /= s;
                }
            } else if (o.constructor === Object) {
                for (var k in o) {
                    if (!o.hasOwnProperty(k)) continue;
                    o[k] /= s;
                }
            }
        }
        return o;
    },

    normalize: function (o, type) {
        var s = this.norm(o, type);
        if (o && s) {
            if (o.constructor === Array && o.length) {
                for (var i = 0, l = o.length; i < l; ++i) {
                    o[i] /= s;
                }
            } else if (o.constructor === Object) {
                for (var k in o) {
                    if (!o.hasOwnProperty(k)) continue;
                    o[k] /= s;
                }
            }
        }
        return o;
    }

};

module.exports = normjs;