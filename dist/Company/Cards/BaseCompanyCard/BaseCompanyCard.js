"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TipioCountdown = _interopRequireDefault(require("../../../UI/TipioCountdown/TipioCountdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BaseCompanyCard = function BaseCompanyCard(_ref) {
  var children = _ref.children,
      expires_in = _ref.expires_in,
      binding_count = _ref.binding_count,
      props = _objectWithoutProperties(_ref, ["children", "expires_in", "binding_count"]);

  return _react.default.createElement("div", null, _react.default.createElement("div", {
    className: "baseCompanyCard"
  }, _react.default.createElement("div", {
    className: "baseCompanyCard__header"
  }, props.images && props.images.length && _react.default.createElement("a", {
    href: ""
  }, _react.default.createElement("img", {
    className: "baseCompanyCard__header--image",
    src: props.images[0].blob_url,
    alt: ""
  })), _react.default.createElement("div", {
    className: "baseCompanyCard__header--timeLeft"
  }, _react.default.createElement(_TipioCountdown.default, {
    className: "timer",
    expires_in: expires_in
  }))), _react.default.createElement("div", {
    className: "baseCompanyCard__body"
  }, _react.default.createElement("h5", {
    className: "baseCompanyCard__body--title"
  }, props.title), _react.default.createElement("p", {
    className: "baseCompanyCard__body--content--description"
  }, props.subtitle), _react.default.createElement("div", {
    className: "baseCompanyCard__body--cost"
  }, _react.default.createElement("h3", {
    className: "baseCompanyCard__body--cost--price"
  }, "1 199 000 Kr"), _react.default.createElement("span", {
    className: "baseCompanyCard__body--cost--label"
  }, "Potensiell omsetning")), binding_count > 0 ? _react.default.createElement("div", {
    className: "baseCompanyCard__body--interested"
  }, _react.default.createElement("h6", {
    className: "baseCompanyCard__body--interested--counter"
  }, binding_count, " p\xE5meldte!")) : null, children)));
};

var _default = BaseCompanyCard;
exports.default = _default;