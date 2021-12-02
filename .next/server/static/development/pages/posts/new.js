module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
    }, field.label, field.type === 'textarea' ? __jsx("textarea", {
      onChange: field.onChange,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 42
      }
    }, field.value) : __jsx("input", {
      type: field.type,
      value: field.value,
      onChange: field.onChange,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 15
      }
    })), ((_field$errors = field.errors) === null || _field$errors === void 0 ? void 0 : _field$errors.length) > 0 && __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 40
      }
    }, field.errors.join(',')));
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, props.buttons));
};

/***/ }),

/***/ "./pages/posts/new.tsx":
/*!*****************************!*\
  !*** ./pages/posts/new.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Form */ "./components/Form.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Pank\\code\\Pack\\nextjs-blog\\pages\\posts\\new.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const PostsNew = () => {
  const {
    0: signUpData,
    1: setSignUpData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    title: '',
    content: ''
  });
  const onChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((key, value) => {
    setSignUpData(_objectSpread(_objectSpread({}, signUpData), {}, {
      [key]: value
    }));
  }, [signUpData]);
  const {
    0: errors,
    1: setErrors
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    title: [],
    content: []
  });
  const onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(e => {
    e.preventDefault();
    console.log('onSubmit', e);
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`/api/v1/posts`, signUpData).then(() => {
      window.alert('提交成功');
    }, error => {
      if (error.response) {
        const response = error.response;

        if (response.status === 422) {
          setErrors(response.data);
        }
      }
    });
  }, [signUpData]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Form__WEBPACK_IMPORTED_MODULE_0__["Form"], {
    onSubmit: onSubmit,
    buttons: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("button", {
      type: "submit",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }, "\u63D0\u4EA4")),
    fields: [{
      label: '标题',
      type: 'text',
      value: signUpData.title,
      onChange: e => onChange('title', e.target.value),
      errors: errors.title
    }, {
      label: '内容',
      type: 'textarea',
      value: signUpData.content,
      onChange: e => onChange('content', e.target.value),
      errors: errors.content
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PostsNew);

/***/ }),

