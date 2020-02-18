"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TipioCountdown = _interopRequireDefault(require("../../../UI/TipioCountdown/TipioCountdown"));

var _SecondaryOutlineButton = _interopRequireDefault(require("../../../UI/Buttons/SecondaryOutlineButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SingleVotingCard(_ref) {
  var image = _ref.image,
      interestedCounter = _ref.interestedCounter,
      title = _ref.title,
      brand = _ref.brand,
      expiresIn = _ref.expiresIn,
      children = _ref.children,
      onClick = _ref.onClick;
  return _react.default.createElement("div", {
    className: "singleVotingCard"
  }, _react.default.createElement("div", {
    className: "singleVotingCard__header"
  }, _react.default.createElement("a", {
    className: "lazy-image singleVotingCard__header--preview",
    href: "",
    onClick: onClick
  }, _react.default.createElement("img", {
    className: "lazyload singleVotingCard__header--preview--image",
    src: "https://tipio.ams3.cdn.digitaloceanspaces.com/staging/6/tipios/132/1581260110329",
    alt: ""
  })), _react.default.createElement("div", {
    className: "singleVotingCard__header--timeLeft"
  }, _react.default.createElement(_TipioCountdown.default, {
    className: "timer",
    expires_in: expiresIn
  }))), _react.default.createElement("div", {
    className: "singleVotingCard__body"
  }, _react.default.createElement("div", {
    className: "singleVotingCard__body--content"
  }, _react.default.createElement("a", {
    onClick: onClick,
    href: "#"
  }, _react.default.createElement("h5", {
    className: "singleVotingCard__body--content--title"
  }, "Oxford Blue Linen")), _react.default.createElement("h4", {
    className: "singleVotingCard__body--content--description"
  }, "Varsity headwear")), _react.default.createElement("h3", {
    className: "singleVotingCard__body--content--interested"
  }, "2 890 interesserte"), _react.default.createElement("span", {
    className: "singleVotingCard__body--showInterese"
  }, _react.default.createElement(_SecondaryOutlineButton.default, {
    text: "Meld interesse"
  }))));
}

;
var _default = SingleVotingCard;
exports.default = _default;