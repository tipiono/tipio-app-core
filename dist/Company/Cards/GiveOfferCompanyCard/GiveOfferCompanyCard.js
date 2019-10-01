"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _BaseCompanyCard = _interopRequireDefault(require("../BaseCompanyCard/BaseCompanyCard"));

var _index = require("../../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var GiveOfferCompanyCard = function GiveOfferCompanyCard(props) {
  return _react.default.createElement("div", null, _react.default.createElement(_BaseCompanyCard.default, props, _react.default.createElement(_index.SecondaryButton, _extends({
    text: 'Gi tilbud'
  }, props))));
};

var _default = GiveOfferCompanyCard;
exports.default = _default;