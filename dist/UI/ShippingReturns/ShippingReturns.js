"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _van = _interopRequireDefault(require("../../static/assets/images/van.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ShippingReturns = function ShippingReturns() {
  return _react["default"].createElement("div", {
    className: "shippingReturns"
  }, _react["default"].createElement("img", {
    className: "shippingReturns__icon",
    src: _van["default"],
    alt: ""
  }), _react["default"].createElement("span", {
    className: "shippingReturns__title"
  }, "Gratis frakt og retur"));
};

var _default = ShippingReturns;
exports["default"] = _default;