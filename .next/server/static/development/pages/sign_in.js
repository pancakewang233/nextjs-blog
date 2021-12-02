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
    password: process.env.SECRET,
    // password: 'c2a85490-cc60-4f21-94e8-8dc5dd3220da',
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
/* harmony import */ var components_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Form */ "./components/Form.tsx");
var _jsxFileName = "D:\\Pank\\code\\Pack\\nextjs-blog\\pages\\sign_in.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const SignIn = props => {
  const {
    0: signUpData,
    1: setSignUpData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    username: '',
    password: ''
  });
  const {
    0: errors,
    1: setErrors
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    username: [],
    password: []
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
  const onChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((key, value) => {
    setSignUpData(_objectSpread(_objectSpread({}, signUpData), {}, {
      [key]: value
    }));
  }, [signUpData]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.user && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 22
    }
  }, "\u5F53\u524D\u767B\u5F55\u7528\u6237\u4E3A ", props.user.username), __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, "\u767B\u5F55"), __jsx(components_Form__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    onSubmit: onSubmit,
    buttons: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("button", {
      type: "submit",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }
    }, "\u767B\u5F55")),
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
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SignIn);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9saWIvd2l0aFNlc3Npb24udHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL3NpZ25faW4udHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1pcm9uLXNlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkZvcm0iLCJwcm9wcyIsIm9uU3VibWl0IiwiZmllbGRzIiwibWFwIiwiZmllbGQiLCJsYWJlbCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXJyb3JzIiwibGVuZ3RoIiwiam9pbiIsImJ1dHRvbnMiLCJ3aXRoU2Vzc2lvbiIsImhhbmRsZXIiLCJ3aXRoSXJvblNlc3Npb24iLCJwYXNzd29yZCIsInByb2Nlc3MiLCJlbnYiLCJTRUNSRVQiLCJjb29raWVOYW1lIiwiY29va2llT3B0aW9ucyIsInNlY3VyZSIsIlNpZ25JbiIsInNpZ25VcERhdGEiLCJzZXRTaWduVXBEYXRhIiwidXNlU3RhdGUiLCJ1c2VybmFtZSIsInNldEVycm9ycyIsInVzZUNhbGxiYWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsIndpbmRvdyIsImFsZXJ0IiwiZXJyb3IiLCJyZXNwb25zZSIsInN0YXR1cyIsImRhdGEiLCJrZXkiLCJ1c2VyIiwidGFyZ2V0IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInJlcSIsInNlc3Npb24iLCJnZXQiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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LEVBQUVzQixDQUFDLElBQUl0QixRQUFRLENBQUMsVUFBRCxFQUFhc0IsQ0FBQyxDQUFDYSxNQUFGLENBQVNwQyxLQUF0QixDQUZ6QjtBQUdJRSxZQUFNLEVBQUVBLE1BQU0sQ0FBQ2tCO0FBSG5CLEtBRE0sRUFNTjtBQUNFdEIsV0FBSyxFQUFFLElBRFQ7QUFDZUMsVUFBSSxFQUFFLFVBRHJCO0FBQ2lDQyxXQUFLLEVBQUVpQixVQUFVLENBQUNSLFFBRG5EO0FBRUVSLGNBQVEsRUFBRXNCLENBQUMsSUFBSXRCLFFBQVEsQ0FBQyxVQUFELEVBQWFzQixDQUFDLENBQUNhLE1BQUYsQ0FBU3BDLEtBQXRCLENBRnpCO0FBR0lFLFlBQU0sRUFBRUEsTUFBTSxDQUFDTztBQUhuQixLQU5NLENBUFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBREY7QUE0QkQsQ0F4REQ7O0FBMERlTyxxRUFBZjtBQUVPLE1BQU1xQixrQkFBc0MsR0FBRy9CLG1FQUFXLENBQy9ELE1BQU9nQyxPQUFQLElBQThDO0FBQzVDO0FBQ0EsUUFBTUgsSUFBSSxHQUFHRyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsT0FBWixDQUFvQkMsR0FBcEIsQ0FBd0IsYUFBeEIsQ0FBYjtBQUNBLFNBQU87QUFDTGhELFNBQUssRUFBRTtBQUNMMEMsVUFBSSxFQUFFTyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxTQUFMLENBQWVULElBQWYsQ0FBWDtBQUREO0FBREYsR0FBUDtBQUtELENBVDhELENBQTFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEVQLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxzaWduX2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuIiwiaW1wb3J0IFJlYWN0LCB7Q2hhbmdlRXZlbnRIYW5kbGVyLCBGb3JtRXZlbnRIYW5kbGVyLCBSZWFjdENoaWxkfSBmcm9tICdyZWFjdCc7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIG9uU3VibWl0OiBGb3JtRXZlbnRIYW5kbGVyO1xyXG4gIGZpZWxkczoge1xyXG4gICAgbGFiZWw6IHN0cmluZyxcclxuICAgIHR5cGU6ICd0ZXh0JyB8ICdwYXNzd29yZCcsXHJcbiAgICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLFxyXG4gICAgb25DaGFuZ2U6IENoYW5nZUV2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50PixcclxuICAgIGVycm9yczogc3RyaW5nW11cclxuICB9W107XHJcbiAgYnV0dG9uczogUmVhY3RDaGlsZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEZvcm06IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17cHJvcHMub25TdWJtaXR9PlxyXG4gICAgICB7cHJvcHMuZmllbGRzLm1hcChmaWVsZCA9PlxyXG4gICAgICAgIDxkaXYga2V5PXtmaWVsZC5sYWJlbH0+XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIHtmaWVsZC5sYWJlbH1cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9e2ZpZWxkLnR5cGV9IHZhbHVlPXtmaWVsZC52YWx1ZX0gb25DaGFuZ2U9e2ZpZWxkLm9uQ2hhbmdlfS8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAge2ZpZWxkLmVycm9ycz8ubGVuZ3RoID4gMCAmJiA8ZGl2PlxyXG4gICAgICAgICAgICB7ZmllbGQuZXJyb3JzLmpvaW4oJywnKX1cclxuICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7cHJvcHMuYnV0dG9uc31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxuXHJcbn07XHJcbiIsImltcG9ydCB7d2l0aElyb25TZXNzaW9ufSBmcm9tICduZXh0LWlyb24tc2Vzc2lvbic7XHJcbmltcG9ydCB7R2V0U2VydmVyU2lkZVByb3BzLCBOZXh0QXBpSGFuZGxlcn0gZnJvbSAnbmV4dCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2l0aFNlc3Npb24oaGFuZGxlcjogTmV4dEFwaUhhbmRsZXIgfCBHZXRTZXJ2ZXJTaWRlUHJvcHMpIHtcclxuICByZXR1cm4gd2l0aElyb25TZXNzaW9uKGhhbmRsZXIsIHtcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5TRUNSRVQsXHJcbiAgICAvLyBwYXNzd29yZDogJ2MyYTg1NDkwLWNjNjAtNGYyMS05NGU4LThkYzVkZDMyMjBkYScsXHJcbiAgICBjb29raWVOYW1lOiAnYmxvZycsXHJcbiAgICBjb29raWVPcHRpb25zOiB7c2VjdXJlOiBmYWxzZX1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQge0dldFNlcnZlclNpZGVQcm9wcywgR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dCwgTmV4dFBhZ2V9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zLCB7QXhpb3NFcnJvciwgQXhpb3NSZXNwb25zZX0gZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge2dldERhdGFiYXNlQ29ubmVjdGlvbn0gZnJvbSAnLi4vbGliL2dldERhdGFiYXNlQ29ubmVjdGlvbic7XHJcbmltcG9ydCB7VUFQYXJzZXJ9IGZyb20gJ3VhLXBhcnNlci1qcyc7XHJcbmltcG9ydCB7d2l0aFNlc3Npb259IGZyb20gJ2xpYi93aXRoU2Vzc2lvbic7XHJcbmltcG9ydCB7Rm9ybX0gZnJvbSAnY29tcG9uZW50cy9Gb3JtJztcclxuXHJcbmNvbnN0IFNpZ25JbjogTmV4dFBhZ2U8eyB1c2VyOiBVc2VyIH0+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3NpZ25VcERhdGEsIHNldFNpZ25VcERhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgcGFzc3dvcmQ6ICcnLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7XHJcbiAgICB1c2VybmFtZTogW10sXHJcbiAgICBwYXNzd29yZDogW10sXHJcbiAgfSk7XHJcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYXhpb3MucG9zdChgL2FwaS92MS9zZXNzaW9uc2AsIHNpZ25VcERhdGEpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoJ+eZu+W9leaIkOWKnycpO1xyXG4gICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlID0gZXJyb3IucmVzcG9uc2U7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDIyKSB7XHJcbiAgICAgICAgICBzZXRFcnJvcnMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LCBbc2lnblVwRGF0YV0pO1xyXG4gIGNvbnN0IG9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGtleSx2YWx1ZSk9PntcclxuICAgIHNldFNpZ25VcERhdGEoe1xyXG4gICAgICAuLi5zaWduVXBEYXRhLFxyXG4gICAgICBba2V5XTogdmFsdWVcclxuICAgIH0pXHJcbiAgfSxbc2lnblVwRGF0YV0pXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtwcm9wcy51c2VyICYmIDxkaXY+XHJcbiAgICAgICAg5b2T5YmN55m75b2V55So5oi35Li6IHtwcm9wcy51c2VyLnVzZXJuYW1lfVxyXG4gICAgICA8L2Rpdj59XHJcbiAgICAgIDxoMT7nmbvlvZU8L2gxPlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIG9uU3VibWl0PXtvblN1Ym1pdH1cclxuICAgICAgICBidXR0b25zPXs8PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgIOeZu+W9lVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC8+fVxyXG4gICAgICAgIGZpZWxkcz17W1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogJ+eUqOaIt+WQjScsIHR5cGU6ICd0ZXh0JywgdmFsdWU6IHNpZ25VcERhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBlID0+IG9uQ2hhbmdlKCd1c2VybmFtZScsIGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAsIGVycm9yczogZXJyb3JzLnVzZXJuYW1lXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogJ+WvhueggScsIHR5cGU6ICdwYXNzd29yZCcsIHZhbHVlOiBzaWduVXBEYXRhLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICBvbkNoYW5nZTogZSA9PiBvbkNoYW5nZSgncGFzc3dvcmQnLCBlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgLCBlcnJvcnM6IGVycm9ycy5wYXNzd29yZFxyXG4gICAgICAgICAgfV19PlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8Lz5cclxuXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25JbjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IHdpdGhTZXNzaW9uKFxyXG4gIGFzeW5jIChjb250ZXh0OiBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0KSA9PiB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBjb25zdCB1c2VyID0gY29udGV4dC5yZXEuc2Vzc2lvbi5nZXQoJ2N1cnJlbnRVc2VyJyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIHVzZXI6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodXNlcikpXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtaXJvbi1zZXNzaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=