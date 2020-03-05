"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _tipioAppCore = require("tipio-app-core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TipioOfTheDay(_ref) {
  var id = _ref.id,
      children = _ref.children,
      title = _ref.title,
      subtitle = _ref.subtitle,
      type = _ref.type,
      voting_expires_in = _ref.voting_expires_in,
      images = _ref.images,
      voteOnClick = _ref.voteOnClick,
      shareOnClick = _ref.shareOnClick,
      joined = _ref.joined,
      onClick = _ref.onClick;
  return _react.default.createElement("div", {
    className: "tipioOfTheDay"
  }, _react.default.createElement("a", {
    href: "/tipio/vote/".concat(id),
    onClick: onClick,
    className: "tipioOfTheDay__preview"
  }, _react.default.createElement("img", {
    className: "tipioOfTheDay__preview--image",
    src: images && images.length && images[0].blob_url,
    alt: ""
  }), _react.default.createElement("div", {
    className: "tipioOfTheDay__preview--timeLeft"
  }, _react.default.createElement(_tipioAppCore.TipioCountdown, {
    className: "timer",
    expires_in: voting_expires_in
  }))), _react.default.createElement("div", {
    className: "tipioOfTheDay__content"
  }, _react.default.createElement("a", {
    href: "/tipio/vote/".concat(id),
    className: "tipioOfTheDay__content--title",
    onClick: onClick
  }, title), _react.default.createElement("p", {
    className: "tipioOfTheDay__content--description"
  }, subtitle), children));
}

var _default = TipioOfTheDay;
exports.default = _default;