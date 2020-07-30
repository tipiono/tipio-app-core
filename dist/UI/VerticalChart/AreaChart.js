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
      thirdDatasets = _ref.thirdDatasets,
      placeholder = _ref.placeholder,
      labelPlaceholder = _ref.labelPlaceholder;
  var labels = [];

  if (labelPlaceholder === 'year') {
    labels = ['Q1 20', 'Q2 20', 'Q3 20', 'Q4 20'];
  } else {
    labels = firstDatasets && firstDatasets.map(function (day) {
      return day === null || day === void 0 ? void 0 : day.date;
    });
  }

  var datatests = [{
    label: 'First DataSet',
    data: firstDatasets === null || firstDatasets === void 0 ? void 0 : firstDatasets.map(function (el) {
      return el.result;
    }),
    borderWidth: 2,
    lineTension: 0,
    backgroundColor: 'transparent',
    borderColor: '#C9BFDF'
  }, {
    label: 'Second Dataset',
    data: secondDatasets === null || secondDatasets === void 0 ? void 0 : secondDatasets.map(function (el) {
      return el.result;
    }),
    borderWidth: 2,
    lineTension: 0,
    backgroundColor: 'transparent',
    borderColor: '#4ABCAC'
  }];

  if (thirdDatasets) {
    datatests.push({
      label: 'Third Dataset',
      data: thirdDatasets === null || thirdDatasets === void 0 ? void 0 : thirdDatasets.map(function (el) {
        return el.result;
      }),
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
          beginAtZero: true,
          color: '#8C8F91',
          min: 0,
          display: window.innerWidth >= 540 ? true : false
        },
        gridLines: {
          color: '#F5F5F5',
          display: window.innerWidth >= 540 ? true : false
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          color: '#5C6265',
          callback: function callback(value) {
            if (labelPlaceholder === 'week') {
              return (0, _getDate.default)(value, 'DateName');
            } else if (labelPlaceholder === 'month') {
              return (0, _getDate.default)(value, 'DateMonth');
            } else return value;
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
        title: function title(tooltipItems, data) {
          var title = tooltipItems[0].yLabel;

          if (placeholder) {
            title += ' Kr';
          } else {
            title += '';
          }

          return title;
        },
        label: function label(tooltipItems) {
          display: false;
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
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactChartjs.Line, {
    data: charData,
    options: options
  }));
};

var _default = AreaChart;
exports.default = _default;