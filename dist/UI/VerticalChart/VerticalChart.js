"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactChartjs = require("react-chartjs-2");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VerticalChart = function VerticalChart(props) {
  var dataset1 = props.dataset1,
      dataset2 = props.dataset2,
      labels = props.labels;
  var data = {
    labels: labels,
    datasets: [{
      label: 'Hovedprofukt',
      data: dataset1,
      backgroundColor: '#4ABCAC'
    }, {
      label: 'Mersalg',
      data: dataset2,
      backgroundColor: '#C2E7E2'
    }]
  };
  var options = {
    layout: {
      padding: {
        top: 20
      }
    },
    title: {
      display: false
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          display: false
        },
        gridLines: {
          display: false
        }
      }],
      xAxes: [{
        barPercentage: 0.7,
        gridLines: {
          display: false
        }
      }]
    },
    tooltips: {
      backgroundColor: '#4F2E90',
      enabled: true,
      mode: 'single',
      displayColors: false,
      yAlign: 'bottom',
      xPadding: 10,
      callbacks: {
        title: function title() {
          return;
        },
        label: function label(tooltipItems) {
          return tooltipItems.yLabel;
        }
      }
    }
  };
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactChartjs.Bar, {
    data: data,
    options: options
  }));
};

var _default = VerticalChart;
exports.default = _default;