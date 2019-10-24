"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ToggleSwitch(_ref) {
  var name = _ref.name,
      checked = _ref.checked,
      onChange = _ref.onChange;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "material-toggle"
  }, _react.default.createElement("input", {
    id: name,
    name: name,
    type: "checkbox",
    checked: checked,
    onChange: onChange
  }), _react.default.createElement("label", {
    htmlFor: name,
    className: "label-red"
  })));
}

var _default = ToggleSwitch;
exports.default = _default;