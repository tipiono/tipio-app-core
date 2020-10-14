"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BusinessPrivateNavigationItems(props) {
  return /*#__PURE__*/_react.default.createElement("ul", {
    className: "nav-list d-none d-md-block"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-list-item"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "link-button nav-list-link nav-list-lg-link ",
    onClick: props.mainNavOnClick
  }, "Privat")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-list-item"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "link-button nav-list-link nav-list-lg-link active"
  }, "Bedrift")));
}

var _default = BusinessPrivateNavigationItems;
exports.default = _default;