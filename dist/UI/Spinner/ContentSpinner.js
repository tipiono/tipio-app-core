"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ContentSpinner() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center pt-6"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "spinner-border text-primary",
    role: "status",
    "aria-hidden": "true"
  })));
}

var _default = ContentSpinner;
exports.default = _default;