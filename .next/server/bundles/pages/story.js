module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/global/footer/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "/home/truongdang/Documents/projects/Reactjs/rivendell-SSR/components/global/footer/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Footer =
/*#__PURE__*/
function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        id: "footer",
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "fa-twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, "Twitter")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "fa-facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, "Facebook")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "fa-instagram",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, "Instagram")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "fa-rss",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "RSS")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "fa-envelope",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "Email"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "copyright",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "\xA9 Untitled. Design:", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "http://html5up.net",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "HTML5 UP")), ". Images: ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "http://unsplash.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, "Unsplash")), "."));
    }
  }]);

  return Footer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./components/global/header/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_actions__ = __webpack_require__("./store/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
var _jsxFileName = "/home/truongdang/Documents/projects/Reactjs/rivendell-SSR/components/global/header/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "showMenu", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var menu = document.getElementById('is-body');
        menu.className = menu.className === 'is-preload' ? 'is-menu-visible' : 'is-preload';
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "closeMenu", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var menu = document.getElementById('is-body');
        menu.className = menu.className === 'is-menu-visible' ? 'is-preload' : 'is-menu-visible';
      }
    }), _temp));
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getCategories();
    }
  }, {
    key: "render",
    value: function render() {
      var categories = [];

      if (this.props.categories.length !== 0) {
        categories = this.props.categories.map(function (category, index) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
            key: "ck".concat(index),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
            href: "/",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          }, category.get('name'))));
        });
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
        id: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, "Truong Dang"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
        className: "links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, categories)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
        className: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "fa-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, "Search")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        id: "search",
        method: "get",
        action: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        name: "query",
        placeholder: "Search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "menu",
        onClick: this.showMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "fa-bars",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, "Menu"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        id: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "button fit",
        onClick: this.closeMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, "Close menu")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, "Lorem ipsum"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, "Feugiat tempus veroeros dolor"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, "Dolor sit amet"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, "Sed vitae justo condimentum"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "Feugiat veroeros"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, "Phasellus sed ultricies mi congue"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "Etiam sed consequat"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, "Porta lectus amet ultricies"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "actions stacked",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "button large fit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, "Log In"))))));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    categories: state.get('categories').toArray()
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getCategories: Object(__WEBPACK_IMPORTED_MODULE_3_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_2__store_actions__["a" /* actFetchCategoriesRequest */], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Header));

/***/ }),

/***/ "./components/pages/story.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_header__ = __webpack_require__("./components/global/header/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_footer__ = __webpack_require__("./components/global/footer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_actions__ = __webpack_require__("./store/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_config__ = __webpack_require__("./config/config.js");
var _jsxFileName = "/home/truongdang/Documents/projects/Reactjs/rivendell-SSR/components/pages/story.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var SingleStory =
/*#__PURE__*/
function (_Component) {
  _inherits(SingleStory, _Component);

  function SingleStory() {
    _classCallCheck(this, SingleStory);

    return _possibleConstructorReturn(this, (SingleStory.__proto__ || Object.getPrototypeOf(SingleStory)).apply(this, arguments));
  }

  _createClass(SingleStory, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getSingleStory(this.props.postId);
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__global_header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("article", {
        className: "post",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, this.props.story.get('title')))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "Lorem ipsum dolor amet nullam consequat etiam feugiat")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "meta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("time", {
        className: "published",
        dateTime: "2015-11-01",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, "November 1, 2015"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "author",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, this.props.story.get('username')), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "".concat(__WEBPACK_IMPORTED_MODULE_6__config_config__["a" /* default */].BASE_API_URL, "/public/images/avatar.jpg"),
        alt: "rivendell",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "image featured",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "".concat(__WEBPACK_IMPORTED_MODULE_6__config_config__["a" /* default */].BASE_API_URL, "/public/images/js.gif"),
        alt: "rivendell",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, this.props.story.get('body')))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__global_footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }));
    }
  }]);

  return SingleStory;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    story: state.get('story')
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getSingleStory: function getSingleStory(id) {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__store_actions__["b" /* actFetchSingleStoryRequest */])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(SingleStory));

/***/ }),

/***/ "./config/axios.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__("./config/config.js");


var instance = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
  baseURL: __WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].BASE_API_URL,
  withCredentials: false
});
__WEBPACK_IMPORTED_MODULE_0_axios___default.a.defaults.headers.post['Content-Type'] = 'application/json';
__WEBPACK_IMPORTED_MODULE_0_axios___default.a.defaults.withCredentials = false;
__WEBPACK_IMPORTED_MODULE_0_axios___default.a.defaults.crossDomain = true;
/* harmony default export */ __webpack_exports__["a"] = (instance);

/***/ }),

