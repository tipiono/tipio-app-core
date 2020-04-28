"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalType = exports.Modal = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var OnClickOutsideWrapper =
/*#__PURE__*/
function (_Component) {
  _inherits(OnClickOutsideWrapper, _Component);

  function OnClickOutsideWrapper() {
    _classCallCheck(this, OnClickOutsideWrapper);

    return _possibleConstructorReturn(this, _getPrototypeOf(OnClickOutsideWrapper).apply(this, arguments));
  }

  _createClass(OnClickOutsideWrapper, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        style: {
          height: '100%'
        }
      }, this.props.children);
    }
  }]);

  return OnClickOutsideWrapper;
}(_react.Component);

var ModalOnClickOutsideWrapper = (0, _reactOnclickoutside["default"])(OnClickOutsideWrapper);

var Modal =
/*#__PURE__*/
function (_Component2) {
  _inherits(Modal, _Component2);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this, props));
    _this.handleKeyUp = _this.handleKeyUp.bind(_assertThisInitialized(_this));
    _this.onCloseButtonClick = _this.onCloseButtonClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.addNoScroll();
      window.addEventListener('keyup', this.handleKeyUp, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('keyup', this.handleKeyUp, false);
      this.removeNoScrollClass();
    }
  }, {
    key: "handleKeyUp",
    value: function handleKeyUp(e) {
      var _this2 = this;

      var keys = {
        27: function _() {
          e.preventDefault();

          _this2.onCloseButtonClick();

          window.removeEventListener('keyup', _this2.handleKeyUp, false);
        }
      };

      if (keys[e.keyCode]) {
        keys[e.keyCode]();
      }
    }
  }, {
    key: "onCloseButtonClick",
    value: function onCloseButtonClick(e) {
      var _this3 = this;

      // this.toggleNoScroll();
      this.removeNoScrollClass();

      if (window.innerWidth <= 768) {
        console.log('HERE');
        setTimeout(function () {
          _this3.props.onCloseButtonClick();
        }, 500);
      } else {
        this.props.onCloseButtonClick();
      }
    }
  }, {
    key: "addNoScroll",
    value: function addNoScroll() {
      document.querySelector('html').classList.add('noscroll');
      document.querySelector('body').classList.add('noscroll');
    }
  }, {
    key: "removeNoScrollClass",
    value: function removeNoScrollClass() {
      document.querySelector('html').classList.remove('noscroll');
      document.querySelector('body').classList.remove('noscroll');
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          _this$props$showClose = _this$props.showCloseButton,
          showCloseButton = _this$props$showClose === void 0 ? false : _this$props$showClose,
          _this$props$type = _this$props.type,
          type = _this$props$type === void 0 ? ModalType.LARGE : _this$props$type;
      var appendCenteredClass = this.props.appendCenteredClass;

      if (appendCenteredClass === undefined) {
        appendCenteredClass = true;
      } // const [active, setActive] = useState(false);


      var style = {
        display: 'block'
      };
      var clsList = "custom__modal--dialog modal-dialog modal-dialog-scrollable ".concat(appendCenteredClass ? 'modal-dialog-centered' : '', " ").concat(type);
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
        className: "custom__modal modal fade show",
        tabIndex: "-1",
        role: "dialog",
        style: style
      }, _react["default"].createElement("div", {
        className: clsList,
        role: "document"
      }, _react["default"].createElement("div", {
        className: "custom__modal--content modal-content border-0"
      }, _react["default"].createElement("div", {
        className: "modal-body p-0"
      }, _react["default"].createElement(ModalOnClickOutsideWrapper, {
        handleClickOutside: this.onCloseButtonClick
      }, children)), showCloseButton && _react["default"].createElement("span", {
        className: "custom__modal--close",
        onClick: this.onCloseButtonClick
      }, _react["default"].createElement("svg", {
        width: "19px",
        height: "19px",
        viewBox: "0 0 19 19"
      }, _react["default"].createElement("g", {
        id: "Symbols",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("path", {
        d: "M11.14,9.16761031 L18.3,1.96761031 C18.5911715,1.67643885 18.7048869,1.25204721 18.5983107,0.854299601 C18.4917346,0.456551996 18.1810583,0.145875751 17.7833107,0.0392996011 C17.3855631,-0.0672765486 16.9611715,0.0464388494 16.67,0.337610305 L9.51,7.50761031 L2.35,0.337610305 C1.89988793,-0.112501766 1.17011207,-0.112501766 0.72,0.337610305 C0.269887929,0.787722376 0.269887929,1.51749823 0.72,1.96761031 L7.88,9.16761031 L0.72,16.2876103 C0.503213186,16.503424 0.381341482,16.7967148 0.381341482,17.1026103 C0.381341482,17.4085058 0.503213186,17.7017966 0.72,17.9176103 C0.935813662,18.1343971 1.2291045,18.2562688 1.535,18.2562688 C1.8408955,18.2562688 2.13418634,18.1343971 2.35,17.9176103 L9.51,10.7576103 L16.67,17.9176103 C16.8886599,18.1333546 17.1828314,18.2553281 17.49,18.2576103 C17.9661554,18.261734 18.3964679,17.974448 18.5752149,17.5330974 C18.753962,17.0917467 18.6448329,16.5859869 18.3,16.2576103 L11.14,9.16761031 Z",
        id: "Mask",
        fill: "#8C8F91",
        fillRule: "nonzero"
      }))))))));
    }
  }]);

  return Modal;
}(_react.Component);

exports.Modal = Modal;
Modal.defaultProps = {
  className: ''
};
Modal.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].instanceOf(Object).isRequired
};
var ModalType = {
  LARGE: 'modal-lg',
  XLARGE: 'modal-xl',
  XXLARGE: 'modal-xxl'
};
exports.ModalType = ModalType;