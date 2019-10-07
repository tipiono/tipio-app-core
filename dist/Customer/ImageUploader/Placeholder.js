"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  return _react.default.createElement("a", {
    className: "imageUploader",
    href: ""
  }, _react.default.createElement("svg", {
    className: "imageUploader--icon",
    width: 40,
    height: 40
  }, _react.default.createElement("title", null, 'Group 3'), _react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("circle", {
    fill: "#4ABCAC",
    cx: 20,
    cy: 20,
    r: 20
  }), _react.default.createElement("path", {
    d: "M19.088 20.936h-5.456a.92.92 0 110-1.84h5.456V13.64a.92.92 0 111.84 0v5.456h5.464a.92.92 0 110 1.84h-5.464V26.4a.92.92 0 11-1.84 0v-5.464z",
    fill: "#4F2E90",
    fillRule: "nonzero"
  }))), _react.default.createElement("h5", {
    className: "imageUploader--label"
  }, "Last opp produktbilder"));
}