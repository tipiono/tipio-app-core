"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TipioCountdown = _interopRequireDefault(require("../TipioCountdown/TipioCountdown"));

var _calculateDiscountPercentage = require("../../Util/calculateDiscountPercentage");

var _NafMemberShip = _interopRequireDefault(require("../Logo/NafMemberShip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SmallPopularTipio = function SmallPopularTipio(_ref) {
  var _props$tipio_offer, _props$tipio_offer2;

  var id = _ref.id,
      children = _ref.children,
      title = _ref.title,
      binding_expires_in = _ref.binding_expires_in,
      images = _ref.images,
      brand = _ref.brand,
      subtitle = _ref.subtitle,
      type = _ref.type,
      onClick = _ref.onClick,
      hasNafMembership = _ref.hasNafMembership,
      props = _objectWithoutProperties(_ref, ["id", "children", "title", "binding_expires_in", "images", "brand", "subtitle", "type", "onClick", "hasNafMembership"]);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "smallPopularTipio"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "smallPopularTipio__preview lazy-image",
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "smallPopularTipio__preview--image lazyload",
    src: images && images.length && images[0].blob_url,
    alt: ""
  }), type === 2 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ' ', /*#__PURE__*/_react.default.createElement("span", {
    className: "imageSlider__discount"
  }, ((_props$tipio_offer = props.tipio_offer) === null || _props$tipio_offer === void 0 ? void 0 : _props$tipio_offer.price) && (0, _calculateDiscountPercentage.createDiscountLabel)(props.market_price, (_props$tipio_offer2 = props.tipio_offer) === null || _props$tipio_offer2 === void 0 ? void 0 : _props$tipio_offer2.price)), /*#__PURE__*/_react.default.createElement("div", {
    className: "timeleft__countdown"
  }, /*#__PURE__*/_react.default.createElement(_TipioCountdown.default, {
    className: "timer",
    expires_in: binding_expires_in
  }))), hasNafMembership && /*#__PURE__*/_react.default.createElement("div", {
    className: "tipio__membership"
  }, /*#__PURE__*/_react.default.createElement(_NafMemberShip.default, null))), /*#__PURE__*/_react.default.createElement("div", {
    className: "smallPopularTipio__content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "smallPopularTipio__content--inner"
  }, ' ', /*#__PURE__*/_react.default.createElement("a", {
    href: "/tipio/".concat(type === 2 ? 'bind' : 'vote', "/").concat(id),
    onClick: onClick,
    className: "smallPopularTipio__content--title",
    title: title
  }, title), /*#__PURE__*/_react.default.createElement("p", {
    className: "smallPopularTipio__content--description",
    title: brand ? brand : subtitle
  }, brand ? brand : subtitle, ' ')), /*#__PURE__*/_react.default.createElement("div", {
    className: "smallPopularTipio__content--children"
  }, children)));
};

var _default = SmallPopularTipio;
exports.default = _default;