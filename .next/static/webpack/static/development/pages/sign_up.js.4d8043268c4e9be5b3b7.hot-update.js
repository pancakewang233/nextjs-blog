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

  var onSubmit = function onSubmit() {};

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, "\u6CE8\u518C"), JSON.stringify(signUpData), __jsx("form", {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
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
      lineNumber: 22,
      columnNumber: 15
    }
  }))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
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
      lineNumber: 31,
      columnNumber: 15
    }
  }))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
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
      lineNumber: 40,
      columnNumber: 15
    }
  }))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "\u6CE8\u518C")))));
};

_s(SignUp, "11qcU9JC4sMldhfNI6/rIwM7VMI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaWduX3VwLnRzeCJdLCJuYW1lcyI6WyJTaWduVXAiLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJwYXNzd29yZENvbmZpcm1hdGlvbiIsInNpZ25VcERhdGEiLCJzZXRTaWduVXBEYXRhIiwib25TdWJtaXQiLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUVBLElBQU1BLE1BQWdCLEdBQUcsU0FBbkJBLE1BQW1CLEdBQU07QUFBQTs7QUFDN0Isa0JBQW9DQyxzREFBUSxDQUFDO0FBQzNDQyxZQUFRLEVBQUMsRUFEa0M7QUFFM0NDLFlBQVEsRUFBRSxFQUZpQztBQUczQ0Msd0JBQW9CLEVBQUU7QUFIcUIsR0FBRCxDQUE1QztBQUFBLE1BQU9DLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBS0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBSSxDQUVwQixDQUZEOztBQUdBLFNBQ0UsbUVBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVHQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosVUFBZixDQUZILEVBR0U7QUFBTSxZQUFRLEVBQUVFLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRUU7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixTQUFLLEVBQUVGLFVBQVUsQ0FBQ0gsUUFBckM7QUFBK0MsWUFBUSxFQUFFLGtCQUFBUSxDQUFDO0FBQUEsYUFBR0osYUFBYSxpQ0FDckVELFVBRHFFO0FBRXhFSCxnQkFBUSxFQUFFUSxDQUFDLENBQUNDLE1BQUYsQ0FBU0M7QUFGcUQsU0FBaEI7QUFBQSxLQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixDQURGLEVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRUU7QUFBTyxRQUFJLEVBQUMsVUFBWjtBQUF1QixTQUFLLEVBQUVQLFVBQVUsQ0FBQ0YsUUFBekM7QUFBbUQsWUFBUSxFQUFFLGtCQUFBTyxDQUFDO0FBQUEsYUFBR0osYUFBYSxpQ0FDekVELFVBRHlFO0FBRTVFRixnQkFBUSxFQUFFTyxDQUFDLENBQUNDLE1BQUYsQ0FBU0M7QUFGeUQsU0FBaEI7QUFBQSxLQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixDQVZGLEVBbUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUVFO0FBQU8sUUFBSSxFQUFDLFVBQVo7QUFBd0IsU0FBSyxFQUFFUCxVQUFVLENBQUNELG9CQUExQztBQUFnRSxZQUFRLEVBQUUsa0JBQUFNLENBQUM7QUFBQSxhQUFHSixhQUFhLGlDQUN0RkQsVUFEc0Y7QUFFekZELDRCQUFvQixFQUFFTSxDQUFDLENBQUNDLE1BQUYsQ0FBU0M7QUFGMEQsU0FBaEI7QUFBQSxLQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixDQW5CRixFQTRCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLENBNUJGLENBREYsQ0FIRixDQURGO0FBeUNELENBbEREOztHQUFNWixNOztLQUFBQSxNO0FBb0RTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc2lnbl91cC5qcy40ZDgwNDMyNjhjNGU5YmU1YjNiNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZXh0UGFnZX0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBTaWduVXA6IE5leHRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzaWduVXBEYXRhLCBzZXRTaWduVXBEYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIHVzZXJuYW1lOicnLFxyXG4gICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgcGFzc3dvcmRDb25maXJtYXRpb246ICcnXHJcbiAgfSlcclxuICBjb25zdCBvblN1Ym1pdCA9ICgpPT57XHJcbiAgICBcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMT7ms6jlhow8L2gxPlxyXG4gICAgICB7SlNPTi5zdHJpbmdpZnkoc2lnblVwRGF0YSl9XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICDnlKjmiLflkI1cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17c2lnblVwRGF0YS51c2VybmFtZX0gb25DaGFuZ2U9e2U9PiBzZXRTaWduVXBEYXRhKHtcclxuICAgICAgICAgICAgICAgIC4uLnNpZ25VcERhdGEsXHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgICB9KX0vPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAg5a+G56CBXHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtzaWduVXBEYXRhLnBhc3N3b3JkfSBvbkNoYW5nZT17ZT0+IHNldFNpZ25VcERhdGEoe1xyXG4gICAgICAgICAgICAgICAgLi4uc2lnblVwRGF0YSxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICAgIH0pfS8+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICDnoa7orqTlr4bnoIFcclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgIHZhbHVlPXtzaWduVXBEYXRhLnBhc3N3b3JkQ29uZmlybWF0aW9ufSBvbkNoYW5nZT17ZT0+IHNldFNpZ25VcERhdGEoe1xyXG4gICAgICAgICAgICAgICAgLi4uc2lnblVwRGF0YSxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkQ29uZmlybWF0aW9uOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICAgIH0pfS8+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPuazqOWGjDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvPlxyXG5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnblVwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9