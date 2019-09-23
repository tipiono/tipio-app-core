"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Logo = _interopRequireDefault(require("./Logo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Navigation(_ref) {
  var children = _ref.children;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("nav", {
    className: "navigation"
  }, _react.default.createElement("div", {
    className: "container"
  }, _react.default.createElement("div", {
    className: "nav-wrapper"
  }, _react.default.createElement("a", {
    className: "logo mr-5",
    href: "/"
  }, _react.default.createElement(_Logo.default, null)), _react.default.createElement("ul", {
    className: "nav-list d-none d-md-block"
  }, _react.default.createElement("li", {
    className: "nav-list-item"
  }, _react.default.createElement("a", {
    className: "nav-list-link",
    href: "#"
  }, "Privat")), _react.default.createElement("li", {
    className: "nav-list-item"
  }, _react.default.createElement("a", {
    className: "nav-list-link active",
    href: "#"
  }, "Bedrift")))))));
}

var _default = Navigation;
exports.default = _default;