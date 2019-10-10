"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ToggleSwitch = _interopRequireDefault(require("../../../UI/Forms/ToggleSwitch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderItemCard = function OrderItemCard() {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("tbody", {
    className: "orderItemCard"
  }, _react.default.createElement("tr", {
    className: "orderItemCard__customerDetail"
  }, _react.default.createElement("td", null, _react.default.createElement(_ToggleSwitch.default, null), _react.default.createElement("span", null, "Levert")), _react.default.createElement("td", {
    className: "orderItemCard__customerDetail--name"
  }, "Amalie Amtedalh"), _react.default.createElement("td", {
    className: "orderItemCard__customerDetail--address"
  }, "Adresse:,Ostadalsveien 72"), _react.default.createElement("td", {
    className: "orderItemCard__customerDetail--address"
  }, "Kristiansand, 0746"), _react.default.createElement("td", null)), _react.default.createElement("tr", {
    className: "border-bottom-1"
  }, _react.default.createElement("td", null), _react.default.createElement("td", null, "E-post:,amalie.amtedalh@gmail.com"), _react.default.createElement("td", null, "Nummer:,987 67 890"), _react.default.createElement("td", null), _react.default.createElement("td", null)), _react.default.createElement("tr", {
    className: "orderItemCard__orderDetail"
  }, _react.default.createElement("td", null), _react.default.createElement("td", {
    className: "orderItemCard__orderDetail--productName"
  }, "Samsung 65\" UHD Smart-TV UE65NU7105"), _react.default.createElement("td", null, "Ordrenummer:,89674590"), _react.default.createElement("td", null, "Antall:,1"), _react.default.createElement("td", null, "Pris: 999 Kr")), _react.default.createElement("tr", {
    className: "border-bottom-2"
  }, _react.default.createElement("td", null), _react.default.createElement("td", null, "30.06.2019 - 13:09"), _react.default.createElement("td", null, "Betalingsm\xE5te:,Kort"), _react.default.createElement("td", null, "St\xF8rrelse:,46"), _react.default.createElement("td", null)), _react.default.createElement("tr", {
    className: "orderItemCard__orderAmount"
  }, _react.default.createElement("td", null), _react.default.createElement("td", {
    className: "orderItemCard__orderAmount--label"
  }, "Totalsum"), _react.default.createElement("td", null), _react.default.createElement("td", null), _react.default.createElement("td", {
    className: "orderItemCard__orderAmount--price"
  }, "1 998 Kr"))), _react.default.createElement("br", null));
};

var _default = OrderItemCard;
exports.default = _default;