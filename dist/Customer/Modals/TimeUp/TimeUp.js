"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Modal = require("../../../UI/Modal/Modal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimeUp = function TimeUp(props) {
  return _react.default.createElement("div", null, _react.default.createElement(_Modal.Modal, {
    showCloseButton: true,
    onCloseButtonClick: function onCloseButtonClick() {},
    type: _Modal.ModalType.XLARGE
  }, _react.default.createElement("div", {
    className: "wrapper"
  }, _react.default.createElement("div", {
    className: "content"
  }, _react.default.createElement("img", {
    alt: ""
  }), _react.default.createElement("h4", null, "Tiden er ute!"), _react.default.createElement("p", {
    className: "smaller-text"
  }, "Ingen leverand\xF8rer kom med Tilbud. \u2028 Vil du pr\xF8ve igjen \xE5 se om du f\xE5r napp?"), _react.default.createElement("div", {
    className: "buttons-part"
  }, _react.default.createElement("button", {
    type: "button",
    className: "btn btn-secondary btn-lg",
    onClick: function onClick() {}
  }, "Pr\xF8v igjen"), _react.default.createElement("button", {
    type: "button",
    className: "btn btn-outline-secondary btn-lg",
    onClick: function onClick() {}
  }, "Ikke n\xE5")))), _react.default.createElement("a", {
    href: "#",
    className: "second-logo"
  }, _react.default.createElement("img", {
    width: "28px",
    height: "28px",
    alt: "",
    className: "modal-close second-logo"
  }))));
};

var _default = TimeUp;
exports.default = _default;