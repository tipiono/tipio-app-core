"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Checkbox = _interopRequireDefault(require("../../../UI/Forms/Checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AdditionalSaleCompanyCard = function AdditionalSaleCompanyCard(_ref) {
  var image = _ref.image,
      title = _ref.title,
      salePrice = _ref.salePrice,
      costPrice = _ref.costPrice,
      saleDiscount = _ref.saleDiscount,
      children = _ref.children,
      defaultValue = _ref.defaultValue;
  return _react.default.createElement("div", null, _react.default.createElement("div", {
    className: "additionalSaleCard"
  }, _react.default.createElement("div", {
    className: "d-flex flex-row mb-5"
  }, _react.default.createElement("div", {
    className: "additionalSaleCard__preview"
  }, _react.default.createElement("a", {
    className: "additionalSaleCard__preview--image",
    href: ""
  }, _react.default.createElement("img", {
    className: "img-fluid",
    src: image,
    alt: ""
  }), _react.default.createElement("span", {
    className: "additionalSaleCard__preview--discount"
  }, saleDiscount))), _react.default.createElement("div", {
    className: "additionalSaleCard__content"
  }, _react.default.createElement("div", {
    className: "additionalSaleCard__content--price"
  }, _react.default.createElement("h6", {
    className: "additionalSaleCard__content--price--sale"
  }, salePrice), _react.default.createElement("h6", {
    className: "additionalSaleCard__content--price--cost"
  }, costPrice)), _react.default.createElement("h6", {
    className: "additionalSaleCard__content--title"
  }, title))), _react.default.createElement(_Checkbox.default, {
    label: "Legg til mersalg"
  })));
};

var _default = AdditionalSaleCompanyCard;
exports.default = _default;