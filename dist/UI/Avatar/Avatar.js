"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Avatar(_ref) {
  var src = _ref.src,
      loading = _ref.loading;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, src && /*#__PURE__*/_react.default.createElement("img", {
    className: "avatar",
    src: src,
    alt: ""
  }), loading ? /*#__PURE__*/_react.default.createElement("div", {
    className: "spinner-grow",
    role: "status"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, "Loading...")) : null);
}

var _default = Avatar;
exports.default = _default;