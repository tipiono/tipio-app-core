"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./Button.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var loading = _ref.loading,
      text = _ref.text,
      onClick = _ref.onClick;
  return _react.default.createElement("button", {
    id: "tipio-join-button",
    type: "button",
    disabled: loading,
    className: "btn btn-secondary btn-block btn-lg",
    onClick: onClick
  }, !loading && text, loading && _react.default.createElement("span", null, ' ', _react.default.createElement("span", {
    className: "spinner-border spinner-border-sm",
    role: "status",
    "aria-hidden": "true"
  }), ' ', "Loading..."));
};

Button.defaultProps = {
  loading: false
};
Button.propTypes = {
  loading: _propTypes.default.bool,
  text: _propTypes.default.string.isRequired,
  children: _propTypes.default.instanceOf(Array).isRequired
};
var _default = Button;
exports.default = _default;