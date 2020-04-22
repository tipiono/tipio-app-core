"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Modal = require("../../../UI/Modal/Modal");

var _SecondaryButton = _interopRequireDefault(require("../../../UI/Buttons/SecondaryButton"));

var _SecondaryOutlineButton = _interopRequireDefault(require("../../../UI/Buttons/SecondaryOutlineButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var OrderDelivered = function OrderDelivered(_ref) {
  var loading = _ref.loading,
      onClick = _ref.onClick,
      onCancel = _ref.onCancel;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Modal.Modal, {
    showCloseButton: true,
    onCloseButtonClick: onCancel
  }, _react["default"].createElement("div", {
    className: "orderDelivered"
  }, _react["default"].createElement("svg", {
    className: "orderDelivered--icon",
    width: 76,
    height: 69
  }, _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "prefix__a",
    d: "M0 .001h75.6v70H0z"
  })), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("mask", {
    id: "prefix__b",
    fill: "#fff"
  }, _react["default"].createElement("use", {
    xlinkHref: "#prefix__a"
  })), _react["default"].createElement("path", {
    fill: "#4ABCAC",
    stroke: "#4ABCAC",
    d: "M59.4 64.801a5.4 5.4 0 100-10.8 5.397 5.397 0 00-5.4 5.4 5.4 5.4 0 005.4 5.4zm-43.2 0a5.4 5.4 0 100-10.8 5.397 5.397 0 00-5.4 5.4 5.4 5.4 0 005.4 5.4zm-12.6-21.6h43.2v-30.6a9 9 0 00-9-9H12.6a9 9 0 00-9 9v30.6zm46.8-14.4h20.802a8.946 8.946 0 00-1.098-1.822l-7.082-9.104a8.99 8.99 0 00-7.102-3.474H50.4v14.4zm0 14.4H72V32.401H50.4v10.8zm17.82 18a9.003 9.003 0 01-17.64 0H25.02a9.003 9.003 0 01-17.64 0H5.4a5.4 5.4 0 01-5.4-5.4v-43.2C0 5.64 5.643.001 12.6.001h25.2c6.348 0 11.6 4.694 12.471 10.8h5.649a12.59 12.59 0 019.943 4.864l7.085 9.104a12.62 12.62 0 012.653 7.736v23.296c0 2.98-2.42 5.4-5.4 5.4h-1.98zm0-3.6h1.98c.994 0 1.8-.81 1.8-1.8v-9H3.6v9c0 .99.807 1.8 1.8 1.8h1.98a9 9 0 018.82-7.2 9.002 9.002 0 018.82 7.2h25.56a9 9 0 018.82-7.2 9.002 9.002 0 018.82 7.2z",
    mask: "url(#prefix__b)"
  }))), _react["default"].createElement("h4", {
    className: "orderDelivered--title"
  }, "Er du sikker p\xE5 at du vil markere ", _react["default"].createElement("br", null), " alle som levert?"), _react["default"].createElement("div", {
    className: "orderDelivered--action mb-3"
  }, _react["default"].createElement(_SecondaryButton["default"], {
    text: "Merk alle som levert",
    onClick: onClick,
    loading: loading
  })), _react["default"].createElement("div", {
    className: "orderDelivered--action"
  }, _react["default"].createElement(_SecondaryOutlineButton["default"], {
    text: "Avbryt",
    onClick: onCancel,
    disabled: loading
  })))));
};

var _default = OrderDelivered;
exports["default"] = _default;