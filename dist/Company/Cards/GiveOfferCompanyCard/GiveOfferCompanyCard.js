"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _BaseCompanyCard = _interopRequireDefault(require("../BaseCompanyCard/BaseCompanyCard"));

var _index = require("../../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GiveOfferCompanyCard = function GiveOfferCompanyCard(props) {
  return _react.default.createElement("div", null, _react.default.createElement(_BaseCompanyCard.default, props, _react.default.createElement(_index.SecondaryButton, {
    text: 'Git tilbud',
    loading: props.loading,
    onClick: props.onClick
  })));
};

var _default = GiveOfferCompanyCard;
exports.default = _default;