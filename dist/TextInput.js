"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./TextInput.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextInput = function TextInput(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? "text" : _ref$type,
      label = _ref.label,
      value = _ref.value,
      _onChange = _ref.onChange;
  return _react.default.createElement("div", {
    className: "simple-form-group"
  }, label && _react.default.createElement("label", {
    className: "simple-text-label"
  }, label), _react.default.createElement("input", {
    type: type,
    className: "simple-text-input",
    value: value,
    onChange: function onChange(e) {
      return _onChange && _onChange(e.target.value);
    }
  }));
};

var _default = TextInput;
exports.default = _default;