"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _BaseCard = _interopRequireDefault(require("./BaseCard"));

var _SecondaryOutlineButton = _interopRequireDefault(require("../../UI/Buttons/SecondaryOutlineButton"));

var _SalesProgressBarTooltip = _interopRequireDefault(require("../SalesProgressBarTooltip/SalesProgressBarTooltip"));

var _ShareButton = _interopRequireDefault(require("./ShareButton"));

var _HorizontalTimeline = _interopRequireDefault(require("../Timelines/HorizontalTimeline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BindingCard = function BindingCard(_ref) {
  var children = _ref.children,
      state = _ref.state,
      firstRange = _ref.firstRange,
      secondRange = _ref.secondRange,
      onShareClick = _ref.onShareClick,
      onBindClick = _ref.onBindClick,
      props = _objectWithoutProperties(_ref, ["children", "state", "firstRange", "secondRange", "onShareClick", "onBindClick"]);

  return _react.default.createElement(_BaseCard.default, props, _react.default.createElement("ul", {
    className: "customerSidebarCard__footer__salePrice"
  }, firstRange ? _react.default.createElement("li", {
    className: "customerSidebarCard__footer__salePrice--minBuyers"
  }, _react.default.createElement("h3", {
    className: "customerSidebarCard__footer__salePrice--minBuyers--price"
  }, firstRange.price, " Kr"), _react.default.createElement("span", {
    className: "customerSidebarCard__footer__salePrice--minBuyers--label"
  }, "Pris fra ", firstRange.from, "-", firstRange.to, " kj\xF8p")) : null, secondRange ? _react.default.createElement("li", {
    className: "customerSidebarCard__footer__salePrice--maxBuyers"
  }, _react.default.createElement("h3", {
    className: "customerSidebarCard__footer__salePrice--maxBuyers--price"
  }, " ", secondRange.price, " Kr"), _react.default.createElement("span", {
    className: "customerSidebarCard__footer__salePrice--maxBuyers--label"
  }, "Pris fra ", secondRange.to, " kj\xF8p")) : null), _react.default.createElement("div", {
    className: "customerSidebarCard__footer--progressBar"
  }, _react.default.createElement(_SalesProgressBarTooltip.default, {
    bindCount: props.bindCount,
    percentage: 50
  })), state !== 'bought' && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_SecondaryOutlineButton.default, {
    text: 'Legg i handlekurv',
    onClick: onBindClick
  })), state === 'bought' && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "customerSidebarCard__footer--action"
  }, _react.default.createElement(_ShareButton.default, {
    onClick: onShareClick
  })), _react.default.createElement("div", {
    className: "customerSidebarCard__footer--timeline"
  }, _react.default.createElement(_HorizontalTimeline.default, null))));
};

var _default = BindingCard;
exports.default = _default;