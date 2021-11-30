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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "./pages/api/v1/sessions.tsx":
/*!***********************************!*\
  !*** ./pages/api/v1/sessions.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_getDatabaseConnection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/getDatabaseConnection */ "./lib/getDatabaseConnection.tsx");
/* harmony import */ var src_entity_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/entity/User */ "./src/entity/User.ts");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! md5 */ "md5");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_2__);




const Sessions = async (req, res) => {
  const {
    username,
    password
  } = req.body;
  const connection = await Object(_lib_getDatabaseConnection__WEBPACK_IMPORTED_MODULE_0__["getDatabaseConnection"])();
  const user = await connection.manager.findOne(src_entity_User__WEBPACK_IMPORTED_MODULE_1__["User"], {
    where: {
      username
    }
  });
  res.setHeader('Content-Type', 'application/json;charset=utf-8');

  if (user) {
    const passwordDigest = md5__WEBPACK_IMPORTED_MODULE_2___default()(password);

    if (user.passwordDigest === passwordDigest) {
      res.statusCode = 200;
      res.end(JSON.stringify(user));
    } else {
      res.statusCode = 422;
      res.end(JSON.stringify({
        password: ['密码不匹配']
      }));
    }
  } else {
    res.statusCode = 422;
    res.end(JSON.stringify({
      username: ['用户名不存在']
    }));
  }

  res.statusCode = 200;
  res.write('');
  res.end();
};

/* harmony default export */ __webpack_exports__["default"] = (Sessions);

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
/* harmony import */ var _lib_getDatabaseConnection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/getDatabaseConnection */ "./lib/getDatabaseConnection.tsx");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! md5 */ "md5");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }







let User = (_dec = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["Entity"])('users'), _dec2 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["PrimaryGeneratedColumn"])('increment'), _dec3 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["Column"])('varchar'), _dec4 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["Column"])('varchar'), _dec5 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["CreateDateColumn"])({
  type: 'timestamp'
}), _dec6 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["UpdateDateColumn"])({
  type: 'timestamp'
}), _dec7 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["OneToMany"])(type => _Post__WEBPACK_IMPORTED_MODULE_1__["Post"], post => post.author), _dec8 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["OneToMany"])(type => _Comment__WEBPACK_IMPORTED_MODULE_2__["Comment"], comment => comment.user), _dec9 = Object(typeorm__WEBPACK_IMPORTED_MODULE_0__["BeforeInsert"])(), _dec(_class = (_class2 = class User {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "username", _descriptor2, this);

    _initializerDefineProperty(this, "passwordDigest", _descriptor3, this);

    _initializerDefineProperty(this, "createdAt", _descriptor4, this);

    _initializerDefineProperty(this, "updatedAt", _descriptor5, this);

    _initializerDefineProperty(this, "posts", _descriptor6, this);

    _initializerDefineProperty(this, "comments", _descriptor7, this);

    _defineProperty(this, "errors", {
      username: [],
      password: [],
      passwordConfirmation: []
    });

    _defineProperty(this, "password", void 0);

    _defineProperty(this, "passwordConfirmation", void 0);
  }

  async validate() {
    if (this.username.trim() === '') {
      this.errors.username.push('不能为空');
    }

    if (!/[a-zA-Z0-9]/.test(this.username.trim())) {
      this.errors.username.push('格式不合法');
    }

    if (this.username.trim().length > 24) {
      this.errors.username.push('太长');
    }

    if (this.username.trim().length <= 3) {
      this.errors.username.push('太短');
    }

    const found = await (await Object(_lib_getDatabaseConnection__WEBPACK_IMPORTED_MODULE_3__["getDatabaseConnection"])()).manager.find(User, {
      username: this.username
    });

    if (found.length > 0) {
      this.errors.username.push('已存在，不能重复注册');
    }

    if (this.password === '') {
      this.errors.password.push('不能为空');
    }

    if (this.password !== this.passwordConfirmation) {
      this.errors.passwordConfirmation.push('密码不匹配');
    }
  }

  hasErrors() {
    return !!Object.values(this.errors).find(v => v.length > 0);
  }

  generatePasswordDigest() {
    this.passwordDigest = md5__WEBPACK_IMPORTED_MODULE_4___default()(this.password);
  }

  toJSON() {
    return lodash__WEBPACK_IMPORTED_MODULE_5___default.a.omit(this, ['password', 'passwordConfirmation', 'passwordDigest']);
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
}), _applyDecoratedDescriptor(_class2.prototype, "generatePasswordDigest", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "generatePasswordDigest"), _class2.prototype)), _class2)) || _class);

