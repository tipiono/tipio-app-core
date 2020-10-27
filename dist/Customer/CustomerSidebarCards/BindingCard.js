"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _BaseCard = _interopRequireDefault(require("./BaseCard"));

var _classnames = _interopRequireDefault(require("classnames"));

var _SalesProgressBarTooltip = _interopRequireDefault(require("../SalesProgressBarTooltip/SalesProgressBarTooltip"));

var _ShareButton = _interopRequireDefault(require("./ShareButton"));

var _HorizontalTimeline = _interopRequireDefault(require("../Timelines/HorizontalTimeline"));

var _SecondaryButton = _interopRequireDefault(require("../../UI/Buttons/SecondaryButton"));

var _SecondaryOutlineButton = _interopRequireDefault(require("../../UI/Buttons/SecondaryOutlineButton"));

var _replaceWithSpace = _interopRequireDefault(require("../../Util/replaceWithSpace"));

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
      bindingPercentage = _ref.bindingPercentage,
      onRestoreClick = _ref.onRestoreClick,
      props = _objectWithoutProperties(_ref, ["children", "state", "firstRange", "secondRange", "onShareClick", "onBindClick", "bindingPercentage", "onRestoreClick"]);

  return /*#__PURE__*/_react.default.createElement(_BaseCard.default, props, props.expiredTipio && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("ul", {
    className: "customerSidebarCard__footer__salePrice"
  }, firstRange ? /*#__PURE__*/_react.default.createElement("li", {
    className: "customerSidebarCard__footer__salePrice--minBuyers",
    id: props.minimumByersId
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: (0, _classnames.default)('customerSidebarCard__footer__salePrice--minBuyers--price', {
      'customerSidebarCard__footer__salePrice--minBuyers--priceSmall': ('' + firstRange.price).length >= 5
    })
  }, (firstRange === null || firstRange === void 0 ? void 0 : firstRange.price) && (0, _replaceWithSpace.default)(firstRange === null || firstRange === void 0 ? void 0 : firstRange.price), " Kr"), /*#__PURE__*/_react.default.createElement("span", {
    className: "customerSidebarCard__footer__salePrice--minBuyers--label"
  }, "Pris fra ", firstRange.from, "-", firstRange.to, " kj\xF8p")) : null, secondRange ? /*#__PURE__*/_react.default.createElement("li", {
    className: "customerSidebarCard__footer__salePrice--maxBuyers"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: (0, _classnames.default)('customerSidebarCard__footer__salePrice--maxBuyers--price', {
      'customerSidebarCard__footer__salePrice--maxBuyers--priceSmall': ('' + secondRange.price).length >= 5
    })
  }, ' ', (secondRange === null || secondRange === void 0 ? void 0 : secondRange.price) && (0, _replaceWithSpace.default)(secondRange === null || secondRange === void 0 ? void 0 : secondRange.price), " Kr"), /*#__PURE__*/_react.default.createElement("span", {
    className: "customerSidebarCard__footer__salePrice--maxBuyers--label"
  }, "Pris fra ", secondRange.from, "-", secondRange.to, " kj\xF8p")) : null), /*#__PURE__*/_react.default.createElement("div", {
    className: "customerSidebarCard__footer--progressBar"
  }, /*#__PURE__*/_react.default.createElement(_SalesProgressBarTooltip.default, {
    bindCount: props.bindCount,
    percentage: bindingPercentage
  }))), children, state === 'bought' && !props.expiredTipio && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "customerSidebarCard__footer--action"
  }, /*#__PURE__*/_react.default.createElement(_ShareButton.default, {
    onClick: onShareClick
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "customerSidebarCard__footer--timeline"
  }, /*#__PURE__*/_react.default.createElement(_HorizontalTimeline.default, props))), props.expiredTipio && /*#__PURE__*/_react.default.createElement(_SecondaryOutlineButton.default, {
    text: 'Gjenopprett',
    onClick: onRestoreClick
  }));
};

var _default = BindingCard;
exports.default = _default;