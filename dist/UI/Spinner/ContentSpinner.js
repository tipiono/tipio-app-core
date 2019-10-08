"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ContentSpinner() {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "text-center pt-3 pt-3"
  }, _react.default.createElement("span", null, _react.default.createElement("span", {
    className: "spinner-border spinner-border-sm",
    role: "status",
    "aria-hidden": "true"
  }))));
}

var _default = ContentSpinner;
exports.default = _default;