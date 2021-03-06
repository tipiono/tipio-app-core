"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Alert = function Alert(_ref) {
  var color = _ref.color,
      content = _ref.content,
      onTitleClick = _ref.onTitleClick,
      onCloseClick = _ref.onCloseClick;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)("customAlert", color)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex justify-content-center align-items-center"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: "mr-2",
    width: 23,
    height: 23
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M10.766 9.441h1.5v7.393h-1.5V9.44zm.745-3.22a1.03 1.03 0 110 2.059 1.03 1.03 0 010-2.059zm0-6.079C5.226.142.131 5.237.131 11.522c0 6.285 5.095 11.38 11.38 11.38 6.285 0 11.38-5.095 11.38-11.38C22.883 5.24 17.792.148 11.51.142zm0 21.588c-5.638 0-10.208-4.57-10.208-10.208S5.873 1.314 11.511 1.314c5.637 0 10.208 4.57 10.208 10.208-.006 5.635-4.573 10.201-10.208 10.208z",
    fill: "#4F2E90",
    fillRule: "nonzero"
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: "",
    onClick: onTitleClick
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "customAlert--content"
  }, content))), /*#__PURE__*/_react.default.createElement("a", {
    href: "",
    onClick: onCloseClick
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: "customAlert--icon",
    width: 14,
    height: 15
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M8.24 7.862l5.484-5.52a.885.885 0 00-1.248-1.25L6.992 6.588 1.508 1.091a.882.882 0 10-1.249 1.25l5.484 5.521-5.484 5.46a.882.882 0 00.625 1.51.88.88 0 00.624-.26l5.484-5.49 5.484 5.49a.903.903 0 00.628.26.888.888 0 00.62-1.533L8.24 7.862z",
    fill: "#8C8F91",
    fillRule: "nonzero"
  })))));
};

var _default = Alert;
exports.default = _default;