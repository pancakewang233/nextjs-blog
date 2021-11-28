module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/getDatabaseConnection.tsx":
/*!***************************************!*\
  !*** ./lib/getDatabaseConnection.tsx ***!
  \***************************************/
/*! exports provided: getDatabaseConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDatabaseConnection", function() { return getDatabaseConnection; });
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reflect-metadata */ "reflect-metadata");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_entity_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/entity/Post */ "./src/entity/Post.ts");
/* harmony import */ var src_entity_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/entity/User */ "./src/entity/User.ts");
/* harmony import */ var src_entity_Comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/entity/Comment */ "./src/entity/Comment.ts");
/* harmony import */ var ormconfig_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ormconfig.json */ "./ormconfig.json");
var ormconfig_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ormconfig.json */ "./ormconfig.json", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const create = async () => {
  // @ts-ignore
  return Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["createConnection"])(_objectSpread(_objectSpread({}, ormconfig_json__WEBPACK_IMPORTED_MODULE_5__), {}, {
    entities: [src_entity_Post__WEBPACK_IMPORTED_MODULE_2__["Post"], src_entity_User__WEBPACK_IMPORTED_MODULE_3__["User"], src_entity_Comment__WEBPACK_IMPORTED_MODULE_4__["Comment"]]
  }));
};

const promise = async function () {
  const manager = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["getConnectionManager"])();
  const hasDefaultConnection = manager.has('default');

  if (!hasDefaultConnection) {
    return create();
  } else {
    const current = manager.get('default');

    if (current.isConnected) {
      return current;
    } else {
      return create();
    }
  }
}();

const getDatabaseConnection = async () => {
  return promise;
};

/***/ }),

/***/ "./ormconfig.json":
/*!************************!*\
  !*** ./ormconfig.json ***!
  \************************/
/*! exports provided: type, host, port, username, password, database, synchronize, logging, entities, migrations, subscribers, cli, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"postgres\",\"host\":\"localhost\",\"port\":5432,\"username\":\"root\",\"password\":\"password\",\"database\":\"blog_development\",\"synchronize\":false,\"logging\":false,\"entities\":[\"dist/entity/**/*.js\"],\"migrations\":[\"dist/migration/**/*.js\"],\"subscribers\":[\"dist/subscriber/**/*.js\"],\"cli\":{\"entitiesDir\":\"src/entity\",\"migrationsDir\":\"src/migration\",\"subscribersDir\":\"src/subscriber\"}}");

/***/ }),

/***/ "./pages/posts/[id].tsx":
/*!******************************!*\
  !*** ./pages/posts/[id].tsx ***!
  \******************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_getDatabaseConnection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/getDatabaseConnection */ "./lib/getDatabaseConnection.tsx");
var _jsxFileName = "D:\\Pank\\code\\Pack\\nextjs-blog\\pages\\posts\\[id].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const postsShow = props => {
  const {
    post
  } = props;
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, post.title), __jsx("article", {
    dangerouslySetInnerHTML: {
      __html: post.content
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (postsShow);
const getServerSideProps = async context => {
  const connection = await Object(_lib_getDatabaseConnection__WEBPACK_IMPORTED_MODULE_1__["getDatabaseConnection"])();
  const post = await connection.manager.findOne('Post', context.params.id);
  return {
    props: {
      post: JSON.parse(JSON.stringify(post))
    }
  };
};

/***/ }),

/***/ "./src/entity/Comment.ts":
/*!*******************************!*\
  !*** ./src/entity/Comment.ts ***!
  \*******************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ "./src/entity/User.ts");
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Post */ "./src/entity/Post.ts");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }




let Comment = (_dec = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["Entity"])('comments'), _dec2 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["PrimaryGeneratedColumn"])('increment'), _dec3 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["Column"])('text'), _dec4 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["CreateDateColumn"])({
  type: 'timestamp'
}), _dec5 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["UpdateDateColumn"])({
  type: 'timestamp'
}), _dec6 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["ManyToOne"])(type => _User__WEBPACK_IMPORTED_MODULE_1__["User"], user => user.comments), _dec7 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["ManyToOne"])(type => _Post__WEBPACK_IMPORTED_MODULE_2__["Post"], post => post.comments), _dec(_class = (_class2 = class Comment {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "content", _descriptor2, this);

    _initializerDefineProperty(this, "createdAt", _descriptor3, this);

    _initializerDefineProperty(this, "updatedAt", _descriptor4, this);

    _initializerDefineProperty(this, "user", _descriptor5, this);

    _initializerDefineProperty(this, "post", _descriptor6, this);
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "createdAt", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "updatedAt", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "user", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "post", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);

/***/ }),