/***/ 5:
/*!***********************************!*\
  !*** multi ./pages/posts/new.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Pank\code\Pack\nextjs-blog\pages\posts\new.tsx */"./pages/posts/new.tsx");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9uZXcudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJGb3JtIiwicHJvcHMiLCJvblN1Ym1pdCIsImZpZWxkcyIsIm1hcCIsImZpZWxkIiwibGFiZWwiLCJ0eXBlIiwib25DaGFuZ2UiLCJ2YWx1ZSIsImVycm9ycyIsImxlbmd0aCIsImpvaW4iLCJidXR0b25zIiwiUG9zdHNOZXciLCJzaWduVXBEYXRhIiwic2V0U2lnblVwRGF0YSIsInVzZVN0YXRlIiwidGl0bGUiLCJjb250ZW50IiwidXNlQ2FsbGJhY2siLCJrZXkiLCJzZXRFcnJvcnMiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsIndpbmRvdyIsImFsZXJ0IiwiZXJyb3IiLCJyZXNwb25zZSIsInN0YXR1cyIsImRhdGEiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5Qyxp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dy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcbiIsImltcG9ydCBSZWFjdCwge0NoYW5nZUV2ZW50SGFuZGxlciwgRm9ybUV2ZW50SGFuZGxlciwgUmVhY3RDaGlsZH0gZnJvbSAncmVhY3QnO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBvblN1Ym1pdDogRm9ybUV2ZW50SGFuZGxlcjtcclxuICBmaWVsZHM6IHtcclxuICAgIGxhYmVsOiBzdHJpbmcsXHJcbiAgICB0eXBlOiAndGV4dCcgfCAncGFzc3dvcmQnIHwgJ3RleHRhcmVhJyxcclxuICAgIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsXHJcbiAgICBvbkNoYW5nZTogQ2hhbmdlRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50PixcclxuICAgIGVycm9yczogc3RyaW5nW11cclxuICB9W107XHJcbiAgYnV0dG9uczogUmVhY3RDaGlsZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEZvcm06IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17cHJvcHMub25TdWJtaXR9PlxyXG4gICAgICB7cHJvcHMuZmllbGRzLm1hcChmaWVsZCA9PlxyXG4gICAgICAgIDxkaXYga2V5PXtmaWVsZC5sYWJlbH0+XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIHtmaWVsZC5sYWJlbH1cclxuICAgICAgICAgICAge2ZpZWxkLnR5cGUgPT09ICd0ZXh0YXJlYScgPyA8dGV4dGFyZWEgb25DaGFuZ2U9e2ZpZWxkLm9uQ2hhbmdlfT57ZmllbGQudmFsdWV9PC90ZXh0YXJlYT4gOlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtmaWVsZC50eXBlfSB2YWx1ZT17ZmllbGQudmFsdWV9IG9uQ2hhbmdlPXtmaWVsZC5vbkNoYW5nZX0vPn1cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICB7ZmllbGQuZXJyb3JzPy5sZW5ndGggPiAwICYmIDxkaXY+XHJcbiAgICAgICAgICAgIHtmaWVsZC5lcnJvcnMuam9pbignLCcpfVxyXG4gICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtwcm9wcy5idXR0b25zfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG5cclxufTtcclxuIiwiaW1wb3J0IHtOZXh0UGFnZX0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7Rm9ybX0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb3JtJztcclxuaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcywge0F4aW9zUmVzcG9uc2V9IGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IFBvc3RzTmV3OiBOZXh0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbc2lnblVwRGF0YSwgc2V0U2lnblVwRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBjb250ZW50OiAnJyxcclxuICB9KTtcclxuICBjb25zdCBvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKChrZXksIHZhbHVlKSA9PiB7XHJcbiAgICBzZXRTaWduVXBEYXRhKHtcclxuICAgICAgLi4uc2lnblVwRGF0YSxcclxuICAgICAgW2tleV06IHZhbHVlXHJcbiAgICB9KTtcclxuICB9LCBbc2lnblVwRGF0YV0pO1xyXG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7XHJcbiAgICB0aXRsZTogW10sXHJcbiAgICBjb250ZW50OiBbXSxcclxuICB9KTtcclxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZygnb25TdWJtaXQnLCBlKTtcclxuICAgIGF4aW9zLnBvc3QoYC9hcGkvdjEvcG9zdHNgLCBzaWduVXBEYXRhKS50aGVuKCgpID0+IHtcclxuICAgICAgd2luZG93LmFsZXJ0KCfmj5DkuqTmiJDlip8nKTtcclxuICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZTogQXhpb3NSZXNwb25zZSA9IGVycm9yLnJlc3BvbnNlO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQyMikge1xyXG4gICAgICAgICAgc2V0RXJyb3JzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSwgW3NpZ25VcERhdGFdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XHJcbiAgICAgICAgYnV0dG9ucz17PD5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICDmj5DkuqRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvPn1cclxuICAgICAgICBmaWVsZHM9e1tcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6ICfmoIfpopgnLCB0eXBlOiAndGV4dCcsIHZhbHVlOiBzaWduVXBEYXRhLnRpdGxlLFxyXG4gICAgICAgICAgICBvbkNoYW5nZTogZSA9PiBvbkNoYW5nZSgndGl0bGUnLCBlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgLCBlcnJvcnM6IGVycm9ycy50aXRsZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6ICflhoXlrrknLCB0eXBlOiAndGV4dGFyZWEnLCB2YWx1ZTogc2lnblVwRGF0YS5jb250ZW50LFxyXG4gICAgICAgICAgICBvbkNoYW5nZTogZSA9PiBvbkNoYW5nZSgnY29udGVudCcsIGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAsIGVycm9yczogZXJyb3JzLmNvbnRlbnRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXX0+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0c05ldztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==