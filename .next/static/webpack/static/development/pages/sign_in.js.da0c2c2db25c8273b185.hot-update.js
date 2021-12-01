webpackHotUpdate("static\\development\\pages\\sign_in.js",{

/***/ "./pages/sign_in.tsx":
/*!***************************!*\
  !*** ./pages/sign_in.tsx ***!
  \***************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


var _this = undefined,
    _jsxFileName = "D:\\Pank\\code\\Pack\\nextjs-blog\\pages\\sign_in.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var SignIn = function SignIn(props) {
  _s();

  var _errors$username, _errors$password;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    username: '',
    password: '',
    passwordConfirmation: ''
  }),
      signUpData = _useState[0],
      setSignUpData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    username: [],
    password: [],
    passwordConfirmation: []
  }),
      errors = _useState2[0],
      setErrors = _useState2[1];

  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/v1/sessions", signUpData).then(function () {
      window.alert('登录成功');
    }, function (error) {
      if (error.response) {
        var response = error.response;

        if (response.status === 422) {
          setErrors(response.data);
        }
      }
    });
  }, [signUpData]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, props.user && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 22
    }
  }, "\u5F53\u524D\u767B\u5F55\u7528\u6237\u4E3A ", props.user.username), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, "\u767B\u5F55"), __jsx("form", {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
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
      lineNumber: 43,
      columnNumber: 15
    }
  })), ((_errors$username = errors.username) === null || _errors$username === void 0 ? void 0 : _errors$username.length) > 0 && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 45
    }
  }, errors.username.join(','))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
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
      lineNumber: 55,
      columnNumber: 15
    }
  })), ((_errors$password = errors.password) === null || _errors$password === void 0 ? void 0 : _errors$password.length) > 0 && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 45
    }
  }, errors.password.join(','))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, "\u767B\u5F55")))));
};

_s(SignIn, "z6elDqElvPo4PdLGQgL2QD7yDgo=");

_c = SignIn;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (SignIn); // @ts-ignore

var _c;

$RefreshReg$(_c, "SignIn");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaWduX2luLnRzeCJdLCJuYW1lcyI6WyJTaWduSW4iLCJwcm9wcyIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInBhc3N3b3JkQ29uZmlybWF0aW9uIiwic2lnblVwRGF0YSIsInNldFNpZ25VcERhdGEiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJvblN1Ym1pdCIsInVzZUNhbGxiYWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsIndpbmRvdyIsImFsZXJ0IiwiZXJyb3IiLCJyZXNwb25zZSIsInN0YXR1cyIsImRhdGEiLCJ1c2VyIiwidGFyZ2V0IiwidmFsdWUiLCJsZW5ndGgiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBS0EsSUFBTUEsTUFBOEIsR0FBRyxTQUFqQ0EsTUFBaUMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUE7O0FBQ2hELGtCQUFvQ0Msc0RBQVEsQ0FBQztBQUMzQ0MsWUFBUSxFQUFFLEVBRGlDO0FBRTNDQyxZQUFRLEVBQUUsRUFGaUM7QUFHM0NDLHdCQUFvQixFQUFFO0FBSHFCLEdBQUQsQ0FBNUM7QUFBQSxNQUFPQyxVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUtBLG1CQUE0Qkwsc0RBQVEsQ0FBQztBQUNuQ0MsWUFBUSxFQUFFLEVBRHlCO0FBRW5DQyxZQUFRLEVBQUUsRUFGeUI7QUFHbkNDLHdCQUFvQixFQUFFO0FBSGEsR0FBRCxDQUFwQztBQUFBLE1BQU9HLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUtBLE1BQU1DLFFBQVEsR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxDQUFELEVBQU87QUFDbENBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxnREFBSyxDQUFDQyxJQUFOLHFCQUErQlQsVUFBL0IsRUFBMkNVLElBQTNDLENBQWdELFlBQU07QUFDcERDLFlBQU0sQ0FBQ0MsS0FBUCxDQUFhLE1BQWI7QUFDRCxLQUZELEVBRUcsVUFBQ0MsS0FBRCxFQUFXO0FBQ1osVUFBSUEsS0FBSyxDQUFDQyxRQUFWLEVBQW9CO0FBQ2xCLFlBQU1BLFFBQXVCLEdBQUdELEtBQUssQ0FBQ0MsUUFBdEM7O0FBQ0EsWUFBSUEsUUFBUSxDQUFDQyxNQUFULEtBQW9CLEdBQXhCLEVBQTZCO0FBQzNCWixtQkFBUyxDQUFDVyxRQUFRLENBQUNFLElBQVYsQ0FBVDtBQUNEO0FBQ0Y7QUFDRixLQVREO0FBVUQsR0FaMkIsRUFZekIsQ0FBQ2hCLFVBQUQsQ0FaeUIsQ0FBNUI7QUFhQSxTQUNFLG1FQUNHTCxLQUFLLENBQUNzQixJQUFOLElBQWM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvREFDSnRCLEtBQUssQ0FBQ3NCLElBQU4sQ0FBV3BCLFFBRFAsQ0FEakIsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGLEVBS0U7QUFBTSxZQUFRLEVBQUVPLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRUU7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixTQUFLLEVBQUVKLFVBQVUsQ0FBQ0gsUUFBckM7QUFBK0MsWUFBUSxFQUFFLGtCQUFBUyxDQUFDO0FBQUEsYUFBSUwsYUFBYSxpQ0FDdEVELFVBRHNFO0FBRXpFSCxnQkFBUSxFQUFFUyxDQUFDLENBQUNZLE1BQUYsQ0FBU0M7QUFGc0QsU0FBakI7QUFBQSxLQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQVFHLHFCQUFBakIsTUFBTSxDQUFDTCxRQUFQLHNFQUFpQnVCLE1BQWpCLElBQTBCLENBQTFCLElBQStCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDN0JsQixNQUFNLENBQUNMLFFBQVAsQ0FBZ0J3QixJQUFoQixDQUFxQixHQUFyQixDQUQ2QixDQVJsQyxDQURGLEVBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRUU7QUFBTyxRQUFJLEVBQUMsVUFBWjtBQUF1QixTQUFLLEVBQUVyQixVQUFVLENBQUNGLFFBQXpDO0FBQW1ELFlBQVEsRUFBRSxrQkFBQVEsQ0FBQztBQUFBLGFBQUlMLGFBQWEsaUNBQzFFRCxVQUQwRTtBQUU3RUYsZ0JBQVEsRUFBRVEsQ0FBQyxDQUFDWSxNQUFGLENBQVNDO0FBRjBELFNBQWpCO0FBQUEsS0FBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFRRyxxQkFBQWpCLE1BQU0sQ0FBQ0osUUFBUCxzRUFBaUJzQixNQUFqQixJQUEwQixDQUExQixJQUErQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQzdCbEIsTUFBTSxDQUFDSixRQUFQLENBQWdCdUIsSUFBaEIsQ0FBcUIsR0FBckIsQ0FENkIsQ0FSbEMsQ0FiRixFQXlCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLENBekJGLENBREYsQ0FMRixDQURGO0FBd0NELENBaEVEOztHQUFNM0IsTTs7S0FBQUEsTTs7QUFrRVNBLHFFQUFmLEUsQ0FFQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc2lnbl9pbi5qcy5kYTBjMmMyZGIyNWM4MjczYjE4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtHZXRTZXJ2ZXJTaWRlUHJvcHMsIE5leHRQYWdlfSBmcm9tICduZXh0JztcclxuaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcywge0F4aW9zRXJyb3IsIEF4aW9zUmVzcG9uc2V9IGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtnZXREYXRhYmFzZUNvbm5lY3Rpb259IGZyb20gJy4uL2xpYi9nZXREYXRhYmFzZUNvbm5lY3Rpb24nO1xyXG5pbXBvcnQge1VBUGFyc2VyfSBmcm9tICd1YS1wYXJzZXItanMnO1xyXG5pbXBvcnQgeyB3aXRoU2Vzc2lvbiB9IGZyb20gJ2xpYi93aXRoU2Vzc2lvbic7XHJcblxyXG5jb25zdCBTaWduSW46IE5leHRQYWdlPHt1c2VyOiBVc2VyfT4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbc2lnblVwRGF0YSwgc2V0U2lnblVwRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB1c2VybmFtZTogJycsXHJcbiAgICBwYXNzd29yZDogJycsXHJcbiAgICBwYXNzd29yZENvbmZpcm1hdGlvbjogJydcclxuICB9KTtcclxuICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe1xyXG4gICAgdXNlcm5hbWU6IFtdLFxyXG4gICAgcGFzc3dvcmQ6IFtdLFxyXG4gICAgcGFzc3dvcmRDb25maXJtYXRpb246IFtdXHJcbiAgfSk7XHJcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYXhpb3MucG9zdChgL2FwaS92MS9zZXNzaW9uc2AsIHNpZ25VcERhdGEpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoJ+eZu+W9leaIkOWKnycpXHJcbiAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2U6IEF4aW9zUmVzcG9uc2UgPSBlcnJvci5yZXNwb25zZTtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MjIpIHtcclxuICAgICAgICAgIHNldEVycm9ycyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sIFtzaWduVXBEYXRhXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtwcm9wcy51c2VyICYmIDxkaXY+XHJcbiAgICAgICAg5b2T5YmN55m75b2V55So5oi35Li6IHtwcm9wcy51c2VyLnVzZXJuYW1lfVxyXG4gICAgICA8L2Rpdj59XHJcbiAgICAgIDxoMT7nmbvlvZU8L2gxPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAg55So5oi35ZCNXHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3NpZ25VcERhdGEudXNlcm5hbWV9IG9uQ2hhbmdlPXtlID0+IHNldFNpZ25VcERhdGEoe1xyXG4gICAgICAgICAgICAgICAgLi4uc2lnblVwRGF0YSxcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICAgIH0pfS8+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIHtlcnJvcnMudXNlcm5hbWU/Lmxlbmd0aCA+IDAgJiYgPGRpdj5cclxuICAgICAgICAgICAgICB7ZXJyb3JzLnVzZXJuYW1lLmpvaW4oJywnKX1cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAg5a+G56CBXHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtzaWduVXBEYXRhLnBhc3N3b3JkfSBvbkNoYW5nZT17ZSA9PiBzZXRTaWduVXBEYXRhKHtcclxuICAgICAgICAgICAgICAgIC4uLnNpZ25VcERhdGEsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgICB9KX0vPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkPy5sZW5ndGggPiAwICYmIDxkaXY+XHJcbiAgICAgICAgICAgICAge2Vycm9ycy5wYXNzd29yZC5qb2luKCcsJyl9XHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+55m75b2VPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC8+XHJcblxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduSW47XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IHdpdGhTZXNzaW9uKGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIGNvbnN0IHVzZXIgPSBjb250ZXh0LnJlcS5zZXNzaW9uLmdldCgnY3VycmVudFVzZXInKVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICB1c2VyOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHVzZXIpKVxyXG4gICAgfVxyXG4gIH07XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9