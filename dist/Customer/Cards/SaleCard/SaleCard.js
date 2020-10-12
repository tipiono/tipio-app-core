"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../../../index");

var _classnames = _interopRequireDefault(require("classnames"));

var _calculateDiscountPercentage = _interopRequireDefault(require("../../../Util/calculateDiscountPercentage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SaleCard(_ref) {
  var image = _ref.image,
      title = _ref.title,
      salePrice = _ref.salePrice,
      costPrice = _ref.costPrice,
      children = _ref.children,
      expiresIn = _ref.expiresIn,
      onClick = _ref.onClick,
      sustainable = _ref.sustainable,
      isValidTipio = _ref.isValidTipio,
      props = _objectWithoutProperties(_ref, ["image", "title", "salePrice", "costPrice", "children", "expiresIn", "onClick", "sustainable", "isValidTipio"]);

  var saleDiscount = 0;

  if (props === null || props === void 0 ? void 0 : props.showOfferAsPercentage) {
    saleDiscount = "".concat((0, _calculateDiscountPercentage.default)(parseInt(costPrice), parseInt(salePrice)), "%");
  } else {
    saleDiscount = "".concat(parseInt(salePrice) - parseInt(costPrice), " kr");
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('saleCard', {
      inActiveSaleCard: !isValidTipio
    })
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex flex-row mb-4"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "saleCard__preview lazy-image",
    href: "",
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "saleCard__preview--image lazyload",
    src: image,
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "saleCard__preview--discount"
  }, saleDiscount), sustainable && /*#__PURE__*/_react.default.createElement("div", {
    className: "saleCard__preview--sustainable"
  }, /*#__PURE__*/_react.default.createElement("span", null, "B\xE6rekraftig"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "saleCard__content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "saleCard__content--price"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "saleCard__content--price--sale"
  }, salePrice, " Kr"), /*#__PURE__*/_react.default.createElement("h6", {
    className: "saleCard__content--price--cost"
  }, costPrice, " Kr")), /*#__PURE__*/_react.default.createElement("a", {
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "saleCard__content--title"
  }, title)), /*#__PURE__*/_react.default.createElement("div", {
    className: "saleCard__content--timeLeft"
  }, /*#__PURE__*/_react.default.createElement(_index.PinkyCountdownSM, {
    expires_in: expiresIn,
    type: _index.CountdownType.PINK
  })))), children));
}

var _default = SaleCard;
exports.default = _default;