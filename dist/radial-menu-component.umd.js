(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["radial-menu-component"] = factory();
	else
		root["radial-menu-component"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1266":
/***/ (function(module, exports) {

exports = module.exports = Victor;

/**
 * # Victor - A JavaScript 2D vector class with methods for common vector operations
 */

/**
 * Constructor. Will also work without the `new` keyword
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = Victor(42, 1337);
 *
 * @param {Number} x Value of the x axis
 * @param {Number} y Value of the y axis
 * @return {Victor}
 * @api public
 */
function Victor (x, y) {
	if (!(this instanceof Victor)) {
		return new Victor(x, y);
	}

	/**
	 * The X axis
	 *
	 * ### Examples:
	 *     var vec = new Victor.fromArray(42, 21);
	 *
	 *     vec.x;
	 *     // => 42
	 *
	 * @api public
	 */
	this.x = x || 0;

	/**
	 * The Y axis
	 *
	 * ### Examples:
	 *     var vec = new Victor.fromArray(42, 21);
	 *
	 *     vec.y;
	 *     // => 21
	 *
	 * @api public
	 */
	this.y = y || 0;
};

/**
 * # Static
 */

/**
 * Creates a new instance from an array
 *
 * ### Examples:
 *     var vec = Victor.fromArray([42, 21]);
 *
 *     vec.toString();
 *     // => x:42, y:21
 *
 * @name Victor.fromArray
 * @param {Array} array Array with the x and y values at index 0 and 1 respectively
 * @return {Victor} The new instance
 * @api public
 */
Victor.fromArray = function (arr) {
	return new Victor(arr[0] || 0, arr[1] || 0);
};

/**
 * Creates a new instance from an object
 *
 * ### Examples:
 *     var vec = Victor.fromObject({ x: 42, y: 21 });
 *
 *     vec.toString();
 *     // => x:42, y:21
 *
 * @name Victor.fromObject
 * @param {Object} obj Object with the values for x and y
 * @return {Victor} The new instance
 * @api public
 */
Victor.fromObject = function (obj) {
	return new Victor(obj.x || 0, obj.y || 0);
};

/**
 * # Manipulation
 *
 * These functions are chainable.
 */

/**
 * Adds another vector's X axis to this one
 *
 * ### Examples:
 *     var vec1 = new Victor(10, 10);
 *     var vec2 = new Victor(20, 30);
 *
 *     vec1.addX(vec2);
 *     vec1.toString();
 *     // => x:30, y:10
 *
 * @param {Victor} vector The other vector you want to add to this one
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.addX = function (vec) {
	this.x += vec.x;
	return this;
};

/**
 * Adds another vector's Y axis to this one
 *
 * ### Examples:
 *     var vec1 = new Victor(10, 10);
 *     var vec2 = new Victor(20, 30);
 *
 *     vec1.addY(vec2);
 *     vec1.toString();
 *     // => x:10, y:40
 *
 * @param {Victor} vector The other vector you want to add to this one
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.addY = function (vec) {
	this.y += vec.y;
	return this;
};

/**
 * Adds another vector to this one
 *
 * ### Examples:
 *     var vec1 = new Victor(10, 10);
 *     var vec2 = new Victor(20, 30);
 *
 *     vec1.add(vec2);
 *     vec1.toString();
 *     // => x:30, y:40
 *
 * @param {Victor} vector The other vector you want to add to this one
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.add = function (vec) {
	this.x += vec.x;
	this.y += vec.y;
	return this;
};

/**
 * Adds the given scalar to both vector axis
 *
 * ### Examples:
 *     var vec = new Victor(1, 2);
 *
 *     vec.addScalar(2);
 *     vec.toString();
 *     // => x: 3, y: 4
 *
 * @param {Number} scalar The scalar to add
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.addScalar = function (scalar) {
	this.x += scalar;
	this.y += scalar;
	return this;
};

/**
 * Adds the given scalar to the X axis
 *
 * ### Examples:
 *     var vec = new Victor(1, 2);
 *
 *     vec.addScalarX(2);
 *     vec.toString();
 *     // => x: 3, y: 2
 *
 * @param {Number} scalar The scalar to add
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.addScalarX = function (scalar) {
	this.x += scalar;
	return this;
};

/**
 * Adds the given scalar to the Y axis
 *
 * ### Examples:
 *     var vec = new Victor(1, 2);
 *
 *     vec.addScalarY(2);
 *     vec.toString();
 *     // => x: 1, y: 4
 *
 * @param {Number} scalar The scalar to add
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.addScalarY = function (scalar) {
	this.y += scalar;
	return this;
};

/**
 * Subtracts the X axis of another vector from this one
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(20, 30);
 *
 *     vec1.subtractX(vec2);
 *     vec1.toString();
 *     // => x:80, y:50
 *
 * @param {Victor} vector The other vector you want subtract from this one
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.subtractX = function (vec) {
	this.x -= vec.x;
	return this;
};

/**
 * Subtracts the Y axis of another vector from this one
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(20, 30);
 *
 *     vec1.subtractY(vec2);
 *     vec1.toString();
 *     // => x:100, y:20
 *
 * @param {Victor} vector The other vector you want subtract from this one
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.subtractY = function (vec) {
	this.y -= vec.y;
	return this;
};

/**
 * Subtracts another vector from this one
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(20, 30);
 *
 *     vec1.subtract(vec2);
 *     vec1.toString();
 *     // => x:80, y:20
 *
 * @param {Victor} vector The other vector you want subtract from this one
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.subtract = function (vec) {
	this.x -= vec.x;
	this.y -= vec.y;
	return this;
};

/**
 * Subtracts the given scalar from both axis
 *
 * ### Examples:
 *     var vec = new Victor(100, 200);
 *
 *     vec.subtractScalar(20);
 *     vec.toString();
 *     // => x: 80, y: 180
 *
 * @param {Number} scalar The scalar to subtract
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.subtractScalar = function (scalar) {
	this.x -= scalar;
	this.y -= scalar;
	return this;
};

/**
 * Subtracts the given scalar from the X axis
 *
 * ### Examples:
 *     var vec = new Victor(100, 200);
 *
 *     vec.subtractScalarX(20);
 *     vec.toString();
 *     // => x: 80, y: 200
 *
 * @param {Number} scalar The scalar to subtract
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.subtractScalarX = function (scalar) {
	this.x -= scalar;
	return this;
};

/**
 * Subtracts the given scalar from the Y axis
 *
 * ### Examples:
 *     var vec = new Victor(100, 200);
 *
 *     vec.subtractScalarY(20);
 *     vec.toString();
 *     // => x: 100, y: 180
 *
 * @param {Number} scalar The scalar to subtract
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.subtractScalarY = function (scalar) {
	this.y -= scalar;
	return this;
};

/**
 * Divides the X axis by the x component of given vector
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *     var vec2 = new Victor(2, 0);
 *
 *     vec.divideX(vec2);
 *     vec.toString();
 *     // => x:50, y:50
 *
 * @param {Victor} vector The other vector you want divide by
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.divideX = function (vector) {
	this.x /= vector.x;
	return this;
};

/**
 * Divides the Y axis by the y component of given vector
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *     var vec2 = new Victor(0, 2);
 *
 *     vec.divideY(vec2);
 *     vec.toString();
 *     // => x:100, y:25
 *
 * @param {Victor} vector The other vector you want divide by
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.divideY = function (vector) {
	this.y /= vector.y;
	return this;
};

/**
 * Divides both vector axis by a axis values of given vector
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *     var vec2 = new Victor(2, 2);
 *
 *     vec.divide(vec2);
 *     vec.toString();
 *     // => x:50, y:25
 *
 * @param {Victor} vector The vector to divide by
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.divide = function (vector) {
	this.x /= vector.x;
	this.y /= vector.y;
	return this;
};

/**
 * Divides both vector axis by the given scalar value
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.divideScalar(2);
 *     vec.toString();
 *     // => x:50, y:25
 *
 * @param {Number} The scalar to divide by
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.divideScalar = function (scalar) {
	if (scalar !== 0) {
		this.x /= scalar;
		this.y /= scalar;
	} else {
		this.x = 0;
		this.y = 0;
	}

	return this;
};

/**
 * Divides the X axis by the given scalar value
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.divideScalarX(2);
 *     vec.toString();
 *     // => x:50, y:50
 *
 * @param {Number} The scalar to divide by
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.divideScalarX = function (scalar) {
	if (scalar !== 0) {
		this.x /= scalar;
	} else {
		this.x = 0;
	}
	return this;
};

/**
 * Divides the Y axis by the given scalar value
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.divideScalarY(2);
 *     vec.toString();
 *     // => x:100, y:25
 *
 * @param {Number} The scalar to divide by
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.divideScalarY = function (scalar) {
	if (scalar !== 0) {
		this.y /= scalar;
	} else {
		this.y = 0;
	}
	return this;
};

/**
 * Inverts the X axis
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.invertX();
 *     vec.toString();
 *     // => x:-100, y:50
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.invertX = function () {
	this.x *= -1;
	return this;
};

/**
 * Inverts the Y axis
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.invertY();
 *     vec.toString();
 *     // => x:100, y:-50
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.invertY = function () {
	this.y *= -1;
	return this;
};

/**
 * Inverts both axis
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.invert();
 *     vec.toString();
 *     // => x:-100, y:-50
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.invert = function () {
	this.invertX();
	this.invertY();
	return this;
};

/**
 * Multiplies the X axis by X component of given vector
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *     var vec2 = new Victor(2, 0);
 *
 *     vec.multiplyX(vec2);
 *     vec.toString();
 *     // => x:200, y:50
 *
 * @param {Victor} vector The vector to multiply the axis with
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.multiplyX = function (vector) {
	this.x *= vector.x;
	return this;
};

/**
 * Multiplies the Y axis by Y component of given vector
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *     var vec2 = new Victor(0, 2);
 *
 *     vec.multiplyX(vec2);
 *     vec.toString();
 *     // => x:100, y:100
 *
 * @param {Victor} vector The vector to multiply the axis with
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.multiplyY = function (vector) {
	this.y *= vector.y;
	return this;
};

/**
 * Multiplies both vector axis by values from a given vector
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *     var vec2 = new Victor(2, 2);
 *
 *     vec.multiply(vec2);
 *     vec.toString();
 *     // => x:200, y:100
 *
 * @param {Victor} vector The vector to multiply by
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.multiply = function (vector) {
	this.x *= vector.x;
	this.y *= vector.y;
	return this;
};

/**
 * Multiplies both vector axis by the given scalar value
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.multiplyScalar(2);
 *     vec.toString();
 *     // => x:200, y:100
 *
 * @param {Number} The scalar to multiply by
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.multiplyScalar = function (scalar) {
	this.x *= scalar;
	this.y *= scalar;
	return this;
};

/**
 * Multiplies the X axis by the given scalar
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.multiplyScalarX(2);
 *     vec.toString();
 *     // => x:200, y:50
 *
 * @param {Number} The scalar to multiply the axis with
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.multiplyScalarX = function (scalar) {
	this.x *= scalar;
	return this;
};

/**
 * Multiplies the Y axis by the given scalar
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.multiplyScalarY(2);
 *     vec.toString();
 *     // => x:100, y:100
 *
 * @param {Number} The scalar to multiply the axis with
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.multiplyScalarY = function (scalar) {
	this.y *= scalar;
	return this;
};

/**
 * Normalize
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.normalize = function () {
	var length = this.length();

	if (length === 0) {
		this.x = 1;
		this.y = 0;
	} else {
		this.divide(Victor(length, length));
	}
	return this;
};

Victor.prototype.norm = Victor.prototype.normalize;

/**
 * If the absolute vector axis is greater than `max`, multiplies the axis by `factor`
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.limit(80, 0.9);
 *     vec.toString();
 *     // => x:90, y:50
 *
 * @param {Number} max The maximum value for both x and y axis
 * @param {Number} factor Factor by which the axis are to be multiplied with
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.limit = function (max, factor) {
	if (Math.abs(this.x) > max){ this.x *= factor; }
	if (Math.abs(this.y) > max){ this.y *= factor; }
	return this;
};

/**
 * Randomizes both vector axis with a value between 2 vectors
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.randomize(new Victor(50, 60), new Victor(70, 80`));
 *     vec.toString();
 *     // => x:67, y:73
 *
 * @param {Victor} topLeft first vector
 * @param {Victor} bottomRight second vector
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.randomize = function (topLeft, bottomRight) {
	this.randomizeX(topLeft, bottomRight);
	this.randomizeY(topLeft, bottomRight);

	return this;
};

/**
 * Randomizes the y axis with a value between 2 vectors
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.randomizeX(new Victor(50, 60), new Victor(70, 80`));
 *     vec.toString();
 *     // => x:55, y:50
 *
 * @param {Victor} topLeft first vector
 * @param {Victor} bottomRight second vector
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.randomizeX = function (topLeft, bottomRight) {
	var min = Math.min(topLeft.x, bottomRight.x);
	var max = Math.max(topLeft.x, bottomRight.x);
	this.x = random(min, max);
	return this;
};

/**
 * Randomizes the y axis with a value between 2 vectors
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.randomizeY(new Victor(50, 60), new Victor(70, 80`));
 *     vec.toString();
 *     // => x:100, y:66
 *
 * @param {Victor} topLeft first vector
 * @param {Victor} bottomRight second vector
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.randomizeY = function (topLeft, bottomRight) {
	var min = Math.min(topLeft.y, bottomRight.y);
	var max = Math.max(topLeft.y, bottomRight.y);
	this.y = random(min, max);
	return this;
};

/**
 * Randomly randomizes either axis between 2 vectors
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.randomizeAny(new Victor(50, 60), new Victor(70, 80));
 *     vec.toString();
 *     // => x:100, y:77
 *
 * @param {Victor} topLeft first vector
 * @param {Victor} bottomRight second vector
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.randomizeAny = function (topLeft, bottomRight) {
	if (!! Math.round(Math.random())) {
		this.randomizeX(topLeft, bottomRight);
	} else {
		this.randomizeY(topLeft, bottomRight);
	}
	return this;
};

/**
 * Rounds both axis to an integer value
 *
 * ### Examples:
 *     var vec = new Victor(100.2, 50.9);
 *
 *     vec.unfloat();
 *     vec.toString();
 *     // => x:100, y:51
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.unfloat = function () {
	this.x = Math.round(this.x);
	this.y = Math.round(this.y);
	return this;
};

/**
 * Rounds both axis to a certain precision
 *
 * ### Examples:
 *     var vec = new Victor(100.2, 50.9);
 *
 *     vec.unfloat();
 *     vec.toString();
 *     // => x:100, y:51
 *
 * @param {Number} Precision (default: 8)
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.toFixed = function (precision) {
	if (typeof precision === 'undefined') { precision = 8; }
	this.x = this.x.toFixed(precision);
	this.y = this.y.toFixed(precision);
	return this;
};

/**
 * Performs a linear blend / interpolation of the X axis towards another vector
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 100);
 *     var vec2 = new Victor(200, 200);
 *
 *     vec1.mixX(vec2, 0.5);
 *     vec.toString();
 *     // => x:150, y:100
 *
 * @param {Victor} vector The other vector
 * @param {Number} amount The blend amount (optional, default: 0.5)
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.mixX = function (vec, amount) {
	if (typeof amount === 'undefined') {
		amount = 0.5;
	}

	this.x = (1 - amount) * this.x + amount * vec.x;
	return this;
};

/**
 * Performs a linear blend / interpolation of the Y axis towards another vector
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 100);
 *     var vec2 = new Victor(200, 200);
 *
 *     vec1.mixY(vec2, 0.5);
 *     vec.toString();
 *     // => x:100, y:150
 *
 * @param {Victor} vector The other vector
 * @param {Number} amount The blend amount (optional, default: 0.5)
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.mixY = function (vec, amount) {
	if (typeof amount === 'undefined') {
		amount = 0.5;
	}

	this.y = (1 - amount) * this.y + amount * vec.y;
	return this;
};

/**
 * Performs a linear blend / interpolation towards another vector
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 100);
 *     var vec2 = new Victor(200, 200);
 *
 *     vec1.mix(vec2, 0.5);
 *     vec.toString();
 *     // => x:150, y:150
 *
 * @param {Victor} vector The other vector
 * @param {Number} amount The blend amount (optional, default: 0.5)
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.mix = function (vec, amount) {
	this.mixX(vec, amount);
	this.mixY(vec, amount);
	return this;
};

/**
 * # Products
 */

/**
 * Creates a clone of this vector
 *
 * ### Examples:
 *     var vec1 = new Victor(10, 10);
 *     var vec2 = vec1.clone();
 *
 *     vec2.toString();
 *     // => x:10, y:10
 *
 * @return {Victor} A clone of the vector
 * @api public
 */
Victor.prototype.clone = function () {
	return new Victor(this.x, this.y);
};

/**
 * Copies another vector's X component in to its own
 *
 * ### Examples:
 *     var vec1 = new Victor(10, 10);
 *     var vec2 = new Victor(20, 20);
 *     var vec2 = vec1.copyX(vec1);
 *
 *     vec2.toString();
 *     // => x:20, y:10
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.copyX = function (vec) {
	this.x = vec.x;
	return this;
};

/**
 * Copies another vector's Y component in to its own
 *
 * ### Examples:
 *     var vec1 = new Victor(10, 10);
 *     var vec2 = new Victor(20, 20);
 *     var vec2 = vec1.copyY(vec1);
 *
 *     vec2.toString();
 *     // => x:10, y:20
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.copyY = function (vec) {
	this.y = vec.y;
	return this;
};

/**
 * Copies another vector's X and Y components in to its own
 *
 * ### Examples:
 *     var vec1 = new Victor(10, 10);
 *     var vec2 = new Victor(20, 20);
 *     var vec2 = vec1.copy(vec1);
 *
 *     vec2.toString();
 *     // => x:20, y:20
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.copy = function (vec) {
	this.copyX(vec);
	this.copyY(vec);
	return this;
};

/**
 * Sets the vector to zero (0,0)
 *
 * ### Examples:
 *     var vec1 = new Victor(10, 10);
 *		 var1.zero();
 *     vec1.toString();
 *     // => x:0, y:0
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.zero = function () {
	this.x = this.y = 0;
	return this;
};

/**
 * Calculates the dot product of this vector and another
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(200, 60);
 *
 *     vec1.dot(vec2);
 *     // => 23000
 *
 * @param {Victor} vector The second vector
 * @return {Number} Dot product
 * @api public
 */
Victor.prototype.dot = function (vec2) {
	return this.x * vec2.x + this.y * vec2.y;
};

Victor.prototype.cross = function (vec2) {
	return (this.x * vec2.y ) - (this.y * vec2.x );
};

/**
 * Projects a vector onto another vector, setting itself to the result.
 *
 * ### Examples:
 *     var vec = new Victor(100, 0);
 *     var vec2 = new Victor(100, 100);
 *
 *     vec.projectOnto(vec2);
 *     vec.toString();
 *     // => x:50, y:50
 *
 * @param {Victor} vector The other vector you want to project this vector onto
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.projectOnto = function (vec2) {
    var coeff = ( (this.x * vec2.x)+(this.y * vec2.y) ) / ((vec2.x*vec2.x)+(vec2.y*vec2.y));
    this.x = coeff * vec2.x;
    this.y = coeff * vec2.y;
    return this;
};


Victor.prototype.horizontalAngle = function () {
	return Math.atan2(this.y, this.x);
};

Victor.prototype.horizontalAngleDeg = function () {
	return radian2degrees(this.horizontalAngle());
};

Victor.prototype.verticalAngle = function () {
	return Math.atan2(this.x, this.y);
};

Victor.prototype.verticalAngleDeg = function () {
	return radian2degrees(this.verticalAngle());
};

Victor.prototype.angle = Victor.prototype.horizontalAngle;
Victor.prototype.angleDeg = Victor.prototype.horizontalAngleDeg;
Victor.prototype.direction = Victor.prototype.horizontalAngle;

Victor.prototype.rotate = function (angle) {
	var nx = (this.x * Math.cos(angle)) - (this.y * Math.sin(angle));
	var ny = (this.x * Math.sin(angle)) + (this.y * Math.cos(angle));

	this.x = nx;
	this.y = ny;

	return this;
};

Victor.prototype.rotateDeg = function (angle) {
	angle = degrees2radian(angle);
	return this.rotate(angle);
};

Victor.prototype.rotateTo = function(rotation) {
	return this.rotate(rotation-this.angle());
};

Victor.prototype.rotateToDeg = function(rotation) {
	rotation = degrees2radian(rotation);
	return this.rotateTo(rotation);
};

Victor.prototype.rotateBy = function (rotation) {
	var angle = this.angle() + rotation;

	return this.rotate(angle);
};

Victor.prototype.rotateByDeg = function (rotation) {
	rotation = degrees2radian(rotation);
	return this.rotateBy(rotation);
};

/**
 * Calculates the distance of the X axis between this vector and another
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(200, 60);
 *
 *     vec1.distanceX(vec2);
 *     // => -100
 *
 * @param {Victor} vector The second vector
 * @return {Number} Distance
 * @api public
 */
Victor.prototype.distanceX = function (vec) {
	return this.x - vec.x;
};

/**
 * Same as `distanceX()` but always returns an absolute number
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(200, 60);
 *
 *     vec1.absDistanceX(vec2);
 *     // => 100
 *
 * @param {Victor} vector The second vector
 * @return {Number} Absolute distance
 * @api public
 */
Victor.prototype.absDistanceX = function (vec) {
	return Math.abs(this.distanceX(vec));
};

/**
 * Calculates the distance of the Y axis between this vector and another
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(200, 60);
 *
 *     vec1.distanceY(vec2);
 *     // => -10
 *
 * @param {Victor} vector The second vector
 * @return {Number} Distance
 * @api public
 */
Victor.prototype.distanceY = function (vec) {
	return this.y - vec.y;
};

/**
 * Same as `distanceY()` but always returns an absolute number
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(200, 60);
 *
 *     vec1.distanceY(vec2);
 *     // => 10
 *
 * @param {Victor} vector The second vector
 * @return {Number} Absolute distance
 * @api public
 */
Victor.prototype.absDistanceY = function (vec) {
	return Math.abs(this.distanceY(vec));
};

/**
 * Calculates the euclidean distance between this vector and another
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(200, 60);
 *
 *     vec1.distance(vec2);
 *     // => 100.4987562112089
 *
 * @param {Victor} vector The second vector
 * @return {Number} Distance
 * @api public
 */
Victor.prototype.distance = function (vec) {
	return Math.sqrt(this.distanceSq(vec));
};

/**
 * Calculates the squared euclidean distance between this vector and another
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(200, 60);
 *
 *     vec1.distanceSq(vec2);
 *     // => 10100
 *
 * @param {Victor} vector The second vector
 * @return {Number} Distance
 * @api public
 */
Victor.prototype.distanceSq = function (vec) {
	var dx = this.distanceX(vec),
		dy = this.distanceY(vec);

	return dx * dx + dy * dy;
};

/**
 * Calculates the length or magnitude of the vector
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.length();
 *     // => 111.80339887498948
 *
 * @return {Number} Length / Magnitude
 * @api public
 */
Victor.prototype.length = function () {
	return Math.sqrt(this.lengthSq());
};

/**
 * Squared length / magnitude
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.lengthSq();
 *     // => 12500
 *
 * @return {Number} Length / Magnitude
 * @api public
 */
Victor.prototype.lengthSq = function () {
	return this.x * this.x + this.y * this.y;
};

Victor.prototype.magnitude = Victor.prototype.length;

/**
 * Returns a true if vector is (0, 0)
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *     vec.zero();
 *
 *     // => true
 *
 * @return {Boolean}
 * @api public
 */
Victor.prototype.isZero = function() {
	return this.x === 0 && this.y === 0;
};

/**
 * Returns a true if this vector is the same as another
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(100, 50);
 *     vec1.isEqualTo(vec2);
 *
 *     // => true
 *
 * @return {Boolean}
 * @api public
 */
Victor.prototype.isEqualTo = function(vec2) {
	return this.x === vec2.x && this.y === vec2.y;
};

/**
 * # Utility Methods
 */

/**
 * Returns an string representation of the vector
 *
 * ### Examples:
 *     var vec = new Victor(10, 20);
 *
 *     vec.toString();
 *     // => x:10, y:20
 *
 * @return {String}
 * @api public
 */
Victor.prototype.toString = function () {
	return 'x:' + this.x + ', y:' + this.y;
};

/**
 * Returns an array representation of the vector
 *
 * ### Examples:
 *     var vec = new Victor(10, 20);
 *
 *     vec.toArray();
 *     // => [10, 20]
 *
 * @return {Array}
 * @api public
 */
Victor.prototype.toArray = function () {
	return [ this.x, this.y ];
};

/**
 * Returns an object representation of the vector
 *
 * ### Examples:
 *     var vec = new Victor(10, 20);
 *
 *     vec.toObject();
 *     // => { x: 10, y: 20 }
 *
 * @return {Object}
 * @api public
 */
Victor.prototype.toObject = function () {
	return { x: this.x, y: this.y };
};


var degrees = 180 / Math.PI;

function random (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function radian2degrees (rad) {
	return rad * degrees;
}

function degrees2radian (deg) {
	return deg / degrees;
}


/***/ }),

/***/ "24f8":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("60eb");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("cf0b9396", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "2eaf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RadialMenuComponentButtonGroup_vue_vue_type_style_index_0_lang_scss_subtract_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fd8a");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RadialMenuComponentButtonGroup_vue_vue_type_style_index_0_lang_scss_subtract_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RadialMenuComponentButtonGroup_vue_vue_type_style_index_0_lang_scss_subtract_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RadialMenuComponentButtonGroup_vue_vue_type_style_index_0_lang_scss_subtract_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "4bad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "506b":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("e6ea");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("59c24d95", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "60eb":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("4bad")(false);
// Module
exports.push([module.i, ".radial-menu-main{--btn-color:#000;--btn-stroke-color:var(--btn-color);--sel--btn-color:rgba(40,255,244,0.8);--sel--btn-stroke-color:#28fff4;--act--btn-color:var(--text-bg-color);--act--btn-stroke-color:var(--btn-color);--text-color:#93fffa;--text-bg-color:rgba(40,255,244,0.5);--text-bg-stroke-color:var(--sel--btn-stroke-color);--icon-color:var(--sel--btn-stroke-color);--sel--icon-color:var(--sel--btn-stroke-color);--act--icon-color:var(--sel--btn-stroke-color);--icon-circle-color:var(--btn-color);--icon-circle-stroke-color:var(--btn-color);--sel--icon-circle-color:var(--btn-color);--sel--icon-circle-stroke-color:var(--sel--btn-stroke-color)}body{margin:0}.radial-menu-main{visibility:hidden;position:absolute}.wrapper{perspective:20cm;transform-origin:center center;width:inherit;height:inherit}.svg-main{overflow:visible;transition-duration:.4s;transition-property:transform;position:absolute;filter:blur(.4px)}.fade-enter-active,.fade-leave-active{transition:all .1s ease-in}.fade-enter,.fade-leave-to{opacity:.1;transform:scale(.1)}", ""]);


/***/ }),

/***/ "63e6":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("4bad")(false);
// Module
exports.push([module.i, ".radial-menu-main{--btn-color:#000;--btn-stroke-color:var(--btn-color);--sel--btn-color:rgba(40,255,244,0.8);--sel--btn-stroke-color:#28fff4;--act--btn-color:var(--text-bg-color);--act--btn-stroke-color:var(--btn-color);--text-color:#93fffa;--text-bg-color:rgba(40,255,244,0.5);--text-bg-stroke-color:var(--sel--btn-stroke-color);--icon-color:var(--sel--btn-stroke-color);--sel--icon-color:var(--sel--btn-stroke-color);--act--icon-color:var(--sel--btn-stroke-color);--icon-circle-color:var(--btn-color);--icon-circle-stroke-color:var(--btn-color);--sel--icon-circle-color:var(--btn-color);--sel--icon-circle-stroke-color:var(--sel--btn-stroke-color)}.active-menu .arc-svg{stroke:var(--act--btn-stroke-color)}.arc-svg{fill:var(--btn-color);stroke:var(--btn-stroke-color);stroke-width:1px;transition-duration:0s,.3s;transition-property:stroke,fill}.arc-svg,.icon{overflow:visible}.icon{stroke-width:0px;fill:var(--icon-color);stroke:var(--icon-color)}.circle,.icon{pointer-events:none}.circle{stroke-width:1px;fill:var(--icon-circle-color);stroke:var(--icon-circle-stroke-color)}.button-group{visibility:visible}.button:hover>.link:active .arc-svg{transition-duration:0s,0s;transition-property:stroke,fill;fill:var(--sel--btn-stroke-color);stroke:var(--sel--btn-stroke-color)}.button:hover>.link:active .icon{fill:#32cd32}.button:hover:hover+g .arc-svg{stroke-width:3px;fill:var(--act--btn-color);stroke:var(--act--btn-stroke-color)}.button:hover:hover+g .icon{fill:var(--act--icon-color);stroke:var(--act--icon-color)}.button:hover .arc-svg{stroke-width:6px;fill:var(--sel--btn-color);stroke:var(--sel--btn-stroke-color)}.button:hover .icon{fill:var(--sel--icon-color);stroke:var(--sel--icon-color)}.button:hover .circle{stroke-width:2px;fill:var(--sel--icon-circle-color);stroke:var(--sel--icon-circle-stroke-color)}", ""]);


/***/ }),

