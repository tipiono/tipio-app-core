"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProductCard;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("/react-router-dom");

var _TipioCountdown = _interopRequireDefault(require("/components/TipioCountdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProductCard(_ref) {
  var product = _ref.product,
      customButton = _ref.customButton,
      linkTo = _ref.linkTo,
      showTimer = _ref.showTimer;
  var showTimerNotNull = showTimer !== undefined ? showTimer : true;
  return _react.default.createElement("div", {
    className: "product-card"
  }, _react.default.createElement("div", {
    className: "card-header"
  }, _react.default.createElement(_reactRouterDom.Link, {
    to: linkTo && linkTo(product) || '/'
  }, product.images && product.images.length && _react.default.createElement("img", {
    src: product.images[0].blob_url,
    alt: "..."
  })), showTimerNotNull && _react.default.createElement(_TipioCountdown.default, {
    className: "timer",
    expires_in: product.expires_in
  })), _react.default.createElement("div", {
    className: "card-body"
  }, _react.default.createElement("div", {
    className: "card-price"
  }, _react.default.createElement("h4", {
    className: "text-gray-500 line-through mb-0"
  }, product.market_price, " Kr")), _react.default.createElement("div", {
    className: "card-info"
  }, _react.default.createElement("h4", {
    className: "card-title"
  }, _react.default.createElement(_reactRouterDom.Link, {
    to: linkTo && linkTo(product) || '/'
  }, product.title)), _react.default.createElement("p", {
    className: "card-text"
  }, product.subtitle))));
}