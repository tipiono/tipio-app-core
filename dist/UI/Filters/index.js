"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var f = {
  Newest: 1,
  Popular: 2
};

var Filters = function Filters(_ref) {
  var onFilterChange = _ref.onFilterChange,
      onFilterClick = _ref.onFilterClick,
      active = _ref.active;

  var _useState = (0, _react.useState)('Flere filtere'),
      _useState2 = _slicedToArray(_useState, 2),
      title = _useState2[0],
      setTitle = _useState2[1];

  (0, _react.useEffect)(function () {
    if (window.innerWidth <= 540) {
      setTitle('Filter');
    } else {
      setTitle('Flere filtere');
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "filters"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('filters__item', {
      filter__active: 'latest' === active
    }),
    onClick: function onClick(e) {
      e.preventDefault();
      onFilterChange('latest');
    }
  }, "Nyeste"), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('filters__item', {
      filter__active: 'popular' === active
    }),
    onClick: function onClick(e) {
      e.preventDefault();
      onFilterChange('popular');
    }
  }, "Popul\xE6re"), /*#__PURE__*/_react.default.createElement("div", {
    className: "filters__item",
    onClick: function onClick(e) {
      e.preventDefault();
      onFilterClick();
    }
  }, /*#__PURE__*/_react.default.createElement("svg", {
    width: 11,
    height: 9,
    viewBox: "0 0 11 9",
    fill: "none"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M10.199 2.714H3.59M10.199 6.926H1",
    stroke: "#4F2E90",
    strokeWidth: 0.653,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.88 2.713c0 .83-.645 1.502-1.44 1.502-.795 0-1.44-.672-1.44-1.502S1.645 1.21 2.44 1.21c.795 0 1.44.673 1.44 1.503z",
    fill: "#FEFEFE"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.88 2.713c0 .83-.645 1.502-1.44 1.502-.795 0-1.44-.672-1.44-1.502S1.645 1.21 2.44 1.21c.795 0 1.44.673 1.44 1.503z",
    fill: "#ECE9F3",
    stroke: "#4F2E90",
    strokeWidth: 0.599,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.039 6.925c0 .83-.645 1.503-1.44 1.503-.795 0-1.44-.673-1.44-1.503 0-.83.645-1.502 1.44-1.502.795 0 1.44.673 1.44 1.502z",
    fill: "#FEFEFE"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.039 6.925c0 .83-.645 1.503-1.44 1.503-.795 0-1.44-.673-1.44-1.503 0-.83.645-1.502 1.44-1.502.795 0 1.44.673 1.44 1.502z",
    fill: "#ECE9F3",
    stroke: "#4F2E90",
    strokeWidth: 0.599,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), title));
};

var _default = Filters;
exports.default = _default;