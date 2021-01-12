"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDatepicker = _interopRequireWildcard(require("react-datepicker"));

var _nb = _interopRequireDefault(require("date-fns/locale/nb"));

require("react-datepicker/dist/react-datepicker.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DatePickerSelect = function DatePickerSelect(_ref) {
  var label = _ref.label,
      selectedDate = _ref.selectedDate,
      _onChange = _ref.onChange,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      dateFormat = _ref.dateFormat,
      filterDate = _ref.filterDate;
  (0, _reactDatepicker.registerLocale)('nb', _nb.default);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "custom-material-select "
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "select-label"
  }, label), /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, {
    selected: selectedDate,
    onChange: function onChange(date) {
      return _onChange(date);
    },
    minDate: minDate,
    filterDate: filterDate ? filterDate : null,
    maxDate: maxDate,
    locale: "nb",
    dateFormat: dateFormat
  }));
};

DatePickerSelect.defaultProps = {};
DatePickerSelect.propTypes = {
  label: _propTypes.default.string,
  selectedDate: _propTypes.default.string,
  minDate: _propTypes.default.string,
  maxDate: _propTypes.default.string,
  dateFormat: _propTypes.default.string
};
var _default = DatePickerSelect;
exports.default = _default;