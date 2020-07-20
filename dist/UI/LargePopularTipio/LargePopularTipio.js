"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TipioCountdown = _interopRequireDefault(require("../TipioCountdown/TipioCountdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LargePopularTipio = function LargePopularTipio(_ref) {
  var id = _ref.id,
      children = _ref.children,
      title = _ref.title,
      subtitle = _ref.subtitle,
      brand = _ref.brand,
      binding_expires_in = _ref.binding_expires_in,
      images = _ref.images,
      onClick = _ref.onClick,
      type = _ref.type;
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
  }, _react.default.createElement(_TipioCountdown.default, {
    className: "timer",
    expires_in: binding_expires_in
  }))), _react.default.createElement("div", {
    className: "largePopularTipio__content"
  }, _react.default.createElement("a", {
    href: "/tipio/".concat(type === 2 ? 'bind' : 'vote', "/").concat(id),
    onClick: onClick,
    className: "largePopularTipio__content--title"
  }, title), _react.default.createElement("a", {
    href: "/tipio/".concat(type === 2 ? 'bind' : 'vote', "/").concat(id),
    className: "largePopularTipio__content--description"
  }, brand ? brand : subtitle), children));
};

var _default = LargePopularTipio;
exports.default = _default;