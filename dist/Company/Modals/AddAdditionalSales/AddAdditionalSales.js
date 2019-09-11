"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Modal = require("../../../UI/Modal/Modal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AddAdditionalSales(_ref) {
  var image = _ref.image;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Modal.Modal, {
    showCloseButton: true
  }, _react.default.createElement("div", {
    className: "addSales"
  }, _react.default.createElement("a", {
    href: ""
  }, _react.default.createElement("img", {
    className: "addSales--image",
    src: image,
    width: "310px",
    alt: "Tipio with offer"
  })), _react.default.createElement("h4", {
    className: "addSales--title"
  }, "Vil du legge inn mersalg?"), _react.default.createElement("p", {
    className: "addSales--description"
  }, "Du kan n\xE5 legge ut tre eksklusive mersalgs tilbud ", _react.default.createElement("br", null), " til dine kunder"), _react.default.createElement("div", {
    className: "addSales--action"
  }, _react.default.createElement("button", {
    type: "button",
    className: "btn btn-secondary btn-lg mb-3"
  }, "Legg inn mersalg"), _react.default.createElement("button", {
    type: "button",
    className: "btn btn-outline-secondary btn-lg"
  }, "Ikke denne gangen")))));
}

var _default = AddAdditionalSales;
exports.default = _default;