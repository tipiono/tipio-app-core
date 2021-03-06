"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactChartjs = require("react-chartjs-2");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CircleChart = function CircleChart(_ref) {
  var percentage = _ref.percentage;
  var data = {
    labels: ['Man', 'Tir'],
    datasets: [{
      data: [percentage, 100 - percentage],
      backgroundColor: ['#4ABCAC'],
      borderWidth: 1
    }]
  };
  var options = {
    cutoutPercentage: 80,
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactChartjs.Doughnut, {
    data: data,
    options: options
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "donut-inner"
  }, /*#__PURE__*/_react.default.createElement("span", null, percentage, "%"))));
};

var _default = CircleChart;
exports.default = _default;