/***/ "9416":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RadialMenuComponent_vue_vue_type_style_index_0_lang_scss_subtract_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("24f8");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RadialMenuComponent_vue_vue_type_style_index_0_lang_scss_subtract_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RadialMenuComponent_vue_vue_type_style_index_0_lang_scss_subtract_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RadialMenuComponent_vue_vue_type_style_index_0_lang_scss_subtract_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "df0b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextComponent_vue_vue_type_style_index_0_lang_scss_subtract_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("506b");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextComponent_vue_vue_type_style_index_0_lang_scss_subtract_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextComponent_vue_vue_type_style_index_0_lang_scss_subtract_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextComponent_vue_vue_type_style_index_0_lang_scss_subtract_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e6ea":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("4bad")(false);
// Module
exports.push([module.i, ".radial-menu-main{--btn-color:#000;--btn-stroke-color:var(--btn-color);--sel--btn-color:rgba(40,255,244,0.8);--sel--btn-stroke-color:#28fff4;--act--btn-color:var(--text-bg-color);--act--btn-stroke-color:var(--btn-color);--text-color:#93fffa;--text-bg-color:rgba(40,255,244,0.5);--text-bg-stroke-color:var(--sel--btn-stroke-color);--icon-color:var(--sel--btn-stroke-color);--sel--icon-color:var(--sel--btn-stroke-color);--act--icon-color:var(--sel--btn-stroke-color);--icon-circle-color:var(--btn-color);--icon-circle-stroke-color:var(--btn-color);--sel--icon-circle-color:var(--btn-color);--sel--icon-circle-stroke-color:var(--sel--btn-stroke-color)}.text-wraper{position:absolute;visibility:hidden;width:100%;height:100%}.text{visibility:visible;color:var(--text-color);font-weight:700;font-size:1.2em;height:inherit}.text,.text div{display:flex;align-items:center;justify-content:center}.text div{text-align:center;margin:0;border-radius:50%;border:6px solid var(--text-bg-stroke-color);box-shadow:0 0 3em var(--text-bg-stroke-color);background-color:var(--text-bg-color)}.text div p{user-select:none;margin:0}.textframe-leave-active{transition:all .2s ease-in}.textframe-leave-to{filter:url(#glitch);opacity:0}", ""]);


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"369e09f6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/WheelMenuComponent/RadialMenuComponent.vue?vue&type=template&id=cc8bf82c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"radial-menu-main",style:(_vm.mainStyle())},[_c('transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"wrapper"},[_c('text-component',{attrs:{"titleText":_vm.text,"size":_vm.menushape[0].inrad*1.7}}),_c('svg',{staticClass:"svg-main",style:(_vm.transformStyle()),attrs:{"viewBox":_vm.boxToSvgPath(_vm.box),"weight":_vm.box.w,"height":_vm.box.h}},[_c('button-group',{attrs:{"buttons":_vm.menushape,"box":_vm.box},on:{"setText":_vm.setText,"rotate":_vm.rotate}})],1)],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/WheelMenuComponent/RadialMenuComponent.vue?vue&type=template&id=cc8bf82c&

