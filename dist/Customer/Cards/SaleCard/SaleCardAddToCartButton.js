"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SaleCardAddToCartButton;

var _react = _interopRequireDefault(require("react"));

var _SecondaryOutlineButton = _interopRequireDefault(require("../../../UI/Buttons/SecondaryOutlineButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SaleCardAddToCartButton(props) {
  return /*#__PURE__*/_react.default.createElement(_SecondaryOutlineButton.default, _extends({}, props, {
    text: "Legg i handlekurv"
  }));
}