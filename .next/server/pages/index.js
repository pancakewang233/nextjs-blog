"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ua-parser-js */ \"ua-parser-js\");\n/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ua_parser_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Index = (props)=>{\n    const { browser  } = props;\n    const { 0: width , 1: setWidth  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const w = document.documentElement.clientWidth;\n        setWidth(w);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"D:\\\\Pank\\\\code\\\\Pack\\\\nextjs-blog\\\\pages\\\\index.tsx\",\n            lineNumber: 21\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h1\", {\n                __source: {\n                    fileName: \"D:\\\\Pank\\\\code\\\\Pack\\\\nextjs-blog\\\\pages\\\\index.tsx\",\n                    lineNumber: 22\n                },\n                __self: undefined,\n                children: [\n                    \"你的浏览器是 \",\n                    browser.name\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h2\", {\n                __source: {\n                    fileName: \"D:\\\\Pank\\\\code\\\\Pack\\\\nextjs-blog\\\\pages\\\\index.tsx\",\n                    lineNumber: 23\n                },\n                __self: undefined,\n                children: [\n                    \"你的浏览器窗口大小是 \",\n                    width,\n                    \" 像素\"\n                ]\n            })\n        ]\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\nconst getServerSideProps = async (context)=>{\n    const ua = context.req.headers['user-agent'];\n    const result = new ua_parser_js__WEBPACK_IMPORTED_MODULE_1__.UAParser(ua).getResult();\n    return {\n        props: {\n            browser: result.browser\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXVDO0FBRUk7QUFVM0MsS0FBSyxDQUFDRyxLQUFLLElBQW9CQyxLQUFLLEdBQUssQ0FBQztJQUN4QyxLQUFLLENBQUMsQ0FBQ0MsQ0FBQUEsT0FBTyxHQUFDLEdBQUdELEtBQUs7SUFDdkIsS0FBSyxNQUFFRSxLQUFLLE1BQUVDLFFBQVEsTUFBSUwsK0NBQVEsQ0FBQyxDQUFDO0lBQ3BDRCxnREFBUyxLQUFLLENBQUM7UUFDYixLQUFLLENBQUNPLENBQUMsR0FBR0MsUUFBUSxDQUFDQyxlQUFlLENBQUNDLFdBQVc7UUFDOUNKLFFBQVEsQ0FBQ0MsQ0FBQztJQUNaLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDTCxNQUFNLHVFQUNISSxDQUFHOzs7Ozs7O2tGQUNEQyxDQUFFOzs7Ozs7O29CQUFDLENBQU87b0JBQWFSLE9BQU8sQ0FBQ1MsSUFBSTs7O2tGQUN2QkMsQ0FBVjs7Ozs7OztvQkFBQyxDQUFXO29CQUFxQlQsS0FBSztvQkFBQyxDQUFHOzs7OztBQUcvQixDQUFDO0FBQ0QsaUVBQWVILEtBQUs7QUFFYixLQUFLLENBQUNhLGtCQUFrQixVQUE4QkMsT0FBTyxHQUFHLENBQUM7SUFDdEUsS0FBSyxDQUFDQyxFQUFFLEdBQUdELE9BQU8sQ0FBQ0UsR0FBRyxDQUFDQyxPQUFPLENBQUMsQ0FBWTtJQUMzQyxLQUFLLENBQUNDLE1BQU0sR0FBRyxHQUFHLENBQUNyQixrREFBUSxDQUFDa0IsRUFBRSxFQUFFSSxTQUFTO0lBQ3pDLE1BQU0sQ0FBQyxDQUFDO1FBQ05sQixLQUFLLEVBQUUsQ0FBQztZQUNOQyxPQUFPLEVBQUVnQixNQUFNLENBQUNoQixPQUFPO1FBQ3pCLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYmxvZy0xLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVUFQYXJzZXIgfSBmcm9tICd1YS1wYXJzZXItanMnO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzLCBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxudHlwZSBQcm9wcyA9IHtcbiAgYnJvd3Nlcjoge1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICB2ZXJzaW9uOiBzdHJpbmcsXG4gICAgbWFqb3I6IHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IEluZGV4Ok5leHRQYWdlPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7YnJvd3Nlcn0gPSBwcm9wc1xuICBjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKDApO1xuICB1c2VFZmZlY3QoKCk9PntcbiAgICBjb25zdCB3ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIHNldFdpZHRoKHcpXG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPuS9oOeahOa1j+iniOWZqOaYryB7YnJvd3Nlci5uYW1lfTwvaDE+XG4gICAgICA8aDI+5L2g55qE5rWP6KeI5Zmo56qX5Y+j5aSn5bCP5pivIHt3aWR0aH0g5YOP57SgPC9oMj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KT0+e1xuICBjb25zdCB1YSA9IGNvbnRleHQucmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXVxuICBjb25zdCByZXN1bHQgPSBuZXcgVUFQYXJzZXIodWEpLmdldFJlc3VsdCgpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGJyb3dzZXI6IHJlc3VsdC5icm93c2VyXG4gICAgfVxuICB9XG59Il0sIm5hbWVzIjpbIlVBUGFyc2VyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbmRleCIsInByb3BzIiwiYnJvd3NlciIsIndpZHRoIiwic2V0V2lkdGgiLCJ3IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImRpdiIsImgxIiwibmFtZSIsImgyIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInVhIiwicmVxIiwiaGVhZGVycyIsInJlc3VsdCIsImdldFJlc3VsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "ua-parser-js":
/*!*******************************!*\
  !*** external "ua-parser-js" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("ua-parser-js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();