// EXTERNAL MODULE: ./node_modules/victor/index.js
var victor = __webpack_require__("1266");
var victor_default = /*#__PURE__*/__webpack_require__.n(victor);

// CONCATENATED MODULE: ./src/WheelMenuComponent/circular-menu-config.js


function calcArcShape(btnconfig) {
	// console.log("calc shape",btnconfig);
	const outrad = btnconfig.radius;
	const inrad = btnconfig.inrad;
	let orvec = new victor_default.a(0, -outrad);
	let irvec = new victor_default.a(0, -inrad);
	
	let ps = [];
	const half_aperture = btnconfig.aperture / 2;
	let center = orvec.clone().mix(irvec, 0.5); //TODO make custom height
	
	// Initial points
	ps[0] = orvec.clone().rotateDeg(-half_aperture).rotateDeg(btnconfig.angle);
	ps[3] = irvec.clone().rotateDeg(-half_aperture).rotateDeg(btnconfig.angle);
	ps[1] = orvec.clone().rotateDeg(half_aperture).rotateDeg(btnconfig.angle);
	ps[2] = irvec.clone().rotateDeg(half_aperture).rotateDeg(btnconfig.angle);
	center.rotateDeg(btnconfig.angle);
	
	// Set gap between arcs
	addGapsToArcs(ps);

	// Points to svg-path string
	const path = pointsToArcPathStr(ps, inrad, outrad);
	const path_r = pointsToRoundedArcPathStr(roundedEdgesToArcShape(ps, btnconfig.aperture, outrad), inrad, outrad);

	const iconsize = calcIconSize(center, btnconfig.aperture, btnconfig.height);

	return {
		path: path,
		path_r: path_r,
		currpath: path_r,
		icon: btnconfig.icon,
		angle: btnconfig.angle,
		radius: btnconfig.radius,
		inrad,
		action: btnconfig.action,
		path: btnconfig.path,
		iconpos: center,
		iconsize: iconsize,
		title: btnconfig.title
	};
}

