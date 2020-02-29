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
      subtitle = _ref.subtitle,
      binding_expires_in = _ref.binding_expires_in,
      images = _ref.images,
      onClick = _ref.onClick,
      type = _ref.type;

  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;

  return _react.default.createElement("div", {
    className: "largePopularTipio"
  }, _react.default.createElement("div", {
    className: "largePopularTipio__preview lazy-image",
    onClick: onClick
  }, _react.default.createElement("img", {
    className: "largePopularTipio__preview--image lazyload",
    "data-src": images && images.length && images[0].blob_url,
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'%3E%3C/svg%3E",
    alt: ""
  }), type === 2 && _react.default.createElement("div", {
    className: "largePopularTipio__preview--timeLeft"
  }, _react.default.createElement(_tipioAppCore.TipioCountdown, {
    className: "timer",
    expires_in: binding_expires_in
  }))), _react.default.createElement("div", {
    className: "largePopularTipio__content"
  }, _react.default.createElement("a", {
    href: "",
    onClick: onClick,
    className: "largePopularTipio__content--title"
  }, title), _react.default.createElement("a", {
    href: "",
    className: "largePopularTipio__content--description"
  }, subtitle), children));
};

var _default = LargePopularTipio;
exports.default = _default;