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

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
    className: "header"
  }, _react.default.createElement(_index.default, props)), _react.default.createElement("main", {
    className: "main"
  }, children), props.showFooter && _react.default.createElement("footer", {
    className: "customFooter"
  }, _react.default.createElement("div", {
    className: "container"
  }, _react.default.createElement("div", {
    className: "row"
  }, _react.default.createElement("div", {
    className: "col-sm-12 col-md-11 mx-auto"
  }, _react.default.createElement("div", {
    className: "row"
  }, _react.default.createElement("div", {
    className: "col-sm-12 col-md-3"
  }, _react.default.createElement("div", {
    className: "customFooter__list"
  }, _react.default.createElement("h5", {
    className: "customFooter__list__title"
  }, "Kontakt oss"), _react.default.createElement("ul", {
    className: "customFooter__list__content"
  }, _react.default.createElement("li", null, _react.default.createElement("a", {
    className: "customFooter__list__content__link",
    href: "https://goo.gl/maps/UdKQacRovy4guaYW9",
    target: "_blank"
  }, "M\xF8llergata 4,0179 Oslo")), _react.default.createElement("li", null, _react.default.createElement("a", {
    className: "customFooter__list__content__link",
    href: "tel:+47 987 65 456"
  }, "+47987 65 456")), _react.default.createElement("li", null, _react.default.createElement("a", {
    className: "customFooter__list__content__link",
    href: "mailto:post@tipio.no"
  }, "post@tipio.no"))))), _react.default.createElement("div", {
    className: "col-sm-12 col-md-3"
  }, _react.default.createElement("div", {
    className: "customFooter__list"
  }, _react.default.createElement("h5", {
    className: "customFooter__list__title"
  }, "F\xF8lg Tipio"), _react.default.createElement("ul", {
    className: "customFooter__list__content"
  }, _react.default.createElement("li", null, _react.default.createElement("a", {
    className: "customFooter__list__content__link",
    href: "https://www.facebook.com/"
  }, "Facebook")), _react.default.createElement("li", null, _react.default.createElement("a", {
    className: "customFooter__list__content__link",
    href: "https://instagram.com/"
  }, "Instagram")), _react.default.createElement("li", null, _react.default.createElement("a", {
    className: "customFooter__list__content__link",
    href: "https://www.linkedin.com/"
  }, "Linkedin"))))), _react.default.createElement("div", {
    className: "col-sm-12 col-md-6"
  }, _react.default.createElement("p", {
    className: "customFooter__description"
  }, "Hvorfor kj\xF8pe dyrt alene n\xE5r vi kan handle billig sammen?", _react.default.createElement("br", null), _react.default.createElement("p", null), "I Tipio kan du fortelle butikkene hva du \xF8nsker \xE5 f\xE5 en bedre pris p\xE5."))))))));
}

var _default = PublicLayout;
exports.default = _default;