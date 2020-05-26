"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function OnboardingTooltip(_ref) {
  var continuous = _ref.continuous,
      index = _ref.index,
      isLastStep = _ref.isLastStep,
      step = _ref.step,
      backProps = _ref.backProps,
      closeProps = _ref.closeProps,
      primaryProps = _ref.primaryProps,
      skipProps = _ref.skipProps,
      tooltipProps = _ref.tooltipProps;
  return /*#__PURE__*/_react.default.createElement("div", _extends({}, tooltipProps, {
    className: (0, _classnames.default)('onboarding__tooltip', step.placement)
  }), step.title && /*#__PURE__*/_react.default.createElement("h6", {
    className: "onboarding__tooltip--title"
  }, step.title), /*#__PURE__*/_react.default.createElement("p", {
    className: "onboarding__tooltip--content"
  }, step.content), !continuous && /*#__PURE__*/_react.default.createElement("a", _extends({
    id: "close",
    className: "onboarding__tooltip--close",
    href: "#"
  }, closeProps), /*#__PURE__*/_react.default.createElement("svg", {
    className: "onboarding__tooltip__close--icon",
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("g", {
    className: "nc-icon-wrapper",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    fill: "#505659",
    stroke: "#505659"
  }, /*#__PURE__*/_react.default.createElement("line", {
    fill: "none",
    stroke: "#505659",
    strokeMiterlimit: "10",
    x1: "19",
    y1: "5",
    x2: "5",
    y2: "19"
  }), /*#__PURE__*/_react.default.createElement("line", {
    fill: "none",
    stroke: "#505659",
    strokeMiterlimit: "10",
    x1: "19",
    y1: "19",
    x2: "5",
    y2: "5"
  })))));
}

var _default = OnboardingTooltip;
exports.default = _default;