"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Modal = require("../../../UI/Modal/Modal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TipioWithOffer(_ref) {
  var image = _ref.image,
      sale = _ref.sale,
      joined = _ref.joined;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Modal.Modal, {
    showCloseButton: true
  }, _react.default.createElement("div", {
    className: "tipio__withOffer"
  }, _react.default.createElement("a", {
    href: ""
  }, _react.default.createElement("img", {
    className: "tipio__withOffer--image",
    src: image,
    width: "310px",
    alt: "Tipio with offer"
  })), _react.default.createElement("h3", {
    className: "tipio__withOffer--title"
  }, "Gratulerer!"), _react.default.createElement("p", {
    className: "tipio__withOffer--description"
  }, joined, " andre kj\xF8pte med deg! Prisen gikk ytterligere ned til"), _react.default.createElement("h4", {
    className: "tipio__withOffer--salePrice"
  }, sale), _react.default.createElement("button", {
    type: "button",
    className: "btn btn-lg btn-secondary w-50"
  }, "Neste"))));
}

var _default = TipioWithOffer;
exports.default = _default;