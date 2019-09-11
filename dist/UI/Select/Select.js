"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSelect = _interopRequireDefault(require("react-select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Select(_ref) {
  var placeholder = _ref.placeholder,
      options = _ref.options,
      label = _ref.label;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _onChange = function _onChange(v) {
    setValue(v);
  };

  return _react.default.createElement("div", {
    className: "custom-material-select "
  }, _react.default.createElement("label", {
    className: "select-label"
  }, label), _react.default.createElement(_reactSelect.default, {
    value: value,
    onChange: _onChange,
    options: options.map(function (x) {
      return {
        value: x,
        label: x
      };
    }),
    placeholder: placeholder || '-',
    isClearable: false
  }));
}

Select.defaultProps = {};
Select.propTypes = {
  value: _propTypes.default.string.isRequired,
  placeholder: _propTypes.default.string.isRequired,
  options: _propTypes.default.array.isRequired,
  label: _propTypes.default.string.isRequired
};
var _default = Select;
exports.default = _default;