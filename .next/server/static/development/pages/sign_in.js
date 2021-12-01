module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/withSession.tsx":
/*!*****************************!*\
  !*** ./lib/withSession.tsx ***!
  \*****************************/
/*! exports provided: withSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withSession", function() { return withSession; });
/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-iron-session */ "next-iron-session");
/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_iron_session__WEBPACK_IMPORTED_MODULE_0__);

function withSession(handler) {
  return Object(next_iron_session__WEBPACK_IMPORTED_MODULE_0__["withIronSession"])(handler, {
    // password: process.env.SECRET_COOKIE_PASSWORD,
    password: 'c2a85490-cc60-4f21-94e8-8dc5dd3220da',
    cookieName: 'blog',
    cookieOptions: {
      secure: false
    }
  });
}

/***/ }),

/***/ "./pages/sign_in.tsx":
/*!***************************!*\
  !*** ./pages/sign_in.tsx ***!
  \***************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_withSession__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/withSession */ "./lib/withSession.tsx");
var _jsxFileName = "D:\\Pank\\code\\Pack\\nextjs-blog\\pages\\sign_in.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const SignIn = props => {
  var _errors$username, _errors$password;

  const {
    0: signUpData,
    1: setSignUpData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    username: '',
    password: '',
    passwordConfirmation: ''
  });
  const {
    0: errors,
    1: setErrors
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    username: [],
    password: [],
    passwordConfirmation: []
  });
  const onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/api/v1/sessions`, signUpData).then(() => {
      window.alert('登录成功');
    }, error => {
      if (error.response) {
        const response = error.response;

        if (response.status === 422) {
          setErrors(response.data);
        }
      }
    });
  }, [signUpData]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.user && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 22
    }
  }, "\u5F53\u524D\u767B\u5F55\u7528\u6237\u4E3A ", props.user.username), __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, "\u767B\u5F55"), __jsx("form", {
    onSubmit: onSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "\u7528\u6237\u540D", __jsx("input", {
    type: "text",
    value: signUpData.username,
    onChange: e => setSignUpData(_objectSpread(_objectSpread({}, signUpData), {}, {
      username: e.target.value
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  })), ((_errors$username = errors.username) === null || _errors$username === void 0 ? void 0 : _errors$username.length) > 0 && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 45
    }
  }, errors.username.join(','))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, "\u5BC6\u7801", __jsx("input", {
    type: "password",
    value: signUpData.password,
    onChange: e => setSignUpData(_objectSpread(_objectSpread({}, signUpData), {}, {
      password: e.target.value
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  })), ((_errors$password = errors.password) === null || _errors$password === void 0 ? void 0 : _errors$password.length) > 0 && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 45
    }
  }, errors.password.join(','))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, __jsx("button", {
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, "\u767B\u5F55")))));
};

/* harmony default export */ __webpack_exports__["default"] = (SignIn); // @ts-ignore

const getServerSideProps = Object(lib_withSession__WEBPACK_IMPORTED_MODULE_2__["withSession"])(async context => {
  // @ts-ignore
  const user = context.req.session.get('currentUser');
  return {
    props: {
      user: JSON.parse(JSON.stringify(user))
    }
  };
});

/***/ }),

/***/ 4:
/*!*********************************!*\
  !*** multi ./pages/sign_in.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Pank\code\Pack\nextjs-blog\pages\sign_in.tsx */"./pages/sign_in.tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-iron-session":
/*!************************************!*\
  !*** external "next-iron-session" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-iron-session");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL3dpdGhTZXNzaW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9zaWduX2luLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtaXJvbi1zZXNzaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJ3aXRoU2Vzc2lvbiIsImhhbmRsZXIiLCJ3aXRoSXJvblNlc3Npb24iLCJwYXNzd29yZCIsImNvb2tpZU5hbWUiLCJjb29raWVPcHRpb25zIiwic2VjdXJlIiwiU2lnbkluIiwicHJvcHMiLCJzaWduVXBEYXRhIiwic2V0U2lnblVwRGF0YSIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJwYXNzd29yZENvbmZpcm1hdGlvbiIsImVycm9ycyIsInNldEVycm9ycyIsIm9uU3VibWl0IiwidXNlQ2FsbGJhY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwid2luZG93IiwiYWxlcnQiLCJlcnJvciIsInJlc3BvbnNlIiwic3RhdHVzIiwiZGF0YSIsInVzZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsImpvaW4iLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicmVxIiwic2Vzc2lvbiIsImdldCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFn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RjtBQUNBLFFBQU1OLElBQUksR0FBR00sT0FBTyxDQUFDQyxHQUFSLENBQVlDLE9BQVosQ0FBb0JDLEdBQXBCLENBQXdCLGFBQXhCLENBQWI7QUFDQSxTQUFPO0FBQ0w5QixTQUFLLEVBQUU7QUFDTHFCLFVBQUksRUFBRVUsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlWixJQUFmLENBQVg7QUFERDtBQURGLEdBQVA7QUFLRCxDQVJnRSxDQUExRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVFUCxrQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc2lnbl9pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsImltcG9ydCB7d2l0aElyb25TZXNzaW9ufSBmcm9tICduZXh0LWlyb24tc2Vzc2lvbic7XHJcbmltcG9ydCB7TmV4dEFwaUhhbmRsZXJ9IGZyb20gJ25leHQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhTZXNzaW9uKGhhbmRsZXI6IE5leHRBcGlIYW5kbGVyKSB7XHJcbiAgcmV0dXJuIHdpdGhJcm9uU2Vzc2lvbihoYW5kbGVyLCB7XHJcbiAgICAvLyBwYXNzd29yZDogcHJvY2Vzcy5lbnYuU0VDUkVUX0NPT0tJRV9QQVNTV09SRCxcclxuICAgIHBhc3N3b3JkOiAnYzJhODU0OTAtY2M2MC00ZjIxLTk0ZTgtOGRjNWRkMzIyMGRhJyxcclxuICAgIGNvb2tpZU5hbWU6ICdibG9nJyxcclxuICAgIGNvb2tpZU9wdGlvbnM6IHtzZWN1cmU6IGZhbHNlfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7R2V0U2VydmVyU2lkZVByb3BzLCBOZXh0UGFnZX0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MsIHtBeGlvc0Vycm9yLCBBeGlvc1Jlc3BvbnNlfSBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7Z2V0RGF0YWJhc2VDb25uZWN0aW9ufSBmcm9tICcuLi9saWIvZ2V0RGF0YWJhc2VDb25uZWN0aW9uJztcclxuaW1wb3J0IHtVQVBhcnNlcn0gZnJvbSAndWEtcGFyc2VyLWpzJztcclxuaW1wb3J0IHsgd2l0aFNlc3Npb24gfSBmcm9tICdsaWIvd2l0aFNlc3Npb24nO1xyXG5cclxuY29uc3QgU2lnbkluOiBOZXh0UGFnZTx7dXNlcjogVXNlcn0+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3NpZ25VcERhdGEsIHNldFNpZ25VcERhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgcGFzc3dvcmRDb25maXJtYXRpb246ICcnXHJcbiAgfSk7XHJcbiAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHtcclxuICAgIHVzZXJuYW1lOiBbXSxcclxuICAgIHBhc3N3b3JkOiBbXSxcclxuICAgIHBhc3N3b3JkQ29uZmlybWF0aW9uOiBbXVxyXG4gIH0pO1xyXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGF4aW9zLnBvc3QoYC9hcGkvdjEvc2Vzc2lvbnNgLCBzaWduVXBEYXRhKS50aGVuKCgpID0+IHtcclxuICAgICAgd2luZG93LmFsZXJ0KCfnmbvlvZXmiJDlip8nKVxyXG4gICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlID0gZXJyb3IucmVzcG9uc2U7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDIyKSB7XHJcbiAgICAgICAgICBzZXRFcnJvcnMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LCBbc2lnblVwRGF0YV0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7cHJvcHMudXNlciAmJiA8ZGl2PlxyXG4gICAgICAgIOW9k+WJjeeZu+W9leeUqOaIt+S4uiB7cHJvcHMudXNlci51c2VybmFtZX1cclxuICAgICAgPC9kaXY+fVxyXG4gICAgICA8aDE+55m75b2VPC9oMT5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgIOeUqOaIt+WQjVxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtzaWduVXBEYXRhLnVzZXJuYW1lfSBvbkNoYW5nZT17ZSA9PiBzZXRTaWduVXBEYXRhKHtcclxuICAgICAgICAgICAgICAgIC4uLnNpZ25VcERhdGEsXHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgICB9KX0vPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICB7ZXJyb3JzLnVzZXJuYW1lPy5sZW5ndGggPiAwICYmIDxkaXY+XHJcbiAgICAgICAgICAgICAge2Vycm9ycy51c2VybmFtZS5qb2luKCcsJyl9XHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgIOWvhueggVxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17c2lnblVwRGF0YS5wYXNzd29yZH0gb25DaGFuZ2U9e2UgPT4gc2V0U2lnblVwRGF0YSh7XHJcbiAgICAgICAgICAgICAgICAuLi5zaWduVXBEYXRhLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgICAgfSl9Lz5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAge2Vycm9ycy5wYXNzd29yZD8ubGVuZ3RoID4gMCAmJiA8ZGl2PlxyXG4gICAgICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmQuam9pbignLCcpfVxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPueZu+W9lTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvPlxyXG5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbkluO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3aXRoU2Vzc2lvbihhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBjb25zdCB1c2VyID0gY29udGV4dC5yZXEuc2Vzc2lvbi5nZXQoJ2N1cnJlbnRVc2VyJylcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgdXNlcjogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh1c2VyKSlcclxuICAgIH1cclxuICB9O1xyXG59KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1pcm9uLXNlc3Npb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==