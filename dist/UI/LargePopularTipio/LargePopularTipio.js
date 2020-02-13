"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactI18next = require("react-i18next");

var _tipioAppCore = require("tipio-app-core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LargePopularTipio = function LargePopularTipio(_ref) {
  var children = _ref.children,
      title = _ref.title,
      binding_expires_in = _ref.binding_expires_in,
      images = _ref.images,
      brand = _ref.brand,
      onClick = _ref.onClick,
      voteOnClick = _ref.voteOnClick,
      shareOnClick = _ref.shareOnClick,
      joined = _ref.joined;

  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;

  return _react.default.createElement("div", {
    className: "largePopularTipio"
  }, _react.default.createElement("div", {
    className: "largePopularTipio__preview lazy-image",
    onClick: onClick
  }, _react.default.createElement("img", {
    className: "largePopularTipio__preview--image lazyload",
    src: "https://tipio.ams3.cdn.digitaloceanspaces.com/staging/6/tipios/132/1581260110329",
    alt: ""
  }), _react.default.createElement("div", {
    className: "largePopularTipio__preview--timeLeft"
  }, _react.default.createElement(_tipioAppCore.TipioCountdown, {
    className: "timer",
    expires_in: binding_expires_in
  }))), _react.default.createElement("div", {
    className: "largePopularTipio__content"
  }, _react.default.createElement("a", {
    href: "",
    onClick: onClick
  }, _react.default.createElement("h1", {
    className: "largePopularTipio__content--title"
  }, "Knall tilbud!")), _react.default.createElement("a", {
    href: "",
    className: "largePopularTipio__content--description"
  }, "Paloma utem\xF8bler - Hageland"), children));
};

var _default = LargePopularTipio;
exports.default = _default;