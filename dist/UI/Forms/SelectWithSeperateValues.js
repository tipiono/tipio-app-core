"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSelect = _interopRequireDefault(require("react-select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function SelectWithSeperateValues(_ref) {
  var placeholder = _ref.placeholder,
      options = _ref.options,
      label = _ref.label,
      onChange = _ref.onChange,
      defaultValue = _ref.defaultValue,
      _ref$YourOption = _ref.YourOption,
      YourOption = _ref$YourOption === void 0 ? function (_) {
    return _react.default.createElement(_react.default.Fragment, null);
  } : _ref$YourOption,
      _ref$customOption = _ref.customOption,
      customOption = _ref$customOption === void 0 ? false : _ref$customOption;

  var _useState = (0, _react.useState)({
    value: defaultValue,
    label: defaultValue
  } || false),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _onChange = function _onChange(v) {
    setValue(v);
    onChange(v);
  };

  var MyOption = function MyOption(props) {
    var innerProps = props.innerProps,
        innerRef = props.innerRef,
        data = props.data,
        isFocused = props.isFocused;
    return _react.default.createElement("div", _extends({
      ref: innerRef
    }, innerProps, {
      style: {
        backgroundColor: isFocused ? '#f5f5f5' : 'inherit'
      }
    }), _react.default.createElement(YourOption, {
      data: data
    }));
  };

  return _react.default.createElement("div", {
    className: "custom-material-select"
  }, _react.default.createElement("label", {
    className: "select-label"
  }, label), _react.default.createElement(_reactSelect.default, {
    value: value,
    onChange: _onChange,
    options: options,
    components: customOption ? {
      Option: MyOption
    } : {},
    placeholder: placeholder || '-',
    isClearable: false
  }));
}

SelectWithSeperateValues.propTypes = {
  value: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  options: _propTypes.default.array.isRequired,
  label: _propTypes.default.string.isRequired
};
var _default = SelectWithSeperateValues;
exports.default = _default;