module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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

/***/ "./pages/api/v1/users.tsx":
/*!********************************!*\
  !*** ./pages/api/v1/users.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_getDatabaseConnection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/getDatabaseConnection */ "./lib/getDatabaseConnection.tsx");
/* harmony import */ var src_entity_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/entity/User */ "./src/entity/User.ts");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! md5 */ "md5");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_2__);




const Users = async (req, res) => {
  const connection = await Object(_lib_getDatabaseConnection__WEBPACK_IMPORTED_MODULE_0__["getDatabaseConnection"])();
  const {
    username,
    password,
    passwordConfirmation
  } = req.body;
  const errors = {
    username: [],
    password: [],
    passwordConfirmation: []
  };

  if (username.trim() === '') {
    errors.username.push('不能为空');
  }

  if (!/[a-zA-Z0-9]/.test(username.trim())) {
    errors.username.push('格式不合法');
  }

  if (username.trim().length > 24) {
    errors.username.push('太长');
  }

  if (username.trim().length <= 3) {
    errors.username.push('太短');
  }

  const found = connection.manager.find(src_entity_User__WEBPACK_IMPORTED_MODULE_1__["User"], {
    username
  });

  if (found) {
    errors.username.push('已存在，不能重复注册');
  }

  if (password === '') {
    errors.password.push('不能为空');
  }

  if (password !== passwordConfirmation) {
    errors.passwordConfirmation.push('密码不匹配');
  }

  const hasErrors = Object.values(errors).find(v => v.length > 0);
  res.setHeader('Content-Type', 'application/json;charset=utf-8');

  if (hasErrors) {
    res.statusCode = 422;
    res.write(JSON.stringify(errors));
    res.end();
  } else {
    const user = new src_entity_User__WEBPACK_IMPORTED_MODULE_1__["User"]();
    user.username = username.trim();
    user.passwordDigest = md5__WEBPACK_IMPORTED_MODULE_2___default()(password);
    await connection.manager.save(user);
    res.statusCode = 200;
    res.write(JSON.stringify(user));
  }

  res.end();
};

/* harmony default export */ __webpack_exports__["default"] = (Users);

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
/*!**************************************!*\
  !*** multi ./pages/api/v1/users.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Pank\code\Pack\nextjs-blog\pages\api\v1\users.tsx */"./pages/api/v1/users.tsx");


/***/ }),

