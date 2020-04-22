"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ErrorMessage = _interopRequireDefault(require("../ErrorMessage/ErrorMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = _react["default"].forwardRef(function (_ref, ref) {
  var placeholder = _ref.placeholder,
      name = _ref.name,
      errors = _ref.errors,
      displayErrors = _ref.displayErrors,
      onBlur = _ref.onBlur,
      props = _objectWithoutProperties(_ref, ["placeholder", "name", "errors", "displayErrors", "onBlur"]);

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("label", {
    className: (0, _classnames["default"])('pure-material-textfield-outlined ', {
      validationError: errors && errors[name]
    })
  }, _react["default"].createElement("input", _extends({
    placeholder: " ",
    id: props.id || name,
    name: name
  }, props, {
    ref: ref
  })), _react["default"].createElement("span", {
    className: "label-sm"
  }, placeholder), displayErrors && errors && errors[name] && _react["default"].createElement("span", {
    className: "error-icon"
  }, _react["default"].createElement("svg", {
    width: 19,
    height: 19,
    viewBox: "0 0 19 19",
    fill: "none"
  }, _react["default"].createElement("mask", {
    id: "prefix__a",
    maskUnits: "userSpaceOnUse",
    x: 0,
    y: 0,
    width: 19,
    height: 19
  }, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0 0h18.35v18.543H0V.001z",
    fill: "#fff"
  })), _react["default"].createElement("g", {
    mask: "url(#prefix__a)"
  }, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.175 17.584C4.64 17.584.95 13.855.95 9.272.95 4.689 4.64.96 9.175.96c4.536 0 8.226 3.729 8.226 8.312 0 4.583-3.69 8.312-8.226 8.312zM9.175 0C4.115 0 0 4.16 0 9.27c0 5.114 4.116 9.272 9.175 9.272 5.06 0 9.176-4.158 9.176-9.271C18.35 4.16 14.235 0 9.175 0z",
    fill: "#D93227"
  })), _react["default"].createElement("mask", {
    id: "prefix__b",
    maskUnits: "userSpaceOnUse",
    x: 0,
    y: 0,
    width: 19,
    height: 19
  }, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0 18.543h18.35V0H0v18.543z",
    fill: "#fff"
  })), _react["default"].createElement("g", {
    mask: "url(#prefix__b)",
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "#D93227"
  }, _react["default"].createElement("path", {
    d: "M8.574 13.595h1.214V7.571H8.574v6.024zM9.175 4.948a.836.836 0 00-.83.838c0 .461.374.838.83.838a.835.835 0 00.83-.838.835.835 0 00-.83-.838z"
  }))))), displayErrors && errors && errors[name] && _react["default"].createElement(_ErrorMessage["default"], {
    content: errors[name].message || errors[name],
    color: 'bg-red'
  }));
});

exports["default"] = _default;