"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CloseIcon = function CloseIcon() {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("svg", {
    width: 17,
    height: 17
  }, _react.default.createElement("path", {
    d: "M15.234 0L8.501 6.73 1.771 0 0 1.766l6.733 6.735L0 15.231 1.771 17l6.73-6.73L15.234 17 17 15.231l-6.73-6.73L17 1.766z",
    fill: "#FFF",
    fillRule: "evenodd"
  })));
};

var _default = CloseIcon;
exports.default = _default;