webpackHotUpdate(6,{

/***/ "./components/global/header/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_actions__ = __webpack_require__("./store/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
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

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(Header));

/***/ }),

/***/ "./components/global/sidebar/items/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item__ = __webpack_require__("./components/global/sidebar/items/item.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_actions__ = __webpack_require__("./store/actions.js");
var _jsxFileName = "/home/truongdang/Documents/projects/Reactjs/rivendell-SSR/components/global/sidebar/items/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var TopFour =
/*#__PURE__*/
function (_Component) {
  _inherits(TopFour, _Component);

  function TopFour() {
    _classCallCheck(this, TopFour);

    return _possibleConstructorReturn(this, (TopFour.__proto__ || Object.getPrototypeOf(TopFour)).apply(this, arguments));
  }

  _createClass(TopFour, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getSlideBarTopFour();
    }
  }, {
    key: "render",
    value: function render() {
      var topFour = [];

      if (this.props.sideBarTopFour.length !== 0) {
        topFour = this.props.sideBarTopFour.map(function (item, index) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__item__["a" /* default */], {
            post: item,
            key: "it".concat(index),
            detail: item,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          });
        });
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "mini-posts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, topFour));
    }
  }]);

  return TopFour;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    sideBarTopFour: state.get('sideBarTopFour').toArray()
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getSlideBarTopFour: Object(__WEBPACK_IMPORTED_MODULE_3_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_4__store_actions__["e" /* atcGetSlideBarTopFourRequest */], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(TopFour));

/***/ }),

/***/ "./components/global/sidebar/random/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item__ = __webpack_require__("./components/global/sidebar/random/item.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_actions__ = __webpack_require__("./store/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
var _jsxFileName = "/home/truongdang/Documents/projects/Reactjs/rivendell-SSR/components/global/sidebar/random/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Random =
/*#__PURE__*/
function (_Component) {
  _inherits(Random, _Component);

  function Random() {
    _classCallCheck(this, Random);

    return _possibleConstructorReturn(this, (Random.__proto__ || Object.getPrototypeOf(Random)).apply(this, arguments));
  }

  _createClass(Random, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getSlideBarRandom();
    }
  }, {
    key: "render",
    value: function render() {
      var items;

      if (this.props.sideBarRandom.length !== 0) {
        items = this.props.sideBarRandom.map(function (item, index) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__item__["a" /* default */], {
            info: item,
            key: "rand".concat(index),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          });
        });
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "posts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, items));
    }
  }]);

  return Random;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    sideBarRandom: state.get('sideBarRandom').toArray()
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getSlideBarRandom: Object(__WEBPACK_IMPORTED_MODULE_4_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_3__store_actions__["d" /* atcGetSlideBarRandomRequest */], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(Random));

/***/ }),

/***/ "./components/pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_post__ = __webpack_require__("./components/global/post/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_paginate__ = __webpack_require__("./components/global/paginate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_actions__ = __webpack_require__("./store/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
var _jsxFileName = "/home/truongdang/Documents/projects/Reactjs/rivendell-SSR/components/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Stories =
/*#__PURE__*/
function (_Component) {
  _inherits(Stories, _Component);

  function Stories() {
    _classCallCheck(this, Stories);

    return _possibleConstructorReturn(this, (Stories.__proto__ || Object.getPrototypeOf(Stories)).apply(this, arguments));
  }

  _createClass(Stories, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getListPost();
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var storyList;

      if (this.props.stories) {
        storyList = this.props.stories.map(function (story, index) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__global_post__["a" /* default */], {
            key: "p.".concat(index),
            story: story,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          });
        });
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, storyList, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__global_paginate__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }));
    }
  }]);

  return Stories;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    stories: state.get('stories').toArray()
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getListPost: Object(__WEBPACK_IMPORTED_MODULE_5_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_4__store_actions__["c" /* actFetchStoriesRequest */], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(Stories));

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

/***/ })

})
//# sourceMappingURL=6.642c76260bb713db9c01.hot-update.js.map