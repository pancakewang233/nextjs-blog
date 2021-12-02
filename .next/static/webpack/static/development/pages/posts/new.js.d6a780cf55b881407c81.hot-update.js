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

  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    e.preventDefault();
    console.log('onSubmit', e);
  }, [signUpData]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_Form__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: onSubmit,
    buttons: __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("button", {
      type: "submit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }
    }, "\u63D0\u4EA4")),
    fields: [{
      label: '标题',
      type: 'text',
      value: signUpData.title,
      onChange: function onChange(e) {
        return _onChange('title', e.target.value);
      },
      errors: errors.title
    }, {
      label: '内容',
      type: 'textarea',
      value: signUpData.content,
      onChange: function onChange(e) {
        return _onChange('content', e.target.value);
      },
      errors: errors.content
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }));
};

_s(PostsNew, "5ujNDiMcY+ezljr2m4fv7Rac1Mk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9uZXcudHN4Il0sIm5hbWVzIjpbIlBvc3RzTmV3IiwidXNlU3RhdGUiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaWduVXBEYXRhIiwic2V0U2lnblVwRGF0YSIsIm9uQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJrZXkiLCJ2YWx1ZSIsImVycm9ycyIsInNldEVycm9ycyIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImxhYmVsIiwidHlwZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxRQUFrQixHQUFHLFNBQXJCQSxRQUFxQixHQUFNO0FBQUE7O0FBQy9CLGtCQUFvQ0Msc0RBQVEsQ0FBQztBQUMzQ0MsU0FBSyxFQUFFLEVBRG9DO0FBRTNDQyxXQUFPLEVBQUU7QUFGa0MsR0FBRCxDQUE1QztBQUFBLE1BQU9DLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBSUEsTUFBTUMsU0FBUSxHQUFHQyx5REFBVyxDQUFDLFVBQUNDLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUMzQ0osaUJBQWEsaUNBQ1JELFVBRFEscUdBRVZJLEdBRlUsRUFFSkMsS0FGSSxHQUFiO0FBSUQsR0FMMkIsRUFLekIsQ0FBQ0wsVUFBRCxDQUx5QixDQUE1Qjs7QUFNQSxtQkFBNEJILHNEQUFRLENBQUM7QUFDbkNDLFNBQUssRUFBRSxFQUQ0QjtBQUVuQ0MsV0FBTyxFQUFFO0FBRjBCLEdBQUQsQ0FBcEM7QUFBQSxNQUFPTyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFJQSxNQUFNQyxRQUFRLEdBQUdMLHlEQUFXLENBQUMsVUFBQ00sQ0FBRCxFQUFPO0FBQ2xDQSxLQUFDLENBQUNDLGNBQUY7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QkgsQ0FBeEI7QUFDRCxHQUgyQixFQUd6QixDQUFDVCxVQUFELENBSHlCLENBQTVCO0FBSUEsU0FDRSxtRUFDRSxNQUFDLHFEQUFEO0FBQ0UsWUFBUSxFQUFFUSxRQURaO0FBRUUsV0FBTyxFQUFFLG1FQUNQO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFETyxDQUZYO0FBT0UsVUFBTSxFQUFFLENBQ047QUFDRUssV0FBSyxFQUFFLElBRFQ7QUFDZUMsVUFBSSxFQUFFLE1BRHJCO0FBQzZCVCxXQUFLLEVBQUVMLFVBQVUsQ0FBQ0YsS0FEL0M7QUFFRUksY0FBUSxFQUFFLGtCQUFBTyxDQUFDO0FBQUEsZUFBSVAsU0FBUSxDQUFDLE9BQUQsRUFBVU8sQ0FBQyxDQUFDTSxNQUFGLENBQVNWLEtBQW5CLENBQVo7QUFBQSxPQUZiO0FBR0lDLFlBQU0sRUFBRUEsTUFBTSxDQUFDUjtBQUhuQixLQURNLEVBTU47QUFDRWUsV0FBSyxFQUFFLElBRFQ7QUFDZUMsVUFBSSxFQUFFLFVBRHJCO0FBQ2lDVCxXQUFLLEVBQUVMLFVBQVUsQ0FBQ0QsT0FEbkQ7QUFFRUcsY0FBUSxFQUFFLGtCQUFBTyxDQUFDO0FBQUEsZUFBSVAsU0FBUSxDQUFDLFNBQUQsRUFBWU8sQ0FBQyxDQUFDTSxNQUFGLENBQVNWLEtBQXJCLENBQVo7QUFBQSxPQUZiO0FBR0lDLFlBQU0sRUFBRUEsTUFBTSxDQUFDUDtBQUhuQixLQU5NLENBUFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREY7QUF3QkQsQ0EzQ0Q7O0dBQU1ILFE7O0tBQUFBLFE7QUE2Q1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwb3N0c1xcbmV3LmpzLmQ2YTc4MGNmNTViODgxNDA3YzgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05leHRQYWdlfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHtGb3JtfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvcm0nO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zLCB7QXhpb3NSZXNwb25zZX0gZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgUG9zdHNOZXc6IE5leHRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzaWduVXBEYXRhLCBzZXRTaWduVXBEYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIGNvbnRlbnQ6ICcnLFxyXG4gIH0pO1xyXG4gIGNvbnN0IG9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGtleSwgdmFsdWUpID0+IHtcclxuICAgIHNldFNpZ25VcERhdGEoe1xyXG4gICAgICAuLi5zaWduVXBEYXRhLFxyXG4gICAgICBba2V5XTogdmFsdWVcclxuICAgIH0pO1xyXG4gIH0sIFtzaWduVXBEYXRhXSk7XHJcbiAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHtcclxuICAgIHRpdGxlOiBbXSxcclxuICAgIGNvbnRlbnQ6IFtdLFxyXG4gIH0pO1xyXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKCdvblN1Ym1pdCcsIGUpO1xyXG4gIH0sIFtzaWduVXBEYXRhXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxyXG4gICAgICAgIGJ1dHRvbnM9ezw+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAg5o+Q5LqkXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8Lz59XHJcbiAgICAgICAgZmllbGRzPXtbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAn5qCH6aKYJywgdHlwZTogJ3RleHQnLCB2YWx1ZTogc2lnblVwRGF0YS50aXRsZSxcclxuICAgICAgICAgICAgb25DaGFuZ2U6IGUgPT4gb25DaGFuZ2UoJ3RpdGxlJywgZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICwgZXJyb3JzOiBlcnJvcnMudGl0bGVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAn5YaF5a65JywgdHlwZTogJ3RleHRhcmVhJywgdmFsdWU6IHNpZ25VcERhdGEuY29udGVudCxcclxuICAgICAgICAgICAgb25DaGFuZ2U6IGUgPT4gb25DaGFuZ2UoJ2NvbnRlbnQnLCBlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgLCBlcnJvcnM6IGVycm9ycy5jb250ZW50XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF19PlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdHNOZXc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=