"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {date} from "@storybook/addon-knobs";
function SaleCard(_ref) {
  var image = _ref.image,
      title = _ref.title,
      salePrice = _ref.salePrice,
      costPrice = _ref.costPrice,
      saleDiscount = _ref.saleDiscount,
      children = _ref.children,
      defaultValue = _ref.defaultValue;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "saleCard"
  }, _react.default.createElement("div", {
    className: "d-flex flex-row mb-4"
  }, _react.default.createElement("div", {
    className: "saleCard__preview"
  }, _react.default.createElement("a", {
    className: "saleCard__preview--image",
    href: ""
  }, _react.default.createElement("img", {
    className: "img-fluid",
    src: image,
    alt: ""
  }), _react.default.createElement("span", {
    className: "saleCard__preview--discount"
  }, saleDiscount))), _react.default.createElement("div", {
    className: "saleCard__content"
  }, _react.default.createElement("div", {
    className: "saleCard__content--price"
  }, _react.default.createElement("h6", {
    className: "saleCard__content--price--sale"
  }, salePrice), _react.default.createElement("h6", {
    className: "saleCard__content--price--cost"
  }, costPrice)), _react.default.createElement("h6", {
    className: "saleCard__content--title"
  }, title), _react.default.createElement("div", {
    className: "saleCard__content--timeLeft"
  }))), children));
}

var _default = SaleCard;
exports.default = _default;