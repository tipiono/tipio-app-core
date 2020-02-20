"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactI18next = require("react-i18next");

var _tipioAppCore = require("tipio-app-core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MediumPopularTipio = function MediumPopularTipio(_ref) {
  var children = _ref.children,
      title = _ref.title,
      binding_expires_in = _ref.binding_expires_in,
      images = _ref.images,
      brand = _ref.brand,
      type = _ref.type,
      market_price = _ref.market_price,
      new_price = _ref.new_price,
      onClick = _ref.onClick;

  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;

  return _react.default.createElement("div", {
    className: "mediumPopularTipio"
  }, _react.default.createElement("div", {
    className: "mediumPopularTipio__preview lazy-image",
    onClick: onClick
  }, _react.default.createElement("img", {
    className: "mediumPopularTipio__preview--image lazyload",
    src: images && images.length && images[0].blob_url,
    alt: ""
  }), _react.default.createElement("div", {
    className: "mediumPopularTipio__preview--timeLeft"
  }, _react.default.createElement(_tipioAppCore.TipioCountdown, {
    className: "timer",
    expires_in: binding_expires_in
  }))), _react.default.createElement("div", {
    className: "mediumPopularTipio__content"
  }, _react.default.createElement("a", {
    href: "",
    onClick: onClick,
    className: "mediumPopularTipio__content--title"
  }, title), _react.default.createElement("p", {
    className: "mediumPopularTipio__content--description"
  }, brand), children));
};

var _default = MediumPopularTipio;
exports.default = _default;