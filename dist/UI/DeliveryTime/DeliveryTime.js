"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _deliverytime = _interopRequireDefault(require("../../static/assets/images/deliverytime.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DeliveryTime = function DeliveryTime(_ref) {
  var estimate = _ref.estimate;
  var periods = {
    1: 'virkedager',
    2: 'uker',
    3: 'månder'
  };
  return _react["default"].createElement(_react["default"].Fragment, null, estimate && _react["default"].createElement("div", {
    className: "deliveryTime"
  }, _react["default"].createElement("img", {
    className: "deliveryTime__icon",
    src: _deliverytime["default"],
    alt: ""
  }), _react["default"].createElement("span", {
    className: "deliveryTime__title"
  }, "Levering i l\xF8pet av ".concat(estimate.from, " - ").concat(estimate.to, " ").concat(periods[estimate.period]))));
};

var _default = DeliveryTime;
exports["default"] = _default;