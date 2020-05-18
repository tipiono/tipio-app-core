"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TipioCountdown = _interopRequireDefault(require("../../../UI/TipioCountdown/TipioCountdown"));

var _SalesProgressBar = _interopRequireDefault(require("../../SalesProgressBar/SalesProgressBar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BiddingCard(_ref) {
  var id = _ref.id,
      image = _ref.image,
      title = _ref.title,
      brand = _ref.brand,
      expiresIn = _ref.expiresIn,
      salePrice = _ref.salePrice,
      costPrice = _ref.costPrice,
      children = _ref.children,
      salesProgressBarPercentage = _ref.salesProgressBarPercentage,
      bindingCount = _ref.bindingCount,
      onClick = _ref.onClick,
      bindHasExpired = _ref.bindHasExpired;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "biddingCard"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "biddingCard__header"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "/tipio/bind/".concat(id),
    className: "lazy-image biddingCard__header--preview",
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "lazyload biddingCard__header--preview--image",
    "data-src": image,
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'%3E%3C/svg%3E",
    alt: ""
  })), expiresIn && /*#__PURE__*/_react.default.createElement("div", {
    className: "biddingCard__header--timeLeft"
  }, /*#__PURE__*/_react.default.createElement(_TipioCountdown.default, {
    className: "timer",
    expires_in: expiresIn
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "biddingCard__body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "biddingCard__body--price"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "biddingCard__body--price--sale"
  }, salePrice), /*#__PURE__*/_react.default.createElement("h4", {
    className: "biddingCard__body--price--cost"
  }, costPrice)), /*#__PURE__*/_react.default.createElement("div", {
    className: "biddingCard__body--content"
  }, /*#__PURE__*/_react.default.createElement("a", {
    onClick: onClick,
    href: "/tipio/bind/".concat(id)
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "biddingCard__body--content--title"
  }, title)), brand && /*#__PURE__*/_react.default.createElement("p", {
    className: "biddingCard__body--content--description"
  }, brand.toUpperCase())), /*#__PURE__*/_react.default.createElement("div", {
    className: "biddingCard__body--salesbar"
  }, !bindHasExpired && (bindingCount > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_SalesProgressBar.default, {
    percentage: salesProgressBarPercentage,
    bindingCount: bindingCount
  })) : '')), /*#__PURE__*/_react.default.createElement("div", {
    className: "biddingCard__body--share"
  }, children))));
}

var _default = BiddingCard;
exports.default = _default;