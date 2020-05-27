"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactI18next = require("react-i18next");

var _MediumPopularTipio = _interopRequireDefault(require("./MediumPopularTipio"));

var _SecondaryOutlineButton = _interopRequireDefault(require("../Buttons/SecondaryOutlineButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MediumPopularBiddingTipioEdit = function MediumPopularBiddingTipioEdit(props) {
  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;

  return _react.default.createElement(_MediumPopularTipio.default, props, _react.default.createElement("div", {
    className: "mediumPopularTipio__content__price"
  }, _react.default.createElement("h6", {
    className: "mediumPopularTipio__content__price--marketprice"
  }, props.market_price, " Kr"), _react.default.createElement("h6", {
    className: "mediumPopularTipio__content__price--saleprice"
  }, props.offer_price, " Kr")), _react.default.createElement("div", {
    className: "mediumPopularTipio__content__submit"
  }, _react.default.createElement(_SecondaryOutlineButton.default, {
    text: "Rediger",
    onClick: props.onClick
  })));
};

var _default = MediumPopularBiddingTipioEdit;
exports.default = _default;