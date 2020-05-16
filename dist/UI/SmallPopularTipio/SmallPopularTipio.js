"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TipioCountdown = _interopRequireDefault(require("../TipioCountdown/TipioCountdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SmallPopularTipio = function SmallPopularTipio(_ref) {
  var id = _ref.id,
      children = _ref.children,
      title = _ref.title,
      binding_expires_in = _ref.binding_expires_in,
      images = _ref.images,
      brand = _ref.brand,
      type = _ref.type,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "smallPopularTipio"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "smallPopularTipio__preview lazy-image",
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "smallPopularTipio__preview--image lazyload",
    src: images && images.length && images[0].blob_url,
    alt: ""
  }), type === 2 && /*#__PURE__*/_react.default.createElement("div", {
    className: "smallPopularTipio__preview--timeLeft"
  }, /*#__PURE__*/_react.default.createElement(_TipioCountdown.default, {
    className: "timer",
    expires_in: binding_expires_in
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "smallPopularTipio__content"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "/tipio/".concat(type === 2 ? 'bind' : 'vote', "/").concat(id),
    onClick: onClick,
    className: "smallPopularTipio__content--title"
  }, title), /*#__PURE__*/_react.default.createElement("p", {
    className: "smallPopularTipio__content--description"
  }, brand), children));
};

var _default = SmallPopularTipio;
exports.default = _default;