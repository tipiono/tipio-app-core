"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _creatable = _interopRequireDefault(require("react-select/creatable"));

var _ErrorMessage = _interopRequireDefault(require("../ErrorMessage/ErrorMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Select(_ref) {
  var placeholder = _ref.placeholder,
      options = _ref.options,
      label = _ref.label,
      onChange = _ref.onChange,
      defaultValue = _ref.defaultValue,
      displayErrors = _ref.displayErrors,
      errors = _ref.errors,
      name = _ref.name;

  //const [value, setValue] = useState({ value: defaultValue, label: defaultValue} || false);
  var _onChange = function _onChange(v) {
    onChange(v || {
      value: 1,
      label: 1
    });
  };

  return _react["default"].createElement("div", {
    className: "custom-material-select"
  }, _react["default"].createElement("label", {
    className: "select-label"
  }, label), _react["default"].createElement(_creatable["default"], {
    isClearable: true,
    value: {
      value: defaultValue,
      label: defaultValue
    },
    onChange: _onChange,
    options: options.map(function (x) {
      return {
        value: x,
        label: x
      };
    }),
    placeholder: placeholder || '-',
    formatCreateLabel: function formatCreateLabel(inputValue) {
      return inputValue;
    }
  }), displayErrors && errors && errors[name] && _react["default"].createElement(_ErrorMessage["default"], {
    content: errors[name].message || errors[name],
    color: 'bg-red'
  }));
}

Select.defaultProps = {};
Select.propTypes = {
  value: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  options: _propTypes["default"].array,
  label: _propTypes["default"].string
};
var _default = Select;
exports["default"] = _default;