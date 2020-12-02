"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SalesProgressBar(_ref) {
  var percentage = _ref.percentage,
      bindingCount = _ref.bindingCount,
      totalCount = _ref.totalCount;
  var inactiveWidth = 100 - percentage;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "sales__progress"
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ' ', /*#__PURE__*/_react.default.createElement("div", {
    className: "sales__progress--bar progress"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "progress-bar bg-secondary",
    style: {
      width: "".concat(percentage, "%")
    },
    role: "progressbar",
    "aria-valuenow": "25",
    "aria-valuemin": "0",
    "aria-valuemax": "100"
  }))), /*#__PURE__*/_react.default.createElement("span", {
    className: "sales__progress--label"
  }, bindingCount, " av ", totalCount, " er med")));
}

var _default = SalesProgressBar;
exports.default = _default;