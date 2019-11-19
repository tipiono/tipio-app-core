"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TipioCountdown = _interopRequireDefault(require("../../../UI/TipioCountdown/TipioCountdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function VotingCard(_ref) {
  var image = _ref.image,
      interestedCounter = _ref.interestedCounter,
      title = _ref.title,
      description = _ref.description,
      expiresIn = _ref.expiresIn,
      children = _ref.children;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "votingCard"
  }, _react.default.createElement("div", {
    className: "votingCard__header"
  }, _react.default.createElement("a", {
    className: "votingCard__header--preview lazy-image",
    href: ""
  }, _react.default.createElement("img", {
    className: "votingCard__header--preview--image lazyload",
    src: image,
    alt: ""
  })), _react.default.createElement("div", {
    className: "votingCard__header--timeLeft"
  }, _react.default.createElement(_TipioCountdown.default, {
    className: "timer",
    expires_in: expiresIn
  }))), _react.default.createElement("div", {
    className: "votingCard__body"
  }, _react.default.createElement("div", {
    className: "votingCard__body--interested"
  }, _react.default.createElement("h3", {
    className: "votingCard__body--interested--counter"
  }, interestedCounter), _react.default.createElement("p", {
    className: "votingCard__body--interested--label"
  }, "Interesserte!")), _react.default.createElement("div", {
    className: "votingCard__body--content"
  }, _react.default.createElement("h5", {
    className: "votingCard__body--content--title"
  }, title), _react.default.createElement("p", {
    className: "votingCard__body--content--description"
  }, description)), children)));
}

var _default = VotingCard;
exports.default = _default;