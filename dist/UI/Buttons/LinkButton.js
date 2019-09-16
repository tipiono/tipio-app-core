"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LinkButton(_ref) {
  var text = _ref.text;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("button", {
    type: "button",
    className: "btn btn-link"
  }, text));
}

var _default = LinkButton;
exports.default = _default;