/***/ "./config/config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var config = {
  BASE_API_URL: 'http://localhost:8080'
};
/* harmony default export */ __webpack_exports__["a"] = (config);

/***/ }),

/***/ "./pages/story.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_pages_story__ = __webpack_require__("./components/pages/story.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
var _jsxFileName = "/home/truongdang/Documents/projects/Reactjs/rivendell-SSR/pages/story.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Story =
/*#__PURE__*/
function (_Component) {
  _inherits(Story, _Component);

  function Story() {
    _classCallCheck(this, Story);

    return _possibleConstructorReturn(this, (Story.__proto__ || Object.getPrototypeOf(Story)).apply(this, arguments));
  }

  _createClass(Story, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_pages_story__["a" /* default */], {
        postId: this.props.router.query.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var store = _ref.store,
          isServer = _ref.isServer;
      return {
        isServer: isServer
      };
    }
  }]);

  return Story;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_2_next_router__["withRouter"])(Story));

/***/ }),

/***/ "./store/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return actFetchStoriesRequest; });
/* unused harmony export actFetchBooks */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return actFetchSingleStoryRequest; });
/* unused harmony export actFetchStory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actFetchCategoriesRequest; });
/* unused harmony export actFetchCategories */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return atcGetSlideBarTopFourRequest; });
/* unused harmony export actGetSlideBarTopFour */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return atcGetSlideBarRandomRequest; });
/* unused harmony export atcGetSlideBarRandom */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__("./store/types.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_axios__ = __webpack_require__("./config/axios.js");


var actFetchStoriesRequest = function actFetchStoriesRequest() {
  return function (dispatch) {
    return __WEBPACK_IMPORTED_MODULE_1__config_axios__["a" /* default */].get('/client/stories/main').then(function (res) {
      dispatch(actFetchBooks(res.data));
    });
  };
};
var actFetchBooks = function actFetchBooks(stories) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["e" /* FETCH_STORIES */],
    stories: stories
  };
};
var actFetchSingleStoryRequest = function actFetchSingleStoryRequest(id) {
  return function (dispatch) {
    return __WEBPACK_IMPORTED_MODULE_1__config_axios__["a" /* default */].get("/client/story/".concat(id)).then(function (res) {
      dispatch(actFetchStory(res.data));
    });
  };
};
var actFetchStory = function actFetchStory(story) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["d" /* FETCH_SINGLE_STORY */],
    story: story
  };
};
var actFetchCategoriesRequest = function actFetchCategoriesRequest() {
  return function (dispatch) {
    return __WEBPACK_IMPORTED_MODULE_1__config_axios__["a" /* default */].get("/client/categories").then(function (res) {
      dispatch(actFetchCategories(res.data));
    });
  };
};
var actFetchCategories = function actFetchCategories(categories) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["a" /* FETCH_CATEGORIES */],
    categories: categories
  };
};
var atcGetSlideBarTopFourRequest = function atcGetSlideBarTopFourRequest() {
  return function (dispatch) {
    return __WEBPACK_IMPORTED_MODULE_1__config_axios__["a" /* default */].get("/client/stories/top-four").then(function (res) {
      dispatch(actGetSlideBarTopFour(res.data));
    });
  };
};
var actGetSlideBarTopFour = function actGetSlideBarTopFour(sideBarTopFour) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["c" /* FETCH_SIDEBAR_TOP_FOUR */],
    sideBarTopFour: sideBarTopFour
  };
};
var atcGetSlideBarRandomRequest = function atcGetSlideBarRandomRequest() {
  return function (dispatch) {
    return __WEBPACK_IMPORTED_MODULE_1__config_axios__["a" /* default */].get("/client/stories/random").then(function (res) {
      dispatch(atcGetSlideBarRandom(res.data));
    });
  };
};
var atcGetSlideBarRandom = function atcGetSlideBarRandom(sideBarRandom) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__types__["b" /* FETCH_SIDEBAR_RANDOM */],
    sideBarRandom: sideBarRandom
  };
};

/***/ }),

/***/ "./store/types.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FETCH_STORY_REQUEST */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FETCH_STORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FETCH_SINGLE_STORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FETCH_CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FETCH_SIDEBAR_TOP_FOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FETCH_SIDEBAR_RANDOM; });
var FETCH_STORY_REQUEST = 'FETCH_STORY_REQUEST';
var FETCH_STORIES = 'FETCH_STORIES';
var FETCH_SINGLE_STORY = 'FETCH_SINGLE_STORY';
var FETCH_CATEGORIES = 'FETCH_CATEGORIES';
var FETCH_SIDEBAR_TOP_FOUR = 'FETCH_SIDEBAR_TOP_FOUR';
var FETCH_SIDEBAR_RANDOM = 'FETCH_SIDEBAR_RANDOM';

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/story.js");


/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
//# sourceMappingURL=story.js.map