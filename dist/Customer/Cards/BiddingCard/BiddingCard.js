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
  var image = _ref.image,
      title = _ref.title,
      description = _ref.description,
      expiresIn = _ref.expiresIn,
      salePrice = _ref.salePrice,
      costPrice = _ref.costPrice,
      children = _ref.children;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "biddingCard"
  }, _react.default.createElement("div", {
    className: "biddingCard__header"
  }, _react.default.createElement("a", {
    href: ""
  }, _react.default.createElement("img", {
    className: "biddingCard__header--image",
    src: image,
    alt: ""
  })), _react.default.createElement("div", {
    className: "biddingCard__header--timeLeft"
  }, _react.default.createElement(_TipioCountdown.default, {
    className: "timer",
    expires_in: expiresIn
  }))), _react.default.createElement("div", {
    className: "biddingCard__body"
  }, _react.default.createElement("div", {
    className: "biddingCard__body--price"
  }, _react.default.createElement("h4", {
    className: "biddingCard__body--price--sale"
  }, salePrice), _react.default.createElement("h4", {
    className: "biddingCard__body--price--cost"
  }, costPrice)), _react.default.createElement("div", {
    className: "biddingCard__body--content"
  }, _react.default.createElement("h4", {
    className: "biddingCard__body--content--title"
  }, title), _react.default.createElement("p", {
    className: "biddingCard__body--content--description"
  }, description)), _react.default.createElement("div", {
    className: "biddingCard__body--salesbar"
  }, _react.default.createElement(_SalesProgressBar.default, {
    percentage: 25
  })), _react.default.createElement("div", {
    className: "biddingCard__body--share"
  }, children))));
}

var _default = BiddingCard;
exports.default = _default;