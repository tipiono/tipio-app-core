"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactChartjs = require("react-chartjs-2");

var _getDate = _interopRequireDefault(require("../../Util/getDate"));

require("chartjs-plugin-annotation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AreaChart = function AreaChart(_ref) {
  var firstDatasets = _ref.firstDatasets,
      secondDatasets = _ref.secondDatasets,
      thirdDatasets = _ref.thirdDatasets;
  var dataset3 = [250, 520, 290, 940];
  var labels = [];
  labels = firstDatasets && firstDatasets.map(function (day) {
    return day.date;
  });
  var datatests = [{
    label: 'First DataSet',
    data: secondDatasets === null || secondDatasets === void 0 ? void 0 : secondDatasets.map(function (el) {
      return el.revenue;
    }),
    borderWidth: 2,
    lineTension: 0,
    backgroundColor: 'transparent',
    borderColor: '#C9BFDF'
  }, {
    label: 'Second Dataset',
    data: firstDatasets === null || firstDatasets === void 0 ? void 0 : firstDatasets.map(function (el) {
      return el.revenue;
    }),
    borderWidth: 2,
    lineTension: 0,
    backgroundColor: 'transparent',
    borderColor: '#4ABCAC'
  }];

  if (thirdDatasets) {
    datatests.push({
      label: 'Third Dataset',
      data: dataset3,
      borderWidth: 2,
      lineTension: 0,
      backgroundColor: 'transparent',
      borderColor: '#C2E7E2'
    });
  }

  var charData = {
    labels: labels,
    datasets: datatests
  };
  var options = {
    elements: {
      point: {
        radius: 2
      }
    },
    showLines: true,
    spanGaps: true,
    layout: {
      padding: {
        top: 55
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
          beginAtZero: false,
          min: 0,
          display: true,
          color: '#8C8F91'
        },
        gridLines: {
          display: true,
          color: '#F5F5F5'
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          color: '#5C6265'
        }
      }]
    },
    tooltips: {
      backgroundColor: '#4F2E90',
      enabled: true,
      mode: 'single',
      displayColors: false,
      yAlign: 'bottom',
      xAlign: 'center',
      xPadding: 20,
      titleAlign: 'center',
      bodyAlign: 'center',
      callbacks: {
        title: function title(tooltipItems, data) {
          return tooltipItems[0].yLabel;
        },
        label: function label(tooltipItems) {
          return (0, _getDate.default)(tooltipItems.xLabel, 'DateName') + ' ' + (0, _getDate.default)(tooltipItems.xLabel, 'DateMonth');
        }
      }
    }
  };
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactChartjs.Line, {
    data: charData,
    options: options
  }));
};

var _default = AreaChart;
exports.default = _default;