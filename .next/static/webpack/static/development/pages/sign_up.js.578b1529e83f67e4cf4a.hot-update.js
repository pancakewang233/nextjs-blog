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
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Form */ "./components/Form.tsx");


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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    username: [],
    password: [],
    passwordConfirmation: []
  }),
      errors = _useState2[0],
      setErrors = _useState2[1];

  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/v1/users", signUpData).then(function () {
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

  var _onChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (key, value) {
    setSignUpData(_objectSpread(_objectSpread({}, signUpData), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, value)));
  }, [signUpData]);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, "\u6CE8\u518C"), __jsx(_components_Form__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    onSubmit: onSubmit,
    buttons: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("button", {
      type: "submit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }
    }, "\u767B\u5F55")),
    fields: [{
      label: '用户名',
      type: 'text',
      value: signUpData.username,
      onChange: function onChange(e) {
        return _onChange('username', e.target.value);
      },
      errors: errors.username
    }, {
      label: '密码',
      type: 'password',
      value: signUpData.password,
      onChange: function onChange(e) {
        return _onChange('password', e.target.value);
      },
      errors: errors.password
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }));
};

_s(SignUp, "dHvwB9YPhCWwd2grIo+MuzZMl0M=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaWduX3VwLnRzeCJdLCJuYW1lcyI6WyJTaWduVXAiLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJwYXNzd29yZENvbmZpcm1hdGlvbiIsInNpZ25VcERhdGEiLCJzZXRTaWduVXBEYXRhIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwib25TdWJtaXQiLCJ1c2VDYWxsYmFjayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJ3aW5kb3ciLCJhbGVydCIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJkYXRhIiwib25DaGFuZ2UiLCJrZXkiLCJ2YWx1ZSIsImxhYmVsIiwidHlwZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsTUFBZ0IsR0FBRyxTQUFuQkEsTUFBbUIsR0FBTTtBQUFBOztBQUM3QixrQkFBb0NDLHNEQUFRLENBQUM7QUFDM0NDLFlBQVEsRUFBRSxFQURpQztBQUUzQ0MsWUFBUSxFQUFFLEVBRmlDO0FBRzNDQyx3QkFBb0IsRUFBRTtBQUhxQixHQUFELENBQTVDO0FBQUEsTUFBT0MsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFLQSxtQkFBNEJMLHNEQUFRLENBQUM7QUFDbkNDLFlBQVEsRUFBRSxFQUR5QjtBQUVuQ0MsWUFBUSxFQUFFLEVBRnlCO0FBR25DQyx3QkFBb0IsRUFBRTtBQUhhLEdBQUQsQ0FBcEM7QUFBQSxNQUFPRyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFLQSxNQUFNQyxRQUFRLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2xDQSxLQUFDLENBQUNDLGNBQUY7QUFDQUMsZ0RBQUssQ0FBQ0MsSUFBTixrQkFBNEJULFVBQTVCLEVBQXdDVSxJQUF4QyxDQUE2QyxZQUFNO0FBQ2pEQyxZQUFNLENBQUNDLEtBQVAsQ0FBYSxNQUFiO0FBQ0FELFlBQU0sQ0FBQ0UsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIsVUFBdkI7QUFDRCxLQUhELEVBR0csVUFBQ0MsS0FBRCxFQUFXO0FBQ1osVUFBSUEsS0FBSyxDQUFDQyxRQUFWLEVBQW9CO0FBQ2xCLFlBQU1BLFFBQXVCLEdBQUdELEtBQUssQ0FBQ0MsUUFBdEM7O0FBQ0EsWUFBSUEsUUFBUSxDQUFDQyxNQUFULEtBQW9CLEdBQXhCLEVBQTZCO0FBQzNCZCxtQkFBUyxDQUFDYSxRQUFRLENBQUNFLElBQVYsQ0FBVDtBQUNEO0FBQ0Y7QUFDRixLQVZEO0FBV0QsR0FiMkIsRUFhekIsQ0FBQ2xCLFVBQUQsQ0FieUIsQ0FBNUI7O0FBY0EsTUFBTW1CLFNBQVEsR0FBR2QseURBQVcsQ0FBQyxVQUFDZSxHQUFELEVBQUtDLEtBQUwsRUFBYTtBQUN4Q3BCLGlCQUFhLGlDQUNSRCxVQURRLHFHQUVWb0IsR0FGVSxFQUVKQyxLQUZJLEdBQWI7QUFJRCxHQUwyQixFQUsxQixDQUFDckIsVUFBRCxDQUwwQixDQUE1Qjs7QUFNQSxTQUNFLG1FQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFRSxNQUFDLHFEQUFEO0FBQ0UsWUFBUSxFQUFFSSxRQURaO0FBRUUsV0FBTyxFQUFFLG1FQUNQO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFETyxDQUZYO0FBT0UsVUFBTSxFQUFFLENBQ047QUFDRWtCLFdBQUssRUFBRSxLQURUO0FBQ2dCQyxVQUFJLEVBQUUsTUFEdEI7QUFDOEJGLFdBQUssRUFBRXJCLFVBQVUsQ0FBQ0gsUUFEaEQ7QUFFRXNCLGNBQVEsRUFBRSxrQkFBQWIsQ0FBQztBQUFBLGVBQUlhLFNBQVEsQ0FBQyxVQUFELEVBQWFiLENBQUMsQ0FBQ2tCLE1BQUYsQ0FBU0gsS0FBdEIsQ0FBWjtBQUFBLE9BRmI7QUFHSW5CLFlBQU0sRUFBRUEsTUFBTSxDQUFDTDtBQUhuQixLQURNLEVBTU47QUFDRXlCLFdBQUssRUFBRSxJQURUO0FBQ2VDLFVBQUksRUFBRSxVQURyQjtBQUNpQ0YsV0FBSyxFQUFFckIsVUFBVSxDQUFDRixRQURuRDtBQUVFcUIsY0FBUSxFQUFFLGtCQUFBYixDQUFDO0FBQUEsZUFBSWEsU0FBUSxDQUFDLFVBQUQsRUFBYWIsQ0FBQyxDQUFDa0IsTUFBRixDQUFTSCxLQUF0QixDQUFaO0FBQUEsT0FGYjtBQUdJbkIsWUFBTSxFQUFFQSxNQUFNLENBQUNKO0FBSG5CLEtBTk0sQ0FQVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERjtBQW9FRCxDQW5HRDs7R0FBTUgsTTs7S0FBQUEsTTtBQXFHU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHNpZ25fdXAuanMuNTc4YjE1MjllODNmNjdlNGNmNGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmV4dFBhZ2V9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zLCB7QXhpb3NFcnJvciwgQXhpb3NSZXNwb25zZX0gZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge3NldH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHtGb3JtfSBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm0nO1xyXG5cclxuY29uc3QgU2lnblVwOiBOZXh0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbc2lnblVwRGF0YSwgc2V0U2lnblVwRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB1c2VybmFtZTogJycsXHJcbiAgICBwYXNzd29yZDogJycsXHJcbiAgICBwYXNzd29yZENvbmZpcm1hdGlvbjogJydcclxuICB9KTtcclxuICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe1xyXG4gICAgdXNlcm5hbWU6IFtdLFxyXG4gICAgcGFzc3dvcmQ6IFtdLFxyXG4gICAgcGFzc3dvcmRDb25maXJtYXRpb246IFtdXHJcbiAgfSk7XHJcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYXhpb3MucG9zdChgL2FwaS92MS91c2Vyc2AsIHNpZ25VcERhdGEpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoJ+azqOWGjOaIkOWKnycpO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvc2lnbl9pbic7XHJcbiAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2U6IEF4aW9zUmVzcG9uc2UgPSBlcnJvci5yZXNwb25zZTtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MjIpIHtcclxuICAgICAgICAgIHNldEVycm9ycyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sIFtzaWduVXBEYXRhXSk7XHJcbiAgY29uc3Qgb25DaGFuZ2UgPSB1c2VDYWxsYmFjaygoa2V5LHZhbHVlKT0+e1xyXG4gICAgc2V0U2lnblVwRGF0YSh7XHJcbiAgICAgIC4uLnNpZ25VcERhdGEsXHJcbiAgICAgIFtrZXldOiB2YWx1ZVxyXG4gICAgfSlcclxuICB9LFtzaWduVXBEYXRhXSlcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgxPuazqOWGjDwvaDE+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxyXG4gICAgICAgIGJ1dHRvbnM9ezw+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAg55m75b2VXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8Lz59XHJcbiAgICAgICAgZmllbGRzPXtbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAn55So5oi35ZCNJywgdHlwZTogJ3RleHQnLCB2YWx1ZTogc2lnblVwRGF0YS51c2VybmFtZSxcclxuICAgICAgICAgICAgb25DaGFuZ2U6IGUgPT4gb25DaGFuZ2UoJ3VzZXJuYW1lJywgZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICwgZXJyb3JzOiBlcnJvcnMudXNlcm5hbWVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAn5a+G56CBJywgdHlwZTogJ3Bhc3N3b3JkJywgdmFsdWU6IHNpZ25VcERhdGEucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBlID0+IG9uQ2hhbmdlKCdwYXNzd29yZCcsIGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAsIGVycm9yczogZXJyb3JzLnBhc3N3b3JkXHJcbiAgICAgICAgICB9XX0+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgICAgey8qPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT4qL31cclxuICAgICAgey8qICA8ZGl2PiovfVxyXG4gICAgICB7LyogICAgPGRpdj4qL31cclxuICAgICAgey8qICAgICAgPGxhYmVsPiovfVxyXG4gICAgICB7LyogICAgICAgIOeUqOaIt+WQjSovfVxyXG4gICAgICB7LyogICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtzaWduVXBEYXRhLnVzZXJuYW1lfSBvbkNoYW5nZT17ZSA9PiBzZXRTaWduVXBEYXRhKHsqL31cclxuICAgICAgey8qICAgICAgICAgIC4uLnNpZ25VcERhdGEsKi99XHJcbiAgICAgIHsvKiAgICAgICAgICB1c2VybmFtZTogZS50YXJnZXQudmFsdWUqL31cclxuICAgICAgey8qICAgICAgICB9KX0vPiovfVxyXG4gICAgICB7LyogICAgICA8L2xhYmVsPiovfVxyXG4gICAgICB7LyogICAgICB7ZXJyb3JzLnVzZXJuYW1lPy5sZW5ndGggPiAwICYmIDxkaXY+Ki99XHJcbiAgICAgIHsvKiAgICAgICAge2Vycm9ycy51c2VybmFtZS5qb2luKCcsJyl9Ki99XHJcbiAgICAgIHsvKiAgICAgIDwvZGl2Pn0qL31cclxuICAgICAgey8qICAgIDwvZGl2PiovfVxyXG4gICAgICB7LyogICAgPGRpdj4qL31cclxuICAgICAgey8qICAgICAgPGxhYmVsPiovfVxyXG4gICAgICB7LyogICAgICAgIOWvhueggSovfVxyXG4gICAgICB7LyogICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17c2lnblVwRGF0YS5wYXNzd29yZH0gb25DaGFuZ2U9e2UgPT4gc2V0U2lnblVwRGF0YSh7Ki99XHJcbiAgICAgIHsvKiAgICAgICAgICAuLi5zaWduVXBEYXRhLCovfVxyXG4gICAgICB7LyogICAgICAgICAgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlKi99XHJcbiAgICAgIHsvKiAgICAgICAgfSl9Lz4qL31cclxuICAgICAgey8qICAgICAgPC9sYWJlbD4qL31cclxuICAgICAgey8qICAgICAge2Vycm9ycy5wYXNzd29yZD8ubGVuZ3RoID4gMCAmJiA8ZGl2PiovfVxyXG4gICAgICB7LyogICAgICAgIHtlcnJvcnMucGFzc3dvcmQuam9pbignLCcpfSovfVxyXG4gICAgICB7LyogICAgICA8L2Rpdj59Ki99XHJcbiAgICAgIHsvKiAgICA8L2Rpdj4qL31cclxuICAgICAgey8qICAgIDxkaXY+Ki99XHJcbiAgICAgIHsvKiAgICAgIDxsYWJlbD4qL31cclxuICAgICAgey8qICAgICAgICDnoa7orqTlr4bnoIEqL31cclxuICAgICAgey8qICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3NpZ25VcERhdGEucGFzc3dvcmRDb25maXJtYXRpb259IG9uQ2hhbmdlPXtlID0+IHNldFNpZ25VcERhdGEoeyovfVxyXG4gICAgICB7LyogICAgICAgICAgLi4uc2lnblVwRGF0YSwqL31cclxuICAgICAgey8qICAgICAgICAgIHBhc3N3b3JkQ29uZmlybWF0aW9uOiBlLnRhcmdldC52YWx1ZSovfVxyXG4gICAgICB7LyogICAgICAgIH0pfS8+Ki99XHJcbiAgICAgIHsvKiAgICAgIDwvbGFiZWw+Ki99XHJcbiAgICAgIHsvKiAgICAgIHtlcnJvcnMucGFzc3dvcmRDb25maXJtYXRpb24/Lmxlbmd0aCA+IDAgJiYgPGRpdj4qL31cclxuICAgICAgey8qICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkQ29uZmlybWF0aW9uLmpvaW4oJywnKX0qL31cclxuICAgICAgey8qICAgICAgPC9kaXY+fSovfVxyXG4gICAgICB7LyogICAgPC9kaXY+Ki99XHJcbiAgICAgIHsvKiAgICA8ZGl2PiovfVxyXG4gICAgICB7LyogICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7ms6jlhow8L2J1dHRvbj4qL31cclxuICAgICAgey8qICAgIDwvZGl2PiovfVxyXG4gICAgICB7LyogIDwvZGl2PiovfVxyXG4gICAgICB7Lyo8L2Zvcm0+Ki99XHJcbiAgICA8Lz5cclxuXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25VcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==