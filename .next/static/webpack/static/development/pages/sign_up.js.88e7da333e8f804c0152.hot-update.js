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
    }, "\u6CE8\u518C")),
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
    }, {
      label: '确认密码',
      type: 'password',
      value: signUpData.passwordConfirmation,
      onChange: function onChange(e) {
        return _onChange('passwordConfirmation', e.target.value);
      },
      errors: errors.passwordConfirmation
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaWduX3VwLnRzeCJdLCJuYW1lcyI6WyJTaWduVXAiLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJwYXNzd29yZENvbmZpcm1hdGlvbiIsInNpZ25VcERhdGEiLCJzZXRTaWduVXBEYXRhIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwib25TdWJtaXQiLCJ1c2VDYWxsYmFjayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJ3aW5kb3ciLCJhbGVydCIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJkYXRhIiwib25DaGFuZ2UiLCJrZXkiLCJ2YWx1ZSIsImxhYmVsIiwidHlwZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsTUFBZ0IsR0FBRyxTQUFuQkEsTUFBbUIsR0FBTTtBQUFBOztBQUM3QixrQkFBb0NDLHNEQUFRLENBQUM7QUFDM0NDLFlBQVEsRUFBRSxFQURpQztBQUUzQ0MsWUFBUSxFQUFFLEVBRmlDO0FBRzNDQyx3QkFBb0IsRUFBRTtBQUhxQixHQUFELENBQTVDO0FBQUEsTUFBT0MsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFLQSxtQkFBNEJMLHNEQUFRLENBQUM7QUFDbkNDLFlBQVEsRUFBRSxFQUR5QjtBQUVuQ0MsWUFBUSxFQUFFLEVBRnlCO0FBR25DQyx3QkFBb0IsRUFBRTtBQUhhLEdBQUQsQ0FBcEM7QUFBQSxNQUFPRyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFLQSxNQUFNQyxRQUFRLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2xDQSxLQUFDLENBQUNDLGNBQUY7QUFDQUMsZ0RBQUssQ0FBQ0MsSUFBTixrQkFBNEJULFVBQTVCLEVBQXdDVSxJQUF4QyxDQUE2QyxZQUFNO0FBQ2pEQyxZQUFNLENBQUNDLEtBQVAsQ0FBYSxNQUFiO0FBQ0FELFlBQU0sQ0FBQ0UsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIsVUFBdkI7QUFDRCxLQUhELEVBR0csVUFBQ0MsS0FBRCxFQUFXO0FBQ1osVUFBSUEsS0FBSyxDQUFDQyxRQUFWLEVBQW9CO0FBQ2xCLFlBQU1BLFFBQXVCLEdBQUdELEtBQUssQ0FBQ0MsUUFBdEM7O0FBQ0EsWUFBSUEsUUFBUSxDQUFDQyxNQUFULEtBQW9CLEdBQXhCLEVBQTZCO0FBQzNCZCxtQkFBUyxDQUFDYSxRQUFRLENBQUNFLElBQVYsQ0FBVDtBQUNEO0FBQ0Y7QUFDRixLQVZEO0FBV0QsR0FiMkIsRUFhekIsQ0FBQ2xCLFVBQUQsQ0FieUIsQ0FBNUI7O0FBY0EsTUFBTW1CLFNBQVEsR0FBR2QseURBQVcsQ0FBQyxVQUFDZSxHQUFELEVBQU1DLEtBQU4sRUFBZ0I7QUFDM0NwQixpQkFBYSxpQ0FDUkQsVUFEUSxxR0FFVm9CLEdBRlUsRUFFSkMsS0FGSSxHQUFiO0FBSUQsR0FMMkIsRUFLekIsQ0FBQ3JCLFVBQUQsQ0FMeUIsQ0FBNUI7O0FBTUEsU0FDRSxtRUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUUsTUFBQyxxREFBRDtBQUNFLFlBQVEsRUFBRUksUUFEWjtBQUVFLFdBQU8sRUFBRSxtRUFDUDtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRE8sQ0FGWDtBQU9FLFVBQU0sRUFBRSxDQUNOO0FBQ0VrQixXQUFLLEVBQUUsS0FEVDtBQUNnQkMsVUFBSSxFQUFFLE1BRHRCO0FBQzhCRixXQUFLLEVBQUVyQixVQUFVLENBQUNILFFBRGhEO0FBRUVzQixjQUFRLEVBQUUsa0JBQUFiLENBQUM7QUFBQSxlQUFJYSxTQUFRLENBQUMsVUFBRCxFQUFhYixDQUFDLENBQUNrQixNQUFGLENBQVNILEtBQXRCLENBQVo7QUFBQSxPQUZiO0FBR0luQixZQUFNLEVBQUVBLE1BQU0sQ0FBQ0w7QUFIbkIsS0FETSxFQU1OO0FBQ0V5QixXQUFLLEVBQUUsSUFEVDtBQUNlQyxVQUFJLEVBQUUsVUFEckI7QUFDaUNGLFdBQUssRUFBRXJCLFVBQVUsQ0FBQ0YsUUFEbkQ7QUFFRXFCLGNBQVEsRUFBRSxrQkFBQWIsQ0FBQztBQUFBLGVBQUlhLFNBQVEsQ0FBQyxVQUFELEVBQWFiLENBQUMsQ0FBQ2tCLE1BQUYsQ0FBU0gsS0FBdEIsQ0FBWjtBQUFBLE9BRmI7QUFHSW5CLFlBQU0sRUFBRUEsTUFBTSxDQUFDSjtBQUhuQixLQU5NLEVBV047QUFDRXdCLFdBQUssRUFBRSxNQURUO0FBQ2lCQyxVQUFJLEVBQUUsVUFEdkI7QUFDbUNGLFdBQUssRUFBRXJCLFVBQVUsQ0FBQ0Qsb0JBRHJEO0FBRUVvQixjQUFRLEVBQUUsa0JBQUFiLENBQUM7QUFBQSxlQUFJYSxTQUFRLENBQUMsc0JBQUQsRUFBeUJiLENBQUMsQ0FBQ2tCLE1BQUYsQ0FBU0gsS0FBbEMsQ0FBWjtBQUFBLE9BRmI7QUFHSW5CLFlBQU0sRUFBRUEsTUFBTSxDQUFDSDtBQUhuQixLQVhNLENBUFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREY7QUEwRUQsQ0F6R0Q7O0dBQU1KLE07O0tBQUFBLE07QUEyR1NBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxzaWduX3VwLmpzLjg4ZTdkYTMzM2U4ZjgwNGMwMTUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05leHRQYWdlfSBmcm9tICduZXh0JztcclxuaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcywge0F4aW9zRXJyb3IsIEF4aW9zUmVzcG9uc2V9IGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtzZXR9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7Rm9ybX0gZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtJztcclxuXHJcbmNvbnN0IFNpZ25VcDogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NpZ25VcERhdGEsIHNldFNpZ25VcERhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgcGFzc3dvcmRDb25maXJtYXRpb246ICcnXHJcbiAgfSk7XHJcbiAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHtcclxuICAgIHVzZXJuYW1lOiBbXSxcclxuICAgIHBhc3N3b3JkOiBbXSxcclxuICAgIHBhc3N3b3JkQ29uZmlybWF0aW9uOiBbXVxyXG4gIH0pO1xyXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGF4aW9zLnBvc3QoYC9hcGkvdjEvdXNlcnNgLCBzaWduVXBEYXRhKS50aGVuKCgpID0+IHtcclxuICAgICAgd2luZG93LmFsZXJ0KCfms6jlhozmiJDlip8nKTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3NpZ25faW4nO1xyXG4gICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlID0gZXJyb3IucmVzcG9uc2U7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDIyKSB7XHJcbiAgICAgICAgICBzZXRFcnJvcnMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LCBbc2lnblVwRGF0YV0pO1xyXG4gIGNvbnN0IG9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGtleSwgdmFsdWUpID0+IHtcclxuICAgIHNldFNpZ25VcERhdGEoe1xyXG4gICAgICAuLi5zaWduVXBEYXRhLFxyXG4gICAgICBba2V5XTogdmFsdWVcclxuICAgIH0pO1xyXG4gIH0sIFtzaWduVXBEYXRhXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMT7ms6jlhow8L2gxPlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIG9uU3VibWl0PXtvblN1Ym1pdH1cclxuICAgICAgICBidXR0b25zPXs8PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgIOazqOWGjFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC8+fVxyXG4gICAgICAgIGZpZWxkcz17W1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogJ+eUqOaIt+WQjScsIHR5cGU6ICd0ZXh0JywgdmFsdWU6IHNpZ25VcERhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBlID0+IG9uQ2hhbmdlKCd1c2VybmFtZScsIGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAsIGVycm9yczogZXJyb3JzLnVzZXJuYW1lXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogJ+WvhueggScsIHR5cGU6ICdwYXNzd29yZCcsIHZhbHVlOiBzaWduVXBEYXRhLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICBvbkNoYW5nZTogZSA9PiBvbkNoYW5nZSgncGFzc3dvcmQnLCBlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgLCBlcnJvcnM6IGVycm9ycy5wYXNzd29yZFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6ICfnoa7orqTlr4bnoIEnLCB0eXBlOiAncGFzc3dvcmQnLCB2YWx1ZTogc2lnblVwRGF0YS5wYXNzd29yZENvbmZpcm1hdGlvbixcclxuICAgICAgICAgICAgb25DaGFuZ2U6IGUgPT4gb25DaGFuZ2UoJ3Bhc3N3b3JkQ29uZmlybWF0aW9uJywgZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICwgZXJyb3JzOiBlcnJvcnMucGFzc3dvcmRDb25maXJtYXRpb25cclxuICAgICAgICAgIH1cclxuICAgICAgICBdfT5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgICB7Lyo8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PiovfVxyXG4gICAgICB7LyogIDxkaXY+Ki99XHJcbiAgICAgIHsvKiAgICA8ZGl2PiovfVxyXG4gICAgICB7LyogICAgICA8bGFiZWw+Ki99XHJcbiAgICAgIHsvKiAgICAgICAg55So5oi35ZCNKi99XHJcbiAgICAgIHsvKiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3NpZ25VcERhdGEudXNlcm5hbWV9IG9uQ2hhbmdlPXtlID0+IHNldFNpZ25VcERhdGEoeyovfVxyXG4gICAgICB7LyogICAgICAgICAgLi4uc2lnblVwRGF0YSwqL31cclxuICAgICAgey8qICAgICAgICAgIHVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZSovfVxyXG4gICAgICB7LyogICAgICAgIH0pfS8+Ki99XHJcbiAgICAgIHsvKiAgICAgIDwvbGFiZWw+Ki99XHJcbiAgICAgIHsvKiAgICAgIHtlcnJvcnMudXNlcm5hbWU/Lmxlbmd0aCA+IDAgJiYgPGRpdj4qL31cclxuICAgICAgey8qICAgICAgICB7ZXJyb3JzLnVzZXJuYW1lLmpvaW4oJywnKX0qL31cclxuICAgICAgey8qICAgICAgPC9kaXY+fSovfVxyXG4gICAgICB7LyogICAgPC9kaXY+Ki99XHJcbiAgICAgIHsvKiAgICA8ZGl2PiovfVxyXG4gICAgICB7LyogICAgICA8bGFiZWw+Ki99XHJcbiAgICAgIHsvKiAgICAgICAg5a+G56CBKi99XHJcbiAgICAgIHsvKiAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtzaWduVXBEYXRhLnBhc3N3b3JkfSBvbkNoYW5nZT17ZSA9PiBzZXRTaWduVXBEYXRhKHsqL31cclxuICAgICAgey8qICAgICAgICAgIC4uLnNpZ25VcERhdGEsKi99XHJcbiAgICAgIHsvKiAgICAgICAgICBwYXNzd29yZDogZS50YXJnZXQudmFsdWUqL31cclxuICAgICAgey8qICAgICAgICB9KX0vPiovfVxyXG4gICAgICB7LyogICAgICA8L2xhYmVsPiovfVxyXG4gICAgICB7LyogICAgICB7ZXJyb3JzLnBhc3N3b3JkPy5sZW5ndGggPiAwICYmIDxkaXY+Ki99XHJcbiAgICAgIHsvKiAgICAgICAge2Vycm9ycy5wYXNzd29yZC5qb2luKCcsJyl9Ki99XHJcbiAgICAgIHsvKiAgICAgIDwvZGl2Pn0qL31cclxuICAgICAgey8qICAgIDwvZGl2PiovfVxyXG4gICAgICB7LyogICAgPGRpdj4qL31cclxuICAgICAgey8qICAgICAgPGxhYmVsPiovfVxyXG4gICAgICB7LyogICAgICAgIOehruiupOWvhueggSovfVxyXG4gICAgICB7LyogICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17c2lnblVwRGF0YS5wYXNzd29yZENvbmZpcm1hdGlvbn0gb25DaGFuZ2U9e2UgPT4gc2V0U2lnblVwRGF0YSh7Ki99XHJcbiAgICAgIHsvKiAgICAgICAgICAuLi5zaWduVXBEYXRhLCovfVxyXG4gICAgICB7LyogICAgICAgICAgcGFzc3dvcmRDb25maXJtYXRpb246IGUudGFyZ2V0LnZhbHVlKi99XHJcbiAgICAgIHsvKiAgICAgICAgfSl9Lz4qL31cclxuICAgICAgey8qICAgICAgPC9sYWJlbD4qL31cclxuICAgICAgey8qICAgICAge2Vycm9ycy5wYXNzd29yZENvbmZpcm1hdGlvbj8ubGVuZ3RoID4gMCAmJiA8ZGl2PiovfVxyXG4gICAgICB7LyogICAgICAgIHtlcnJvcnMucGFzc3dvcmRDb25maXJtYXRpb24uam9pbignLCcpfSovfVxyXG4gICAgICB7LyogICAgICA8L2Rpdj59Ki99XHJcbiAgICAgIHsvKiAgICA8L2Rpdj4qL31cclxuICAgICAgey8qICAgIDxkaXY+Ki99XHJcbiAgICAgIHsvKiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPuazqOWGjDwvYnV0dG9uPiovfVxyXG4gICAgICB7LyogICAgPC9kaXY+Ki99XHJcbiAgICAgIHsvKiAgPC9kaXY+Ki99XHJcbiAgICAgIHsvKjwvZm9ybT4qL31cclxuICAgIDwvPlxyXG5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnblVwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9