"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CompanySidebarBaseCard = function CompanySidebarBaseCard(_ref) {
  var children = _ref.children;
  return _react.default.createElement("div", {
    className: "companySidebarCard"
  }, _react.default.createElement("div", {
    className: "companySidebarCard__header"
  }, _react.default.createElement("div", {
    className: "companySidebarCard__header__content"
  }, _react.default.createElement("h3", {
    className: "companySidebarCard__header__content--title"
  }, "Samsung 65\" UHD Smart- TV UE65NU7105"), _react.default.createElement("p", {
    className: "companySidebarCard__header__content--subtitle"
  }, "Varekode: UE65NU7105XXC")), _react.default.createElement("div", {
    className: "companySidebarCard__header__cost"
  }, _react.default.createElement("p", {
    className: "companySidebarCard__header__cost--label"
  }, "Omsetning"), _react.default.createElement("h3", {
    className: "companySidebarCard__header__cost--price"
  }, "23 243 850 Kr"))), children);
};

var _default = CompanySidebarBaseCard;
exports.default = _default;