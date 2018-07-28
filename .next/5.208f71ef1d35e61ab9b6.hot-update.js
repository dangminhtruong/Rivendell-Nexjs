webpackHotUpdate(5,{

/***/ "./components/global/loginForm/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_css__ = __webpack_require__("./components/global/loginForm/form.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__form_css__);
var _jsxFileName = "/home/truongdang/Documents/projects/Reactjs/rivendell-SSR/components/global/loginForm/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "FormWrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "Left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        className: "FormLogin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        htmlFor: "fname",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, "User name"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        id: "fname",
        name: "firstname",
        autoComplete: "username",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        htmlFor: "lname",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, "Password"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "password",
        id: "lname",
        name: "lastname",
        autoComplete: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "submit",
        value: "Submit",
        autoComplete: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "Right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
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

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])()(Index));

/***/ })

})
//# sourceMappingURL=5.208f71ef1d35e61ab9b6.hot-update.js.map