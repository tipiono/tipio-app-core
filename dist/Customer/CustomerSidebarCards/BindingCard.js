"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _BaseCard = _interopRequireDefault(require("./BaseCard"));

var _SalesProgressBarTooltip = _interopRequireDefault(require("../SalesProgressBarTooltip/SalesProgressBarTooltip"));

var _ShareButton = _interopRequireDefault(require("./ShareButton"));

var _HorizontalTimeline = _interopRequireDefault(require("../Timelines/HorizontalTimeline"));

var _SecondaryButton = _interopRequireDefault(require("../../UI/Buttons/SecondaryButton"));

var _SecondaryOutlineButton = _interopRequireDefault(require("../../UI/Buttons/SecondaryOutlineButton"));

var _reactSelect = _interopRequireDefault(require("react-select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BindingCard = function BindingCard(_ref) {
  var children = _ref.children,
      state = _ref.state,
      firstRange = _ref.firstRange,
      secondRange = _ref.secondRange,
      onShareClick = _ref.onShareClick,
      onBindClick = _ref.onBindClick,
      bindingPercentage = _ref.bindingPercentage,
      onRestoreClick = _ref.onRestoreClick,
      props = _objectWithoutProperties(_ref, ["children", "state", "firstRange", "secondRange", "onShareClick", "onBindClick", "bindingPercentage", "onRestoreClick"]);

  var _useState = (0, _react.useState)({
    value: 1,
    label: 1
  } || false),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _onChange = function _onChange(v) {
    console.log(v);
    setValue(v); // onChange(v);
  };

  return _react.default.createElement(_BaseCard.default, props, _react.default.createElement("ul", {
    className: "customerSidebarCard__footer__salePrice"
  }, firstRange ? _react.default.createElement("li", {
    className: "customerSidebarCard__footer__salePrice--minBuyers",
    id: props.minimumByersId
  }, _react.default.createElement("h3", {
    className: "customerSidebarCard__footer__salePrice--minBuyers--price"
  }, firstRange.price, " Kr"), _react.default.createElement("span", {
    className: "customerSidebarCard__footer__salePrice--minBuyers--label"
  }, "Pris fra ", firstRange.from, "-", firstRange.to, " kj\xF8p")) : null, secondRange ? _react.default.createElement("li", {
    className: "customerSidebarCard__footer__salePrice--maxBuyers"
  }, _react.default.createElement("h3", {
    className: "customerSidebarCard__footer__salePrice--maxBuyers--price"
  }, ' ', secondRange.price, " Kr"), _react.default.createElement("span", {
    className: "customerSidebarCard__footer__salePrice--maxBuyers--label"
  }, "Pris fra ", secondRange.from, "-", secondRange.to, " kj\xF8p")) : null), props.bindCount > 0 && _react.default.createElement("div", {
    className: "customerSidebarCard__footer--progressBar"
  }, _react.default.createElement(_SalesProgressBarTooltip.default, {
    bindCount: props.bindCount,
    percentage: bindingPercentage
  })), children, state !== 'bought' && !props.expiredTipio && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_SecondaryButton.default, {
    text: 'Legg i handlekurv',
    onClick: onBindClick
  })), state === 'bought' && !props.expiredTipio && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "customerSidebarCard__footer--action"
  }, _react.default.createElement(_ShareButton.default, {
    onClick: onShareClick
  })), _react.default.createElement("div", {
    className: "customerSidebarCard__footer--timeline"
  }, _react.default.createElement(_HorizontalTimeline.default, props))), props.expiredTipio && _react.default.createElement(_SecondaryOutlineButton.default, {
    text: 'Gjenopprett',
    onClick: onRestoreClick
  }));
};

var _default = BindingCard;
exports.default = _default;