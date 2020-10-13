"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Modal = require("../../../UI/Modal/Modal");

var _SecondaryOutlineButton = _interopRequireDefault(require("../../../UI/Buttons/SecondaryOutlineButton"));

var _SecondaryButton = _interopRequireDefault(require("../../../UI/Buttons/SecondaryButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LoginOrRegister(_ref) {
  var redirect = _ref.redirect;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Modal.Modal, {
    showCloseButton: true
  }, _react.default.createElement("div", {
    className: "loginOrRegister"
  }, _react.default.createElement("h2", {
    className: "loginOrRegister--title"
  }, "Fint \xE5 se deg!"), _react.default.createElement("p", {
    className: "loginOrRegister--description"
  }, "For \xE5 opprette en Tipio m\xE5 du v\xE6re innlogget. Logg deg ", _react.default.createElement("br", null), " inn for \xE5 f\xE5 en knall pris!"), _react.default.createElement("div", {
    className: "loginOrRegister--action mb-4"
  }, _react.default.createElement("a", {
    href: '/auth/login?redirect=' + redirect
  }, _react.default.createElement(_SecondaryOutlineButton.default, {
    text: "Logg inn"
  }))), _react.default.createElement("div", {
    className: "loginOrRegister--action"
  }, _react.default.createElement("a", {
    href: '/user/create?redirect=' + redirect
  }, _react.default.createElement(_SecondaryButton.default, {
    text: "Jeg er ny her, lag profil"
  }))))));
}

var _default = LoginOrRegister;
exports.default = _default;