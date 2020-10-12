"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var FilterSearch = function FilterSearch(_ref) {
  var defaultValue = _ref.defaultValue,
      onSubmit = _ref.onSubmit;

  var _useState = (0, _react.useState)(defaultValue),
      _useState2 = _slicedToArray(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  (0, _react.useEffect)(function () {
    if (inputValue !== defaultValue) {
      setInputValue(defaultValue);
    }
  }, [defaultValue]);

  var _onKeyUp = function _onKeyUp(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      onSubmit(e.target.value);
    }
  };

  var _onChange = function _onChange(e) {
    setInputValue(e.target.value);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "filterSearch"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: "filterSearch--icon",
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.46 13.06l5.07 5.08a1 1 0 01-.02 1.37 1 1 0 01-1.43 0L13 14.44a8 8 0 01-4.93 1.7 8.07 8.07 0 118.07-8 8 8 0 01-1.68 4.92zM2.07 8.14a6 6 0 1012 0 6 6 0 00-12 0z",
    fill: "#fff"
  }), /*#__PURE__*/_react.default.createElement("mask", {
    id: "prefix__a",
    maskUnits: "userSpaceOnUse",
    x: 0,
    y: 0,
    width: 20,
    height: 20
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.46 13.06l5.07 5.08a1 1 0 01-.02 1.37 1 1 0 01-1.43 0L13 14.44a8 8 0 01-4.93 1.7 8.07 8.07 0 118.07-8 8 8 0 01-1.68 4.92zM2.07 8.14a6 6 0 1012 0 6 6 0 00-12 0z",
    fill: "#fff"
  })), /*#__PURE__*/_react.default.createElement("g", {
    mask: "url(#prefix__a)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#8C8F91",
    d: "M-27-25h50v50h-50z"
  }))), /*#__PURE__*/_react.default.createElement("input", {
    id: "material-search",
    className: "filterSearch--input",
    type: "text",
    placeholder: "S\xF8k p\xE5 kategori, navn, merke..",
    value: inputValue || '',
    onChange: _onChange,
    onKeyUp: _onKeyUp,
    autoComplete: "off"
  }));
};

var _default = FilterSearch;
exports.default = _default;