"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CompanySidebarBaseCard = function CompanySidebarBaseCard(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  var tipio = props.tipio,
      meta = props.meta;
  return _react.default.createElement("div", {
    className: "companySidebarCard"
  }, _react.default.createElement("div", {
    className: "companySidebarCard__header"
  }, _react.default.createElement("div", {
    className: "companySidebarCard__header__content"
  }, _react.default.createElement("h3", {
    className: "companySidebarCard__header__content--title"
  }, tipio.title), _react.default.createElement("p", {
    className: "companySidebarCard__header__content--subtitle"
  }, "Varekode: ", tipio.product_code, " ")), _react.default.createElement("div", {
    className: "companySidebarCard__header__cost"
  }, _react.default.createElement("p", {
    className: "companySidebarCard__header__cost--label"
  }, "Omsetning"), props.loading ? _react.default.createElement("div", {
    className: "placeholder-content companySidebarCard__header--placeholder"
  }, "\xA0") : _react.default.createElement("h3", {
    className: "companySidebarCard__header__cost--price"
  }, meta.potential_earning, " Kr"))), children);
};

var _default = CompanySidebarBaseCard;
exports.default = _default;