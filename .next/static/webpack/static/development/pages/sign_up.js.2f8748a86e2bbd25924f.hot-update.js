webpackHotUpdate("static\\development\\pages\\sign_up.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false,

/***/ "./pages/sign_up.tsx":
/*!***************************!*\
  !*** ./pages/sign_up.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Form */ "./components/Form.tsx");
var _this = undefined,
    _jsxFileName = "D:\\Pank\\code\\Pack\\nextjs-blog\\pages\\sign_up.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var SignUp = function SignUp() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    username: '',
    password: '',
    passwordConfirmation: ''
  }),
      signUpData = _useState[0],
      setSignUpData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    username: [],
    password: [],
    passwordConfirmation: []
  }),
      errors = _useState2[0],
      setErrors = _useState2[1];

  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/v1/users", signUpData).then(function () {
      window.alert('注册成功');
      window.location.href = '/sign_in';
    }, function (error) {
      if (error.response) {
        var response = error.response;

        if (response.status === 422) {
          setErrors(response.data);
        }
      }
    });
  }, [signUpData]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, "\u6CE8\u518C"), __jsx(_components_Form__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onSubmit: onSubmit,
    buttons: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("button", {
      type: "submit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }
    }, "\u767B\u5F55")),
    fields: [{
      label: '用户名',
      type: 'text',
      value: signUpData.username,
      onChange: function (_onChange) {
        function onChange(_x) {
          return _onChange.apply(this, arguments);
        }

        onChange.toString = function () {
          return _onChange.toString();
        };

        return onChange;
      }(function (e) {
        return onChange('username', e.target.value);
      }),
      errors: errors.username
    }, {
      label: '密码',
      type: 'password',
      value: signUpData.password,
      onChange: function (_onChange2) {
        function onChange(_x2) {
          return _onChange2.apply(this, arguments);
        }

        onChange.toString = function () {
          return _onChange2.toString();
        };

        return onChange;
      }(function (e) {
        return onChange('password', e.target.value);
      }),
      errors: errors.password
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }));
};

