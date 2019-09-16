"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Input(_ref) {
  var placeholder = _ref.placeholder;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("label", {
    className: "pure-material-textfield-outlined"
  }, _react.default.createElement("input", {
    placeholder: " "
  }), _react.default.createElement("span", {
    className: "label-sm"
  }, placeholder)));
}

var _default = Input;
exports.default = _default;