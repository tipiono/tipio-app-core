"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TipioCountdown = _interopRequireDefault(require("../TipioCountdown/TipioCountdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MediumPopularTipio = function MediumPopularTipio(_ref) {
  var id = _ref.id,
      children = _ref.children,
      title = _ref.title,
      binding_expires_in = _ref.binding_expires_in,
      images = _ref.images,
      brand = _ref.brand,
      type = _ref.type,
      onClick = _ref.onClick;
  return _react.default.createElement("div", {
    className: "mediumPopularTipio"
  }, _react.default.createElement("div", {
    className: "mediumPopularTipio__preview lazy-image",
    onClick: onClick
  }, _react.default.createElement("img", {
    className: "mediumPopularTipio__preview--image lazyload",
    src: images && images.length && images[0].blob_url,
    alt: ""
  }), type === 2 && _react.default.createElement("div", {
    className: "mediumPopularTipio__preview--timeLeft"
  }, _react.default.createElement(_TipioCountdown.default, {
    className: "timer",
    expires_in: binding_expires_in
  }))), _react.default.createElement("div", {
    className: "mediumPopularTipio__content"
  }, _react.default.createElement("a", {
    href: "/tipio/".concat(type === 2 ? 'bind' : 'vote', "/").concat(id),
    onClick: onClick,
    className: "text-truncate mediumPopularTipio__content--title",
    title: title
  }, title), _react.default.createElement("p", {
    className: "text-truncate mediumPopularTipio__content--description",
    title: brand
  }, brand), children));
};

var _default = MediumPopularTipio;
exports.default = _default;