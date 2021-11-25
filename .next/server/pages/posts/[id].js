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
exports.id = "pages/posts/[id]";
exports.ids = ["pages/posts/[id]"];
exports.modules = {

/***/ "./lib/posts.tsx":
/*!***********************!*\
  !*** ./lib/posts.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPosts\": () => (/* binding */ getPosts),\n/* harmony export */   \"getPost\": () => (/* binding */ getPost),\n/* harmony export */   \"getPostIds\": () => (/* binding */ getPostIds)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst markdownDir = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'markdown');\nconst getPosts = async ()=>{\n    const fileNames = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readdir(markdownDir);\n    const posts = fileNames.map((filename)=>{\n        const id = filename.replace(/\\.md$/g, '');\n        const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(markdownDir, filename);\n        const text = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, 'utf-8');\n        const { data: { title , date  } , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(text);\n        return {\n            id,\n            title,\n            date,\n            content\n        };\n    });\n    return posts;\n};\nconst getPost = async (id)=>{\n    const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(markdownDir, id + '.md');\n    const text = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, 'utf-8');\n    const { data: { title , date  } , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(text);\n    return JSON.parse(JSON.stringify({\n        id,\n        title,\n        date,\n        content\n    }));\n};\nconst getPostIds = async ()=>{\n    const fileNames = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readdir(markdownDir);\n    return fileNames.map((fileName)=>fileName.replace(/\\.md$/g, '')\n    );\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcG9zdHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE0QztBQUNyQjtBQUNTO0FBRWhDLEtBQUssQ0FBQ0ssV0FBVyxHQUFHRixnREFBUyxDQUFDSSxPQUFPLENBQUNDLEdBQUcsSUFBSSxDQUFVO0FBRWhELEtBQUssQ0FBQ0MsUUFBUSxhQUFjLENBQUM7SUFDaEMsS0FBSyxDQUFDQyxTQUFTLEdBQUcsS0FBSyxDQUFDUixnREFBaUIsQ0FBQ0csV0FBVztJQUNyRCxLQUFLLENBQUNPLEtBQUssR0FBR0YsU0FBUyxDQUFDRyxHQUFHLEVBQUNDLFFBQVEsR0FBRyxDQUFDO1FBQ3BDLEtBQUssQ0FBQ0MsRUFBRSxHQUFHRCxRQUFRLENBQUNFLE9BQU8sV0FBVyxDQUFFO1FBQ3hDLEtBQUssQ0FBQ0MsUUFBUSxHQUFHZCxnREFBUyxDQUFDRSxXQUFXLEVBQUVTLFFBQVE7UUFDaEQsS0FBSyxDQUFDSSxJQUFJLEdBQUdsQixzREFBZSxDQUFDaUIsUUFBUSxFQUFFLENBQU87UUFDOUMsS0FBSyxDQUFDLENBQUNHLENBQUFBLElBQUksRUFBQyxDQUFDQyxDQUFBQSxLQUFLLEdBQUVDLElBQUksR0FBQyxHQUFFQyxPQUFPLEdBQUMsR0FBR25CLGtEQUFNLENBQUNjLElBQUk7UUFDakQsTUFBTSxDQUFDLENBQUM7WUFDSkgsRUFBRTtZQUFFTSxLQUFLO1lBQUVDLElBQUk7WUFBRUMsT0FBTztRQUM1QixDQUFDO0lBQ0wsQ0FBQztJQUNELE1BQU0sQ0FBQ1gsS0FBSztBQUNoQixDQUFDO0FBRU0sS0FBSyxDQUFDWSxPQUFPLFVBQVNULEVBQVUsR0FBSSxDQUFDO0lBQ3hDLEtBQUssQ0FBQ0UsUUFBUSxHQUFHZCxnREFBUyxDQUFDRSxXQUFXLEVBQUVVLEVBQUUsR0FBRyxDQUFLO0lBQ2xELEtBQUssQ0FBQ0csSUFBSSxHQUFHbEIsc0RBQWUsQ0FBQ2lCLFFBQVEsRUFBRSxDQUFPO0lBQzlDLEtBQUssQ0FBQyxDQUFDRyxDQUFBQSxJQUFJLEVBQUMsQ0FBQ0MsQ0FBQUEsS0FBSyxHQUFFQyxJQUFJLEdBQUMsR0FBRUMsT0FBTyxHQUFDLEdBQUduQixrREFBTSxDQUFDYyxJQUFJO0lBQ2pELE1BQU0sQ0FBQ08sSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsU0FBUyxDQUFDLENBQUM7UUFDOUJaLEVBQUU7UUFBRU0sS0FBSztRQUFFQyxJQUFJO1FBQUVDLE9BQU87SUFDNUIsQ0FBQztBQUNMLENBQUM7QUFFTSxLQUFLLENBQUNLLFVBQVUsYUFBYSxDQUFDO0lBQ2pDLEtBQUssQ0FBQ2xCLFNBQVMsR0FBRyxLQUFLLENBQUNSLGdEQUFpQixDQUFDRyxXQUFXO0lBQ3JELE1BQU0sQ0FBQ0ssU0FBUyxDQUFDRyxHQUFHLEVBQUNnQixRQUFRLEdBQUlBLFFBQVEsQ0FBQ2IsT0FBTyxXQUFXLENBQUU7O0FBQ2xFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYmxvZy0xLy4vbGliL3Bvc3RzLnRzeD8yYjNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcywge3Byb21pc2VzIGFzIGZzUHJvbWlzZX0gZnJvbSAnZnMnXHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCBtYXR0ZXIgZnJvbSAnZ3JheS1tYXR0ZXInXHJcblxyXG5jb25zdCBtYXJrZG93bkRpciA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnbWFya2Rvd24nKVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFBvc3RzID0gYXN5bmMoKSA9PiB7XHJcbiAgICBjb25zdCBmaWxlTmFtZXMgPSBhd2FpdCBmc1Byb21pc2UucmVhZGRpcihtYXJrZG93bkRpcilcclxuICAgIGNvbnN0IHBvc3RzID0gZmlsZU5hbWVzLm1hcChmaWxlbmFtZSA9PntcclxuICAgICAgICBjb25zdCBpZCA9IGZpbGVuYW1lLnJlcGxhY2UoL1xcLm1kJC9nLCAnJylcclxuICAgICAgICBjb25zdCBmdWxsUGF0aCA9IHBhdGguam9pbihtYXJrZG93bkRpciwgZmlsZW5hbWUpXHJcbiAgICAgICAgY29uc3QgdGV4dCA9IGZzLnJlYWRGaWxlU3luYyhmdWxsUGF0aCwgJ3V0Zi04JylcclxuICAgICAgICBjb25zdCB7ZGF0YTp7dGl0bGUsIGRhdGV9LCBjb250ZW50fSA9IG1hdHRlcih0ZXh0KVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkLCB0aXRsZSwgZGF0ZSwgY29udGVudFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gcG9zdHM7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQb3N0ID0gYXN5bmMoaWQ6IHN0cmluZykgPT57XHJcbiAgICBjb25zdCBmdWxsUGF0aCA9IHBhdGguam9pbihtYXJrZG93bkRpciwgaWQgKyAnLm1kJylcclxuICAgIGNvbnN0IHRleHQgPSBmcy5yZWFkRmlsZVN5bmMoZnVsbFBhdGgsICd1dGYtOCcpXHJcbiAgICBjb25zdCB7ZGF0YTp7dGl0bGUsIGRhdGV9LCBjb250ZW50fSA9IG1hdHRlcih0ZXh0KVxyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGlkLCB0aXRsZSwgZGF0ZSwgY29udGVudFxyXG4gICAgfSkpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQb3N0SWRzID0gYXN5bmMoKSA9PntcclxuICAgIGNvbnN0IGZpbGVOYW1lcyA9IGF3YWl0IGZzUHJvbWlzZS5yZWFkZGlyKG1hcmtkb3duRGlyKVxyXG4gICAgcmV0dXJuIGZpbGVOYW1lcy5tYXAoZmlsZU5hbWUgPT4gZmlsZU5hbWUucmVwbGFjZSgvXFwubWQkL2csICcnKSlcclxufSJdLCJuYW1lcyI6WyJmcyIsInByb21pc2VzIiwiZnNQcm9taXNlIiwicGF0aCIsIm1hdHRlciIsIm1hcmtkb3duRGlyIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJnZXRQb3N0cyIsImZpbGVOYW1lcyIsInJlYWRkaXIiLCJwb3N0cyIsIm1hcCIsImZpbGVuYW1lIiwiaWQiLCJyZXBsYWNlIiwiZnVsbFBhdGgiLCJ0ZXh0IiwicmVhZEZpbGVTeW5jIiwiZGF0YSIsInRpdGxlIiwiZGF0ZSIsImNvbnRlbnQiLCJnZXRQb3N0IiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZ2V0UG9zdElkcyIsImZpbGVOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/posts.tsx\n");

