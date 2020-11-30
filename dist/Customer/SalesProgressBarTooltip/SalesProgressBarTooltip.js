"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SalesProgressBarTooltip(_ref) {
  var percentage = _ref.percentage,
      bindCount = _ref.bindCount,
      totalCount = _ref.totalCount;
  var inactiveWidth = 100 - percentage;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ' ', /*#__PURE__*/_react.default.createElement("div", {
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
  }), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      width: "".concat(inactiveWidth, "%")
    },
    className: "tooltip-progressbar d-flex justify-content-end"
  })), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      marginTop: "-10px"
    },
    className: "tooltip-progressbar d-flex justify-content-end"
  }, ' ', /*#__PURE__*/_react.default.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: 7,
    cy: 7,
    r: 7,
    fill: "#F5F5F5"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M9.787 3.696L6.075 8.393l-1.7-1.668a.515.515 0 10-.72.735l2.109 2.07a.515.515 0 00.764-.05l4.067-5.146a.515.515 0 10-.808-.638z",
    fill: "#fff"
  })))), bindCount > 0 && /*#__PURE__*/_react.default.createElement("div", {
    className: "sales__progress--tooltip middle"
  }, /*#__PURE__*/_react.default.createElement("span", null, bindCount, "/", totalCount, " er med!")));
}

var _default = SalesProgressBarTooltip;
exports.default = _default;