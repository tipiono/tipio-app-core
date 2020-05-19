"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThreeDotsIcon = function ThreeDotsIcon() {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("svg", {
    width: 18,
    height: 4
  }, _react.default.createElement("g", {
    transform: "translate(0 .4)",
    fill: "#5C6265",
    fillRule: "evenodd"
  }, _react.default.createElement("ellipse", {
    cx: 1.625,
    cy: 1.44,
    rx: 1.625,
    ry: 1.44
  }), _react.default.createElement("ellipse", {
    cx: 8.938,
    cy: 1.44,
    rx: 1.625,
    ry: 1.44
  }), _react.default.createElement("ellipse", {
    cx: 16.251,
    cy: 1.44,
    rx: 1.625,
    ry: 1.44
  }))));
};

var _default = ThreeDotsIcon;
exports.default = _default;