"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InfoIcon = function InfoIcon() {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("svg", {
    width: 48,
    height: 48
  }, _react.default.createElement("g", {
    className: "prefix__nc-icon-wrapper",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    fill: "#e74298",
    stroke: "#e74298"
  }, _react.default.createElement("circle", {
    "data-color": "color-2",
    "data-stroke": "none",
    cx: 24,
    cy: 12,
    r: 1,
    stroke: "none"
  }), _react.default.createElement("circle", {
    cx: 24,
    cy: 24,
    r: 22,
    fill: "none",
    strokeMiterlimit: 10
  }), _react.default.createElement("circle", {
    "data-color": "color-2",
    cx: 24,
    cy: 12,
    r: 1,
    fill: "none",
    strokeMiterlimit: 10
  }), _react.default.createElement("path", {
    "data-color": "color-2",
    fill: "none",
    strokeMiterlimit: 10,
    d: "M24 19v17"
  }))));
};

var _default = InfoIcon;
exports.default = _default;