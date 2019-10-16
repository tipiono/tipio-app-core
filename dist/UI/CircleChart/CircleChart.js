"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CircleChart = function CircleChart() {
  return _react.default.createElement("div", {
    className: "set-size charts-container"
  }, _react.default.createElement("div", {
    className: "pie-wrapper progress-45 style-2"
  }, _react.default.createElement("span", {
    className: "label"
  }, "45%"), _react.default.createElement("div", {
    className: "pie"
  }, _react.default.createElement("div", {
    className: "left-side half-circle"
  }), _react.default.createElement("div", {
    className: "right-side half-circle"
  })), _react.default.createElement("div", {
    className: "shadow"
  })));
};

var _default = CircleChart;
exports.default = _default;