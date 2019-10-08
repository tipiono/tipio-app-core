"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _clock = _interopRequireDefault(require("../../static/assets/images/clock.svg"));

var _reactCountdownNow = _interopRequireWildcard(require("react-countdown-now"));

var _CountdownType = require("./CountdownType");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var cx = require('classnames');

var _renderer = function renderer(_ref) {
  var hours = _ref.hours,
      minutes = _ref.minutes,
      seconds = _ref.seconds,
      completed = _ref.completed,
      type = _ref.type;
  return _react.default.createElement("span", {
    className: cx({
      'pinky-countdown-sm-time': _CountdownType.PINK === type,
      'green-countdown-sm-time': _CountdownType.GREEN === type
    })
  }, hours, ":", minutes, ":", seconds);
};

function PinkyCountdownSM(_ref2) {
  var expires_in = _ref2.expires_in,
      _ref2$type = _ref2.type,
      type = _ref2$type === void 0 ? 0 : _ref2$type;
  return (//<div className="pinky-countdown-sm">
    _react.default.createElement("div", {
      className: cx({
        'pinky-countdown-sm': _CountdownType.PINK === type,
        'green-countdown-sm': _CountdownType.GREEN === type
      })
    }, _react.default.createElement("svg", {
      className: cx({
        'pinky-countdown-sm-icon': _CountdownType.PINK === type,
        'green-countdown-sm-icon': _CountdownType.GREEN === type
      }),
      width: 11,
      height: 12
    }, _react.default.createElement("path", {
      fill: "#E74298",
      d: "M2.389 10.076C.15 8.459-.535 5.386.799 2.945a.155.155 0 01-.04-.046L.443 2.5A1.458 1.458 0 01.69.44a1.487 1.487 0 012.077.265l.107.138a5.29 5.29 0 015.25 0l.107-.138A1.487 1.487 0 0110.31.439a1.459 1.459 0 01.255 2.062l-.318.398a.155.155 0 01-.04.046c1.333 2.443.646 5.516-1.595 7.13l1.064 1.083c.11.112.11.292 0 .404a.276.276 0 01-.396 0L8.148 10.41a5.302 5.302 0 01-5.216 0L1.8 11.562a.276.276 0 01-.396 0 .289.289 0 010-.404l.985-1.082zm7.495-7.644l.232-.294a.887.887 0 00-.153-1.25.933.933 0 00-1.29.156l-.062.092c.494.355.925.793 1.273 1.296zm-8.768 0a5.327 5.327 0 011.273-1.296l-.063-.086a.933.933 0 00-1.29-.156.887.887 0 00-.153 1.25l.233.288zM5.5 10.496c2.656 0 4.809-2.192 4.809-4.896C10.309 2.896 8.156.704 5.5.704S.691 2.896.691 5.6c.004 2.703 2.155 4.893 4.809 4.896zM4.007 4.16l1.516 1.601L8.13 3.094a.276.276 0 01.396 0 .29.29 0 010 .404l-2.829 2.88a.28.28 0 01-.407 0L3.594 4.54a.29.29 0 010-.409.274.274 0 01.413.029z"
    })), _react.default.createElement(_reactCountdownNow.default, {
      date: expires_in,
      renderer: function renderer(_ref3) {
        var completed = _ref3.completed;
        var result = (0, _reactCountdownNow.formatTimeDelta)((0, _reactCountdownNow.calcTimeDelta)(expires_in), {
          daysInHours: true
        });
        return _renderer(_objectSpread({}, result, {
          completed: completed,
          type: type
        }));
      }
    }))
  );
}

var _default = PinkyCountdownSM;
exports.default = _default;