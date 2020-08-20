"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ErrorMessage = _interopRequireDefault(require("../ErrorMessage/ErrorMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = _react.default.forwardRef(function (_ref, ref) {
  var placeholder = _ref.placeholder,
      name = _ref.name,
      errors = _ref.errors,
      displayErrors = _ref.displayErrors,
      onBlur = _ref.onBlur,
      props = _objectWithoutProperties(_ref, ["placeholder", "name", "errors", "displayErrors", "onBlur"]);

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("label", {
    className: (0, _classnames.default)('pure-material-textfield-outlined ', {
      validationError: errors && errors[name]
    })
  }, _react.default.createElement("input", _extends({
    placeholder: " ",
    id: props.id || name,
    name: name
  }, props, {
    ref: ref
  })), _react.default.createElement("span", {
    className: "label-sm"
  }, placeholder), displayErrors && errors && errors[name] && _react.default.createElement("span", {
    className: "error-icon"
  }, _react.default.createElement("svg", {
    width: "19",
    height: "20",
    viewBox: "0 0 19 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("mask", {
    id: "mask0",
    "mask-type": "alpha",
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "0",
    width: "19",
    height: "20"
  }, _react.default.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M0 0.800415H18.3507V19.3428H0V0.800415Z",
    fill: "white"
  })), _react.default.createElement("g", {
    mask: "url(#mask0)"
  }, _react.default.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M9.17529 18.3836C4.63984 18.3836 0.949878 14.6548 0.949878 10.0716C0.949878 5.48842 4.63984 1.75962 9.17529 1.75962C13.7108 1.75962 17.4007 5.48842 17.4007 10.0716C17.4007 14.6548 13.7108 18.3836 9.17529 18.3836ZM9.17529 0.800415C4.11575 0.800415 -0.00012207 4.95962 -0.00012207 10.0716C-0.00012207 15.1844 4.11575 19.3428 9.17529 19.3428C14.2348 19.3428 18.3507 15.1844 18.3507 10.0716C18.3507 4.95962 14.2348 0.800415 9.17529 0.800415Z",
    fill: "#D93227"
  })), _react.default.createElement("mask", {
    id: "mask1",
    "mask-type": "alpha",
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "0",
    width: "19",
    height: "20"
  }, _react.default.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M0 19.343H18.3508V0.799774H0V19.343Z",
    fill: "white"
  })), _react.default.createElement("g", {
    mask: "url(#mask1)"
  }, _react.default.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M8.57458 14.395H9.78821V8.37097H8.57458V14.395Z",
    fill: "#D93227"
  }), _react.default.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M9.17525 5.74768C8.71846 5.74768 8.34558 6.12448 8.34558 6.58528C8.34558 7.04688 8.71846 7.42368 9.17525 7.42368C9.63204 7.42368 10.0041 7.04688 10.0041 6.58528C10.0041 6.12448 9.63204 5.74768 9.17525 5.74768Z",
    fill: "#D93227"
  }))))), displayErrors && errors && errors[name] && _react.default.createElement(_ErrorMessage.default, {
    content: errors[name].message || errors[name],
    color: 'bg-red'
  }));
});

exports.default = _default;