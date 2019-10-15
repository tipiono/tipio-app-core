"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Logo = _interopRequireDefault(require("./Logo"));

var _BusinessPrivateNavigationItems = _interopRequireDefault(require("./BusinessPrivateNavigationItems"));

var _HamburgerMenu = _interopRequireDefault(require("./HamburgerMenu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Navigation(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("nav", {
    className: "navigation"
  }, _react.default.createElement("div", {
    className: "container"
  }, _react.default.createElement("div", {
    className: "nav-wrapper"
  }, _react.default.createElement("a", {
    className: "logo mr-5",
    href: "/"
  }, _react.default.createElement(_Logo.default, null)), _react.default.createElement(_BusinessPrivateNavigationItems.default, props), _react.default.createElement("ul", {
    className: "nav-list ml-auto"
  }, _react.default.createElement("li", {
    className: "nav-list-item"
  }, _react.default.createElement("span", {
    className: "text-white"
  }, "Search")), _react.default.createElement("li", {
    className: "nav-list-item"
  }, _react.default.createElement("svg", {
    className: "mr-2",
    width: 25,
    height: 20
  }, _react.default.createElement("g", {
    fill: "#FFF",
    fillRule: "nonzero"
  }, _react.default.createElement("path", {
    d: "M8.88 5.579c-.363 2.052-2.097 3.615-4.192 3.615C2.327 9.194.426 7.211.426 4.78S2.326.364 4.688.364c2.095 0 3.829 1.563 4.192 3.615H23.7a.8.8 0 110 1.6H8.88zm-1.398-.8c0-1.635-1.258-2.948-2.794-2.948-1.537 0-2.795 1.313-2.795 2.948s1.258 2.948 2.795 2.948c1.536 0 2.794-1.313 2.794-2.948zM8.238 15.898H1.16a.8.8 0 110-1.6h7.078c.362-2.052 2.096-3.615 4.191-3.615 2.12 0 3.868 1.598 4.204 3.684h7.132a.8.8 0 110 1.6h-7.156c-.39 2.018-2.107 3.546-4.18 3.546-2.095 0-3.829-1.563-4.191-3.615zm6.978-.573a.804.804 0 01.006-.344c-.059-1.58-1.293-2.83-2.793-2.83-1.536 0-2.794 1.312-2.794 2.947s1.258 2.948 2.794 2.948c1.465 0 2.677-1.194 2.787-2.721z"
  }))), _react.default.createElement("span", {
    className: "text-white"
  }, "Filters")), _react.default.createElement(_HamburgerMenu.default, props))))));
}

var _default = Navigation;
exports.default = _default;