"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TipioCard;

var _react = _interopRequireDefault(require("react"));

var _TipioCountdown = _interopRequireDefault(require("../../UI/TipioCountdown/TipioCountdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TipioCard(_ref) {
  var tipio = _ref.tipio;
  return _react.default.createElement("div", {
    className: "product-card"
  }, _react.default.createElement("div", {
    className: "card-header"
  }, _react.default.createElement("a", null, tipio.images && tipio.images.length && _react.default.createElement("img", {
    src: tipio.images[0].blob_url,
    alt: "..."
  })), _react.default.createElement(_TipioCountdown.default, {
    className: "timer",
    expires_in: tipio.binding_expires_in
  })), _react.default.createElement("div", {
    className: "card-body"
  }, _react.default.createElement("div", {
    className: "card-price"
  }, _react.default.createElement("h4", {
    className: "text-gray-500 line-through mb-0"
  }, tipio.market_price, " Kr")), _react.default.createElement("div", {
    className: "card-info"
  }, _react.default.createElement("h4", {
    className: "card-title"
  }, _react.default.createElement("a", null, tipio.title)), _react.default.createElement("p", {
    className: "card-text"
  }, tipio.subtitle)), _react.default.createElement("button", {
    type: "button",
    className: "btn btn-secondary px-5"
  }, "Kj\xF8p")));
}