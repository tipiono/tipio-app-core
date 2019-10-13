"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Modal = require("../Modal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ModalSpinner(_ref) {
  var title = _ref.title;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Modal.Modal, null, _react.default.createElement("div", {
    className: "modalSpinner"
  }, _react.default.createElement("div", {
    className: "modalSpinner--size spinner-border text-secondary",
    role: "status"
  }, _react.default.createElement("span", {
    className: "sr-only"
  }, "Loading...")), _react.default.createElement("h3", {
    className: "modalSpinner--title"
  }, title))));
}

var _default = ModalSpinner;
exports.default = _default;