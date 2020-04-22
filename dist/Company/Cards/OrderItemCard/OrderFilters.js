"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ = require("../../..");

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SortIcon = function SortIcon() {
  return _react.default.createElement("svg", {
    width: 13,
    height: 9
  }, _react.default.createElement("path", {
    d: "M0 1.96L1.023 1 6.5 6.09 11.977 1 13 1.96 6.5 8z",
    fill: "#5C6265",
    stroke: "#5C6265",
    strokeWidth: 0.788,
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var OrderFilters = function OrderFilters(props) {
  var _useState = (0, _react.useState)('Leveringsstatus'),
      _useState2 = _slicedToArray(_useState, 2),
      title = _useState2[0],
      setTitle = _useState2[1];

  (0, _react.useEffect)(function () {
    if (window.innerWidth <= 768) {
      setTitle('Status');
    } else {
      setTitle('Leveringsstatus');
    }
  }, []);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "orderFilters"
  }, _react.default.createElement("div", {
    className: (0, _classnames.default)('orderFilters--dropdown', {
      orderFilters__active: props.visible
    })
  }, _react.default.createElement("span", {
    className: "orderFilters--dropdown--icon"
  }, _react.default.createElement("svg", {
    className: "mr-2",
    width: 27,
    height: 24
  }, _react.default.createElement("path", {
    d: "M20.8 22.6A1.8 1.8 0 1020.8 19 1.8 1.8 0 0020.8 22.6h0zm-14.4 0A1.8 1.8 0 106.4 19 1.8 1.8 0 006.4 22.6h0zm-4.2-7.2h14.4V5.2a3 3 0 00-3-3H5.2a3 3 0 00-3 3v10.2zm15.6-4.8h6.934a2.982 2.982 0 00-.366-.607l-2.36-3.035A2.997 2.997 0 0019.64 5.8H17.8v4.8zm0 4.8H25v-3.565-.035h-7.2v3.6zm5.94 6a3.002 3.002 0 01-5.88 0H9.34a3.002 3.002 0 01-5.88 0H2.8A1.8 1.8 0 011 19.6V5.2A4.2 4.2 0 015.2 1h8.4a4.2 4.2 0 014.157 3.6h1.883c1.296 0 2.519.598 3.314 1.622l2.362 3.034c.572.737.884 1.646.884 2.58V19.6a1.8 1.8 0 01-1.8 1.8h-.66zm0-1.2h.66c.331 0 .6-.27.6-.6v-3H2.2v3c0 .33.269.6.6.6h.66a3 3 0 015.88 0h8.52a3 3 0 015.88 0h0z",
    stroke: "#5C6265",
    strokeWidth: 0.2,
    fill: "#5C6265",
    fillRule: "evenodd"
  }))), _react.default.createElement(_.DropDown, _extends({
    title: title
  }, props, {
    showCloseIcon: true
  }), _react.default.createElement(_.DropDownItem, null, _react.default.createElement("a", {
    href: "/",
    onClick: function onClick(e) {
      e.preventDefault();
      props.onClick(1);
    }
  }, "Merk alle som levert")), _react.default.createElement(_.DropDownItem, null, _react.default.createElement("a", {
    href: "/",
    onClick: function onClick(e) {
      e.preventDefault();
      props.onClick(2);
    }
  }, "Merk alle som ikke levert")))), _react.default.createElement("div", {
    className: "w-25"
  }, _react.default.createElement("a", {
    className: (0, _classnames.default)('orderFilters--sort', {
      active: props.order_by === 'full_name'
    }),
    href: "",
    onClick: function onClick(e) {
      e.preventDefault();
      props.orderByOnClick('full_name');
    }
  }, _react.default.createElement("span", {
    className: "mr-2"
  }, "Navn"), _react.default.createElement(SortIcon, null))), _react.default.createElement("div", {
    className: "orderFilters__addrese w-25"
  }, "Adresse"), _react.default.createElement("div", {
    className: "w-25"
  }, _react.default.createElement("a", {
    className: (0, _classnames.default)('orderFilters--sort lastElement', {
      active: props.order_by === 'zip_code'
    }),
    href: "",
    onClick: function onClick(e) {
      e.preventDefault();
      props.orderByOnClick('zip_code');
    }
  }, _react.default.createElement("span", {
    className: "mr-2"
  }, "Post sted"), _react.default.createElement(SortIcon, null)))));
};

var _default = OrderFilters;
exports.default = _default;