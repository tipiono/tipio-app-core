"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _LargePopularTipio = _interopRequireDefault(require("./LargePopularTipio"));

var _SecondaryButton = _interopRequireDefault(require("../Buttons/SecondaryButton"));

var _generatePrice = _interopRequireDefault(require("../../Util/generatePrice"));

var _replaceWithSpace = _interopRequireDefault(require("../../Util/replaceWithSpace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LargePopularBidingTipio = function LargePopularBidingTipio(props) {
  var rangeList = props.tipio_offer && props.tipio_offer.offer_price_ranges || [];
  var firstRange = rangeList.length > 0 && parseInt(rangeList[1].price, 10) && rangeList[1];
  var secondRange = rangeList.length > 0 && parseInt(rangeList[0].price, 10) && rangeList[0];
  var price = (0, _generatePrice.default)(props.bind_count, firstRange, secondRange);
  return /*#__PURE__*/_react.default.createElement(_LargePopularTipio.default, props, /*#__PURE__*/_react.default.createElement("div", {
    className: "largePopularTipio__content__price"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "largePopularTipio__content__price--marketprice"
  }, props.market_price && (0, _replaceWithSpace.default)(props.market_price), " Kr"), /*#__PURE__*/_react.default.createElement("h6", {
    className: "largePopularTipio__content__price--saleprice"
  }, price && (0, _replaceWithSpace.default)(price), " Kr")), /*#__PURE__*/_react.default.createElement("div", {
    className: "largePopularTipio__content__submit"
  }, props.binded ? /*#__PURE__*/_react.default.createElement(_SecondaryButton.default, {
    text: "Del n\xE5",
    onClick: props.shareOnClick
  }) : /*#__PURE__*/_react.default.createElement(_SecondaryButton.default, {
    text: "Legg i handlekurv",
    onClick: props.bindOnClick
  })));
};

var _default = LargePopularBidingTipio;
exports.default = _default;