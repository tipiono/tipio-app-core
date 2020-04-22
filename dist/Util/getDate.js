"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function getDate(date, type) {
  var dateStr = new Date(date);
  var day = dateStr.getDate();
  var dayName = dateStr.toLocaleDateString('nb-NB', {
    weekday: 'long'
  }).substring(0, 3);
  var month = dateStr.toLocaleDateString('nb-NB', {
    month: 'long'
  }).substring(0, 3);

  if (type === 'DateName') {
    return dayName.charAt(0).toUpperCase() + dayName.slice(1);
  }

  if (type === 'DateMonth') {
    return day + '. ' + (month.substring(0, 3).charAt(0).toUpperCase() + month.slice(1));
  }

  if (type === 'MonthYear') {
    return month.charAt(0).toUpperCase() + month.slice(1) + ' ' + dateStr.getFullYear();
  }

  if (type === 'Month') {
    return month.charAt(0).toUpperCase() + month.slice(1);
  }
}

var _default = getDate;
exports["default"] = _default;