"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("label", {
    className: "pure-material-textfield-outlined"
  }, _react.default.createElement("input", {
    placeholder: " ",
    type: "text"
  }), _react.default.createElement("span", {
    className: "label-sm"
  }, "Antall kj\xF8pere"), _react.default.createElement("span", {
    class: "text"
  }, "- 50")));
}