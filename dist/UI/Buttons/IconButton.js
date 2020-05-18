"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var IconButton = function IconButton(_ref) {
  var text = _ref.text,
      props = _objectWithoutProperties(_ref, ["text"]);

  return /*#__PURE__*/_react.default.createElement("a", _extends({
    className: "iconButton",
    href: ""
  }, props), /*#__PURE__*/_react.default.createElement("svg", {
    className: "iconButton--plus",
    width: 30,
    height: 30
  }, /*#__PURE__*/_react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react.default.createElement("circle", {
    fill: "#4ABCAC",
    cx: 15,
    cy: 15,
    r: 15
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M13.95 15.567H9.177a.805.805 0 010-1.61h4.773V9.184a.805.805 0 011.61 0v4.773h4.78a.805.805 0 010 1.61h-4.78v4.78a.805.805 0 01-1.61 0v-4.78z",
    fill: "#381B81",
    fillRule: "nonzero"
  }))), /*#__PURE__*/_react.default.createElement("span", {
    className: "iconButton--text"
  }, text));
};

var _default = IconButton;
exports.default = _default;