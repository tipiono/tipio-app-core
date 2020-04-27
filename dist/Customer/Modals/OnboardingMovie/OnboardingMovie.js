"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Modal = require("../../../UI/Modal/Modal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function OnboardingMovie(_ref) {
  var movieURL = _ref.movieURL;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Modal.Modal, {
    showCloseButton: true
  }, _react["default"].createElement("div", {
    className: "onboarding__movie"
  }, _react["default"].createElement("iframe", {
    className: "onboarding__movie--iframe",
    src: movieURL,
    width: "640",
    height: "450",
    frameBorder: "0",
    allow: "autoplay; fullscreen",
    allowFullScreen: true
  }))));
}

var _default = OnboardingMovie;
exports["default"] = _default;