function addGapsToArcs(ps) {
	const gap = 2; //TODO make customized
	const gapvec = new victor_default.a(gap, gap);
	
	// Horizontal gap vectors
	const hor_gap_0_3 = ps[0].clone().normalize().multiply(gapvec);
	const hor_gap_1_2 = ps[1].clone().normalize().multiply(gapvec);
	// Vertical gap vector
	let ver_gap;

	// Set gaps
	ver_gap = ps[0].clone().rotate(Math.PI / 2).normalize().multiply(gapvec);
	ps[0].add(ver_gap).subtract(hor_gap_0_3);
	ps[3].add(ver_gap).add(hor_gap_0_3);
	ver_gap = ps[1].clone().rotate(Math.PI / 2).normalize().multiply(gapvec);
	ps[1].subtract(ver_gap).subtract(hor_gap_1_2);
	ps[2].subtract(ver_gap).add(hor_gap_1_2);
}

function roundedEdgesToArcShape(ps, aperture, inrad) {
	let ps_r = [];

	// o - out; i - in; p - point;  
	let op1 = ps[0].clone(),
		op2 = ps[1].clone(),
		ip1 = ps[3].clone(),
		ip2 = ps[2].clone();
	const d_apert = aperture * .05;
	
	// l - line; t - ?;
	let olc = .8,
		otc = .8, //TODO make customised
		ilc = .2,
		itc = .8;

	let lcl = ip1.clone().mix(op1, .15).subtract(ip1);
	let lcr = ip2.clone().mix(op2, .15).subtract(ip2);

	ps_r[15] = ps[3].clone().add(lcl);
	ps_r[8] = ps[2].clone().add(lcr);
	ps_r[14] = ps[3].clone().mix(ps_r[15], ilc);
	ps_r[9] = ps[2].clone().mix(ps_r[8], ilc);

	ps_r[12] = ip1.rotateDeg(d_apert * 2);
	ps_r[11] = ip2.rotateDeg(-d_apert * 2);
	ps_r[13] = ps_r[12].clone().mix(ps[3], itc);
	ps_r[10] = ps_r[11].clone().mix(ps[2], itc);

	ps_r[0] = ps[0].clone().subtract(lcl);
	ps_r[7] = ps[1].clone().subtract(lcr);
	ps_r[1] = ps_r[0].clone().mix(ps[0], olc);
	ps_r[6] = ps_r[7].clone().mix(ps[1], olc);

	ps_r[3] = op1.rotateDeg(d_apert);
	ps_r[4] = op2.rotateDeg(-d_apert);
	ps_r[2] = ps_r[3].clone().mix(ps[0], otc);
	ps_r[5] = ps_r[4].clone().mix(ps[1], otc);

	return ps_r;
}