_s(SignUp, "z6elDqElvPo4PdLGQgL2QD7yDgo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaWduX3VwLnRzeCJdLCJuYW1lcyI6WyJTaWduVXAiLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJwYXNzd29yZENvbmZpcm1hdGlvbiIsInNpZ25VcERhdGEiLCJzZXRTaWduVXBEYXRhIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwib25TdWJtaXQiLCJ1c2VDYWxsYmFjayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJ3aW5kb3ciLCJhbGVydCIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJkYXRhIiwibGFiZWwiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLE1BQWdCLEdBQUcsU0FBbkJBLE1BQW1CLEdBQU07QUFBQTs7QUFDN0Isa0JBQW9DQyxzREFBUSxDQUFDO0FBQzNDQyxZQUFRLEVBQUUsRUFEaUM7QUFFM0NDLFlBQVEsRUFBRSxFQUZpQztBQUczQ0Msd0JBQW9CLEVBQUU7QUFIcUIsR0FBRCxDQUE1QztBQUFBLE1BQU9DLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBS0EsbUJBQTRCTCxzREFBUSxDQUFDO0FBQ25DQyxZQUFRLEVBQUUsRUFEeUI7QUFFbkNDLFlBQVEsRUFBRSxFQUZ5QjtBQUduQ0Msd0JBQW9CLEVBQUU7QUFIYSxHQUFELENBQXBDO0FBQUEsTUFBT0csTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBS0EsTUFBTUMsUUFBUSxHQUFHQyx5REFBVyxDQUFDLFVBQUNDLENBQUQsRUFBTztBQUNsQ0EsS0FBQyxDQUFDQyxjQUFGO0FBQ0FDLGdEQUFLLENBQUNDLElBQU4sa0JBQTRCVCxVQUE1QixFQUF3Q1UsSUFBeEMsQ0FBNkMsWUFBTTtBQUNqREMsWUFBTSxDQUFDQyxLQUFQLENBQWEsTUFBYjtBQUNBRCxZQUFNLENBQUNFLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCLFVBQXZCO0FBQ0QsS0FIRCxFQUdHLFVBQUNDLEtBQUQsRUFBVztBQUNaLFVBQUlBLEtBQUssQ0FBQ0MsUUFBVixFQUFvQjtBQUNsQixZQUFNQSxRQUF1QixHQUFHRCxLQUFLLENBQUNDLFFBQXRDOztBQUNBLFlBQUlBLFFBQVEsQ0FBQ0MsTUFBVCxLQUFvQixHQUF4QixFQUE2QjtBQUMzQmQsbUJBQVMsQ0FBQ2EsUUFBUSxDQUFDRSxJQUFWLENBQVQ7QUFDRDtBQUNGO0FBQ0YsS0FWRDtBQVdELEdBYjJCLEVBYXpCLENBQUNsQixVQUFELENBYnlCLENBQTVCO0FBY0EsU0FDRSxtRUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUUsTUFBQyxxREFBRDtBQUNFLFlBQVEsRUFBRUksUUFEWjtBQUVFLFdBQU8sRUFBRSxtRUFDUDtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRE8sQ0FGWDtBQU9FLFVBQU0sRUFBRSxDQUNOO0FBQ0VlLFdBQUssRUFBRSxLQURUO0FBQ2dCQyxVQUFJLEVBQUUsTUFEdEI7QUFDOEJDLFdBQUssRUFBRXJCLFVBQVUsQ0FBQ0gsUUFEaEQ7QUFFRXlCLGNBQVE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsUUFBRSxVQUFBaEIsQ0FBQztBQUFBLGVBQUlnQixRQUFRLENBQUMsVUFBRCxFQUFhaEIsQ0FBQyxDQUFDaUIsTUFBRixDQUFTRixLQUF0QixDQUFaO0FBQUEsT0FBSCxDQUZWO0FBR0luQixZQUFNLEVBQUVBLE1BQU0sQ0FBQ0w7QUFIbkIsS0FETSxFQU1OO0FBQ0VzQixXQUFLLEVBQUUsSUFEVDtBQUNlQyxVQUFJLEVBQUUsVUFEckI7QUFDaUNDLFdBQUssRUFBRXJCLFVBQVUsQ0FBQ0YsUUFEbkQ7QUFFRXdCLGNBQVE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsUUFBRSxVQUFBaEIsQ0FBQztBQUFBLGVBQUlnQixRQUFRLENBQUMsVUFBRCxFQUFhaEIsQ0FBQyxDQUFDaUIsTUFBRixDQUFTRixLQUF0QixDQUFaO0FBQUEsT0FBSCxDQUZWO0FBR0luQixZQUFNLEVBQUVBLE1BQU0sQ0FBQ0o7QUFIbkIsS0FOTSxDQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGO0FBb0VELENBN0ZEOztHQUFNSCxNOztLQUFBQSxNO0FBK0ZTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc2lnbl91cC5qcy4yZjg3NDhhODZlMmJiZDI1OTI0Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZXh0UGFnZX0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MsIHtBeGlvc0Vycm9yLCBBeGlvc1Jlc3BvbnNlfSBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7c2V0fSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQge0Zvcm19IGZyb20gJy4uL2NvbXBvbmVudHMvRm9ybSc7XHJcblxyXG5jb25zdCBTaWduVXA6IE5leHRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzaWduVXBEYXRhLCBzZXRTaWduVXBEYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIHVzZXJuYW1lOiAnJyxcclxuICAgIHBhc3N3b3JkOiAnJyxcclxuICAgIHBhc3N3b3JkQ29uZmlybWF0aW9uOiAnJ1xyXG4gIH0pO1xyXG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7XHJcbiAgICB1c2VybmFtZTogW10sXHJcbiAgICBwYXNzd29yZDogW10sXHJcbiAgICBwYXNzd29yZENvbmZpcm1hdGlvbjogW11cclxuICB9KTtcclxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBheGlvcy5wb3N0KGAvYXBpL3YxL3VzZXJzYCwgc2lnblVwRGF0YSkudGhlbigoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5hbGVydCgn5rOo5YaM5oiQ5YqfJyk7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9zaWduX2luJztcclxuICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZTogQXhpb3NSZXNwb25zZSA9IGVycm9yLnJlc3BvbnNlO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQyMikge1xyXG4gICAgICAgICAgc2V0RXJyb3JzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSwgW3NpZ25VcERhdGFdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgxPuazqOWGjDwvaDE+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxyXG4gICAgICAgIGJ1dHRvbnM9ezw+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAg55m75b2VXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8Lz59XHJcbiAgICAgICAgZmllbGRzPXtbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAn55So5oi35ZCNJywgdHlwZTogJ3RleHQnLCB2YWx1ZTogc2lnblVwRGF0YS51c2VybmFtZSxcclxuICAgICAgICAgICAgb25DaGFuZ2U6IGUgPT4gb25DaGFuZ2UoJ3VzZXJuYW1lJywgZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICwgZXJyb3JzOiBlcnJvcnMudXNlcm5hbWVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAn5a+G56CBJywgdHlwZTogJ3Bhc3N3b3JkJywgdmFsdWU6IHNpZ25VcERhdGEucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBlID0+IG9uQ2hhbmdlKCdwYXNzd29yZCcsIGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAsIGVycm9yczogZXJyb3JzLnBhc3N3b3JkXHJcbiAgICAgICAgICB9XX0+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgICAgey8qPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT4qL31cclxuICAgICAgey8qICA8ZGl2PiovfVxyXG4gICAgICB7LyogICAgPGRpdj4qL31cclxuICAgICAgey8qICAgICAgPGxhYmVsPiovfVxyXG4gICAgICB7LyogICAgICAgIOeUqOaIt+WQjSovfVxyXG4gICAgICB7LyogICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtzaWduVXBEYXRhLnVzZXJuYW1lfSBvbkNoYW5nZT17ZSA9PiBzZXRTaWduVXBEYXRhKHsqL31cclxuICAgICAgey8qICAgICAgICAgIC4uLnNpZ25VcERhdGEsKi99XHJcbiAgICAgIHsvKiAgICAgICAgICB1c2VybmFtZTogZS50YXJnZXQudmFsdWUqL31cclxuICAgICAgey8qICAgICAgICB9KX0vPiovfVxyXG4gICAgICB7LyogICAgICA8L2xhYmVsPiovfVxyXG4gICAgICB7LyogICAgICB7ZXJyb3JzLnVzZXJuYW1lPy5sZW5ndGggPiAwICYmIDxkaXY+Ki99XHJcbiAgICAgIHsvKiAgICAgICAge2Vycm9ycy51c2VybmFtZS5qb2luKCcsJyl9Ki99XHJcbiAgICAgIHsvKiAgICAgIDwvZGl2Pn0qL31cclxuICAgICAgey8qICAgIDwvZGl2PiovfVxyXG4gICAgICB7LyogICAgPGRpdj4qL31cclxuICAgICAgey8qICAgICAgPGxhYmVsPiovfVxyXG4gICAgICB7LyogICAgICAgIOWvhueggSovfVxyXG4gICAgICB7LyogICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17c2lnblVwRGF0YS5wYXNzd29yZH0gb25DaGFuZ2U9e2UgPT4gc2V0U2lnblVwRGF0YSh7Ki99XHJcbiAgICAgIHsvKiAgICAgICAgICAuLi5zaWduVXBEYXRhLCovfVxyXG4gICAgICB7LyogICAgICAgICAgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlKi99XHJcbiAgICAgIHsvKiAgICAgICAgfSl9Lz4qL31cclxuICAgICAgey8qICAgICAgPC9sYWJlbD4qL31cclxuICAgICAgey8qICAgICAge2Vycm9ycy5wYXNzd29yZD8ubGVuZ3RoID4gMCAmJiA8ZGl2PiovfVxyXG4gICAgICB7LyogICAgICAgIHtlcnJvcnMucGFzc3dvcmQuam9pbignLCcpfSovfVxyXG4gICAgICB7LyogICAgICA8L2Rpdj59Ki99XHJcbiAgICAgIHsvKiAgICA8L2Rpdj4qL31cclxuICAgICAgey8qICAgIDxkaXY+Ki99XHJcbiAgICAgIHsvKiAgICAgIDxsYWJlbD4qL31cclxuICAgICAgey8qICAgICAgICDnoa7orqTlr4bnoIEqL31cclxuICAgICAgey8qICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3NpZ25VcERhdGEucGFzc3dvcmRDb25maXJtYXRpb259IG9uQ2hhbmdlPXtlID0+IHNldFNpZ25VcERhdGEoeyovfVxyXG4gICAgICB7LyogICAgICAgICAgLi4uc2lnblVwRGF0YSwqL31cclxuICAgICAgey8qICAgICAgICAgIHBhc3N3b3JkQ29uZmlybWF0aW9uOiBlLnRhcmdldC52YWx1ZSovfVxyXG4gICAgICB7LyogICAgICAgIH0pfS8+Ki99XHJcbiAgICAgIHsvKiAgICAgIDwvbGFiZWw+Ki99XHJcbiAgICAgIHsvKiAgICAgIHtlcnJvcnMucGFzc3dvcmRDb25maXJtYXRpb24/Lmxlbmd0aCA+IDAgJiYgPGRpdj4qL31cclxuICAgICAgey8qICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkQ29uZmlybWF0aW9uLmpvaW4oJywnKX0qL31cclxuICAgICAgey8qICAgICAgPC9kaXY+fSovfVxyXG4gICAgICB7LyogICAgPC9kaXY+Ki99XHJcbiAgICAgIHsvKiAgICA8ZGl2PiovfVxyXG4gICAgICB7LyogICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7ms6jlhow8L2J1dHRvbj4qL31cclxuICAgICAgey8qICAgIDwvZGl2PiovfVxyXG4gICAgICB7LyogIDwvZGl2PiovfVxyXG4gICAgICB7Lyo8L2Zvcm0+Ki99XHJcbiAgICA8Lz5cclxuXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25VcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==