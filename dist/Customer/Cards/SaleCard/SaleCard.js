"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SaleCard(_ref) {
  var image = _ref.image,
      title = _ref.title,
      salePrice = _ref.salePrice,
      costPrice = _ref.costPrice,
      saleDiscount = _ref.saleDiscount,
      children = _ref.children,
      expiresIn = _ref.expiresIn,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "saleCard"
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
  }, saleDiscount, " %")), /*#__PURE__*/_react.default.createElement("div", {
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