/***/ }),

/***/ 4:
/*!*****************************************!*\
  !*** multi ./pages/api/v1/sessions.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Pank\code\Pack\nextjs-blog\pages\api\v1\sessions.tsx */"./pages/api/v1/sessions.tsx");


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2dldERhdGFiYXNlQ29ubmVjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3YxL3Nlc3Npb25zLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZW50aXR5L0NvbW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudGl0eS9Qb3N0LnRzIiwid2VicGFjazovLy8uL3NyYy9lbnRpdHkvVXNlci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtZDVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWZsZWN0LW1ldGFkYXRhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidHlwZW9ybVwiIl0sIm5hbWVzIjpbImNyZWF0ZSIsImNyZWF0ZUNvbm5lY3Rpb24iLCJjb25maWciLCJlbnRpdGllcyIsIlBvc3QiLCJVc2VyIiwiQ29tbWVudCIsInByb21pc2UiLCJtYW5hZ2VyIiwiZ2V0Q29ubmVjdGlvbk1hbmFnZXIiLCJoYXNEZWZhdWx0Q29ubmVjdGlvbiIsImhhcyIsImN1cnJlbnQiLCJnZXQiLCJpc0Nvbm5lY3RlZCIsImdldERhdGFiYXNlQ29ubmVjdGlvbiIsIlNlc3Npb25zIiwicmVxIiwicmVzIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImJvZHkiLCJjb25uZWN0aW9uIiwidXNlciIsImZpbmRPbmUiLCJ3aGVyZSIsInNldEhlYWRlciIsInBhc3N3b3JkRGlnZXN0IiwibWQ1Iiwic3RhdHVzQ29kZSIsImVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3cml0ZSIsIkVudGl0eSIsIlByaW1hcnlHZW5lcmF0ZWRDb2x1bW4iLCJDb2x1bW4iLCJDcmVhdGVEYXRlQ29sdW1uIiwidHlwZSIsIlVwZGF0ZURhdGVDb2x1bW4iLCJNYW55VG9PbmUiLCJjb21tZW50cyIsInBvc3QiLCJwb3N0cyIsIk9uZVRvTWFueSIsImNvbW1lbnQiLCJhdXRob3IiLCJCZWZvcmVJbnNlcnQiLCJwYXNzd29yZENvbmZpcm1hdGlvbiIsInZhbGlkYXRlIiwidHJpbSIsImVycm9ycyIsInB1c2giLCJ0ZXN0IiwibGVuZ3RoIiwiZm91bmQiLCJmaW5kIiwiaGFzRXJyb3JzIiwiT2JqZWN0IiwidmFsdWVzIiwidiIsImdlbmVyYXRlUGFzc3dvcmREaWdlc3QiLCJ0b0pTT04iLCJfIiwib21pdCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsWUFBWTtBQUN6QjtBQUNBLFNBQU9DLGdFQUFnQixpQ0FDbEJDLDJDQURrQjtBQUVyQkMsWUFBUSxFQUFFLENBQUNDLG9EQUFELEVBQU9DLG9EQUFQLEVB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QUFuQixFQUEyQkssSUFBM0IsQ0FBZ0NJLENBQUMsSUFBSUEsQ0FBQyxDQUFDTixNQUFGLEdBQVcsQ0FBaEQsQ0FBVDtBQUNEOztBQUVETyx3QkFBc0IsR0FBRztBQUN2QixTQUFLbEMsY0FBTCxHQUFzQkMsMENBQUcsQ0FBQyxLQUFLUixRQUFOLENBQXpCO0FBQ0Q7O0FBRUQwQyxRQUFNLEdBQUc7QUFDUCxXQUFPQyw2Q0FBQyxDQUFDQyxJQUFGLENBQU8sSUFBUCxFQUFhLENBQUMsVUFBRCxFQUFhLHNCQUFiLEVBQXFDLGdCQUFyQyxDQUFiLENBQVA7QUFDRDs7QUF2RGUsQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxvQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYXBpXFx2MVxcc2Vzc2lvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJpbXBvcnQge2NyZWF0ZUNvbm5lY3Rpb24sIGdldENvbm5lY3Rpb25NYW5hZ2VyfSBmcm9tICd0eXBlb3JtJztcclxuaW1wb3J0ICdyZWZsZWN0LW1ldGFkYXRhJztcclxuaW1wb3J0IHtQb3N0fSBmcm9tICdzcmMvZW50aXR5L1Bvc3QnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnc3JjL2VudGl0eS9Vc2VyJztcclxuaW1wb3J0IHtDb21tZW50fSBmcm9tICdzcmMvZW50aXR5L0NvbW1lbnQnXHJcbmltcG9ydCBjb25maWcgZnJvbSAnb3JtY29uZmlnLmpzb24nXHJcblxyXG5jb25zdCBjcmVhdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHJldHVybiBjcmVhdGVDb25uZWN0aW9uKHtcclxuICAgIC4uLmNvbmZpZyxcclxuICAgIGVudGl0aWVzOiBbUG9zdCwgVXNlciwgQ29tbWVudF1cclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHByb21pc2UgPSAoYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IG1hbmFnZXIgPSBnZXRDb25uZWN0aW9uTWFuYWdlcigpO1xyXG4gIGNvbnN0IGhhc0RlZmF1bHRDb25uZWN0aW9uID0gbWFuYWdlci5oYXMoJ2RlZmF1bHQnKTtcclxuICBpZiAoIWhhc0RlZmF1bHRDb25uZWN0aW9uKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IGN1cnJlbnQgPSBtYW5hZ2VyLmdldCgnZGVmYXVsdCcpO1xyXG4gICAgaWYgKGN1cnJlbnQuaXNDb25uZWN0ZWQpIHtcclxuICAgICAgcmV0dXJuIGN1cnJlbnQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gY3JlYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldERhdGFiYXNlQ29ubmVjdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICByZXR1cm4gcHJvbWlzZTtcclxufTtcclxuXHJcbiIsImltcG9ydCB7TmV4dEFwaUhhbmRsZXJ9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQge2dldERhdGFiYXNlQ29ubmVjdGlvbn0gZnJvbSAnLi4vLi4vLi4vbGliL2dldERhdGFiYXNlQ29ubmVjdGlvbic7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSAnc3JjL2VudGl0eS9Vc2VyJztcclxuaW1wb3J0IG1kNSBmcm9tICdtZDUnO1xyXG5cclxuY29uc3QgU2Vzc2lvbnM6IE5leHRBcGlIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc3Qge3VzZXJuYW1lLCBwYXNzd29yZH0gPSByZXEuYm9keTtcclxuICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgZ2V0RGF0YWJhc2VDb25uZWN0aW9uKCk7XHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IGNvbm5lY3Rpb24ubWFuYWdlci5maW5kT25lKFVzZXIsIHt3aGVyZToge3VzZXJuYW1lfX0pO1xyXG4gIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcclxuICBpZiAodXNlcikge1xyXG4gICAgY29uc3QgcGFzc3dvcmREaWdlc3QgPSBtZDUocGFzc3dvcmQpO1xyXG4gICAgaWYgKHVzZXIucGFzc3dvcmREaWdlc3QgPT09IHBhc3N3b3JkRGlnZXN0KSB7XHJcbiAgICAgIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xyXG4gICAgICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDIyO1xyXG4gICAgICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHtwYXNzd29yZDogWyflr4bnoIHkuI3ljLnphY0nXX0pKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1c0NvZGUgPSA0MjI7XHJcbiAgICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KCB7dXNlcm5hbWU6IFsn55So5oi35ZCN5LiN5a2Y5ZyoJ119KSk7XHJcbiAgfVxyXG5cclxuICByZXMuc3RhdHVzQ29kZSA9IDIwMDtcclxuICByZXMud3JpdGUoJycpO1xyXG4gIHJlcy5lbmQoKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlc3Npb25zO1xyXG4iLCJpbXBvcnQge0NvbHVtbiwgQ3JlYXRlRGF0ZUNvbHVtbiwgRW50aXR5LCBNYW55VG9PbmUsIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sIFVwZGF0ZURhdGVDb2x1bW59IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHtVc2VyfSBmcm9tICcuL1VzZXInO1xuaW1wb3J0IHtQb3N0fSBmcm9tICcuL1Bvc3QnXG5cbkBFbnRpdHkoJ2NvbW1lbnRzJylcbmV4cG9ydCBjbGFzcyBDb21tZW50IHtcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oJ2luY3JlbWVudCcpXG4gIGlkOiBudW1iZXI7XG4gIEBDb2x1bW4oJ3RleHQnKVxuICBjb250ZW50OiBzdHJpbmc7XG4gIEBDcmVhdGVEYXRlQ29sdW1uKHt0eXBlOiAndGltZXN0YW1wJ30pXG4gIGNyZWF0ZWRBdDogRGF0ZTtcbiAgQFVwZGF0ZURhdGVDb2x1bW4oe3R5cGU6ICd0aW1lc3RhbXAnfSlcbiAgdXBkYXRlZEF0OiBEYXRlO1xuICBATWFueVRvT25lKHR5cGUgPT4gVXNlciwgdXNlciA9PiB1c2VyLmNvbW1lbnRzKVxuICB1c2VyOiBVc2VyO1xuICBATWFueVRvT25lKHR5cGUgPT4gUG9zdCwgcG9zdCA9PiBwb3N0LmNvbW1lbnRzKVxuICBwb3N0OiBQb3N0O1xufVxuIiwiaW1wb3J0IHtcbiAgQ29sdW1uLFxuICBDcmVhdGVEYXRlQ29sdW1uLFxuICBFbnRpdHksXG4gIE1hbnlUb09uZSxcbiAgT25lVG9NYW55LFxuICBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLFxuICBVcGRhdGVEYXRlQ29sdW1uXG59IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vVXNlcic7XG5pbXBvcnQge0NvbW1lbnR9IGZyb20gJy4vQ29tbWVudCc7XG5cbkBFbnRpdHkoJ3Bvc3RzJylcbmV4cG9ydCBjbGFzcyBQb3N0IHtcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oJ2luY3JlbWVudCcpXG4gIGlkOiBudW1iZXI7XG4gIEBDb2x1bW4oJ3ZhcmNoYXInKVxuICB0aXRsZTogc3RyaW5nO1xuICBAQ29sdW1uKCd0ZXh0JylcbiAgY29udGVudDogc3RyaW5nO1xuICBAQ29sdW1uKCdpbnQnKVxuICBhdXRob3JJZDogbnVtYmVyO1xuICBAQ3JlYXRlRGF0ZUNvbHVtbih7dHlwZTogJ3RpbWVzdGFtcCd9KVxuICBjcmVhdGVkQXQ6IERhdGU7XG4gIEBVcGRhdGVEYXRlQ29sdW1uKHt0eXBlOiAndGltZXN0YW1wJ30pXG4gIHVwZGF0ZWRBdDogRGF0ZTtcbiAgQE1hbnlUb09uZSh0eXBlID0+IFVzZXIsIHVzZXIgPT4gdXNlci5wb3N0cylcbiAgYXV0aG9yOiBVc2VyO1xuICBAT25lVG9NYW55KHR5cGUgPT4gQ29tbWVudCwgY29tbWVudCA9PmNvbW1lbnQucG9zdClcbiAgY29tbWVudHM6IENvbW1lbnRbXTtcbn1cbiIsImltcG9ydCB7XG4gIEJlZm9yZUluc2VydCxcbiAgQ29sdW1uLFxuICBDcmVhdGVEYXRlQ29sdW1uLFxuICBFbnRpdHksXG4gIE9uZVRvTWFueSxcbiAgT25lVG9PbmUsXG4gIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sXG4gIFVuaXF1ZSxcbiAgVXBkYXRlRGF0ZUNvbHVtblxufSBmcm9tICd0eXBlb3JtJztcbmltcG9ydCB7UG9zdH0gZnJvbSAnLi9Qb3N0JztcbmltcG9ydCB7Q29tbWVudH0gZnJvbSAnLi9Db21tZW50JztcbmltcG9ydCB7Sm9pbkNvbHVtbn0gZnJvbSAndHlwZW9ybS9icm93c2VyJztcbmltcG9ydCB7Z2V0RGF0YWJhc2VDb25uZWN0aW9ufSBmcm9tICcuLi8uLi9saWIvZ2V0RGF0YWJhc2VDb25uZWN0aW9uJztcbmltcG9ydCBtZDUgZnJvbSAnbWQ1JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuQEVudGl0eSgndXNlcnMnKVxuZXhwb3J0IGNsYXNzIFVzZXIge1xuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbignaW5jcmVtZW50JylcbiAgaWQ6IG51bWJlcjtcbiAgQENvbHVtbigndmFyY2hhcicpXG4gIHVzZXJuYW1lOiBVc2VyO1xuICBAQ29sdW1uKCd2YXJjaGFyJylcbiAgcGFzc3dvcmREaWdlc3Q6IHN0cmluZztcbiAgQENyZWF0ZURhdGVDb2x1bW4oe3R5cGU6ICd0aW1lc3RhbXAnfSlcbiAgY3JlYXRlZEF0OiBEYXRlO1xuICBAVXBkYXRlRGF0ZUNvbHVtbih7dHlwZTogJ3RpbWVzdGFtcCd9KVxuICB1cGRhdGVkQXQ6IERhdGU7XG4gIEBPbmVUb01hbnkodHlwZSA9PiBQb3N0LCBwb3N0ID0+IHBvc3QuYXV0aG9yKVxuICBwb3N0czogUG9zdFtdO1xuICBAT25lVG9NYW55KHR5cGUgPT4gQ29tbWVudCwgY29tbWVudCA9PiBjb21tZW50LnVzZXIpXG4gIGNvbW1lbnRzOiBDb21tZW50W107XG5cbiAgZXJyb3JzID0ge3VzZXJuYW1lOiBbXSBhcyBzdHJpbmdbXSwgcGFzc3dvcmQ6IFtdIGFzIHN0cmluZ1tdLCBwYXNzd29yZENvbmZpcm1hdGlvbjogW10gYXMgc3RyaW5nW119O1xuICBwYXNzd29yZDogc3RyaW5nO1xuICBwYXNzd29yZENvbmZpcm1hdGlvbjogc3RyaW5nO1xuXG4gIGFzeW5jIHZhbGlkYXRlKCkge1xuICAgIGlmICh0aGlzLnVzZXJuYW1lLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgIHRoaXMuZXJyb3JzLnVzZXJuYW1lLnB1c2goJ+S4jeiDveS4uuepuicpO1xuICAgIH1cbiAgICBpZiAoIS9bYS16QS1aMC05XS8udGVzdCh0aGlzLnVzZXJuYW1lLnRyaW0oKSkpIHtcbiAgICAgIHRoaXMuZXJyb3JzLnVzZXJuYW1lLnB1c2goJ+agvOW8j+S4jeWQiOazlScpO1xuICAgIH1cbiAgICBpZiAodGhpcy51c2VybmFtZS50cmltKCkubGVuZ3RoID4gMjQpIHtcbiAgICAgIHRoaXMuZXJyb3JzLnVzZXJuYW1lLnB1c2goJ+WkqumVvycpO1xuICAgIH1cbiAgICBpZiAodGhpcy51c2VybmFtZS50cmltKCkubGVuZ3RoIDw9IDMpIHtcbiAgICAgIHRoaXMuZXJyb3JzLnVzZXJuYW1lLnB1c2goJ+WkquefrScpO1xuICAgIH1cbiAgICBjb25zdCBmb3VuZCA9IGF3YWl0IChhd2FpdCBnZXREYXRhYmFzZUNvbm5lY3Rpb24oKSkubWFuYWdlci5maW5kKFVzZXIsIHt1c2VybmFtZTogdGhpcy51c2VybmFtZX0pO1xuICAgIGlmIChmb3VuZC5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmVycm9ycy51c2VybmFtZS5wdXNoKCflt7LlrZjlnKjvvIzkuI3og73ph43lpI3ms6jlhownKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucGFzc3dvcmQgPT09ICcnKSB7XG4gICAgICB0aGlzLmVycm9ycy5wYXNzd29yZC5wdXNoKCfkuI3og73kuLrnqbonKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucGFzc3dvcmQgIT09IHRoaXMucGFzc3dvcmRDb25maXJtYXRpb24pIHtcbiAgICAgIHRoaXMuZXJyb3JzLnBhc3N3b3JkQ29uZmlybWF0aW9uLnB1c2goJ+WvhueggeS4jeWMuemFjScpO1xuICAgIH1cbiAgfVxuXG4gIGhhc0Vycm9ycygpIHtcbiAgICByZXR1cm4gISFPYmplY3QudmFsdWVzKHRoaXMuZXJyb3JzKS5maW5kKHYgPT4gdi5sZW5ndGggPiAwKTtcbiAgfVxuICBAQmVmb3JlSW5zZXJ0KClcbiAgZ2VuZXJhdGVQYXNzd29yZERpZ2VzdCgpIHtcbiAgICB0aGlzLnBhc3N3b3JkRGlnZXN0ID0gbWQ1KHRoaXMucGFzc3dvcmQpXG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIF8ub21pdCh0aGlzLCBbJ3Bhc3N3b3JkJywgJ3Bhc3N3b3JkQ29uZmlybWF0aW9uJywgJ3Bhc3N3b3JkRGlnZXN0J10pXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZDVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVmbGVjdC1tZXRhZGF0YVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0eXBlb3JtXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=