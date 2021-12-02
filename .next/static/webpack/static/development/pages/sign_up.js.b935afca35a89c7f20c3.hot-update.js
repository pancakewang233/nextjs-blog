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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvcm0udHN4Il0sIm5hbWVzIjpbIkZvcm0iLCJwcm9wcyIsIm9uU3VibWl0IiwiZmllbGRzIiwibWFwIiwiZmllbGQiLCJsYWJlbCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXJyb3JzIiwibGVuZ3RoIiwiam9pbiIsImJ1dHRvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBY08sSUFBTUEsSUFBcUIsR0FBRyxTQUF4QkEsSUFBd0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQzlDLFNBQ0U7QUFBTSxZQUFRLEVBQUVBLEtBQUssQ0FBQ0MsUUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsR0FBYixDQUFpQixVQUFBQyxLQUFLO0FBQUE7O0FBQUEsV0FDckI7QUFBSyxTQUFHLEVBQUVBLEtBQUssQ0FBQ0MsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0QsS0FBSyxDQUFDQyxLQURULEVBRUdELEtBQUssQ0FBQ0UsSUFBTixLQUFlLFVBQWYsR0FBNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFXRixLQUFLLENBQUNHLEtBQWpCLENBQTVCLEdBQ0M7QUFBTyxVQUFJLEVBQUVILEtBQUssQ0FBQ0UsSUFBbkI7QUFBeUIsV0FBSyxFQUFFRixLQUFLLENBQUNHLEtBQXRDO0FBQTZDLGNBQVEsRUFBRUgsS0FBSyxDQUFDSSxRQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEosQ0FERixFQU1HLGtCQUFBSixLQUFLLENBQUNLLE1BQU4sZ0VBQWNDLE1BQWQsSUFBdUIsQ0FBdkIsSUFBNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUMxQk4sS0FBSyxDQUFDSyxNQUFOLENBQWFFLElBQWIsQ0FBa0IsR0FBbEIsQ0FEMEIsQ0FOL0IsQ0FEcUI7QUFBQSxHQUF0QixDQURILEVBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHWCxLQUFLLENBQUNZLE9BRFQsQ0FiRixDQURGO0FBb0JELENBckJNO0tBQU1iLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHNpZ25fdXAuanMuYjkzNWFmY2EzNWE4OWM3ZjIwYzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NoYW5nZUV2ZW50SGFuZGxlciwgRm9ybUV2ZW50SGFuZGxlciwgUmVhY3RDaGlsZH0gZnJvbSAncmVhY3QnO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBvblN1Ym1pdDogRm9ybUV2ZW50SGFuZGxlcjtcclxuICBmaWVsZHM6IHtcclxuICAgIGxhYmVsOiBzdHJpbmcsXHJcbiAgICB0eXBlOiAndGV4dCcgfCAncGFzc3dvcmQnIHwgJ3RleHRhcmVhJyxcclxuICAgIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsXHJcbiAgICBvbkNoYW5nZTogQ2hhbmdlRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+LFxyXG4gICAgZXJyb3JzOiBzdHJpbmdbXVxyXG4gIH1bXTtcclxuICBidXR0b25zOiBSZWFjdENoaWxkO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRm9ybTogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtwcm9wcy5vblN1Ym1pdH0+XHJcbiAgICAgIHtwcm9wcy5maWVsZHMubWFwKGZpZWxkID0+XHJcbiAgICAgICAgPGRpdiBrZXk9e2ZpZWxkLmxhYmVsfT5cclxuICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAge2ZpZWxkLmxhYmVsfVxyXG4gICAgICAgICAgICB7ZmllbGQudHlwZSA9PT0gJ3RleHRhcmVhJyA/IDx0ZXh0YXJlYT57ZmllbGQudmFsdWV9PC90ZXh0YXJlYT4gOlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtmaWVsZC50eXBlfSB2YWx1ZT17ZmllbGQudmFsdWV9IG9uQ2hhbmdlPXtmaWVsZC5vbkNoYW5nZX0vPn1cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICB7ZmllbGQuZXJyb3JzPy5sZW5ndGggPiAwICYmIDxkaXY+XHJcbiAgICAgICAgICAgIHtmaWVsZC5lcnJvcnMuam9pbignLCcpfVxyXG4gICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtwcm9wcy5idXR0b25zfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG5cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==