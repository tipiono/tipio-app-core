"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Modal = require("../../../UI/Modal/Modal");

var _SecondaryButton = _interopRequireDefault(require("../../../UI/Buttons/SecondaryButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TipioWithOffer(_ref) {
  var image = _ref.image,
      sale = _ref.sale,
      joined = _ref.joined,
      nextOnClick = _ref.nextOnClick;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    showCloseButton: true
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tipio__withOffer"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: ""
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "tipio__withOffer--image",
    src: image,
    width: "310px",
    alt: "Tipio with offer"
  })), /*#__PURE__*/_react.default.createElement("h3", {
    className: "tipio__withOffer--title"
  }, "Gratulerer!"), /*#__PURE__*/_react.default.createElement("p", {
    className: "tipio__withOffer--description"
  }, joined, " andre kj\xF8pte med deg! Prisen gikk ytterligere ned til"), /*#__PURE__*/_react.default.createElement("h4", {
    className: "tipio__withOffer--salePrice"
  }, sale), /*#__PURE__*/_react.default.createElement("div", {
    className: "tipio__withOffer--action"
  }, /*#__PURE__*/_react.default.createElement(_SecondaryButton.default, {
    text: "Neste",
    onClick: nextOnClick
  })))));
}

var _default = TipioWithOffer;
exports.default = _default;