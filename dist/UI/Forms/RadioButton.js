"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function RadioButton(_ref) {
  _objectDestructuringEmpty(_ref);

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "md-radio"
  }, _react.default.createElement("input", {
    id: "1",
    type: "radio",
    name: "g",
    checked: true
  }), _react.default.createElement("label", {
    htmlFor: "1"
  }, "Option 1")));
}

var _default = RadioButton;
exports.default = _default;