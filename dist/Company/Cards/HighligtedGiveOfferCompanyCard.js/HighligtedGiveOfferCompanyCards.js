"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var HighligtedGiveOfferCompanyCards = function HighligtedGiveOfferCompanyCards(_ref) {
  var children = _ref.children,
      brand = _ref.brand,
      binding_count = _ref.binding_count,
      link = _ref.link,
      _ref$forceLoad = _ref.forceLoad,
      forceLoad = _ref$forceLoad === void 0 ? false : _ref$forceLoad,
      title = _ref.title,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ["children", "brand", "binding_count", "link", "forceLoad", "title", "onClick"]);

  return _react["default"].createElement("div", {
    className: "highligtedGiveOfferCompanyCards"
  }, props.images && props.images.length && _react["default"].createElement("a", {
    href: link,
    className: "highligtedGiveOfferCompanyCards__preview lazy-image",
    onClick: onClick
  }, _react["default"].createElement("img", {
    className: "highligtedGiveOfferCompanyCards__preview--image lazyload",
    "data-src": props.images[0].blob_url,
    src: !forceLoad ? "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'%3E%3C/svg%3E" : props.images[0].blob_url,
    alt: ""
  })), _react["default"].createElement("div", {
    className: "highligtedGiveOfferCompanyCards__content"
  }, _react["default"].createElement("a", {
    href: link,
    onClick: onClick
  }, _react["default"].createElement("h1", {
    className: "highligtedGiveOfferCompanyCards__content--title"
  }, title)), _react["default"].createElement("p", {
    className: "highligtedGiveOfferCompanyCards__content--brand"
  }, !brand ? props.subtitle : brand), binding_count > 0 && _react["default"].createElement("div", {
    className: "highligtedGiveOfferCompanyCards__content--interested"
  }, _react["default"].createElement("h5", {
    className: "highligtedGiveOfferCompanyCards__content--interested--counter"
  }, binding_count, " interesserte!")), _react["default"].createElement("div", {
    className: "highligtedGiveOfferCompanyCards__content--button"
  }, _react["default"].createElement(_index.SecondaryOutlineButton, {
    text: 'Git tilbud',
    onClick: onClick
  }))));
};

var _default = HighligtedGiveOfferCompanyCards;
exports["default"] = _default;