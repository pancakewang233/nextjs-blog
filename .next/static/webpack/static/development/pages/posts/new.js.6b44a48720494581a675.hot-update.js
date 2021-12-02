webpackHotUpdate("static\\development\\pages\\posts\\new.js",{

/***/ "./pages/posts/new.tsx":
/*!*****************************!*\
  !*** ./pages/posts/new.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Form */ "./components/Form.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _this = undefined,
    _jsxFileName = "D:\\Pank\\code\\Pack\\nextjs-blog\\pages\\posts\\new.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var PostsNew = function PostsNew() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    title: '',
    content: ''
  }),
      signUpData = _useState[0],
      setSignUpData = _useState[1];

  var _onChange = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (key, value) {
    setSignUpData(_objectSpread(_objectSpread({}, signUpData), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, value)));
  }, [signUpData]);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_Form__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: onSubmit,
    buttons: __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("button", {
      type: "submit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    }, "\u6CE8\u518C")),
    fields: [{
      label: '标题',
      type: 'text',
      value: signUpData.title,
      onChange: function onChange(e) {
        return _onChange('username', e.target.value);
      },
      errors: errors.username
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }));
};

_s(PostsNew, "Coxe6c8tyVNv1Q563XJ7hlCUmGE=");

_c = PostsNew;
/* harmony default export */ __webpack_exports__["default"] = (PostsNew);

var _c;

$RefreshReg$(_c, "PostsNew");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9uZXcudHN4Il0sIm5hbWVzIjpbIlBvc3RzTmV3IiwidXNlU3RhdGUiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaWduVXBEYXRhIiwic2V0U2lnblVwRGF0YSIsIm9uQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJrZXkiLCJ2YWx1ZSIsIm9uU3VibWl0IiwibGFiZWwiLCJ0eXBlIiwiZSIsInRhcmdldCIsImVycm9ycyIsInVzZXJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQWtCLEdBQUcsU0FBckJBLFFBQXFCLEdBQU07QUFBQTs7QUFDL0Isa0JBQW9DQyxzREFBUSxDQUFDO0FBQzNDQyxTQUFLLEVBQUUsRUFEb0M7QUFFM0NDLFdBQU8sRUFBRTtBQUZrQyxHQUFELENBQTVDO0FBQUEsTUFBT0MsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFJQSxNQUFNQyxTQUFRLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQzNDSixpQkFBYSxpQ0FDUkQsVUFEUSxxR0FFVkksR0FGVSxFQUVKQyxLQUZJLEdBQWI7QUFJRCxHQUwyQixFQUt6QixDQUFDTCxVQUFELENBTHlCLENBQTVCOztBQU1BLFNBQ0UsbUVBQ0UsTUFBQyxxREFBRDtBQUNFLFlBQVEsRUFBRU0sUUFEWjtBQUVFLFdBQU8sRUFBRSxtRUFDUDtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRE8sQ0FGWDtBQU9FLFVBQU0sRUFBRSxDQUNOO0FBQ0VDLFdBQUssRUFBRSxJQURUO0FBQ2VDLFVBQUksRUFBRSxNQURyQjtBQUM2QkgsV0FBSyxFQUFFTCxVQUFVLENBQUNGLEtBRC9DO0FBRUVJLGNBQVEsRUFBRSxrQkFBQU8sQ0FBQztBQUFBLGVBQUlQLFNBQVEsQ0FBQyxVQUFELEVBQWFPLENBQUMsQ0FBQ0MsTUFBRixDQUFTTCxLQUF0QixDQUFaO0FBQUEsT0FGYjtBQUdJTSxZQUFNLEVBQUVBLE1BQU0sQ0FBQ0M7QUFIbkIsS0FETSxDQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGO0FBbUJELENBOUJEOztHQUFNaEIsUTs7S0FBQUEsUTtBQWdDU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBvc3RzXFxuZXcuanMuNmI0NGE0ODcyMDQ5NDU4MWE2NzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmV4dFBhZ2V9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQge0Zvcm19IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9ybSc7XHJcbmltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgUG9zdHNOZXc6IE5leHRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzaWduVXBEYXRhLCBzZXRTaWduVXBEYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIGNvbnRlbnQ6ICcnLFxyXG4gIH0pO1xyXG4gIGNvbnN0IG9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGtleSwgdmFsdWUpID0+IHtcclxuICAgIHNldFNpZ25VcERhdGEoe1xyXG4gICAgICAuLi5zaWduVXBEYXRhLFxyXG4gICAgICBba2V5XTogdmFsdWVcclxuICAgIH0pO1xyXG4gIH0sIFtzaWduVXBEYXRhXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxyXG4gICAgICAgIGJ1dHRvbnM9ezw+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAg5rOo5YaMXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8Lz59XHJcbiAgICAgICAgZmllbGRzPXtbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAn5qCH6aKYJywgdHlwZTogJ3RleHQnLCB2YWx1ZTogc2lnblVwRGF0YS50aXRsZSxcclxuICAgICAgICAgICAgb25DaGFuZ2U6IGUgPT4gb25DaGFuZ2UoJ3VzZXJuYW1lJywgZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICwgZXJyb3JzOiBlcnJvcnMudXNlcm5hbWVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXX0+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0c05ldztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==