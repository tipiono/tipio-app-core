"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _LargePopularTipio = _interopRequireDefault(require("./LargePopularTipio"));

var _SecondaryButton = _interopRequireDefault(require("../Buttons/SecondaryButton"));

var _SecondaryOutlineButton = _interopRequireDefault(require("../Buttons/SecondaryOutlineButton"));

var _generatePrice = _interopRequireDefault(require("../../Util/generatePrice"));

var _reactI18next = require("react-i18next");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LargePopularBidingTipio = function LargePopularBidingTipio(props) {
  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;

  var rangeList = props.tipio_offer && props.tipio_offer.offer_price_ranges || [];
  var firstRange = rangeList.length > 0 && parseInt(rangeList[1].price, 10) && rangeList[1];
  var secondRange = rangeList.length > 0 && parseInt(rangeList[0].price, 10) && rangeList[0];
  return _react.default.createElement(_LargePopularTipio.default, props, _react.default.createElement("div", {
    className: "largePopularTipio__content__price"
  }, _react.default.createElement("h6", {
    className: "largePopularTipio__content__price--marketprice"
  }, props.market_price, " Kr"), _react.default.createElement("h6", {
    className: "largePopularTipio__content__price--saleprice"
  }, (0, _generatePrice.default)(props.bind_count, firstRange, secondRange), " Kr")), _react.default.createElement("div", {
    className: "largePopularTipio__content__submit"
  }, props.binded ? _react.default.createElement(_SecondaryButton.default, {
    text: "Del n\xE5",
    onClick: props.shareOnClick
  }) : _react.default.createElement(_SecondaryButton.default, {
    text: "Legg i handlekurv",
    onClick: props.bindOnClick
  })));
};

var _default = LargePopularBidingTipio;
exports.default = _default;