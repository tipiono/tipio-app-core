"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SecondaryOutlineButton = function SecondaryOutlineButton(_ref) {
  var loading = _ref.loading,
      text = _ref.text,
      onClick = _ref.onClick,
      textColor = _ref.textColor,
      props = _objectWithoutProperties(_ref, ["loading", "text", "onClick", "textColor"]);

  return _react.default.createElement("button", _extends({
    type: "button",
    disabled: loading,
    className: (0, _classnames.default)('btn btn-outline-secondary btn-block btn-lg', textColor),
    onClick: onClick
  }, props), !loading && text, loading && _react.default.createElement("span", null, ' ', _react.default.createElement("span", {
    className: "spinner-border spinner-border-sm",
    role: "status",
    "aria-hidden": "true"
  }), ' ', "Loading..."));
};

SecondaryOutlineButton.defaultProps = {
  loading: false
};
SecondaryOutlineButton.propTypes = {
  loading: _propTypes.default.bool,
  text: _propTypes.default.string.isRequired
};
var _default = SecondaryOutlineButton;
exports.default = _default;