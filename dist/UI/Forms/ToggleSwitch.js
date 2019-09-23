"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function ToggleSwitch(_ref) {
  _objectDestructuringEmpty(_ref);

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "material-toggle"
  }, _react.default.createElement("input", {
    id: "MaterialToggle1",
    name: "MaterialToggleRed",
    type: "checkbox"
  }), _react.default.createElement("label", {
    htmlFor: "MaterialToggle1",
    className: "label-red"
  })));
}

var _default = ToggleSwitch;
exports.default = _default;