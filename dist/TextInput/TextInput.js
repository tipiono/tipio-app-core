"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./TextInput.scss");

var _Button = _interopRequireDefault(require("../Button/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TextInput = function TextInput(_ref) {
  var value = _ref.value,
      placeholder = _ref.placeholder,
      label = _ref.label,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur;
  return _react["default"].createElement("div", {
    className: "form-group"
  }, _react["default"].createElement("label", {
    className: "pure-material-textfield-outlined"
  }, _react["default"].createElement("input", {
    placeholder: placeholder,
    type: "text",
    className: "form-control form-control-lg",
    id: "ProductTitle",
    value: value,
    name: "title",
    onChange: onChange,
    onBlur: onBlur
  }), _react["default"].createElement("span", {
    className: "label-sm"
  }, label)));
};

TextInput.defaultProps = {};
TextInput.propTypes = {
  value: _propTypes["default"].string.isRequired,
  placeholder: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].string.isRequired,
  onChange: _propTypes["default"].func,
  onBlur: _propTypes["default"].func
};
var _default = TextInput;
exports["default"] = _default;