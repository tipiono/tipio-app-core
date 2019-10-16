"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SecondaryOutlineButton = _interopRequireDefault(require("../../UI/Buttons/SecondaryOutlineButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddSaleSidebarCard = function AddSaleSidebarCard() {
  return _react.default.createElement("div", {
    className: "addSaleSidebarCard"
  }, _react.default.createElement("div", {
    className: "addSaleSidebarCard__header"
  }, _react.default.createElement("div", {
    className: "addSaleSidebarCard__header__content"
  }, _react.default.createElement("h3", {
    className: "addSaleSidebarCard__header__content--title"
  }, "Samsung 65\" UHD h\xF8ytaler UE65NU7105"), _react.default.createElement("p", {
    className: "addSaleSidebarCard__header__content--subtitle"
  }, "Samsung"))), _react.default.createElement("div", {
    className: "addSaleSidebarCard__price"
  }, _react.default.createElement("div", {
    className: "addSaleSidebarCard__price--cost"
  }, _react.default.createElement("p", {
    className: "addSaleSidebarCard__price--cost--label"
  }, "F\xF8r pris"), _react.default.createElement("h6", {
    className: "addSaleSidebarCard__price--cost--amount"
  }, "8 499 Kr")), _react.default.createElement("div", {
    className: "addSaleSidebarCard__price--sale"
  }, _react.default.createElement("p", {
    className: "addSaleSidebarCard__price--sale--label"
  }, "Ny pris"), _react.default.createElement("h6", {
    className: "addSaleSidebarCard__price--sale--amount"
  }, "7 499 Kr"))), _react.default.createElement("div", {
    className: "addSaleSidebarCard__footer"
  }, _react.default.createElement("div", {
    className: "addSaleSidebarCard__footer--action"
  }, _react.default.createElement(_SecondaryOutlineButton.default, {
    text: "Rediger"
  })), _react.default.createElement("p", {
    className: "addSaleSidebarCard__footer--interestedCounter"
  }, "Allerede 329 p\xE5meldte!")));
};

var _default = AddSaleSidebarCard;
exports.default = _default;