/***/ }),

/***/ "./pages/posts/[id].tsx":
/*!******************************!*\
  !*** ./pages/posts/[id].tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lib_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/posts */ \"./lib/posts.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst postsShow = (props)=>{\n    const { post  } = props;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"D:\\\\Pank\\\\code\\\\Pack\\\\nextjs-blog\\\\pages\\\\posts\\\\[id].tsx\",\n            lineNumber: 11\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"D:\\\\Pank\\\\code\\\\Pack\\\\nextjs-blog\\\\pages\\\\posts\\\\[id].tsx\",\n                    lineNumber: 12\n                },\n                __self: undefined,\n                children: post.title\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"article\", {\n                __source: {\n                    fileName: \"D:\\\\Pank\\\\code\\\\Pack\\\\nextjs-blog\\\\pages\\\\posts\\\\[id].tsx\",\n                    lineNumber: 13\n                },\n                __self: undefined,\n                children: post.content\n            })\n        ]\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postsShow);\nconst getStaticPaths = async ()=>{\n    const idList = await (0,lib_posts__WEBPACK_IMPORTED_MODULE_1__.getPostIds)();\n    return {\n        paths: idList.map((id)=>({\n                params: {\n                    id: id\n                }\n            })\n        ),\n        fallback: false\n    };\n};\nconst getStaticProps = async (x)=>{\n    const id = x.params.id;\n    const post = await (0,lib_posts__WEBPACK_IMPORTED_MODULE_1__.getPost)(id);\n    return {\n        props: {\n            post: post\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBK0M7QUFFdEI7QUFLekIsS0FBSyxDQUFDRyxTQUFTLElBQW9CQyxLQUFLLEdBQUssQ0FBQztJQUMxQyxLQUFLLENBQUMsQ0FBQ0MsQ0FBQUEsSUFBSSxHQUFDLEdBQUdELEtBQUs7SUFDcEIsTUFBTSx1RUFDREUsQ0FBRzs7Ozs7OztpRkFDQ0MsQ0FBRTs7Ozs7OzBCQUFFRixJQUFJLENBQUNHLEtBQUs7O2lGQUNkQyxDQUFPOzs7Ozs7MEJBQ0hKLElBQUksQ0FBQ0ssT0FBTzs7OztBQUk3QixDQUFDO0FBRUQsaUVBQWVQLFNBQVMsRUFBQztBQUVsQixLQUFLLENBQUNRLGNBQWMsYUFBZSxDQUFDO0lBQ3ZDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEtBQUssQ0FBQ1gscURBQVU7SUFDL0IsTUFBTSxDQUFDLENBQUM7UUFDSlksS0FBSyxFQUFFRCxNQUFNLENBQUNFLEdBQUcsRUFBQ0MsRUFBRSxJQUFLLENBQUNDO2dCQUFBQSxNQUFNLEVBQUUsQ0FBQ0Q7b0JBQUFBLEVBQUUsRUFBRUEsRUFBRTtnQkFBQSxDQUFDO1lBQUEsQ0FBQzs7UUFDM0NFLFFBQVEsRUFBRSxLQUFLO0lBQ25CLENBQUM7QUFDTCxDQUFDO0FBRU0sS0FBSyxDQUFDQyxjQUFjLFVBQVVDLENBQU0sR0FBSyxDQUFDO0lBQzdDLEtBQUssQ0FBQ0osRUFBRSxHQUFHSSxDQUFDLENBQUNILE1BQU0sQ0FBQ0QsRUFBRTtJQUN0QixLQUFLLENBQUNWLElBQUksR0FBRyxLQUFLLENBQUNMLGtEQUFPLENBQUNlLEVBQUU7SUFDN0IsTUFBTSxDQUFDLENBQUM7UUFDSlgsS0FBSyxFQUFFLENBQUM7WUFDSkMsSUFBSSxFQUFFQSxJQUFJO1FBQ2QsQ0FBQztJQUNMLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2ctMS8uL3BhZ2VzL3Bvc3RzL1tpZF0udHN4PzIxZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UG9zdCwgZ2V0UG9zdElkcyB9IGZyb20gJ2xpYi9wb3N0cyc7XHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgICBwb3N0OiBQb3N0XHJcbn1cclxuY29uc3QgcG9zdHNTaG93Ok5leHRQYWdlPFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge3Bvc3R9ID0gcHJvcHNcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgIDxhcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAge3Bvc3QuY29udGVudH1cclxuICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwb3N0c1Nob3c7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBpZExpc3QgPSBhd2FpdCBnZXRQb3N0SWRzKClcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHM6IGlkTGlzdC5tYXAoaWQgPT4gKHtwYXJhbXM6IHtpZDogaWR9fSkpLFxyXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeDogYW55KSA9PiB7XHJcbiAgICBjb25zdCBpZCA9IHgucGFyYW1zLmlkXHJcbiAgICBjb25zdCBwb3N0ID0gYXdhaXQgZ2V0UG9zdChpZClcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgcG9zdDogcG9zdFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJnZXRQb3N0IiwiZ2V0UG9zdElkcyIsIlJlYWN0IiwicG9zdHNTaG93IiwicHJvcHMiLCJwb3N0IiwiZGl2IiwiaDEiLCJ0aXRsZSIsImFydGljbGUiLCJjb250ZW50IiwiZ2V0U3RhdGljUGF0aHMiLCJpZExpc3QiLCJwYXRocyIsIm1hcCIsImlkIiwicGFyYW1zIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsIngiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/[id].tsx\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("gray-matter");

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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[id].tsx"));
module.exports = __webpack_exports__;

})();