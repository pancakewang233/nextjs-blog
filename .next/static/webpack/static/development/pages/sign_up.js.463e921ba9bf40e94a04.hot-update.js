webpackHotUpdate("static\\development\\pages\\sign_up.js",{

/***/ "./pages/sign_up.tsx":
/*!***************************!*\
  !*** ./pages/sign_up.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


var _this = undefined,
    _jsxFileName = "D:\\Pank\\code\\Pack\\nextjs-blog\\pages\\sign_up.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var SignUp = function SignUp() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    username: '',
    password: '',
    passwordConfirmation: ''
  }),
      signUpData = _useState[0],
      setSignUpData = _useState[1];

  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/v1/users", signUpData);
  }, [signUpData]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, "\u6CE8\u518C"), JSON.stringify(signUpData), __jsx("form", {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "\u7528\u6237\u540D", __jsx("input", {
    type: "text",
    value: signUpData.username,
    onChange: function onChange(e) {
      return setSignUpData(_objectSpread(_objectSpread({}, signUpData), {}, {
        username: e.target.value
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, "\u5BC6\u7801", __jsx("input", {
    type: "password",
    value: signUpData.password,
    onChange: function onChange(e) {
      return setSignUpData(_objectSpread(_objectSpread({}, signUpData), {}, {
        password: e.target.value
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "\u786E\u8BA4\u5BC6\u7801", __jsx("input", {
    type: "password",
    value: signUpData.passwordConfirmation,
    onChange: function onChange(e) {
      return setSignUpData(_objectSpread(_objectSpread({}, signUpData), {}, {
        passwordConfirmation: e.target.value
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, "\u6CE8\u518C")))));
};

_s(SignUp, "MqqUArWoFhaph9tfT9/2HpR4LmQ=");

_c = SignUp;
/* harmony default export */ __webpack_exports__["default"] = (SignUp);

var _c;

$RefreshReg$(_c, "SignUp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaWduX3VwLnRzeCJdLCJuYW1lcyI6WyJTaWduVXAiLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJwYXNzd29yZENvbmZpcm1hdGlvbiIsInNpZ25VcERhdGEiLCJzZXRTaWduVXBEYXRhIiwib25TdWJtaXQiLCJ1c2VDYWxsYmFjayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwicG9zdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBZ0IsR0FBRyxTQUFuQkEsTUFBbUIsR0FBTTtBQUFBOztBQUM3QixrQkFBb0NDLHNEQUFRLENBQUM7QUFDM0NDLFlBQVEsRUFBQyxFQURrQztBQUUzQ0MsWUFBUSxFQUFFLEVBRmlDO0FBRzNDQyx3QkFBb0IsRUFBRTtBQUhxQixHQUFELENBQTVDO0FBQUEsTUFBT0MsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFLQSxNQUFNQyxRQUFRLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsQ0FBRCxFQUFLO0FBQ2hDQSxLQUFDLENBQUNDLGNBQUY7QUFDQUMsZ0RBQUssQ0FBQ0MsSUFBTixrQkFBNEJQLFVBQTVCO0FBQ0QsR0FIMkIsRUFHMUIsQ0FBQ0EsVUFBRCxDQUgwQixDQUE1QjtBQUlBLFNBQ0UsbUVBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVHUSxJQUFJLENBQUNDLFNBQUwsQ0FBZVQsVUFBZixDQUZILEVBR0U7QUFBTSxZQUFRLEVBQUVFLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRUU7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixTQUFLLEVBQUVGLFVBQVUsQ0FBQ0gsUUFBckM7QUFBK0MsWUFBUSxFQUFFLGtCQUFBTyxDQUFDO0FBQUEsYUFBR0gsYUFBYSxpQ0FDckVELFVBRHFFO0FBRXhFSCxnQkFBUSxFQUFFTyxDQUFDLENBQUNNLE1BQUYsQ0FBU0M7QUFGcUQsU0FBaEI7QUFBQSxLQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixDQURGLEVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRUU7QUFBTyxRQUFJLEVBQUMsVUFBWjtBQUF1QixTQUFLLEVBQUVYLFVBQVUsQ0FBQ0YsUUFBekM7QUFBbUQsWUFBUSxFQUFFLGtCQUFBTSxDQUFDO0FBQUEsYUFBR0gsYUFBYSxpQ0FDekVELFVBRHlFO0FBRTVFRixnQkFBUSxFQUFFTSxDQUFDLENBQUNNLE1BQUYsQ0FBU0M7QUFGeUQsU0FBaEI7QUFBQSxLQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixDQVZGLEVBbUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUVFO0FBQU8sUUFBSSxFQUFDLFVBQVo7QUFBd0IsU0FBSyxFQUFFWCxVQUFVLENBQUNELG9CQUExQztBQUFnRSxZQUFRLEVBQUUsa0JBQUFLLENBQUM7QUFBQSxhQUFHSCxhQUFhLGlDQUN0RkQsVUFEc0Y7QUFFekZELDRCQUFvQixFQUFFSyxDQUFDLENBQUNNLE1BQUYsQ0FBU0M7QUFGMEQsU0FBaEI7QUFBQSxLQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixDQW5CRixFQTRCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLENBNUJGLENBREYsQ0FIRixDQURGO0FBeUNELENBbkREOztHQUFNaEIsTTs7S0FBQUEsTTtBQXFEU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHNpZ25fdXAuanMuNDYzZTkyMWJhOWJmNDBlOTRhMDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmV4dFBhZ2V9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IFNpZ25VcDogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NpZ25VcERhdGEsIHNldFNpZ25VcERhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgdXNlcm5hbWU6JycsXHJcbiAgICBwYXNzd29yZDogJycsXHJcbiAgICBwYXNzd29yZENvbmZpcm1hdGlvbjogJydcclxuICB9KVxyXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGF4aW9zLnBvc3QoYC9hcGkvdjEvdXNlcnNgLCBzaWduVXBEYXRhKVxyXG4gIH0sW3NpZ25VcERhdGFdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDE+5rOo5YaMPC9oMT5cclxuICAgICAge0pTT04uc3RyaW5naWZ5KHNpZ25VcERhdGEpfVxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAg55So5oi35ZCNXHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3NpZ25VcERhdGEudXNlcm5hbWV9IG9uQ2hhbmdlPXtlPT4gc2V0U2lnblVwRGF0YSh7XHJcbiAgICAgICAgICAgICAgICAuLi5zaWduVXBEYXRhLFxyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgICAgfSl9Lz5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgIOWvhueggVxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17c2lnblVwRGF0YS5wYXNzd29yZH0gb25DaGFuZ2U9e2U9PiBzZXRTaWduVXBEYXRhKHtcclxuICAgICAgICAgICAgICAgIC4uLnNpZ25VcERhdGEsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgICB9KX0vPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAg56Gu6K6k5a+G56CBXHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiICB2YWx1ZT17c2lnblVwRGF0YS5wYXNzd29yZENvbmZpcm1hdGlvbn0gb25DaGFuZ2U9e2U9PiBzZXRTaWduVXBEYXRhKHtcclxuICAgICAgICAgICAgICAgIC4uLnNpZ25VcERhdGEsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZENvbmZpcm1hdGlvbjogZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgICB9KX0vPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7ms6jlhow8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8Lz5cclxuXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25VcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==