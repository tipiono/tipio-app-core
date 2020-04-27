"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var EmptyBagIcon = function EmptyBagIcon(props) {
  return _react["default"].createElement("svg", {
    width: 32,
    height: 32
  }, _react["default"].createElement("g", {
    className: "prefix__nc-icon-wrapper",
    strokeLinecap: "square",
    strokeWidth: 2,
    fill: "none",
    stroke: "#8c8f91",
    strokeMiterlimit: 10
  }, _react["default"].createElement("circle", {
    "data-color": "color-2",
    cx: 8,
    cy: 28,
    r: 3
  }), _react["default"].createElement("circle", {
    "data-color": "color-2",
    cx: 27,
    cy: 28,
    r: 3
  }), _react["default"].createElement("path", {
    d: "M5.706 7H30l-3 14H7L5 1H1"
  })));
};

var _default = EmptyBagIcon;
exports["default"] = _default;