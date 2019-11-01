"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

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
      props = _objectWithoutProperties(_ref, ["placeholder", "name", "errors", "displayErrors"]);

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("label", {
    className: "pure-material-textfield-outlined"
  }, _react.default.createElement("textarea", _extends({
    rows: "4",
    placeholder: " ",
    type: "radio",
    name: name
  }, props, {
    ref: ref
  })), _react.default.createElement("span", {
    className: "label-sm"
  }, placeholder)), displayErrors && errors && errors[name] && _react.default.createElement(_ErrorMessage.default, {
    content: errors[name].message,
    color: "bg-red"
  }));
});

exports.default = _default;