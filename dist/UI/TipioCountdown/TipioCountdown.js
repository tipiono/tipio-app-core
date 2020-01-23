"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireWildcard(require("react-countdown-now/dist/index"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Completionist = function Completionist() {
  return _react.default.createElement("span", {
    className: "inactive timer"
  }, "Ikke aktiv");
};

var _renderer = function renderer(_ref) {
  var hours = _ref.hours,
      minutes = _ref.minutes,
      seconds = _ref.seconds,
      completed = _ref.completed;
  var cn = hours < 24 ? 'purple' : 'turquoise';

  if (completed) {
    return _react.default.createElement(Completionist, null);
  } else {
    return _react.default.createElement("span", {
      className: cn + ' timer'
    }, hours, ":", minutes, ":", seconds);
  }
};

var TipioCountdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TipioCountdown, _React$Component);

  function TipioCountdown() {
    _classCallCheck(this, TipioCountdown);

    return _possibleConstructorReturn(this, _getPrototypeOf(TipioCountdown).apply(this, arguments));
  }

  _createClass(TipioCountdown, [{
    key: "render",
    value: function render() {
      var _this = this;

      var substractN = new Date(this.props.expires_in);
      substractN.setHours(substractN.getHours() - 72);

      if (substractN > new Date()) {
        return null;
      }

      return _react.default.createElement(_index.default, {
        date: this.props.expires_in,
        renderer: function renderer(_ref2) {
          var completed = _ref2.completed;
          var result = (0, _index.formatTimeDelta)((0, _index.calcTimeDelta)(_this.props.expires_in), {
            daysInHours: true
          });
          return _renderer(_objectSpread({}, result, {
            completed: completed
          }));
        }
      });
    }
  }]);

  return TipioCountdown;
}(_react.default.Component);

var _default = TipioCountdown;
exports.default = _default;