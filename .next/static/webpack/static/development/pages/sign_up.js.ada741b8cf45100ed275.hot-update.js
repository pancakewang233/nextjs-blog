webpackHotUpdate("static\\development\\pages\\sign_up.js",{

/***/ "./components/Form.tsx":
/*!*****************************!*\
  !*** ./components/Form.tsx ***!
  \*****************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "D:\\Pank\\code\\Pack\\nextjs-blog\\components\\Form.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Form = function Form(props) {
  return __jsx("form", {
    onSubmit: props.onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, props.fields.map(function (field) {
    var _field$errors;

    return __jsx("div", {
      key: field.label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, __jsx("label", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }
    }, field.label, field.type === 'textarea' ? __jsx("textarea", {
      onChange: field.onChange,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 42
      }
    }, field.value) : __jsx("input", {
      type: field.type,
      value: field.value,
      onChange: field.onChange,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 15
      }
    })), ((_field$errors = field.errors) === null || _field$errors === void 0 ? void 0 : _field$errors.length) > 0 && __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 40
      }
    }, field.errors.join(',')));
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, props.buttons));
};
_c = Form;

var _c;

$RefreshReg$(_c, "Form");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvcm0udHN4Il0sIm5hbWVzIjpbIkZvcm0iLCJwcm9wcyIsIm9uU3VibWl0IiwiZmllbGRzIiwibWFwIiwiZmllbGQiLCJsYWJlbCIsInR5cGUiLCJvbkNoYW5nZSIsInZhbHVlIiwiZXJyb3JzIiwibGVuZ3RoIiwiam9pbiIsImJ1dHRvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBY08sSUFBTUEsSUFBcUIsR0FBRyxTQUF4QkEsSUFBd0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQzlDLFNBQ0U7QUFBTSxZQUFRLEVBQUVBLEtBQUssQ0FBQ0MsUUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsR0FBYixDQUFpQixVQUFBQyxLQUFLO0FBQUE7O0FBQUEsV0FDckI7QUFBSyxTQUFHLEVBQUVBLEtBQUssQ0FBQ0MsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0QsS0FBSyxDQUFDQyxLQURULEVBRUdELEtBQUssQ0FBQ0UsSUFBTixLQUFlLFVBQWYsR0FBNEI7QUFBVSxjQUFRLEVBQUVGLEtBQUssQ0FBQ0csUUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFxQ0gsS0FBSyxDQUFDSSxLQUEzQyxDQUE1QixHQUNDO0FBQU8sVUFBSSxFQUFFSixLQUFLLENBQUNFLElBQW5CO0FBQXlCLFdBQUssRUFBRUYsS0FBSyxDQUFDSSxLQUF0QztBQUE2QyxjQUFRLEVBQUVKLEtBQUssQ0FBQ0csUUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhKLENBREYsRUFNRyxrQkFBQUgsS0FBSyxDQUFDSyxNQUFOLGdFQUFjQyxNQUFkLElBQXVCLENBQXZCLElBQTRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDMUJOLEtBQUssQ0FBQ0ssTUFBTixDQUFhRSxJQUFiLENBQWtCLEdBQWxCLENBRDBCLENBTi9CLENBRHFCO0FBQUEsR0FBdEIsQ0FESCxFQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1gsS0FBSyxDQUFDWSxPQURULENBYkYsQ0FERjtBQW9CRCxDQXJCTTtLQUFNYixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxzaWduX3VwLmpzLmFkYTc0MWI4Y2Y0NTEwMGVkMjc1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDaGFuZ2VFdmVudEhhbmRsZXIsIEZvcm1FdmVudEhhbmRsZXIsIFJlYWN0Q2hpbGR9IGZyb20gJ3JlYWN0JztcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgb25TdWJtaXQ6IEZvcm1FdmVudEhhbmRsZXI7XHJcbiAgZmllbGRzOiB7XHJcbiAgICBsYWJlbDogc3RyaW5nLFxyXG4gICAgdHlwZTogJ3RleHQnIHwgJ3Bhc3N3b3JkJyB8ICd0ZXh0YXJlYScsXHJcbiAgICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLFxyXG4gICAgb25DaGFuZ2U6IENoYW5nZUV2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50PixcclxuICAgIGVycm9yczogc3RyaW5nW11cclxuICB9W107XHJcbiAgYnV0dG9uczogUmVhY3RDaGlsZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEZvcm06IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17cHJvcHMub25TdWJtaXR9PlxyXG4gICAgICB7cHJvcHMuZmllbGRzLm1hcChmaWVsZCA9PlxyXG4gICAgICAgIDxkaXYga2V5PXtmaWVsZC5sYWJlbH0+XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIHtmaWVsZC5sYWJlbH1cclxuICAgICAgICAgICAge2ZpZWxkLnR5cGUgPT09ICd0ZXh0YXJlYScgPyA8dGV4dGFyZWEgb25DaGFuZ2U9e2ZpZWxkLm9uQ2hhbmdlfT57ZmllbGQudmFsdWV9PC90ZXh0YXJlYT4gOlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtmaWVsZC50eXBlfSB2YWx1ZT17ZmllbGQudmFsdWV9IG9uQ2hhbmdlPXtmaWVsZC5vbkNoYW5nZX0vPn1cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICB7ZmllbGQuZXJyb3JzPy5sZW5ndGggPiAwICYmIDxkaXY+XHJcbiAgICAgICAgICAgIHtmaWVsZC5lcnJvcnMuam9pbignLCcpfVxyXG4gICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtwcm9wcy5idXR0b25zfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG5cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==