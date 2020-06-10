"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _MediumPopularTipio = _interopRequireDefault(require("./MediumPopularTipio"));

var _SecondaryOutlineButton = _interopRequireDefault(require("../Buttons/SecondaryOutlineButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MediumPopularBiddingTipioEdit = function MediumPopularBiddingTipioEdit(props) {
  return _react.default.createElement(_MediumPopularTipio.default, props, _react.default.createElement("div", {
    className: "mediumPopularTipio__content__price"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "mediumPopularTipio__content__price--marketprice"
  }, props.market_price, " Kr"), _react.default.createElement("h6", {
    className: "mediumPopularTipio__content__price--saleprice"
  }, props.offer_price, " Kr")), _react.default.createElement("div", {
    className: "mediumPopularTipio__content__submit"
  }, _react.default.createElement(_SecondaryOutlineButton.default, {
    text: "Rediger",
    onClick: props.onEditClick
  })));
};

var _default = MediumPopularBiddingTipioEdit;
exports.default = _default;