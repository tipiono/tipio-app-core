"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderItemCard = function OrderItemCard() {
  return _react.default.createElement("div", {
    className: "orderItemCard"
  }, _react.default.createElement("div", {
    className: "row"
  }, _react.default.createElement("div", {
    className: "col-sm-12 col-lg-1"
  }, _react.default.createElement(_index.ToggleSwitch, null)), _react.default.createElement("div", {
    className: "col-sm-12 col-lg-11"
  }, _react.default.createElement("div", {
    className: "table-responsive"
  }, _react.default.createElement("table", {
    className: "table table-borderless"
  }, _react.default.createElement("tbody", {
    className: "orderItemCard__customerDetail"
  }, _react.default.createElement("tr", null, _react.default.createElement("td", {
    className: "orderItemCard__customerDetail--name"
  }, "Amalie Amtedalh"), _react.default.createElement("td", {
    className: "orderItemCard__customerDetail--address"
  }, "Adresse: Ostadalsveien 72"), _react.default.createElement("td", {
    className: "orderItemCard__customerDetail--address",
    colSpan: ""
  }, "Kristiansand, 0746")), _react.default.createElement("tr", null, _react.default.createElement("td", null, "E-post: amalie.amtedalh@gmail.com"), _react.default.createElement("td", {
    colSpan: ""
  }, "Nummer: 987 67 890"))), _react.default.createElement("tbody", {
    className: "orderItemCard__orderDetail"
  }, _react.default.createElement("tr", null, _react.default.createElement("td", {
    className: "orderItemCard__orderDetail--productName"
  }, "Samsung 65\" UHD Smart-TV UE65NU7105"), _react.default.createElement("td", null, "Ordrenummer: 89674590"), _react.default.createElement("td", null, "Antall: 1"), _react.default.createElement("td", {
    className: "text-right"
  }, "Pris: 999 Kr")), _react.default.createElement("tr", null, _react.default.createElement("td", null, "30.06.2019 - 13:09"), _react.default.createElement("td", null, "Betalingsm\xE5te: Kort"), _react.default.createElement("td", {
    colSpan: ""
  }, "@St\xF8rrelse: 46"))), _react.default.createElement("tbody", {
    className: "orderItemCard__orderAmount"
  }, _react.default.createElement("tr", null, _react.default.createElement("td", {
    className: "orderItemCard__orderAmount--label",
    colSpan: "3"
  }, "Totalsum"), _react.default.createElement("td", {
    className: "orderItemCard__orderAmount--price text-right"
  }, " 1 998 Kr"))))))));
};

var _default = OrderItemCard;
exports.default = _default;