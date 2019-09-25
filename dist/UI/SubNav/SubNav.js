"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Avatar = _interopRequireDefault(require("../Avatar/Avatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubNav = function SubNav() {
  return _react.default.createElement("div", {
    className: "subNav"
  }, _react.default.createElement("div", {
    className: "subNav__account"
  }, _react.default.createElement("div", {
    className: "subNav__account--avatar"
  }, _react.default.createElement(_Avatar.default, {
    src: "https://media.licdn.com/dms/image/C4E0BAQH68IJX_M94XA/company-logo_400_400/0?e=1577318400&v=beta&t=lCBG1Ra3mD0X0XNoqfARizY-hi4I1V1PQJGx6vhpcRI"
  })), _react.default.createElement("h3", {
    className: "subNav__account--name"
  }, "Elkj\xF8p - Sandvika")), _react.default.createElement("ul", {
    className: "subNav__list"
  }, _react.default.createElement("li", {
    className: "subNav__list--item"
  }, _react.default.createElement("a", {
    className: "subNav__list--item--link active",
    href: ""
  }, "Min profil")), _react.default.createElement("li", {
    className: "subNav__list--item"
  }, _react.default.createElement("a", {
    className: "subNav__list--item--link",
    href: ""
  }, " Dashboard"))));
};

var _default = SubNav;
exports.default = _default;