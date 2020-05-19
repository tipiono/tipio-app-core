"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SalesProgressBarTooltip(_ref) {
  var percentage = _ref.percentage,
      bindCount = _ref.bindCount;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "sales__progress mb-6"
  }, _react.default.createElement("div", {
    className: "sales__progress--bar progress"
  }, _react.default.createElement("div", {
    className: "progress-bar bg-secondary",
    style: {
      width: "".concat(percentage, "%")
    },
    role: "progressbar",
    "aria-valuenow": "25",
    "aria-valuemin": "0",
    "aria-valuemax": "100"
  }), _react.default.createElement("span", {
    style: {
      marginLeft: "".concat(percentage, "%")
    },
    className: "tooltip-progressbar"
  })), bindCount > 0 && _react.default.createElement("div", {
    className: "sales__progress--tooltip middle"
  }, _react.default.createElement("span", null, bindCount, " har allerede kj\xF8pt!"))));
}

var _default = SalesProgressBarTooltip;
exports.default = _default;