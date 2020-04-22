"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ConfirmedIcon = function ConfirmedIcon() {
  return _react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "75",
    height: "75",
    viewBox: "0 0 75 75"
  }, _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    strokeWidth: "4"
  }, _react["default"].createElement("path", {
    stroke: "#4BBBAB",
    d: "M64.702 23.398a33.224 33.224 0 0 1 4.049 15.946c0 18.434-14.943 33.376-33.375 33.376C16.943 72.72 2 57.778 2 39.344 2 20.912 16.943 5.969 35.376 5.969a33.215 33.215 0 0 1 18.589 5.653"
  }), _react["default"].createElement("path", {
    stroke: "#E44498",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M21.554 31.356L35.375 49.33 72.56 2.629"
  })));
};

var _default = ConfirmedIcon;
exports["default"] = _default;