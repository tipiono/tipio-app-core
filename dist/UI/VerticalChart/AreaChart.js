"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactChartjs = require("react-chartjs-2");

var _getDate = _interopRequireDefault(require("../../Util/getDate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AreaChart = function AreaChart(_ref) {
  var tipio = _ref.tipio,
      additionalSales = _ref.additionalSales;
  var labels = [];
  var dataset1 = [];
  var dataset2 = [];
  labels = tipio.map(function (day) {
    return day.date;
  });
  dataset1 = tipio.map(function (el) {
    return el.count;
  });
  dataset2 = additionalSales.map(function (el) {
    return el.count;
  });
  var charData = {
    labels: labels,
    datasets: [{
      label: 'Mergsalg',
      data: dataset2,
      backgroundColor: '#E2E7EF',
      borderColor: '#C9BFDF'
    }, {
      label: 'Hovedprofukt',
      data: dataset1,
      backgroundColor: '#E0F3E0',
      borderColor: '#4ABCAC'
    }]
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
          display: false
        },
        gridLines: {
          display: false
        }
      }],
      xAxes: [{
        ticks: {
          autoSkip: true,
          userCallback: function userCallback(item, index) {
            if (index === 4) return (0, _getDate.default)(item, 'DateMonth');
            if (index === 9) return (0, _getDate.default)(item, 'DateMonth');
            if (index === 14) return (0, _getDate.default)(item, 'DateMonth');
            if (index === 19) return (0, _getDate.default)(item, 'DateMonth');
            if (index === 24) return (0, _getDate.default)(item, 'DateMonth');
            if (index === 29) return (0, _getDate.default)(item, 'DateMonth');
          }
        },
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