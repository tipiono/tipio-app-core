"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DisabledButton = function DisabledButton(_ref) {
  var loading = _ref.loading,
      text = _ref.text,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react.default.createElement("button", {
    id: "tipio-join-button",
    type: "button",
    className: "btn btn-secondary btn-lg btn-block",
    onClick: onClick,
    disabled: true
  }, !loading && text, loading && /*#__PURE__*/_react.default.createElement("span", null, ' ', /*#__PURE__*/_react.default.createElement("span", {
    className: "spinner-border spinner-border-sm",
    role: "status",
    "aria-hidden": "true"
  }), ' ', "Loading..."));
};

DisabledButton.defaultProps = {
  loading: false
};
DisabledButton.propTypes = {
  loading: _propTypes.default.bool,
  text: _propTypes.default.string.isRequired,
  children: _propTypes.default.instanceOf(Array).isRequired
};
var _default = DisabledButton;
exports.default = _default;