"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _BusinessPrivateNavigationItems = _interopRequireDefault(require("./BusinessPrivateNavigationItems"));

var _HamburgerMenu = _interopRequireDefault(require("./HamburgerMenu"));

var _SearchInput = _interopRequireDefault(require("./SearchInput"));

var _FilterIcon = _interopRequireDefault(require("../../Icons/FilterIcon"));

var _Logo = _interopRequireDefault(require("../../Logo/Logo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Navigation(_ref) {
  var children = _ref.children,
      filterOnClick = _ref.filterOnClick,
      props = _objectWithoutProperties(_ref, ["children", "filterOnClick"]);

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("nav", {
    className: "navigation"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "nav-wrapper"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "logo mr-5",
    href: "/"
  }, /*#__PURE__*/_react.default.createElement(_Logo.default, null)), props.showBusinessPrivateNavigationItems && /*#__PURE__*/_react.default.createElement(_BusinessPrivateNavigationItems.default, props), /*#__PURE__*/_react.default.createElement("ul", {
    className: "nav-list ml-auto"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-list-item d-flex align-items-center"
  }, /*#__PURE__*/_react.default.createElement(_SearchInput.default, props)), props.showFilterIcon && /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-list-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "nav-list-link",
    href: "",
    onClick: filterOnClick
  }, /*#__PURE__*/_react.default.createElement(_FilterIcon.default, null), /*#__PURE__*/_react.default.createElement("span", {
    className: "text-white"
  }, "Filters"))), /*#__PURE__*/_react.default.createElement(_HamburgerMenu.default, props))))));
}

var _default = Navigation;
exports.default = _default;