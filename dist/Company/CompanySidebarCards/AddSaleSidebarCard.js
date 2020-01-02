"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SecondaryOutlineButton = _interopRequireDefault(require("../../UI/Buttons/SecondaryOutlineButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddSaleSidebarCard = function AddSaleSidebarCard(_ref) {
  var first_price = _ref.first_price,
      company_price = _ref.company_price,
      tipio = _ref.tipio,
      editButtonOnClick = _ref.editButtonOnClick,
      addToCartOnClick = _ref.addToCartOnClick,
      _ref$showEditButton = _ref.showEditButton,
      showEditButton = _ref$showEditButton === void 0 ? true : _ref$showEditButton,
      _ref$showAddToCartBut = _ref.showAddToCartButton,
      showAddToCartButton = _ref$showAddToCartBut === void 0 ? false : _ref$showAddToCartBut;
  var title = tipio.title,
      subtitle = tipio.subtitle;
  return _react.default.createElement("div", {
    className: "addSaleSidebarCard"
  }, _react.default.createElement("div", {
    className: "addSaleSidebarCard__header"
  }, _react.default.createElement("div", {
    className: "addSaleSidebarCard__header__content"
  }, _react.default.createElement("h3", {
    className: "addSaleSidebarCard__header__content--title"
  }, title), _react.default.createElement("p", {
    className: "addSaleSidebarCard__header__content--subtitle"
  }, subtitle))), _react.default.createElement("div", {
    className: "addSaleSidebarCard__price"
  }, _react.default.createElement("div", {
    className: "addSaleSidebarCard__price--cost"
  }, _react.default.createElement("p", {
    className: "addSaleSidebarCard__price--cost--label"
  }, "F\xF8r pris"), _react.default.createElement("h6", {
    className: "addSaleSidebarCard__price--cost--amount"
  }, first_price, " Kr")), _react.default.createElement("div", {
    className: "addSaleSidebarCard__price--sale"
  }, _react.default.createElement("p", {
    className: "addSaleSidebarCard__price--sale--label"
  }, "Ny pris"), _react.default.createElement("h6", {
    className: "addSaleSidebarCard__price--sale--amount"
  }, company_price, " Kr"))), _react.default.createElement("div", {
    className: "addSaleSidebarCard__footer"
  }, showEditButton && _react.default.createElement("div", {
    className: "addSaleSidebarCard__footer--action"
  }, _react.default.createElement(_SecondaryOutlineButton.default, {
    text: "Rediger",
    onClick: editButtonOnClick
  })), showAddToCartButton && _react.default.createElement("div", {
    className: "addSaleSidebarCard__footer--action"
  }, _react.default.createElement(_SecondaryOutlineButton.default, {
    text: "Legg i handlekurv",
    onClick: addToCartOnClick
  })), _react.default.createElement("p", {
    className: "addSaleSidebarCard__footer--interestedCounter"
  }, "Allerede 329 p\xE5meldte!")));
};

var _default = AddSaleSidebarCard;
exports.default = _default;