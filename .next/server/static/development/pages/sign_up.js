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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Form.tsx":
/*!*****************************!*\
  !*** ./components/Form.tsx ***!
  \*****************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Pank\\code\\Pack\\nextjs-blog\\components\\Form.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Form = props => {
  return __jsx("form", {
    onSubmit: props.onSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, props.fields.map(field => {
    var _field$errors;

    return __jsx("div", {
      key: field.label,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, __jsx("label", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }
    }, field.label, __jsx("input", {
      type: field.type,
      value: field.value,
      onChange: field.onChange,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    })), ((_field$errors = field.errors) === null || _field$errors === void 0 ? void 0 : _field$errors.length) > 0 && __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 40
      }
    }, field.errors.join(',')));
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, props.buttons));
};

/***/ }),

/***/ "./pages/sign_up.tsx":
/*!***************************!*\
  !*** ./pages/sign_up.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Form */ "./components/Form.tsx");
var _jsxFileName = "D:\\Pank\\code\\Pack\\nextjs-blog\\pages\\sign_up.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const SignUp = () => {
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
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/api/v1/users`, signUpData).then(() => {
      window.alert('注册成功');
      window.location.href = '/sign_in';
    }, error => {
      if (error.response) {
        const response = error.response;

        if (response.status === 422) {
          setErrors(response.data);
        }
      }
    });
  }, [signUpData]);
  const onChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((key, value) => {
    setSignUpData(_objectSpread(_objectSpread({}, signUpData), {}, {
      [key]: value
    }));
  }, [signUpData]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, "\u6CE8\u518C"), __jsx(_components_Form__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onSubmit: onSubmit,
    buttons: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("button", {
      type: "submit",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }
    }, "\u6CE8\u518C")),
    fields: [{
      label: '用户名',
      type: 'text',
      value: signUpData.username,
      onChange: e => onChange('username', e.target.value),
      errors: errors.username
    }, {
      label: '密码',
      type: 'password',
      value: signUpData.password,
      onChange: e => onChange('password', e.target.value),
      errors: errors.password
    }, {
      label: '确认密码',
      type: 'password',
      value: signUpData.passwordConfirmation,
      onChange: e => onChange('passwordConfirmation', e.target.value),
      errors: errors.passwordConfirmation
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SignUp);

/***/ }),

/***/ 3:
/*!*********************************!*\
  !*** multi ./pages/sign_up.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Pank\code\Pack\nextjs-blog\pages\sign_up.tsx */"./pages/sign_up.tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9zaWduX3VwLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiRm9ybSIsInByb3BzIiwib25TdWJtaXQiLCJmaWVsZHMiLCJtYXAiLCJmaWVsZCIsImxhYmVsIiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlcnJvcnMiLCJsZW5ndGgiLCJqb2luIiwiYnV0dG9ucyIsIlNpZ25VcCIsInNpZ25VcERhdGEiLCJzZXRTaWduVXBEYXRhIiwidXNlU3RhdGUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwicGFzc3dvcmRDb25maXJtYXRpb24iLCJzZXRFcnJvcnMiLCJ1c2VDYWxsYmFjayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJ3aW5kb3ciLCJhbGVydCIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJkYXRhIiwia2V5IiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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QUFFQSxNQUFNLENBQUNVO0FBSG5CLEtBWE0sQ0FQVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERjtBQTBFRCxDQXpHRDs7QUEyR2VOLHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakhBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxzaWduX3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiaW1wb3J0IFJlYWN0LCB7Q2hhbmdlRXZlbnRIYW5kbGVyLCBGb3JtRXZlbnRIYW5kbGVyLCBSZWFjdENoaWxkfSBmcm9tICdyZWFjdCc7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIG9uU3VibWl0OiBGb3JtRXZlbnRIYW5kbGVyO1xyXG4gIGZpZWxkczoge1xyXG4gICAgbGFiZWw6IHN0cmluZyxcclxuICAgIHR5cGU6ICd0ZXh0JyB8ICdwYXNzd29yZCcsXHJcbiAgICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLFxyXG4gICAgb25DaGFuZ2U6IENoYW5nZUV2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50PixcclxuICAgIGVycm9yczogc3RyaW5nW11cclxuICB9W107XHJcbiAgYnV0dG9uczogUmVhY3RDaGlsZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEZvcm06IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17cHJvcHMub25TdWJtaXR9PlxyXG4gICAgICB7cHJvcHMuZmllbGRzLm1hcChmaWVsZCA9PlxyXG4gICAgICAgIDxkaXYga2V5PXtmaWVsZC5sYWJlbH0+XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIHtmaWVsZC5sYWJlbH1cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9e2ZpZWxkLnR5cGV9IHZhbHVlPXtmaWVsZC52YWx1ZX0gb25DaGFuZ2U9e2ZpZWxkLm9uQ2hhbmdlfS8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAge2ZpZWxkLmVycm9ycz8ubGVuZ3RoID4gMCAmJiA8ZGl2PlxyXG4gICAgICAgICAgICB7ZmllbGQuZXJyb3JzLmpvaW4oJywnKX1cclxuICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7cHJvcHMuYnV0dG9uc31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxuXHJcbn07XHJcbiIsImltcG9ydCB7TmV4dFBhZ2V9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zLCB7QXhpb3NFcnJvciwgQXhpb3NSZXNwb25zZX0gZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge3NldH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHtGb3JtfSBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm0nO1xyXG5cclxuY29uc3QgU2lnblVwOiBOZXh0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbc2lnblVwRGF0YSwgc2V0U2lnblVwRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB1c2VybmFtZTogJycsXHJcbiAgICBwYXNzd29yZDogJycsXHJcbiAgICBwYXNzd29yZENvbmZpcm1hdGlvbjogJydcclxuICB9KTtcclxuICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe1xyXG4gICAgdXNlcm5hbWU6IFtdLFxyXG4gICAgcGFzc3dvcmQ6IFtdLFxyXG4gICAgcGFzc3dvcmRDb25maXJtYXRpb246IFtdXHJcbiAgfSk7XHJcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYXhpb3MucG9zdChgL2FwaS92MS91c2Vyc2AsIHNpZ25VcERhdGEpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoJ+azqOWGjOaIkOWKnycpO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvc2lnbl9pbic7XHJcbiAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2U6IEF4aW9zUmVzcG9uc2UgPSBlcnJvci5yZXNwb25zZTtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MjIpIHtcclxuICAgICAgICAgIHNldEVycm9ycyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sIFtzaWduVXBEYXRhXSk7XHJcbiAgY29uc3Qgb25DaGFuZ2UgPSB1c2VDYWxsYmFjaygoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgc2V0U2lnblVwRGF0YSh7XHJcbiAgICAgIC4uLnNpZ25VcERhdGEsXHJcbiAgICAgIFtrZXldOiB2YWx1ZVxyXG4gICAgfSk7XHJcbiAgfSwgW3NpZ25VcERhdGFdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgxPuazqOWGjDwvaDE+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxyXG4gICAgICAgIGJ1dHRvbnM9ezw+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAg5rOo5YaMXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8Lz59XHJcbiAgICAgICAgZmllbGRzPXtbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAn55So5oi35ZCNJywgdHlwZTogJ3RleHQnLCB2YWx1ZTogc2lnblVwRGF0YS51c2VybmFtZSxcclxuICAgICAgICAgICAgb25DaGFuZ2U6IGUgPT4gb25DaGFuZ2UoJ3VzZXJuYW1lJywgZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICwgZXJyb3JzOiBlcnJvcnMudXNlcm5hbWVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAn5a+G56CBJywgdHlwZTogJ3Bhc3N3b3JkJywgdmFsdWU6IHNpZ25VcERhdGEucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBlID0+IG9uQ2hhbmdlKCdwYXNzd29yZCcsIGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAsIGVycm9yczogZXJyb3JzLnBhc3N3b3JkXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogJ+ehruiupOWvhueggScsIHR5cGU6ICdwYXNzd29yZCcsIHZhbHVlOiBzaWduVXBEYXRhLnBhc3N3b3JkQ29uZmlybWF0aW9uLFxyXG4gICAgICAgICAgICBvbkNoYW5nZTogZSA9PiBvbkNoYW5nZSgncGFzc3dvcmRDb25maXJtYXRpb24nLCBlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgLCBlcnJvcnM6IGVycm9ycy5wYXNzd29yZENvbmZpcm1hdGlvblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF19PlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICAgIHsvKjxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+Ki99XHJcbiAgICAgIHsvKiAgPGRpdj4qL31cclxuICAgICAgey8qICAgIDxkaXY+Ki99XHJcbiAgICAgIHsvKiAgICAgIDxsYWJlbD4qL31cclxuICAgICAgey8qICAgICAgICDnlKjmiLflkI0qL31cclxuICAgICAgey8qICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17c2lnblVwRGF0YS51c2VybmFtZX0gb25DaGFuZ2U9e2UgPT4gc2V0U2lnblVwRGF0YSh7Ki99XHJcbiAgICAgIHsvKiAgICAgICAgICAuLi5zaWduVXBEYXRhLCovfVxyXG4gICAgICB7LyogICAgICAgICAgdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlKi99XHJcbiAgICAgIHsvKiAgICAgICAgfSl9Lz4qL31cclxuICAgICAgey8qICAgICAgPC9sYWJlbD4qL31cclxuICAgICAgey8qICAgICAge2Vycm9ycy51c2VybmFtZT8ubGVuZ3RoID4gMCAmJiA8ZGl2PiovfVxyXG4gICAgICB7LyogICAgICAgIHtlcnJvcnMudXNlcm5hbWUuam9pbignLCcpfSovfVxyXG4gICAgICB7LyogICAgICA8L2Rpdj59Ki99XHJcbiAgICAgIHsvKiAgICA8L2Rpdj4qL31cclxuICAgICAgey8qICAgIDxkaXY+Ki99XHJcbiAgICAgIHsvKiAgICAgIDxsYWJlbD4qL31cclxuICAgICAgey8qICAgICAgICDlr4bnoIEqL31cclxuICAgICAgey8qICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3NpZ25VcERhdGEucGFzc3dvcmR9IG9uQ2hhbmdlPXtlID0+IHNldFNpZ25VcERhdGEoeyovfVxyXG4gICAgICB7LyogICAgICAgICAgLi4uc2lnblVwRGF0YSwqL31cclxuICAgICAgey8qICAgICAgICAgIHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSovfVxyXG4gICAgICB7LyogICAgICAgIH0pfS8+Ki99XHJcbiAgICAgIHsvKiAgICAgIDwvbGFiZWw+Ki99XHJcbiAgICAgIHsvKiAgICAgIHtlcnJvcnMucGFzc3dvcmQ/Lmxlbmd0aCA+IDAgJiYgPGRpdj4qL31cclxuICAgICAgey8qICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkLmpvaW4oJywnKX0qL31cclxuICAgICAgey8qICAgICAgPC9kaXY+fSovfVxyXG4gICAgICB7LyogICAgPC9kaXY+Ki99XHJcbiAgICAgIHsvKiAgICA8ZGl2PiovfVxyXG4gICAgICB7LyogICAgICA8bGFiZWw+Ki99XHJcbiAgICAgIHsvKiAgICAgICAg56Gu6K6k5a+G56CBKi99XHJcbiAgICAgIHsvKiAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtzaWduVXBEYXRhLnBhc3N3b3JkQ29uZmlybWF0aW9ufSBvbkNoYW5nZT17ZSA9PiBzZXRTaWduVXBEYXRhKHsqL31cclxuICAgICAgey8qICAgICAgICAgIC4uLnNpZ25VcERhdGEsKi99XHJcbiAgICAgIHsvKiAgICAgICAgICBwYXNzd29yZENvbmZpcm1hdGlvbjogZS50YXJnZXQudmFsdWUqL31cclxuICAgICAgey8qICAgICAgICB9KX0vPiovfVxyXG4gICAgICB7LyogICAgICA8L2xhYmVsPiovfVxyXG4gICAgICB7LyogICAgICB7ZXJyb3JzLnBhc3N3b3JkQ29uZmlybWF0aW9uPy5sZW5ndGggPiAwICYmIDxkaXY+Ki99XHJcbiAgICAgIHsvKiAgICAgICAge2Vycm9ycy5wYXNzd29yZENvbmZpcm1hdGlvbi5qb2luKCcsJyl9Ki99XHJcbiAgICAgIHsvKiAgICAgIDwvZGl2Pn0qL31cclxuICAgICAgey8qICAgIDwvZGl2PiovfVxyXG4gICAgICB7LyogICAgPGRpdj4qL31cclxuICAgICAgey8qICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+5rOo5YaMPC9idXR0b24+Ki99XHJcbiAgICAgIHsvKiAgICA8L2Rpdj4qL31cclxuICAgICAgey8qICA8L2Rpdj4qL31cclxuICAgICAgey8qPC9mb3JtPiovfVxyXG4gICAgPC8+XHJcblxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduVXA7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=