"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactChartjs = require("react-chartjs-2");

require("chartjs-plugin-annotation");

var _getDate = _interopRequireDefault(require("../../Util/getDate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VerticalChart = function VerticalChart(_ref) {
  var tipio = _ref.tipio,
      additionalSales = _ref.additionalSales,
      showYears = _ref.showYears,
      showGridLines = _ref.showGridLines,
      isAdmin = _ref.isAdmin;
  var labels = [];
  var dataset1 = [];
  var dataset2 = [];
  labels = additionalSales && additionalSales.map(function (day) {
    return day.date;
  });
  dataset1 = tipio && tipio.map(function (el) {
    if (isAdmin) {
      return el.result;
    }

    return el.revenue;
  });
  dataset2 = additionalSales && additionalSales.map(function (el) {
    if (isAdmin) {
      return el.result;
    }

    return el.revenue;
  });
  var charData = {
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
          display: showGridLines ? window.innerWidth >= 540 ? true : false : false,
          color: '#8C8F91'
        },
        gridLines: {
          display: showGridLines ? window.innerWidth >= 540 ? true : false : false,
          color: '#F5F5F5'
        }
      }],
      xAxes: [{
        barPercentage: 0.7,
        gridLines: {
          display: false
        },
        ticks: {
          color: '#5C6265',
          callback: function callback(value) {
            if (showYears) {
              return (0, _getDate.default)(value, 'Month');
            } else {
              return (0, _getDate.default)(value, 'DateName');
            }
          }
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
        title: function title(tooltipItems) {
          return tooltipItems[0].yLabel;
        },
        label: function label(tooltipItems) {
          if (showYears) {
            return (0, _getDate.default)(tooltipItems.xLabel, 'MonthYear');
          } else {
            return (0, _getDate.default)(tooltipItems.xLabel, 'DateName') + ' ' + (0, _getDate.default)(tooltipItems.xLabel, 'DateMonth');
          }
        }
      }
    },
    annotation: {
      annotations: [{
        type: 'line',
        mode: 'horizontal',
        scaleID: 'y-axis-0',
        value: 0,
        borderColor: '#C9CFD3',
        borderWidth: 1
      }]
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactChartjs.Bar, {
    data: charData,
    options: options
  }));
};

var _default = VerticalChart;
exports.default = _default;