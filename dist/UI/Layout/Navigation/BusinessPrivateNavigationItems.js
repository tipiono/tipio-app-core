"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BusinessPrivateNavigationItems() {
  return _react.default.createElement("ul", {
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
  }, "Bedrift")));
}

var _default = BusinessPrivateNavigationItems;
exports.default = _default;