"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../Navigation/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PublicLayout(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("header", {
    className: "header"
  }, /*#__PURE__*/_react.default.createElement(_index.default, props)), /*#__PURE__*/_react.default.createElement("main", {
    className: "main"
  }, children), props.showFooter && /*#__PURE__*/_react.default.createElement("footer", {
    className: "customFooter"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-sm-12 col-md-11 mx-auto"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-sm-12 col-md-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "customFooter__list"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "customFooter__list__title"
  }, "Kontakt oss"), /*#__PURE__*/_react.default.createElement("ul", {
    className: "customFooter__list__content"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "customFooter__list__content__link",
    href: "https://goo.gl/maps/UdKQacRovy4guaYW9",
    target: "_blank"
  }, "M\xF8llergata 4,0179 Oslo")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "customFooter__list__content__link",
    href: "tel:+47 987 65 456"
  }, "+47987 65 456")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "customFooter__list__content__link",
    href: "mailto:post@tipio.no"
  }, "post@tipio.no"))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-sm-12 col-md-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "customFooter__list"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "customFooter__list__title"
  }, "F\xF8lg Tipio"), /*#__PURE__*/_react.default.createElement("ul", {
    className: "customFooter__list__content"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "customFooter__list__content__link",
    href: "https://www.facebook.com/Tipio-667205140149721"
  }, "Facebook")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "customFooter__list__content__link",
    href: "https://www.instagram.com/tipio.no"
  }, "Instagram")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "customFooter__list__content__link",
    href: "https://www.linkedin.com/company/tipio/?viewAsMember=true"
  }, "Linkedin"))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-sm-12 col-md-6"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "customFooter__description"
  }, "Hvorfor kj\xF8pe dyrt alene n\xE5r vi kan handle billig sammen?", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("span", null), "I Tipio kan du fortelle butikkene hva du \xF8nsker \xE5 f\xE5 en bedre pris p\xE5."))))))));
}

var _default = PublicLayout;
exports.default = _default;