/***/ "./src/entity/Post.ts":
/*!****************************!*\
  !*** ./src/entity/Post.ts ***!
  \****************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ "./src/entity/User.ts");
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Comment */ "./src/entity/Comment.ts");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }




let Post = (_dec = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["Entity"])('posts'), _dec2 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["PrimaryGeneratedColumn"])('increment'), _dec3 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["Column"])('varchar'), _dec4 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["Column"])('text'), _dec5 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["Column"])('int'), _dec6 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["CreateDateColumn"])({
  type: 'timestamp'
}), _dec7 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["UpdateDateColumn"])({
  type: 'timestamp'
}), _dec8 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["ManyToOne"])(type => _User__WEBPACK_IMPORTED_MODULE_1__["User"], user => user.posts), _dec9 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["OneToMany"])(type => _Comment__WEBPACK_IMPORTED_MODULE_2__["Comment"], comment => comment.post), _dec(_class = (_class2 = class Post {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "title", _descriptor2, this);

    _initializerDefineProperty(this, "content", _descriptor3, this);

    _initializerDefineProperty(this, "authorId", _descriptor4, this);

    _initializerDefineProperty(this, "createdAt", _descriptor5, this);

    _initializerDefineProperty(this, "updatedAt", _descriptor6, this);

    _initializerDefineProperty(this, "author", _descriptor7, this);

    _initializerDefineProperty(this, "comments", _descriptor8, this);
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "authorId", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "createdAt", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "updatedAt", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "author", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "comments", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);

/***/ }),

/***/ "./src/entity/User.ts":
/*!****************************!*\
  !*** ./src/entity/User.ts ***!
  \****************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Post */ "./src/entity/Post.ts");
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Comment */ "./src/entity/Comment.ts");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }




let User = (_dec = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["Entity"])('users'), _dec2 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["PrimaryGeneratedColumn"])('increment'), _dec3 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["Column"])('varchar'), _dec4 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["Column"])('varchar'), _dec5 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["CreateDateColumn"])({
  type: 'timestamp'
}), _dec6 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["UpdateDateColumn"])({
  type: 'timestamp'
}), _dec7 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["OneToMany"])(type => _Post__WEBPACK_IMPORTED_MODULE_1__["Post"], post => post.author), _dec8 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["OneToMany"])(type => _Comment__WEBPACK_IMPORTED_MODULE_2__["Comment"], comment => comment.user), _dec(_class = (_class2 = class User {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "username", _descriptor2, this);

    _initializerDefineProperty(this, "passwordDigest", _descriptor3, this);

    _initializerDefineProperty(this, "createdAt", _descriptor4, this);

    _initializerDefineProperty(this, "updatedAt", _descriptor5, this);

    _initializerDefineProperty(this, "posts", _descriptor6, this);

    _initializerDefineProperty(this, "comments", _descriptor7, this);
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "username", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "passwordDigest", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "createdAt", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "updatedAt", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "posts", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "comments", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);

/***/ }),