function calcIconSize(center, aperture, height) {
	let n_center = center.clone().rotateDeg(aperture).subtract(center).length();
	let w = n_center;
	let h = height;
	return (w > h ? h : w) * .85; // TODO make customized may be
}

function pointsToArcPathStr(ps, inrad, outrad) {
	return ` 
		M ${ps[0].x} ${ps[0].y} 
		A ${outrad} ${outrad} 0 0 1 ${ps[1].x} ${ps[1].y} 
		L ${ps[2].x} ${ps[2].y} 
		A ${inrad} ${inrad} 1 0 0  ${ps[3].x} ${ps[3].y} 
		z 
	`;
}

function pointsToRoundedArcPathStr(ps_r, inrad, outrad) {
	return ` 
		M ${ps_r[0].x},  ${ps_r[0].y}
		C ${ps_r[1].x},  ${ps_r[1].y}  ${ps_r[2].x},  ${ps_r[2].y} ${ps_r[3].x},  ${ps_r[3].y} 
		A ${outrad} ${outrad} 0 0 1 ${ps_r[4].x},  ${ps_r[4].y}
		C ${ps_r[5].x},  ${ps_r[5].y}  ${ps_r[6].x},  ${ps_r[6].y} ${ps_r[7].x},  ${ps_r[7].y}
		L ${ps_r[8].x},  ${ps_r[8].y}
		C ${ps_r[9].x},  ${ps_r[9].y}  ${ps_r[10].x},  ${ps_r[10].y} ${ps_r[11].x},  ${ps_r[11].y}
		A ${inrad} ${inrad} 1 0 0 ${ps_r[12].x},  ${ps_r[12].y}
		C ${ps_r[13].x},  ${ps_r[13].y}  ${ps_r[14].x},  ${ps_r[14].y} ${ps_r[15].x},  ${ps_r[15].y}
		z 
	`;
}

