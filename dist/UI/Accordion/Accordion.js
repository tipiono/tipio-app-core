"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Accordion = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Card = function Card(_ref) {
  var children = _ref.children;
  return {
    children: children
  };
};

var CardHeader = function CardHeader(_ref2) {
  var title = _ref2.title,
      titleOnShow = _ref2.titleOnShow,
      id = _ref2.id,
      onClick = _ref2.onClick,
      show = _ref2.show;
  var titleLabel = title;

  if (titleOnShow && show) {
    titleLabel = titleOnShow;
  }

  return _react.default.createElement("div", {
    className: "customAccordion__item " + (show ? "show" : ""),
    id: id
  }, _react.default.createElement("button", {
    id: id,
    className: "customAccordion__item--button",
    onClick: onClick
  }, titleLabel, _react.default.createElement("svg", {
    width: 19,
    height: 11
  }, _react.default.createElement("path", {
    d: "M18 1l-8.464 9L1 1",
    stroke: "#8C8F91",
    strokeWidth: 2,
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))));
};

var CardBody = function CardBody(_ref3) {
  var children = _ref3.children,
      id = _ref3.id,
      show = _ref3.show;
  return _react.default.createElement("div", {
    id: id,
    className: "customAccordion__item--content " + (show ? 'show' : ''),
    "data-parent": "#accordionExample"
  }, children);
};

var Accordion =
/*#__PURE__*/
function (_Component) {
  _inherits(Accordion, _Component);

  function Accordion(props) {
    var _this;

    _classCallCheck(this, Accordion);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Accordion).call(this, props));
    _this.headerOnClick = _this.headerOnClick.bind(_assertThisInitialized(_this));
    _this.state = {
      active: 0
    };
    return _this;
  }

  _createClass(Accordion, [{
    key: "headerOnClick",
    value: function headerOnClick(e) {
      var active = parseInt(e.target.id);
      active = active === this.state.active ? 0 : active;
      this.setState({
        active: active
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", {
        className: "customAccordion",
        id: "accordionExample"
      }, _react.default.Children.map(this.props.children, function (child, index) {
        var _child$props = child.props,
            title = _child$props.title,
            titleOnShow = _child$props.titleOnShow;
        var show = _this2.state.active === index + 1;
        return [_react.default.createElement(CardHeader, {
          title: title,
          titleOnShow: titleOnShow,
          id: index + 1,
          onClick: _this2.headerOnClick,
          show: show
        }), _react.default.createElement(CardBody, {
          id: index,
          show: show
        }, child)];
      }));
    }
  }]);

  return Accordion;
}(_react.Component);

exports.Accordion = Accordion;
;