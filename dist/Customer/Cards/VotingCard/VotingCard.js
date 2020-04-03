"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TipioCountdown = _interopRequireDefault(require("../../../UI/TipioCountdown/TipioCountdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function VotingCard(_ref) {
  var id = _ref.id,
      image = _ref.image,
      interestedCounter = _ref.interestedCounter,
      title = _ref.title,
      brand = _ref.brand,
      expiresIn = _ref.expiresIn,
      children = _ref.children,
      onClick = _ref.onClick,
      subtitle = _ref.subtitle,
      voteHasExpired = _ref.voteHasExpired;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "votingCard"
  }, _react.default.createElement("div", {
    className: "votingCard__header"
  }, _react.default.createElement("a", {
    className: "lazy-image votingCard__header--preview",
    href: "/tipio/vote/".concat(id),
    onClick: onClick
  }, _react.default.createElement("img", {
    className: "lazyload votingCard__header--preview--image",
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'%3E%3C/svg%3E",
    "data-src": image,
    alt: ""
  })), _react.default.createElement("div", {
    className: "votingCard__header--timeLeft"
  }, _react.default.createElement(_TipioCountdown.default, {
    className: "timer",
    expires_in: expiresIn
  }))), _react.default.createElement("div", {
    className: "votingCard__body"
  }, !voteHasExpired ? _react.default.createElement("div", {
    className: "votingCard__body--interested"
  }, _react.default.createElement("h3", {
    className: "votingCard__body--interested--counter"
  }, interestedCounter || 1), _react.default.createElement("p", {
    className: "votingCard__body--interested--label"
  }, "Interesserte!")) : '', _react.default.createElement("div", {
    className: "votingCard__body--content"
  }, _react.default.createElement("a", {
    onClick: onClick,
    href: "/tipio/vote/".concat(id)
  }, _react.default.createElement("h5", {
    className: "votingCard__body--content--title"
  }, title)), _react.default.createElement("p", {
    className: "votingCard__body--content--description"
  }, brand ? brand.toUpperCase() : subtitle ? subtitle.toUpperCase() : "")), children)));
}

var _default = VotingCard;
exports.default = _default;