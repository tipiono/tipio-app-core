"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddMoreSaleCompanyCard = function AddMoreSaleCompanyCard() {
  return _react.default.createElement("div", {
    className: "addMoreSaleCard"
  }, _react.default.createElement("div", {
    className: "d-flex flex-row"
  }, _react.default.createElement("div", {
    className: "addMoreSaleCard__preview"
  }, _react.default.createElement("a", {
    className: "addMoreSaleCard__preview--image",
    href: ""
  }, _react.default.createElement("img", {
    className: "img-fluid",
    src: "https://tipio.ams3.cdn.digitaloceanspaces.com/staging/4/tipios/93/1560161148875",
    alt: ""
  }), _react.default.createElement("span", {
    className: "addMoreSaleCard__preview--discount"
  }, "-30%"))), _react.default.createElement("div", {
    className: "addMoreSaleCard__content"
  }, _react.default.createElement("h5", {
    className: "addMoreSaleCard__content--title"
  }, "Samsung 65\" UHD h\xF8ytaler UE65NU7105"), _react.default.createElement("div", {
    className: "addMoreSaleCard__content__price"
  }, _react.default.createElement("h6", {
    className: "addMoreSaleCard__content__price--sale"
  }, "8 499 Kr"), _react.default.createElement("h6", {
    className: "addMoreSaleCard__content__price--cost"
  }, "7 499 Kr")))));
};

var _default = AddMoreSaleCompanyCard;
exports.default = _default;