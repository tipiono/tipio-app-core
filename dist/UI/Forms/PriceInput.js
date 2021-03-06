"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var label = _ref.label,
      name = _ref.name,
      errors = _ref.errors,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      props = _objectWithoutProperties(_ref, ["label", "name", "errors", "disabled"]);

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("label", {
    className: (0, _classnames.default)('pure-material-textfield-outlined price-input', {
      validationError: errors && errors[name],
      disabled__input: disabled
    })
  }, /*#__PURE__*/_react.default.createElement("input", _extends({
    placeholder: "50",
    type: "number",
    name: name,
    id: name
  }, props, {
    ref: ref,
    disabled: disabled
  })), /*#__PURE__*/_react.default.createElement("label", {
    className: "outside-label"
  }, label), /*#__PURE__*/_react.default.createElement("p", {
    className: "static-placeholder"
  }, "Kr")));
});

exports.default = _default;