/***/ "md5":
/*!**********************!*\
  !*** external "md5" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("md5");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2dldERhdGFiYXNlQ29ubmVjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3YxL3VzZXJzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZW50aXR5L0NvbW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudGl0eS9Qb3N0LnRzIiwid2VicGFjazovLy8uL3NyYy9lbnRpdHkvVXNlci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtZDVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWZsZWN0LW1ldGFkYXRhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidHlwZW9ybVwiIl0sIm5hbWVzIjpbImNyZWF0ZSIsImNyZWF0ZUNvbm5lY3Rpb24iLCJjb25maWciLCJlbnRpdGllcyIsIlBvc3QiLCJVc2VyIiwiQ29tbWVudCIsInByb21pc2UiLCJtYW5hZ2VyIiwiZ2V0Q29ubmVjdGlvbk1hbmFnZXIiLCJoYXNEZWZhdWx0Q29ubmVjdGlvbiIsImhhcyIsImN1cnJlbnQiLCJnZXQiLCJpc0Nvbm5lY3RlZCIsImdldERhdGFiYXNlQ29ubmVjdGlvbiIsIlVzZXJzIiwicmVxIiwicmVzIiwiY29ubmVjdGlvbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJwYXNzd29yZENvbmZpcm1hdGlvbiIsImJvZHkiLCJlcnJvcnMiLCJ0cmltIiwicHVzaCIsInRlc3QiLCJsZW5ndGgiLCJmb3VuZCIsImZpbmQiLCJoYXNFcnJvcnMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJ2Iiwic2V0SGVhZGVyIiwic3RhdHVzQ29kZSIsIndyaXRlIiwiSlNPTiIsInN0cmluZ2lmeSIsImVuZCIsInVzZXIiLCJwYXNzd29yZERpZ2VzdCIsIm1kNSIsInNhdmUiLCJFbnRpdHkiLCJQcmltYXJ5R2VuZXJhdGVkQ29sdW1uIiwiQ29sdW1uIiwiQ3JlYXRlRGF0ZUNvbHVtbiIsInR5cGUiLCJVcGRhdGVEYXRlQ29sdW1uIiwiTWFueVRvT25lIiwiY29tbWVudHMiLCJwb3N0IiwicG9zdHMiLCJPbmVUb01hbnkiLCJjb21tZW50IiwiYXV0aG9yIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxZQUFZO0FBQ3pCO0FBQ0EsU0FBT0MsZ0VBQWdCLGlDQUNsQkMsMkNBRGtCO0FBRXJCQyxZQUFRLEVBQUUsQ0FBQ0Msb0RBQUQsRUFBT0Msb0RBQVAsRUFBYUMsMERBQWI7QUFGVyxLQUF2QjtBQUlELENBTkQ7O0FBUUEsTUFBTUMsT0FBTyxHQUFJLGtCQUFrQjtBQUNqQyxRQUFNQyxPQUFPLEdBQUdDLG9FQUFvQixFQUFwQztBQUNBLFFBQU1DLG9CQUFvQixHQUFHRixP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R0dDLHNEQUFNLENBQUMsU0FBRCxDQUhULFVBS0dBLHNEQUFNLENBQUMsU0FBRCxDQUxULFVBT0dDLGdFQUFnQixDQUFDO0FBQUNDLE1BQUksRUFBRTtBQUFQLENBQUQsQ0FQbkIsVUFTR0MsZ0VBQWdCLENBQUM7QUFBQ0QsTUFBSSxFQUFFO0FBQVAsQ0FBRCxDQVRuQixVQVdHTSx5REFBUyxDQUFDTixJQUFJLElBQUk3QywwQ0FBVCxFQUFlaUQsSUFBSSxJQUFJQSxJQUFJLENBQUNJLE1BQTVCLENBWFosVUFhR0YseURBQVMsQ0FBQ04sSUFBSSxJQUFJM0MsZ0RBQVQsRUFBa0JrRCxPQUFPLElBQUlBLE9BQU8sQ0FBQ2YsSUFBckMsQ0FiWiwyQkFEQSxNQUNhcEMsSUFEYixDQUNrQjtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQSxDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkEsZ0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFwaVxcdjFcXHVzZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiaW1wb3J0IHtjcmVhdGVDb25uZWN0aW9uLCBnZXRDb25uZWN0aW9uTWFuYWdlcn0gZnJvbSAndHlwZW9ybSc7XHJcbmltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSc7XHJcbmltcG9ydCB7UG9zdH0gZnJvbSAnc3JjL2VudGl0eS9Qb3N0JztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJ3NyYy9lbnRpdHkvVXNlcic7XHJcbmltcG9ydCB7Q29tbWVudH0gZnJvbSAnc3JjL2VudGl0eS9Db21tZW50J1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJ29ybWNvbmZpZy5qc29uJ1xyXG5cclxuY29uc3QgY3JlYXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICByZXR1cm4gY3JlYXRlQ29ubmVjdGlvbih7XHJcbiAgICAuLi5jb25maWcsXHJcbiAgICBlbnRpdGllczogW1Bvc3QsIFVzZXIsIENvbW1lbnRdXHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBwcm9taXNlID0gKGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBtYW5hZ2VyID0gZ2V0Q29ubmVjdGlvbk1hbmFnZXIoKTtcclxuICBjb25zdCBoYXNEZWZhdWx0Q29ubmVjdGlvbiA9IG1hbmFnZXIuaGFzKCdkZWZhdWx0Jyk7XHJcbiAgaWYgKCFoYXNEZWZhdWx0Q29ubmVjdGlvbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZSgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBjdXJyZW50ID0gbWFuYWdlci5nZXQoJ2RlZmF1bHQnKTtcclxuICAgIGlmIChjdXJyZW50LmlzQ29ubmVjdGVkKSB7XHJcbiAgICAgIHJldHVybiBjdXJyZW50O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGNyZWF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXREYXRhYmFzZUNvbm5lY3Rpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgcmV0dXJuIHByb21pc2U7XHJcbn07XHJcblxyXG4iLCJpbXBvcnQge05leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2V9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQge2dldERhdGFiYXNlQ29ubmVjdGlvbn0gZnJvbSAnLi4vLi4vLi4vbGliL2dldERhdGFiYXNlQ29ubmVjdGlvbic7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSAnc3JjL2VudGl0eS9Vc2VyJztcclxuaW1wb3J0IG1kNSBmcm9tICdtZDUnO1xyXG5cclxuY29uc3QgVXNlcnMgPSBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgZ2V0RGF0YWJhc2VDb25uZWN0aW9uKCk7XHJcbiAgY29uc3Qge3VzZXJuYW1lLCBwYXNzd29yZCwgcGFzc3dvcmRDb25maXJtYXRpb259ID0gcmVxLmJvZHk7XHJcbiAgY29uc3QgZXJyb3JzID0ge1xyXG4gICAgdXNlcm5hbWU6IFtdIGFzIHN0cmluZ1tdLCBwYXNzd29yZDogW10gYXMgc3RyaW5nW10sIHBhc3N3b3JkQ29uZmlybWF0aW9uOiBbXSBhcyBzdHJpbmdbXVxyXG4gIH07XHJcbiAgaWYgKHVzZXJuYW1lLnRyaW0oKSA9PT0gJycpIHtcclxuICAgIGVycm9ycy51c2VybmFtZS5wdXNoKCfkuI3og73kuLrnqbonKTtcclxuICB9XHJcbiAgaWYgKCEvW2EtekEtWjAtOV0vLnRlc3QodXNlcm5hbWUudHJpbSgpKSkge1xyXG4gICAgZXJyb3JzLnVzZXJuYW1lLnB1c2goJ+agvOW8j+S4jeWQiOazlScpO1xyXG4gIH1cclxuICBpZiAodXNlcm5hbWUudHJpbSgpLmxlbmd0aCA+IDI0KSB7XHJcbiAgICBlcnJvcnMudXNlcm5hbWUucHVzaCgn5aSq6ZW/Jyk7XHJcbiAgfVxyXG4gIGlmICh1c2VybmFtZS50cmltKCkubGVuZ3RoIDw9IDMpIHtcclxuICAgIGVycm9ycy51c2VybmFtZS5wdXNoKCflpKrnn60nKTtcclxuICB9XHJcbiAgY29uc3QgZm91bmQgPSBjb25uZWN0aW9uLm1hbmFnZXIuZmluZChVc2VyLCB7dXNlcm5hbWV9KTtcclxuICBpZiAoZm91bmQpIHtcclxuICAgIGVycm9ycy51c2VybmFtZS5wdXNoKCflt7LlrZjlnKjvvIzkuI3og73ph43lpI3ms6jlhownKTtcclxuICB9XHJcbiAgaWYgKHBhc3N3b3JkID09PSAnJykge1xyXG4gICAgZXJyb3JzLnBhc3N3b3JkLnB1c2goJ+S4jeiDveS4uuepuicpO1xyXG4gIH1cclxuICBpZiAocGFzc3dvcmQgIT09IHBhc3N3b3JkQ29uZmlybWF0aW9uKSB7XHJcbiAgICBlcnJvcnMucGFzc3dvcmRDb25maXJtYXRpb24ucHVzaCgn5a+G56CB5LiN5Yy56YWNJyk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhc0Vycm9ycyA9IE9iamVjdC52YWx1ZXMoZXJyb3JzKS5maW5kKHYgPT4gdi5sZW5ndGggPiAwKTtcclxuICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XHJcbiAgaWYgKGhhc0Vycm9ycykge1xyXG4gICAgcmVzLnN0YXR1c0NvZGUgPSA0MjI7XHJcbiAgICByZXMud3JpdGUoSlNPTi5zdHJpbmdpZnkoZXJyb3JzKSk7XHJcbiAgICByZXMuZW5kKCk7XHJcbiAgfSBlbHNlIHtcclxuXHJcbiAgICBjb25zdCB1c2VyID0gbmV3IFVzZXIoKTtcclxuICAgIHVzZXIudXNlcm5hbWUgPSB1c2VybmFtZS50cmltKCk7XHJcbiAgICB1c2VyLnBhc3N3b3JkRGlnZXN0ID0gbWQ1KHBhc3N3b3JkKTtcclxuXHJcbiAgICBhd2FpdCBjb25uZWN0aW9uLm1hbmFnZXIuc2F2ZSh1c2VyKTtcclxuICAgIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xyXG4gICAgcmVzLndyaXRlKEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICB9XHJcbiAgcmVzLmVuZCgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcnM7XHJcbiIsImltcG9ydCB7Q29sdW1uLCBDcmVhdGVEYXRlQ29sdW1uLCBFbnRpdHksIE1hbnlUb09uZSwgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiwgVXBkYXRlRGF0ZUNvbHVtbn0gZnJvbSAndHlwZW9ybSc7XG5pbXBvcnQge1VzZXJ9IGZyb20gJy4vVXNlcic7XG5pbXBvcnQge1Bvc3R9IGZyb20gJy4vUG9zdCdcblxuQEVudGl0eSgnY29tbWVudHMnKVxuZXhwb3J0IGNsYXNzIENvbW1lbnQge1xuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbignaW5jcmVtZW50JylcbiAgaWQ6IG51bWJlcjtcbiAgQENvbHVtbigndGV4dCcpXG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgQENyZWF0ZURhdGVDb2x1bW4oe3R5cGU6ICd0aW1lc3RhbXAnfSlcbiAgY3JlYXRlZEF0OiBEYXRlO1xuICBAVXBkYXRlRGF0ZUNvbHVtbih7dHlwZTogJ3RpbWVzdGFtcCd9KVxuICB1cGRhdGVkQXQ6IERhdGU7XG4gIEBNYW55VG9PbmUodHlwZSA9PiBVc2VyLCB1c2VyID0+IHVzZXIuY29tbWVudHMpXG4gIHVzZXI6IFVzZXI7XG4gIEBNYW55VG9PbmUodHlwZSA9PiBQb3N0LCBwb3N0ID0+IHBvc3QuY29tbWVudHMpXG4gIHBvc3Q6IFBvc3Q7XG59XG4iLCJpbXBvcnQge1xuICBDb2x1bW4sXG4gIENyZWF0ZURhdGVDb2x1bW4sXG4gIEVudGl0eSxcbiAgTWFueVRvT25lLFxuICBPbmVUb01hbnksXG4gIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sXG4gIFVwZGF0ZURhdGVDb2x1bW5cbn0gZnJvbSAndHlwZW9ybSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi9Vc2VyJztcbmltcG9ydCB7Q29tbWVudH0gZnJvbSAnLi9Db21tZW50JztcblxuQEVudGl0eSgncG9zdHMnKVxuZXhwb3J0IGNsYXNzIFBvc3Qge1xuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbignaW5jcmVtZW50JylcbiAgaWQ6IG51bWJlcjtcbiAgQENvbHVtbigndmFyY2hhcicpXG4gIHRpdGxlOiBzdHJpbmc7XG4gIEBDb2x1bW4oJ3RleHQnKVxuICBjb250ZW50OiBzdHJpbmc7XG4gIEBDb2x1bW4oJ2ludCcpXG4gIGF1dGhvcklkOiBudW1iZXI7XG4gIEBDcmVhdGVEYXRlQ29sdW1uKHt0eXBlOiAndGltZXN0YW1wJ30pXG4gIGNyZWF0ZWRBdDogRGF0ZTtcbiAgQFVwZGF0ZURhdGVDb2x1bW4oe3R5cGU6ICd0aW1lc3RhbXAnfSlcbiAgdXBkYXRlZEF0OiBEYXRlO1xuICBATWFueVRvT25lKHR5cGUgPT4gVXNlciwgdXNlciA9PiB1c2VyLnBvc3RzKVxuICBhdXRob3I6IFVzZXI7XG4gIEBPbmVUb01hbnkodHlwZSA9PiBDb21tZW50LCBjb21tZW50ID0+Y29tbWVudC5wb3N0KVxuICBjb21tZW50czogQ29tbWVudFtdO1xufVxuIiwiaW1wb3J0IHtcbiAgQ29sdW1uLFxuICBDcmVhdGVEYXRlQ29sdW1uLFxuICBFbnRpdHksXG4gIE9uZVRvTWFueSxcbiAgT25lVG9PbmUsXG4gIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sXG4gIFVuaXF1ZSxcbiAgVXBkYXRlRGF0ZUNvbHVtblxufSBmcm9tICd0eXBlb3JtJztcbmltcG9ydCB7UG9zdH0gZnJvbSAnLi9Qb3N0JztcbmltcG9ydCB7Q29tbWVudH0gZnJvbSAnLi9Db21tZW50J1xuaW1wb3J0IHtKb2luQ29sdW1ufSBmcm9tICd0eXBlb3JtL2Jyb3dzZXInO1xuXG5ARW50aXR5KCd1c2VycycpXG5leHBvcnQgY2xhc3MgVXNlciB7XG4gIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKCdpbmNyZW1lbnQnKVxuICBpZDogbnVtYmVyO1xuICBAQ29sdW1uKCd2YXJjaGFyJylcbiAgdXNlcm5hbWU6IFVzZXI7XG4gIEBDb2x1bW4oJ3ZhcmNoYXInKVxuICBwYXNzd29yZERpZ2VzdDogc3RyaW5nO1xuICBAQ3JlYXRlRGF0ZUNvbHVtbih7dHlwZTogJ3RpbWVzdGFtcCd9KVxuICBjcmVhdGVkQXQ6IERhdGU7XG4gIEBVcGRhdGVEYXRlQ29sdW1uKHt0eXBlOiAndGltZXN0YW1wJ30pXG4gIHVwZGF0ZWRBdDogRGF0ZTtcbiAgQE9uZVRvTWFueSh0eXBlID0+IFBvc3QsIHBvc3QgPT4gcG9zdC5hdXRob3IpXG4gIHBvc3RzOiBQb3N0W107XG4gIEBPbmVUb01hbnkodHlwZSA9PiBDb21tZW50LCBjb21tZW50ID0+IGNvbW1lbnQudXNlcilcbiAgY29tbWVudHM6IENvbW1lbnRbXTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kNVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWZsZWN0LW1ldGFkYXRhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInR5cGVvcm1cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==