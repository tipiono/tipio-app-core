"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Checkbox = _interopRequireDefault(require("../../../UI/Forms/Checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChooseAddSaleCompanyCard = function ChooseAddSaleCompanyCard(_ref) {
  var image = _ref.image,
      title = _ref.title,
      salePrice = _ref.salePrice,
      costPrice = _ref.costPrice,
      saleDiscount = _ref.saleDiscount,
      children = _ref.children,
      defaultValue = _ref.defaultValue;
  return _react.default.createElement("div", null, _react.default.createElement("div", {
    className: "chooseAddSaleCard"
  }, _react.default.createElement("div", {
    className: "d-flex flex-row mb-5"
  }, _react.default.createElement("div", {
    className: "chooseAddSaleCard__preview"
  }, _react.default.createElement("a", {
    className: "chooseAddSaleCard__preview--image",
    href: ""
  }, _react.default.createElement("img", {
    className: "img-fluid",
    src: image,
    alt: ""
  }), _react.default.createElement("span", {
    className: "chooseAddSaleCard__preview--discount"
  }, saleDiscount))), _react.default.createElement("div", {
    className: "chooseAddSaleCard__content"
  }, _react.default.createElement("div", {
    className: "chooseAddSaleCard__content--price"
  }, _react.default.createElement("h6", {
    className: "chooseAddSaleCard__content--price--sale"
  }, salePrice), _react.default.createElement("h6", {
    className: "chooseAddSaleCard__content--price--cost"
  }, costPrice)), _react.default.createElement("h6", {
    className: "chooseAddSaleCard__content--title"
  }, title))), _react.default.createElement(_Checkbox.default, {
    label: "Legg til mersalg"
  })));
};

var _default = ChooseAddSaleCompanyCard;
exports.default = _default;