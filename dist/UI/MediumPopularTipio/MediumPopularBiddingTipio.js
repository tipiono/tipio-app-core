"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _MediumPopularTipio = _interopRequireDefault(require("./MediumPopularTipio"));

var _SecondaryButton = _interopRequireDefault(require("../Buttons/SecondaryButton"));

var _replaceWithSpace = _interopRequireDefault(require("../../Util/replaceWithSpace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MediumPopularBiddingTipio = function MediumPopularBiddingTipio(props) {
  var _props$tipio_offer;

  return /*#__PURE__*/_react.default.createElement(_MediumPopularTipio.default, props, /*#__PURE__*/_react.default.createElement("div", {
    className: "mediumPopularTipio__content__price"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "mediumPopularTipio__content__price--marketprice"
  }, props.market_price && (0, _replaceWithSpace.default)(props.market_price), " Kr"), /*#__PURE__*/_react.default.createElement("h6", {
    className: "mediumPopularTipio__content__price--saleprice"
  }, ' ', (props === null || props === void 0 ? void 0 : (_props$tipio_offer = props.tipio_offer) === null || _props$tipio_offer === void 0 ? void 0 : _props$tipio_offer.price) && (0, _replaceWithSpace.default)(props.tipio_offer.price), " Kr")), /*#__PURE__*/_react.default.createElement("div", {
    className: "mediumPopularTipio__content__submit"
  }, props.binded ? /*#__PURE__*/_react.default.createElement(_SecondaryButton.default, {
    text: "Del n\xE5",
    onClick: props.shareOnClick
  }) : /*#__PURE__*/_react.default.createElement(_SecondaryButton.default, {
    text: 'Se tilbud',
    onClick: props.bindOnClick
  })));
};

var _default = MediumPopularBiddingTipio;
exports.default = _default;