/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: F:\\Bohdan\\CoadB\\proj-2\\src\\js\\app.js: Unexpected token, expected \";\" (504:20)\n\n\u001b[0m \u001b[90m 502 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 503 | \u001b[39m      \u001b[36mif\u001b[39m( \u001b[33m!\u001b[39minputForm\u001b[33m.\u001b[39mval()) {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 504 | \u001b[39m        \u001b[36mvar\u001b[39m console console\u001b[33m.\u001b[39mlog(\u001b[32m'invalid'\u001b[39m)\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m                    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 505 | \u001b[39m      } \u001b[36melse\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 506 | \u001b[39m        \u001b[36mvar\u001b[39m console \u001b[33m=\u001b[39m console\u001b[33m.\u001b[39mlog(\u001b[32m'valid'\u001b[39m)\u001b[0m\n\u001b[0m \u001b[90m 507 | \u001b[39m      }\u001b[0m\n    at Parser.raise (F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:3851:17)\n    at Parser.unexpected (F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:5165:16)\n    at Parser.semicolon (F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:5147:40)\n    at Parser.parseVarStatement (F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:7774:10)\n    at Parser.parseStatementContent (F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:7360:21)\n    at Parser.parseStatement (F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:7293:17)\n    at Parser.parseBlockOrModuleBlockBody (F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:7879:25)\n    at Parser.parseBlockBody (F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:7866:10)\n    at Parser.parseBlock (F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:7850:10)\n    at Parser.parseStatementContent (F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:7369:21)\n    at Parser.parseStatement (F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:7293:17)\n    at Parser.parseIfStatement (F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:7656:28)\n    at Parser.parseStatementContent (F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:7338:21)\n    at Parser.parseStatement (F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:7293:17)\n    at Parser.parseBlockOrModuleBlockBody (F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:7879:25)\n    at Parser.parseBlockBody (F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:7866:10)\n    at Parser.parseBlock (F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:7850:10)\n    at Parser.parseFunctionBody (F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:6911:24)\n    at Parser.parseFunctionBodyAndFinish (F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:6881:10)\n    at F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:8014:12\n    at Parser.withTopicForbiddingContext (F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:7187:14)\n    at Parser.parseFunction (F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:8013:10)\n    at Parser.parseFunctionExpression (F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:6366:17)\n    at Parser.parseExprAtom (F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:6279:21)\n    at Parser.parseExprSubscripts (F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:5916:23)\n    at Parser.parseMaybeUnary (F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:5896:21)\n    at Parser.parseExprOps (F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:5783:23)\n    at Parser.parseMaybeConditional (F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:5756:23)\n    at Parser.parseMaybeAssign (F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:5703:21)\n    at Parser.parseExprListItem (F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:6979:18)\n    at Parser.parseCallExpressionArguments (F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:6123:22)\n    at Parser.parseSubscript (F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:6018:29)\n    at Parser.parseSubscripts (F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:5937:19)\n    at Parser.parseExprSubscripts (F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:5926:17)\n    at Parser.parseMaybeUnary (F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:5896:21)\n    at Parser.parseExprOps (F:\\Bohdan\\CoadB\\proj-2\\node_modules\\@babel\\parser\\lib\\index.js:5783:23)");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1:
/*!*************************************************!*\
  !*** multi ./src/js/app.js ./src/scss/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! ./src/scss/app.scss */"./src/scss/app.scss");


/***/ })

/******/ });