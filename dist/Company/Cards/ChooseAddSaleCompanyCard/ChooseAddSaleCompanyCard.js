"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Checkbox = _interopRequireDefault(require("../../../UI/Forms/Checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = _react.default.forwardRef(function (_ref, ref) {
  var _extends2;

  var image = _ref.image,
      title = _ref.title,
      salePrice = _ref.salePrice,
      costPrice = _ref.costPrice,
      saleDiscount = _ref.saleDiscount,
      children = _ref.children,
      defaultValue = _ref.defaultValue,
      id = _ref.id,
      label = _ref.label,
      name = _ref.name,
      errors = _ref.errors,
      props = _objectWithoutProperties(_ref, ["image", "title", "salePrice", "costPrice", "saleDiscount", "children", "defaultValue", "id", "label", "name", "errors"]);

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", null, _react.default.createElement("div", {
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
  }, title))), _react.default.createElement(_Checkbox.default, _extends((_extends2 = {
    label: "Legg til mersalg"
  }, _defineProperty(_extends2, "label", label), _defineProperty(_extends2, "id", id), _defineProperty(_extends2, "name", name), _extends2), props, {
    ref: ref
  })))));
});

exports.default = _default;