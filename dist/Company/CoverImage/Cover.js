"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Cover = function Cover(_ref) {
  var src = _ref.src;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("img", {
    className: "cover",
    src: src,
    alt: ""
  }));
};

var _default = Cover;
exports["default"] = _default;