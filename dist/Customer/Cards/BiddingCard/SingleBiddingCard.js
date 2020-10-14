"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TipioCountdown = _interopRequireDefault(require("../../../UI/TipioCountdown/TipioCountdown"));

var _SalesProgressBar = _interopRequireDefault(require("../../SalesProgressBar/SalesProgressBar"));

var _SecondaryButton = _interopRequireDefault(require("../../../UI/Buttons/SecondaryButton"));

var _generatePrice = _interopRequireDefault(require("../../../Util/generatePrice"));

var _calculateDiscountPercentage = _interopRequireDefault(require("../../../Util/calculateDiscountPercentage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SingleBiddingCard = function SingleBiddingCard(_ref) {
  var image = _ref.image,
      title = _ref.title,
      brand = _ref.brand,
      expiresIn = _ref.expiresIn,
      market_price = _ref.market_price,
      costPrice = _ref.costPrice,
      salesProgressBarPercentage = _ref.salesProgressBarPercentage,
      bindingCount = _ref.bindingCount,
      onClick = _ref.onClick,
      id = _ref.id,
      props = _objectWithoutProperties(_ref, ["image", "title", "brand", "expiresIn", "market_price", "costPrice", "salesProgressBarPercentage", "bindingCount", "onClick", "id"]);

  var rangeList = props.tipio_offer && props.tipio_offer.offer_price_ranges || [];
  var firstRange = rangeList.length > 0 && parseInt(rangeList[1].price, 10) && rangeList[1];
  var secondRange = rangeList.length > 0 && parseInt(rangeList[0].price, 10) && rangeList[0];
  var bindingPercentage = 0;

  if (rangeList.length) {
    var maxParticipantsRequired = rangeList.length > 1 ? rangeList[1].to : rangeList[0].to;
    bindingPercentage = 100 + (0, _calculateDiscountPercentage.default)(maxParticipantsRequired, bindingCount);
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "singleBiddingCard"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "singleBiddingCard__header"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "/tipio/bind/".concat(id),
    className: "lazy-image singleBiddingCard__header--preview",
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "lazyload singleBiddingCard__header--preview--image",
    src: image,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "singleBiddingCard__header--timeLeft"
  }, /*#__PURE__*/_react.default.createElement(_TipioCountdown.default, {
    className: "timer",
    expires_in: expiresIn
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "singleBiddingCard__body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "singleBiddingCard__body--content"
  }, /*#__PURE__*/_react.default.createElement("a", {
    onClick: onClick,
    href: "/tipio/bind/".concat(id)
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "singleBiddingCard__body--content--title"
  }, title)), brand && /*#__PURE__*/_react.default.createElement("h4", {
    className: "singleBiddingCard__body--content--description"
  }, brand)), /*#__PURE__*/_react.default.createElement("div", {
    className: "singleBiddingCard__body--price"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "singleBiddingCard__body--price--cost"
  }, market_price, " Kr"), /*#__PURE__*/_react.default.createElement("h3", {
    className: "singleBiddingCard__body--price--sale"
  }, (0, _generatePrice.default)(bindingCount, firstRange, secondRange), " Kr")), /*#__PURE__*/_react.default.createElement("div", {
    className: "singleBiddingCard__body--salesbar"
  }, bindingCount > 0 ? /*#__PURE__*/_react.default.createElement(_SalesProgressBar.default, {
    percentage: bindingPercentage,
    bindingCount: bindingCount
  }) : ''), /*#__PURE__*/_react.default.createElement("span", {
    className: "singleBiddingCard__body--addToCart"
  }, props.binded ? /*#__PURE__*/_react.default.createElement(_SecondaryButton.default, {
    text: "Del n\xE5",
    onClick: props.shareOnClick
  }) : /*#__PURE__*/_react.default.createElement(_SecondaryButton.default, {
    text: "Legg i handlekurv",
    onClick: props.bindOnClick
  }))));
};

var _default = SingleBiddingCard;
exports.default = _default;