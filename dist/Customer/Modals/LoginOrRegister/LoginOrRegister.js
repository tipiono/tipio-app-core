"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Modal = require("../../../UI/Modal/Modal");

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
    className: "loginOrRegister--buttons"
  }, _react.default.createElement("a", {
    href: '/auth/login?redirect=' + redirect
  }, _react.default.createElement("button", {
    type: "button",
    className: "btn btn-outline-secondary btn-lg w-50 mb-4"
  }, "Logg inn")), _react.default.createElement("a", {
    href: '/user/create?redirect=' + redirect
  }, _react.default.createElement("button", {
    type: "button",
    className: "btn btn-secondary btn-lg w-50"
  }, "Jeg er ny her, lag profil"))))));
}

var _default = LoginOrRegister;
exports.default = _default;