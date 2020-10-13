"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ContentSpinner(_ref) {
  var _ref$pt = _ref.pt,
      pt = _ref$pt === void 0 ? true : _ref$pt;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: (0, _classnames.default)('text-center', {
      'pt-6': pt
    })
  }, _react.default.createElement("span", {
    className: "spinner-border text-primary",
    role: "status",
    "aria-hidden": "true"
  })));
}

var _default = ContentSpinner;
exports.default = _default;