/***/ 3:
/*!************************************!*\
  !*** multi ./pages/posts/[id].tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Pank\code\Pack\nextjs-blog\pages\posts\[id].tsx */"./pages/posts/[id].tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reflect-metadata");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typeorm");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2dldERhdGFiYXNlQ29ubmVjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcG9zdHMvLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZW50aXR5L0NvbW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudGl0eS9Qb3N0LnRzIiwid2VicGFjazovLy8uL3NyYy9lbnRpdHkvVXNlci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZmxlY3QtbWV0YWRhdGFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0eXBlb3JtXCIiXSwibmFtZXMiOlsiY3JlYXRlIiwiY3JlYXRlQ29ubmVjdGlvbiIsImNvbmZpZyIsImVudGl0aWVzIiwiUG9zdCIsIlVzZXIiLCJDb21tZW50IiwicHJvbWlzZSIsIm1hbmFnZXIiLCJnZXRDb25uZWN0aW9uTWFuYWdlciIsImhhc0RlZmF1bHRDb25uZWN0aW9uIiwiaGFzIiwiY3VycmVudCIsImdldCIsImlzQ29ubmVjdGVkIiwiZ2V0RGF0YWJhc2VDb25uZWN0aW9uIiwicG9zdHNTaG93IiwicHJvcHMiLCJwb3N0IiwidGl0bGUiLCJfX2h0bWwiLCJjb250ZW50IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsImNvbm5lY3Rpb24iLCJmaW5kT25lIiwicGFyYW1zIiwiaWQiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJFbnRpdHkiLCJQcmltYXJ5R2VuZXJhdGVkQ29sdW1uIiwiQ29sdW1uIiwiQ3JlYXRlRGF0ZUNvbHVtbiIsInR5cGUiLCJVcGRhdGVEYXRlQ29sdW1uIiwiTWFueVRvT25lIiwidXNlciIsImNvbW1lbnRzIiwicG9zdHMiLCJPbmVUb01hbnkiLCJjb21tZW50IiwiYXV0aG9yIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFF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QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBLENBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxvQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccG9zdHNcXFtpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJpbXBvcnQge2NyZWF0ZUNvbm5lY3Rpb24sIGdldENvbm5lY3Rpb25NYW5hZ2VyfSBmcm9tICd0eXBlb3JtJztcclxuaW1wb3J0ICdyZWZsZWN0LW1ldGFkYXRhJztcclxuaW1wb3J0IHtQb3N0fSBmcm9tICdzcmMvZW50aXR5L1Bvc3QnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnc3JjL2VudGl0eS9Vc2VyJztcclxuaW1wb3J0IHtDb21tZW50fSBmcm9tICdzcmMvZW50aXR5L0NvbW1lbnQnXHJcbmltcG9ydCBjb25maWcgZnJvbSAnb3JtY29uZmlnLmpzb24nXHJcblxyXG5jb25zdCBjcmVhdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHJldHVybiBjcmVhdGVDb25uZWN0aW9uKHtcclxuICAgIC4uLmNvbmZpZyxcclxuICAgIGVudGl0aWVzOiBbUG9zdCwgVXNlciwgQ29tbWVudF1cclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHByb21pc2UgPSAoYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IG1hbmFnZXIgPSBnZXRDb25uZWN0aW9uTWFuYWdlcigpO1xyXG4gIGNvbnN0IGhhc0RlZmF1bHRDb25uZWN0aW9uID0gbWFuYWdlci5oYXMoJ2RlZmF1bHQnKTtcclxuICBpZiAoIWhhc0RlZmF1bHRDb25uZWN0aW9uKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IGN1cnJlbnQgPSBtYW5hZ2VyLmdldCgnZGVmYXVsdCcpO1xyXG4gICAgaWYgKGN1cnJlbnQuaXNDb25uZWN0ZWQpIHtcclxuICAgICAgcmV0dXJuIGN1cnJlbnQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gY3JlYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldERhdGFiYXNlQ29ubmVjdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICByZXR1cm4gcHJvbWlzZTtcclxufTtcclxuXHJcbiIsImltcG9ydCB7IGdldFBvc3QsIGdldFBvc3RJZHMgfSBmcm9tICdsaWIvcG9zdHMnO1xyXG5pbXBvcnQge0dldFNlcnZlclNpZGVQcm9wcywgTmV4dFBhZ2V9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Z2V0RGF0YWJhc2VDb25uZWN0aW9ufSBmcm9tICcuLi8uLi9saWIvZ2V0RGF0YWJhc2VDb25uZWN0aW9uJztcclxuaW1wb3J0IHtVQVBhcnNlcn0gZnJvbSAndWEtcGFyc2VyLWpzJztcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgICBwb3N0OiBQb3N0XHJcbn1cclxuY29uc3QgcG9zdHNTaG93Ok5leHRQYWdlPFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge3Bvc3R9ID0gcHJvcHNcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgIDxhcnRpY2xlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBwb3N0LmNvbnRlbnR9fT5cclxuICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwb3N0c1Nob3c7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHM8YW55LCB7IGlkOiBzdHJpbmcgfT4gPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IGdldERhdGFiYXNlQ29ubmVjdGlvbigpO1xyXG4gICAgY29uc3QgcG9zdCA9IGF3YWl0IGNvbm5lY3Rpb24ubWFuYWdlci5maW5kT25lKCdQb3N0Jyxjb250ZXh0LnBhcmFtcy5pZClcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgcG9zdDogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwb3N0KSlcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG4iLCJpbXBvcnQge0NvbHVtbiwgQ3JlYXRlRGF0ZUNvbHVtbiwgRW50aXR5LCBNYW55VG9PbmUsIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sIFVwZGF0ZURhdGVDb2x1bW59IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHtVc2VyfSBmcm9tICcuL1VzZXInO1xuaW1wb3J0IHtQb3N0fSBmcm9tICcuL1Bvc3QnXG5cbkBFbnRpdHkoJ2NvbW1lbnRzJylcbmV4cG9ydCBjbGFzcyBDb21tZW50IHtcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oJ2luY3JlbWVudCcpXG4gIGlkOiBudW1iZXI7XG4gIEBDb2x1bW4oJ3RleHQnKVxuICBjb250ZW50OiBzdHJpbmc7XG4gIEBDcmVhdGVEYXRlQ29sdW1uKHt0eXBlOiAndGltZXN0YW1wJ30pXG4gIGNyZWF0ZWRBdDogRGF0ZTtcbiAgQFVwZGF0ZURhdGVDb2x1bW4oe3R5cGU6ICd0aW1lc3RhbXAnfSlcbiAgdXBkYXRlZEF0OiBEYXRlO1xuICBATWFueVRvT25lKHR5cGUgPT4gVXNlciwgdXNlciA9PiB1c2VyLmNvbW1lbnRzKVxuICB1c2VyOiBVc2VyO1xuICBATWFueVRvT25lKHR5cGUgPT4gUG9zdCwgcG9zdCA9PiBwb3N0LmNvbW1lbnRzKVxuICBwb3N0OiBQb3N0O1xufVxuIiwiaW1wb3J0IHtcbiAgQ29sdW1uLFxuICBDcmVhdGVEYXRlQ29sdW1uLFxuICBFbnRpdHksXG4gIE1hbnlUb09uZSxcbiAgT25lVG9NYW55LFxuICBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLFxuICBVcGRhdGVEYXRlQ29sdW1uXG59IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vVXNlcic7XG5pbXBvcnQge0NvbW1lbnR9IGZyb20gJy4vQ29tbWVudCc7XG5cbkBFbnRpdHkoJ3Bvc3RzJylcbmV4cG9ydCBjbGFzcyBQb3N0IHtcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oJ2luY3JlbWVudCcpXG4gIGlkOiBudW1iZXI7XG4gIEBDb2x1bW4oJ3ZhcmNoYXInKVxuICB0aXRsZTogc3RyaW5nO1xuICBAQ29sdW1uKCd0ZXh0JylcbiAgY29udGVudDogc3RyaW5nO1xuICBAQ29sdW1uKCdpbnQnKVxuICBhdXRob3JJZDogbnVtYmVyO1xuICBAQ3JlYXRlRGF0ZUNvbHVtbih7dHlwZTogJ3RpbWVzdGFtcCd9KVxuICBjcmVhdGVkQXQ6IERhdGU7XG4gIEBVcGRhdGVEYXRlQ29sdW1uKHt0eXBlOiAndGltZXN0YW1wJ30pXG4gIHVwZGF0ZWRBdDogRGF0ZTtcbiAgQE1hbnlUb09uZSh0eXBlID0+IFVzZXIsIHVzZXIgPT4gdXNlci5wb3N0cylcbiAgYXV0aG9yOiBVc2VyO1xuICBAT25lVG9NYW55KHR5cGUgPT4gQ29tbWVudCwgY29tbWVudCA9PmNvbW1lbnQucG9zdClcbiAgY29tbWVudHM6IENvbW1lbnRbXTtcbn1cbiIsImltcG9ydCB7Q29sdW1uLCBDcmVhdGVEYXRlQ29sdW1uLCBFbnRpdHksIE9uZVRvTWFueSwgT25lVG9PbmUsIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sIFVwZGF0ZURhdGVDb2x1bW59IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHtQb3N0fSBmcm9tICcuL1Bvc3QnO1xuaW1wb3J0IHtDb21tZW50fSBmcm9tICcuL0NvbW1lbnQnXG5pbXBvcnQge0pvaW5Db2x1bW59IGZyb20gJ3R5cGVvcm0vYnJvd3Nlcic7XG5cbkBFbnRpdHkoJ3VzZXJzJylcbmV4cG9ydCBjbGFzcyBVc2VyIHtcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oJ2luY3JlbWVudCcpXG4gIGlkOiBudW1iZXI7XG4gIEBDb2x1bW4oJ3ZhcmNoYXInKVxuICB1c2VybmFtZTogc3RyaW5nO1xuICBAQ29sdW1uKCd2YXJjaGFyJylcbiAgcGFzc3dvcmREaWdlc3Q6IHN0cmluZztcbiAgQENyZWF0ZURhdGVDb2x1bW4oe3R5cGU6ICd0aW1lc3RhbXAnfSlcbiAgY3JlYXRlZEF0OiBEYXRlO1xuICBAVXBkYXRlRGF0ZUNvbHVtbih7dHlwZTogJ3RpbWVzdGFtcCd9KVxuICB1cGRhdGVkQXQ6IERhdGU7XG4gIEBPbmVUb01hbnkodHlwZSA9PiBQb3N0LCBwb3N0ID0+IHBvc3QuYXV0aG9yKVxuICBwb3N0czogUG9zdFtdO1xuICBAT25lVG9NYW55KHR5cGUgPT4gQ29tbWVudCwgY29tbWVudCA9PiBjb21tZW50LnVzZXIpXG4gIGNvbW1lbnRzOiBDb21tZW50W107XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWZsZWN0LW1ldGFkYXRhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInR5cGVvcm1cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==