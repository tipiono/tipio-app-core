"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function Tabs(_ref) {
  _objectDestructuringEmpty(_ref);

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("ul", {
    className: "tab"
  }, _react.default.createElement("li", {
    className: "tab__item"
  }, _react.default.createElement("a", {
    href: "",
    className: "tab__item--link active"
  }, "Interessert")), _react.default.createElement("li", {
    className: "tab__item"
  }, _react.default.createElement("a", {
    href: "",
    className: "tab__item--link"
  }, "Motatte tilbud")), _react.default.createElement("li", {
    className: "tab__item"
  }, _react.default.createElement("a", {
    href: "",
    className: "tab__item--link"
  }, "Bestillinger"))));
}

var _default = Tabs;
exports.default = _default;