/* harmony default export */ var circular_menu_config = ({
	calcArcShape
});

// CONCATENATED MODULE: ./src/WheelMenuComponent/circular-menu-builder.js



class circular_menu_builder_CircularMenuBuilder {

	constructor(conf) {
		this._conf = conf;
		this._res = [];
		this._defAperture = 5;

		let maxBtnCount = conf.aperture / this._defAperture;
		let btns = conf.btns || [];
		this._btnCount = (btns.length > maxBtnCount ? maxBtnCount : btns.length);
	}

	build() {
		if (!this._validConfig()) {
			console.log("VALIDATION ERROR");
			//TODO add error message
			return [];
		}
		//TODO consider move somewhere
		for (let i in this._conf.btns) {
			this._res[i] = circular_menu_config.calcArcShape(this._conf.btns[i]);
			if (this._conf.btns[i].btns) {
				this._res[i].children = new circular_menu_builder_CircularMenuBuilder(this._conf.btns[i]).build();
			}
			this._res[i].id = i;
		}
		return this._res;
	}

	_validConfig() {
		if (this._conf.btns.length < 2) {
			//TODO add error massage
			return false;
		}
		return this._specifyAperture2() && this._specifyAngles() && this._specifyRadius();
	}

	_specifyRadius() {
		let conf = this._conf;
		let btns = conf.btns;
		for (let i in btns) {
			if (btns[i].height == null) btns[i].height = conf.height;
			//TODO make height edges
		}
		for (let i in btns) {
			btns[i].inrad = conf.radius || 30;
			btns[i].radius = btns[i].inrad + btns[i].height;
		}

		return true;
	}

