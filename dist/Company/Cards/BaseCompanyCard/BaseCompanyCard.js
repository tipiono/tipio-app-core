"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TipioCountdown = _interopRequireDefault(require("../../../UI/TipioCountdown/TipioCountdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseCompanyCard = function BaseCompanyCard(_ref) {
  var children = _ref.children,
      expiresIn = _ref.expiresIn;
  return _react.default.createElement("div", null, _react.default.createElement("div", {
    className: "baseCompanyCard"
  }, _react.default.createElement("div", {
    className: "baseCompanyCard__header"
  }, _react.default.createElement("a", {
    href: ""
  }, _react.default.createElement("img", {
    className: "baseCompanyCard__header--image",
    src: "https://tipio.ams3.cdn.digitaloceanspaces.com/staging/15/tipios/130/1563779193973",
    alt: ""
  })), _react.default.createElement("div", {
    className: "baseCompanyCard__header--timeLeft"
  }, _react.default.createElement(_TipioCountdown.default, {
    className: "timer",
    expires_in: expiresIn
  }))), _react.default.createElement("div", {
    className: "baseCompanyCard__body"
  }, _react.default.createElement("h5", {
    className: "baseCompanyCard__body--title"
  }, "GoPro Camera Ultra 4K"), _react.default.createElement("p", {
    className: "baseCompanyCard__body--content--description"
  }, "Beoplay H4"), _react.default.createElement("div", {
    className: "baseCompanyCard__body--cost"
  }, _react.default.createElement("h3", {
    className: "baseCompanyCard__body--cost--price"
  }, "1 199 000 Kr"), _react.default.createElement("span", {
    className: "baseCompanyCard__body--cost--label"
  }, "Potensiell omsetning")), _react.default.createElement("div", {
    className: "baseCompanyCard__body--interested"
  }, _react.default.createElement("h6", {
    className: "baseCompanyCard__body--interested--counter"
  }, "220 p\xE5meldte!")), children)));
};

var _default = BaseCompanyCard;
exports.default = _default;