"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TipioCountdown = _interopRequireDefault(require("../../../UI/TipioCountdown/TipioCountdown"));

var _SalesProgressBar = _interopRequireDefault(require("../../SalesProgressBar/SalesProgressBar"));

var _SecondaryButton = _interopRequireDefault(require("../../../UI/Buttons/SecondaryButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SingleBiddingCard(_ref) {
  var image = _ref.image,
      title = _ref.title,
      brand = _ref.brand,
      expiresIn = _ref.expiresIn,
      salePrice = _ref.salePrice,
      costPrice = _ref.costPrice,
      salesProgressBarPercentage = _ref.salesProgressBarPercentage,
      bindingCount = _ref.bindingCount,
      onClick = _ref.onClick;
  return _react.default.createElement("div", {
    className: "singleBiddingCard"
  }, _react.default.createElement("div", {
    className: "singleBiddingCard__header"
  }, _react.default.createElement("a", {
    href: "",
    className: "lazy-image singleBiddingCard__header--preview",
    onClick: onClick
  }, _react.default.createElement("img", {
    className: "lazyload singleBiddingCard__header--preview--image",
    src: "https://tipio.ams3.cdn.digitaloceanspaces.com/staging/6/tipios/132/1581260110329",
    alt: ""
  })), _react.default.createElement("div", {
    className: "singleBiddingCard__header--timeLeft"
  }, _react.default.createElement(_TipioCountdown.default, {
    className: "timer",
    expires_in: expiresIn
  }))), _react.default.createElement("div", {
    className: "singleBiddingCard__body"
  }, _react.default.createElement("div", {
    className: "singleBiddingCard__body--content"
  }, _react.default.createElement("a", {
    onClick: onClick,
    href: "#"
  }, _react.default.createElement("h2", {
    className: "singleBiddingCard__body--content--title"
  }, "Paloma utem\xF8bler")), _react.default.createElement("h4", {
    className: "singleBiddingCard__body--content--description"
  }, "Ballerud hagesenter")), _react.default.createElement("div", {
    className: "singleBiddingCard__body--price"
  }, _react.default.createElement("h3", {
    className: "singleBiddingCard__body--price--cost"
  }, "38 890 Kr"), _react.default.createElement("h3", {
    className: "singleBiddingCard__body--price--sale"
  }, "22 900 Kr")), _react.default.createElement("div", {
    className: "singleBiddingCard__body--salesbar"
  }, _react.default.createElement(_SalesProgressBar.default, {
    percentage: salesProgressBarPercentage,
    bindingCount: bindingCount
  })), _react.default.createElement("span", {
    className: "singleBiddingCard__body--addToCart"
  }, _react.default.createElement(_SecondaryButton.default, {
    text: "Legg i handlekurv"
  }))));
}

;
var _default = SingleBiddingCard;
exports.default = _default;