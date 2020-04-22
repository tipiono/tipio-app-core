"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SecondaryButton = _interopRequireDefault(require("../../UI/Buttons/SecondaryButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ShareButton = function ShareButton(props) {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_SecondaryButton["default"], _extends({
    text: "Del n\xE5"
  }, props)));
};

var _default = ShareButton;
exports["default"] = _default;