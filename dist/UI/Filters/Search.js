"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FilterSearch = function FilterSearch(_ref) {
  var defaultValue = _ref.defaultValue,
      onSubmit = _ref.onSubmit;
  return _react.default.createElement("div", {
    className: "filterSearch"
  }, _react.default.createElement("svg", {
    className: "filterSearch--icon",
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none"
  }, _react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.46 13.06l5.07 5.08a1 1 0 01-.02 1.37 1 1 0 01-1.43 0L13 14.44a8 8 0 01-4.93 1.7 8.07 8.07 0 118.07-8 8 8 0 01-1.68 4.92zM2.07 8.14a6 6 0 1012 0 6 6 0 00-12 0z",
    fill: "#fff"
  }), _react.default.createElement("mask", {
    id: "prefix__a",
    maskUnits: "userSpaceOnUse",
    x: 0,
    y: 0,
    width: 20,
    height: 20
  }, _react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.46 13.06l5.07 5.08a1 1 0 01-.02 1.37 1 1 0 01-1.43 0L13 14.44a8 8 0 01-4.93 1.7 8.07 8.07 0 118.07-8 8 8 0 01-1.68 4.92zM2.07 8.14a6 6 0 1012 0 6 6 0 00-12 0z",
    fill: "#fff"
  })), _react.default.createElement("g", {
    mask: "url(#prefix__a)"
  }, _react.default.createElement("path", {
    fill: "#8C8F91",
    d: "M-27-25h50v50h-50z"
  }))), _react.default.createElement("input", {
    id: "material-search",
    className: "filterSearch--input",
    type: "text",
    placeholder: "S\xF8k p\xE5 kategori, navn, merke..",
    onKeyUp: function onKeyUp(e) {
      if (e.key === 'Enter') {
        // alert("enter")
        e.preventDefault();
        e.stopPropagation();
        onSubmit(e.target.value);
      }
    },
    defaultValue: defaultValue,
    autocomplete: "off"
  }));
};

var _default = FilterSearch;
exports.default = _default;