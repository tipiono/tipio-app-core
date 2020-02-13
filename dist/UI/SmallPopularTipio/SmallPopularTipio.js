"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactI18next = require("react-i18next");

var _tipioAppCore = require("tipio-app-core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SmallPopularTipio = function SmallPopularTipio(_ref) {
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
    className: "smallPopularTipio"
  }, _react.default.createElement("div", {
    className: "smallPopularTipio__preview lazy-image",
    onClick: onClick
  }, _react.default.createElement("img", {
    className: "smallPopularTipio__preview--image lazyload",
    src: "https://tipio.ams3.cdn.digitaloceanspaces.com/staging/6/tipios/132/1581260110329",
    alt: ""
  }), _react.default.createElement("div", {
    className: "smallPopularTipio__preview--timeLeft"
  }, _react.default.createElement(_tipioAppCore.TipioCountdown, {
    className: "timer",
    expires_in: binding_expires_in
  }))), _react.default.createElement("div", {
    className: "smallPopularTipio__content"
  }, _react.default.createElement("a", {
    href: "",
    onClick: onClick
  }, _react.default.createElement("h2", {
    className: "smallPopularTipio__content--title"
  }, "Productname")), _react.default.createElement("p", {
    className: "smallPopularTipio__content--description"
  }, "Brandname"), children));
};

var _default = SmallPopularTipio;
exports.default = _default;