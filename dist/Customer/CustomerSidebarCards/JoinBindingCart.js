"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _BaseCard = _interopRequireDefault(require("./BaseCard"));

var _SalesProgressBarTooltip = _interopRequireDefault(require("../SalesProgressBarTooltip/SalesProgressBarTooltip"));

var _replaceWithSpace = _interopRequireDefault(require("../../Util/replaceWithSpace"));

var _calculateDiscountPercentage = _interopRequireDefault(require("../../Util/calculateDiscountPercentage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var JoinBindingCard = function JoinBindingCard(_ref) {
  var children = _ref.children,
      maxParticipantsRequired = _ref.maxParticipantsRequired,
      joinCount = _ref.joinCount,
      props = _objectWithoutProperties(_ref, ["children", "maxParticipantsRequired", "joinCount"]);

  var percentage = 100 + (0, _calculateDiscountPercentage.default)(maxParticipantsRequired, joinCount);
  return /*#__PURE__*/_react.default.createElement(_BaseCard.default, props, /*#__PURE__*/_react.default.createElement("div", {
    className: "customerSidebarCard__price"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "customerSidebarCard__price--cost"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "customerSidebarCard__price--cost--amount"
  }, (props === null || props === void 0 ? void 0 : props.market_price) && (0, _replaceWithSpace.default)(props === null || props === void 0 ? void 0 : props.market_price), " Kr"), /*#__PURE__*/_react.default.createElement("p", {
    className: "customerSidebarCard__price--cost--label"
  }, "F\xF8rpris")), /*#__PURE__*/_react.default.createElement("div", {
    className: "customerSidebarCard__price--sale"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "customerSidebarCard__price--sale--amount"
  }, (props === null || props === void 0 ? void 0 : props.price) && (0, _replaceWithSpace.default)(props.price), " Kr"), /*#__PURE__*/_react.default.createElement("p", {
    className: "customerSidebarCard__price--cost--label"
  }, "Gruppepris"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "customerSidebarCard__footer--progressBar"
  }, /*#__PURE__*/_react.default.createElement(_SalesProgressBarTooltip.default, {
    bindCount: joinCount,
    percentage: percentage,
    totalCount: maxParticipantsRequired
  })), children);
};

var _default = JoinBindingCard;
exports.default = _default;