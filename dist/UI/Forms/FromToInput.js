"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(_ref) {
  var from = _ref.from,
      to = _ref.to,
      label = _ref.label;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("label", {
    className: "pure-material-textfield-outlined from-to-input"
  }, _react.default.createElement("input", {
    placeholder: to,
    type: "number",
    id: "subdomain"
  }), _react.default.createElement("label", {
    className: "outside-label"
  }, label), _react.default.createElement("span", {
    className: "inside-label"
  }, "Fra"), _react.default.createElement("p", {
    className: "static-placeholder"
  }, from, " -")));
}