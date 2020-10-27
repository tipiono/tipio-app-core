"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SmallPopularTipio = _interopRequireDefault(require("./SmallPopularTipio"));

var _SecondaryButton = _interopRequireDefault(require("../Buttons/SecondaryButton"));

var _replaceWithSpace = _interopRequireDefault(require("../../Util/replaceWithSpace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SmallPopularBiddingTipio = function SmallPopularBiddingTipio(props) {
  var rangeList = props.tipio_offer && props.tipio_offer.offer_price_ranges || [];
  var secondRange = rangeList.length > 0 && parseInt(rangeList[0].price, 10) && rangeList[0];
  return /*#__PURE__*/_react.default.createElement(_SmallPopularTipio.default, props, /*#__PURE__*/_react.default.createElement("div", {
    className: "smallPopularTipio__content__price"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "smallPopularTipio__content__price--marketprice"
  }, props.market_price, " Kr"), /*#__PURE__*/_react.default.createElement("h6", {
    className: "smallPopularTipio__content__price--saleprice"
  }, secondRange.price && (0, _replaceWithSpace.default)(secondRange.price), " Kr")), /*#__PURE__*/_react.default.createElement("div", {
    className: "smallPopularTipio__content__submit"
  }, /*#__PURE__*/_react.default.createElement(_SecondaryButton.default, {
    text: 'Se produkt',
    onClick: props.bindOnClick
  })));
};

var _default = SmallPopularBiddingTipio;
exports.default = _default;