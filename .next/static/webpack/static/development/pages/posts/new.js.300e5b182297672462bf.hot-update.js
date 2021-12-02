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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    title: [],
    content: []
  }),
      errors = _useState2[0],
      setErrors = _useState2[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_Form__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: onSubmit,
    buttons: __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("button", {
      type: "submit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
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
      errors: errors.title
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }));
};

_s(PostsNew, "kOU25Hb4r1XCc3KXPENFV9Xigr8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9uZXcudHN4Il0sIm5hbWVzIjpbIlBvc3RzTmV3IiwidXNlU3RhdGUiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaWduVXBEYXRhIiwic2V0U2lnblVwRGF0YSIsIm9uQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJrZXkiLCJ2YWx1ZSIsImVycm9ycyIsInNldEVycm9ycyIsIm9uU3VibWl0IiwibGFiZWwiLCJ0eXBlIiwiZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFrQixHQUFHLFNBQXJCQSxRQUFxQixHQUFNO0FBQUE7O0FBQy9CLGtCQUFvQ0Msc0RBQVEsQ0FBQztBQUMzQ0MsU0FBSyxFQUFFLEVBRG9DO0FBRTNDQyxXQUFPLEVBQUU7QUFGa0MsR0FBRCxDQUE1QztBQUFBLE1BQU9DLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBSUEsTUFBTUMsU0FBUSxHQUFHQyx5REFBVyxDQUFDLFVBQUNDLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUMzQ0osaUJBQWEsaUNBQ1JELFVBRFEscUdBRVZJLEdBRlUsRUFFSkMsS0FGSSxHQUFiO0FBSUQsR0FMMkIsRUFLekIsQ0FBQ0wsVUFBRCxDQUx5QixDQUE1Qjs7QUFNQSxtQkFBNEJILHNEQUFRLENBQUM7QUFDbkNDLFNBQUssRUFBRSxFQUQ0QjtBQUVuQ0MsV0FBTyxFQUFFO0FBRjBCLEdBQUQsQ0FBcEM7QUFBQSxNQUFPTyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFJQSxTQUNFLG1FQUNFLE1BQUMscURBQUQ7QUFDRSxZQUFRLEVBQUVDLFFBRFo7QUFFRSxXQUFPLEVBQUUsbUVBQ1A7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURPLENBRlg7QUFPRSxVQUFNLEVBQUUsQ0FDTjtBQUNFQyxXQUFLLEVBQUUsSUFEVDtBQUNlQyxVQUFJLEVBQUUsTUFEckI7QUFDNkJMLFdBQUssRUFBRUwsVUFBVSxDQUFDRixLQUQvQztBQUVFSSxjQUFRLEVBQUUsa0JBQUFTLENBQUM7QUFBQSxlQUFJVCxTQUFRLENBQUMsVUFBRCxFQUFhUyxDQUFDLENBQUNDLE1BQUYsQ0FBU1AsS0FBdEIsQ0FBWjtBQUFBLE9BRmI7QUFHSUMsWUFBTSxFQUFFQSxNQUFNLENBQUNSO0FBSG5CLEtBRE0sQ0FQVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERjtBQW1CRCxDQWxDRDs7R0FBTUYsUTs7S0FBQUEsUTtBQW9DU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBvc3RzXFxuZXcuanMuMzAwZTViMTgyMjk3NjcyNDYyYmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmV4dFBhZ2V9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQge0Zvcm19IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9ybSc7XHJcbmltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgUG9zdHNOZXc6IE5leHRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzaWduVXBEYXRhLCBzZXRTaWduVXBEYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIGNvbnRlbnQ6ICcnLFxyXG4gIH0pO1xyXG4gIGNvbnN0IG9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGtleSwgdmFsdWUpID0+IHtcclxuICAgIHNldFNpZ25VcERhdGEoe1xyXG4gICAgICAuLi5zaWduVXBEYXRhLFxyXG4gICAgICBba2V5XTogdmFsdWVcclxuICAgIH0pO1xyXG4gIH0sIFtzaWduVXBEYXRhXSk7XHJcbiAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHtcclxuICAgIHRpdGxlOiBbXSxcclxuICAgIGNvbnRlbnQ6IFtdLFxyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIG9uU3VibWl0PXtvblN1Ym1pdH1cclxuICAgICAgICBidXR0b25zPXs8PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgIOazqOWGjFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC8+fVxyXG4gICAgICAgIGZpZWxkcz17W1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogJ+agh+mimCcsIHR5cGU6ICd0ZXh0JywgdmFsdWU6IHNpZ25VcERhdGEudGl0bGUsXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBlID0+IG9uQ2hhbmdlKCd1c2VybmFtZScsIGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAsIGVycm9yczogZXJyb3JzLnRpdGxlXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF19PlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdHNOZXc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=