	_specifyAperture() {
		//TODO rework algorithm 
		let conf = this._conf;
		let btns = conf.btns;
		let defAperture = this._defAperture;

		conf.aperture = conf.aperture > 360 ? 360 : conf.aperture;

		let customAperturaSum = 0;
		let withNoApertureNumber = this._btnCount;
		for (let i = 0; i < this._btnCount; i++) {
			if (btns[i].aperture && btns[i].aperture > defAperture) {
				customAperturaSum += btns[i].aperture;
				withNoApertureNumber--;
			} else {
				btns[i].aperture = defAperture;
			}
		}

		let imagineAperture = customAperturaSum + defAperture * withNoApertureNumber;
		let customApertureCoef = (conf.aperture < imagineAperture ? (conf.aperture - defAperture * withNoApertureNumber) / customAperturaSum : 1);
		let defaultApertureCoef = (conf.aperture >= imagineAperture ? (conf.aperture - customAperturaSum) / (defAperture * withNoApertureNumber) : 1);
		for (let i = 0; i < this._btnCount; i++) {
			btns[i].aperture = (btns[i].aperture === defAperture ? defAperture * defaultApertureCoef : btns[i].aperture * customApertureCoef);
		}
		return true;
	}

	_specifyAperture2() {
		this._conf.aperture = this._conf.aperture > 360 ? 360 : this._conf.aperture;
		let btns = this._conf.btns; //?
		let baseAperture = this._conf.aperture;

		let minDeg = 36;
		let minAp = 100/360 * minDeg;
		let sum;
		for (let i in btns){
			btns[i].aperture = btns[i].aperture || minAp;
			if (btns[i].aperture > 50) btns[i].aperture = 50;
		}	
		sum = 0;
		for (let i in btns){
			sum += btns[i].aperture;
			if(sum > 100){
				sum -= btns[i].aperture;
				btns.splice(i, btns.length);
				break;
			}
		}
		
		let coef = baseAperture/sum;
		for (let i in btns){
			btns[i].aperture *= coef;
		}
		return true;
	}

	_specifyAngles() {
		//TODO rework algorithm 
		let conf = this._conf;
		let btns = conf.btns || [];
		let angle = conf.angle || 0;
		angle -= conf.aperture/2;
		for (let i in btns) {
			angle += btns[i].aperture/2;
			btns[i].angle = angle;
			angle += btns[i].aperture/2;
		}
		return true;
	}
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"369e09f6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/WheelMenuComponent/RadialMenuComponentButtonGroup.vue?vue&type=template&id=11c96b34&
var RadialMenuComponentButtonGroupvue_type_template_id_11c96b34_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('g',{staticClass:"main"},_vm._l((_vm.shape()),function(btn,id){return _c('g',{key:id,class:("button-group " + _vm.strokeClass)},[_c('g',{staticClass:"button",on:{"mouseover":function($event){return _vm.buttonOverHandler($event, btn)},"mouseout":function($event){return _vm.emitDefault($event, btn)},"contextmenu":function($event){return _vm.emitDefault($event, btn)}}},[_c('a',{staticClass:"link",attrs:{"href":("" + (btn.path | ''))},on:{"click":function($event){return _vm.redirect($event,btn)},"contextmenu":function($event){$event.preventDefault();return _vm.contextMenu($event,btn)}}},[_c('svg',{staticClass:"arc-svg"},[_c('path',{staticClass:"arc-path",attrs:{"d":btn.path_r}})]),_c('circle',{staticClass:"circle",attrs:{"cx":("" + (btn.iconpos.x)),"cy":("" + (btn.iconpos.y)),"r":("" + (btn.iconsize/2))}}),_c('svg',{staticClass:"icon",attrs:{"viewBox":_vm.iconViewBox(btn),"x":("" + (btn.iconpos.x)),"y":("" + (btn.iconpos.y))}},[_c('path',{attrs:{"d":btn.icon.d}})])])]),_c('button-group',{attrs:{"buttons":btn.children,"box":_vm.box},on:{"setText":_vm.emitText,"rotate":function($event){return _vm.transferRotatation($event)}}})],1)}),0)}
var RadialMenuComponentButtonGroupvue_type_template_id_11c96b34_staticRenderFns = []


// CONCATENATED MODULE: ./src/WheelMenuComponent/RadialMenuComponentButtonGroup.vue?vue&type=template&id=11c96b34&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/WheelMenuComponent/RadialMenuComponentButtonGroup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var RadialMenuComponentButtonGroupvue_type_script_lang_js_ = ({
    name: "button-group",

    props: {
        buttons: Array,
        box: Object,
    },
    data() {
        return {
            strokeClass: '',
        };
    },
    methods: {

        //TODO reworck method
        redirect(e,btn){
            if(btn.action && typeof btn.action === 'function') {
                e.stopPropagation(); // menu dont hide
                if(!btn.action()) e.preventDefault(); // redirect off
                console.log("redirect",btn.path);
            }
        },

        contextMenu(e, btn){
            //TODO add action callbacks
            e.stopPropagation(); // menu dont hide
        },

        shape(){
            return this.buttons;
        },

        iconViewBox(btn){
            return `
                ${btn.icon.size.w/2} 
                ${btn.icon.size.h/2} 
                ${this.box.w/btn.iconsize*btn.icon.size.w*1.6} 
                ${this.box.h/btn.iconsize*btn.icon.size.h*1.6}
            `;
        },

        buttonOverHandler(event, btn){
            this.emitRotatation(event, btn);
            this.emitText(btn.title);
            this.strokeClass = "active-menu";
        },

        emitText(text){
            this.$emit('setText', text);
        },

        emitRotatation(event, btn){
            this.$emit('rotate', btn.iconpos.clone().normalize().multiply(new victor_default.a(12,12)));
        },

        emitDefault(event, btn){
            this.$emit('rotate');
            this.$emit('setText');
            this.strokeClass = "";
        },

        transferRotatation(vector){
            this.$emit('rotate', vector);
        },
    },
    computed: {

    },
    mounted: function() {

    }
});

