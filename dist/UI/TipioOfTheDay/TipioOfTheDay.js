"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TipioCountdown = _interopRequireDefault(require("../TipioCountdown/TipioCountdown"));

var _calculateDiscountPercentage = _interopRequireWildcard(require("../../Util/calculateDiscountPercentage"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function TipioOfTheDay(_ref) {
  var id = _ref.id,
      children = _ref.children,
      title = _ref.title,
      subtitle = _ref.subtitle,
      voting_expires_in = _ref.voting_expires_in,
      images = _ref.images,
      onClick = _ref.onClick,
      showTimer = _ref.showTimer,
      link = _ref.link,
      props = _objectWithoutProperties(_ref, ["id", "children", "title", "subtitle", "voting_expires_in", "images", "onClick", "showTimer", "link"]);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "tipioOfTheDay"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: link ? link : "/tipio/vote/".concat(id),
    onClick: onClick,
    className: "tipioOfTheDay__preview"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "tipioOfTheDay__preview--image",
    src: images && images.length && images[0].blob_url,
    alt: ""
  }), showTimer || props.bindingTipio && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "imageSlider__discount"
  }, (0, _calculateDiscountPercentage.createDiscountLabel)(props.market_price, props.tipio_offer.offer_price_ranges)), /*#__PURE__*/_react.default.createElement("div", {
    className: "tipioOfTheDay__preview--timeLeft"
  }, /*#__PURE__*/_react.default.createElement(_TipioCountdown.default, {
    className: "timer",
    expires_in: props.bindingTipio ? props.binding_expires_in : voting_expires_in
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "tipioOfTheDay__content"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "/tipio/vote/".concat(id),
    className: "tipioOfTheDay__content--title",
    onClick: onClick
  }, title), /*#__PURE__*/_react.default.createElement("p", {
    className: "tipioOfTheDay__content--description"
  }, subtitle), children));
}

var _default = TipioOfTheDay;
exports.default = _default;