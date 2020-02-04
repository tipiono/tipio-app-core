"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _deliverytime = _interopRequireDefault(require("../../static/assets/images/deliverytime.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DeliveryTime = function DeliveryTime() {
  return _react.default.createElement("div", {
    className: "deliveryTime"
  }, _react.default.createElement("img", {
    className: "deliveryTime__icon",
    src: _deliverytime.default,
    alt: ""
  }), _react.default.createElement("span", {
    className: "deliveryTime__title"
  }, "Levering i l\xF8pet av 1-4 virkedager"));
};

var _default = DeliveryTime;
exports.default = _default;