// CONCATENATED MODULE: ./src/WheelMenuComponent/RadialMenuComponentButtonGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var WheelMenuComponent_RadialMenuComponentButtonGroupvue_type_script_lang_js_ = (RadialMenuComponentButtonGroupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/WheelMenuComponent/RadialMenuComponentButtonGroup.vue?vue&type=style&index=0&lang=scss&subtract=true&
var RadialMenuComponentButtonGroupvue_type_style_index_0_lang_scss_subtract_true_ = __webpack_require__("2eaf");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/WheelMenuComponent/RadialMenuComponentButtonGroup.vue






/* normalize component */

var component = normalizeComponent(
  WheelMenuComponent_RadialMenuComponentButtonGroupvue_type_script_lang_js_,
  RadialMenuComponentButtonGroupvue_type_template_id_11c96b34_render,
  RadialMenuComponentButtonGroupvue_type_template_id_11c96b34_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RadialMenuComponentButtonGroup = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"369e09f6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/WheelMenuComponent/TextComponent.vue?vue&type=template&id=11cea4c7&
var TextComponentvue_type_template_id_11cea4c7_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-wraper"},[_c('defs',[_c('filter',{attrs:{"id":"glitch"}},[_c('feTurbulence',{attrs:{"type":"fractalNoise","baseFrequency":"0 .17","numOctaves":"1","result":"warp"}}),_c('feDisplacementMap',{attrs:{"xChannelSelector":"R","yChannelSelector":"G","scale":"20","in":"SourceGraphic","in2":"warp"}})],1)]),_c('transition',{attrs:{"name":"textframe"}},[(_vm.isVisible)?_c('div',{staticClass:"text"},[_c('div',{style:(_vm.textWrapperStyle())},[_c('p',[_vm._v(_vm._s(_vm.titleText || ''))])])]):_vm._e()])],1)}
var TextComponentvue_type_template_id_11cea4c7_staticRenderFns = []


// CONCATENATED MODULE: ./src/WheelMenuComponent/TextComponent.vue?vue&type=template&id=11cea4c7&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/WheelMenuComponent/TextComponent.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var TextComponentvue_type_script_lang_js_ = ({
    name: "radial-menu-text",

    props: {
        titleText:String,
        size:Number,
    },
    data() {

        return {       
            titleVisible:false,
        };
    },
    methods: {

        lag(){
            this.titleVisible = false;
            setTimeout(()=>{
                this.titleVisible = true;
                setTimeout(()=>{ this.lag(); }, Math.floor(Math.random() * 10)*500);
            }, 150);
        },

        textWrapperStyle(){
            return `
                width: ${this.size}px;
                height: ${this.size}px;
            `;
        },
    },
    computed: {
        isVisible(){
            return this.titleVisible && this.titleText;
        },
    },
    mounted: function() {
        this.lag();
    },
});

// CONCATENATED MODULE: ./src/WheelMenuComponent/TextComponent.vue?vue&type=script&lang=js&
 /* harmony default export */ var WheelMenuComponent_TextComponentvue_type_script_lang_js_ = (TextComponentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/WheelMenuComponent/TextComponent.vue?vue&type=style&index=0&lang=scss&subtract=true&
var TextComponentvue_type_style_index_0_lang_scss_subtract_true_ = __webpack_require__("df0b");

// CONCATENATED MODULE: ./src/WheelMenuComponent/TextComponent.vue






/* normalize component */

var TextComponent_component = normalizeComponent(
  WheelMenuComponent_TextComponentvue_type_script_lang_js_,
  TextComponentvue_type_template_id_11cea4c7_render,
  TextComponentvue_type_template_id_11cea4c7_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TextComponent = (TextComponent_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/WheelMenuComponent/RadialMenuComponent.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var RadialMenuComponentvue_type_script_lang_js_ = ({
    name: "radial-menu",

    components: {
        "button-group":RadialMenuComponentButtonGroup,
        "text-component":TextComponent,
    },
    props: {
        conf: Object,
        pos: Object,
        visible:Boolean,
    },
    data() {
        let menushape = this.shape();
        let box = this.mainViewBox(menushape);

        return {
            box,
            menushape,
            shiftVector: new victor_default.a(0,0),
            text: null,
        };
    },
    methods: {

        setText(text){
            this.text = text;
        },

        rotate(vector){
            this.shiftVector = vector || new victor_default.a(0,0);
        },

        shape(){
            console.log("BUILD RADIAL-MENU");
            return new circular_menu_builder_CircularMenuBuilder(Object.assign({},this.conf)).build();
        },

        mainStyle(){
            if(this.pos == null) this.pos = {x: 0, y: 0};
            return `
                transform: translate(${this.pos.x+this.box.x}px, ${this.pos.y+this.box.y}px);
                width: ${this.box.w}px; 
                height: ${this.box.h}px;
            `
        },

        transformStyle(){
            return this.shiftVector 
                    ? ` transform: ${this.rotateStyle(this.shiftVector)} ${this.translateStyle(this.shiftVector)}; `
                    : ``;
        },

        rotateStyle(vec){
            return vec
                    ? (vec.x != 0 ? ` rotateX(${vec.y}deg) ` : ``)+
                      (vec.y != 0 ? ` rotateY(${-vec.x}deg) ` : ``) 
                    : ``;
        },

        translateStyle(vec){
            return vec
                    ? ` translate(${-vec.x}px, ${-vec.y}px); `
                    : ``;
        },

        //TODO move to utility funcs
        boxToSvgPath(box){
            return `${box.x} ${box.y} ${box.w} ${box.h}`
        },

        mainViewBox(shape){
            let box = {};
            box.w = box.h = 2*this._maxRadius(shape);
            box.x = -.5*box.w;
            box.y = -.5*box.h;
            return box;
        },

        _maxRadius(btns){
            let cmax,max = 0;
            for (let btn of btns){
                if(btn.children != null)
                    max = max > (cmax = this._maxRadius(btn.children)) ? max : cmax;
                else 
                    max = (max < btn.radius ? btn.radius : max);
            }
            return max;
        },
    },
    computed: {
        
    },
    mounted: function() {

    },
});

// CONCATENATED MODULE: ./src/WheelMenuComponent/RadialMenuComponent.vue?vue&type=script&lang=js&
 /* harmony default export */ var WheelMenuComponent_RadialMenuComponentvue_type_script_lang_js_ = (RadialMenuComponentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/WheelMenuComponent/RadialMenuComponent.vue?vue&type=style&index=0&lang=scss&subtract=true&
var RadialMenuComponentvue_type_style_index_0_lang_scss_subtract_true_ = __webpack_require__("9416");

// CONCATENATED MODULE: ./src/WheelMenuComponent/RadialMenuComponent.vue






/* normalize component */

var RadialMenuComponent_component = normalizeComponent(
  WheelMenuComponent_RadialMenuComponentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RadialMenuComponent = (RadialMenuComponent_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (RadialMenuComponent);



/***/ }),

/***/ "fd8a":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("63e6");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("7ed29edf", content, true, {"sourceMap":false,"shadowMode":false});

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=radial-menu-component.umd.js.map