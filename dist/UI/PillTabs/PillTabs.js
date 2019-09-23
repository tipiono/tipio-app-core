"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function PillTabs(_ref) {
  _objectDestructuringEmpty(_ref);

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("ul", {
    className: "pillTab"
  }, _react.default.createElement("li", {
    className: "pillTab__item"
  }, _react.default.createElement("a", {
    href: "",
    className: "pillTab__item--link"
  }, "Alle")), _react.default.createElement("li", {
    className: "pillTab__item"
  }, _react.default.createElement("a", {
    href: "",
    className: "pillTab__item--link"
  }, "Levert")), _react.default.createElement("li", {
    className: "pillTab__item active"
  }, _react.default.createElement("a", {
    href: "",
    className: "pillTab__item--link"
  }, "Ikke levert"))));
}

var _default = PillTabs;
exports.default = _default;