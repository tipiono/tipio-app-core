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
  }, _react.default.createElement(_Logo.default, null)), _react.default.createElement(_BusinessPrivateNavigationItems.default, props), _react.default.createElement(_HamburgerMenu.default, props)))));
}

var _default = Navigation;
exports.default = _default;