"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function OnboardingTooltip(_ref) {
  var continuous = _ref.continuous,
      index = _ref.index,
      step = _ref.step,
      backProps = _ref.backProps,
      closeProps = _ref.closeProps,
      primaryProps = _ref.primaryProps,
      tooltipProps = _ref.tooltipProps;
  return _react.default.createElement("div", tooltipProps, step.title && _react.default.createElement("h1", null, step.title), _react.default.createElement("div", null, step.content), _react.default.createElement("div", null, index > 0 && _react.default.createElement("button", backProps, _react.default.createElement("span", {
    id: "back"
  }, "Back")), continuous && _react.default.createElement("button", primaryProps, _react.default.createElement("span", {
    id: "next"
  }, " Next ")), !continuous && _react.default.createElement("button", closeProps, _react.default.createElement("span", {
    id: "close"
  }, " Close "))));
}

var _default = OnboardingTooltip;
exports.default = _default;