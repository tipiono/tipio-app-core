"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Modal = require("../Modal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function ModalSpinner(_ref) {
  _objectDestructuringEmpty(_ref);

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Modal.Modal, null, _react.default.createElement("div", {
    className: "modalSpinner"
  }, _react.default.createElement("div", {
    className: "modalSpinner--size spinner-border text-secondary",
    role: "status"
  }, _react.default.createElement("span", {
    className: "sr-only"
  }, "Loading...")))));
}

var _default = ModalSpinner;
exports.default = _default;