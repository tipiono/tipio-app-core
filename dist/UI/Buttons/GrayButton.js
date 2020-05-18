"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GrayButton = function GrayButton(_ref) {
  var loading = _ref.loading,
      text = _ref.text,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react.default.createElement("button", {
    id: "tipio-join-button",
    type: "button",
    disabled: loading,
    className: "btn btn-gray-600 btn-block btn-lg",
    onClick: onClick
  }, !loading && text, loading && /*#__PURE__*/_react.default.createElement("span", null, ' ', /*#__PURE__*/_react.default.createElement("span", {
    className: "spinner-border spinner-border-sm",
    role: "status",
    "aria-hidden": "true"
  }), ' ', "Loading..."));
};

GrayButton.defaultProps = {
  loading: false
};
GrayButton.propTypes = {
  loading: _propTypes.default.bool,
  text: _propTypes.default.string.isRequired,
  children: _propTypes.default.instanceOf(Array).isRequired
};
var _default = GrayButton;
exports.default = _default;