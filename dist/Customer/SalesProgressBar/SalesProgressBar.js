"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SalesProgressBar(_ref) {
  var percentage = _ref.percentage,
      bindingCount = _ref.bindingCount;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "sales__progress my-3"
  }, _react.default.createElement("div", {
    className: "sales__progress--bar progress"
  }, _react.default.createElement("div", {
    className: "progress-bar bg-secondary",
    style: {
      width: "".concat(percentage, "%")
    },
    role: "progressbar",
    "aria-valuenow": "25",
    "aria-valuemin": "0",
    "aria-valuemax": "100"
  })), _react.default.createElement("span", {
    className: "sales__progress--label"
  }, "Allerede ", bindingCount, " har kj\xF8pt")));
}

var _default = SalesProgressBar;
exports.default = _default;