"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _BaseCard = _interopRequireDefault(require("./BaseCard"));

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
      onRestoreClick = _ref.onRestoreClick,
      bindCount = _ref.bindCount,
      props = _objectWithoutProperties(_ref, ["children", "state", "firstRange", "secondRange", "onShareClick", "onBindClick", "onRestoreClick", "bindCount"]);

  var isNotActive = true;
  return /*#__PURE__*/_react.default.createElement(_BaseCard.default, props, props.inventory && props.inventory > 0 && props.inventory <= 10 && !props.expiredTipio ? /*#__PURE__*/_react.default.createElement("p", {
    className: "customerSidebarCard__header__stock"
  }, "Kun ", props.inventory, " igjen") : '', /*#__PURE__*/_react.default.createElement("div", {
    className: "customerSidebarCard__price"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "customerSidebarCard__price--cost"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "customerSidebarCard__price--cost--amount"
  }, (props === null || props === void 0 ? void 0 : props.market_price) && (0, _replaceWithSpace.default)(props === null || props === void 0 ? void 0 : props.market_price), " Kr")), /*#__PURE__*/_react.default.createElement("div", {
    className: "customerSidebarCard__price--sale"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "customerSidebarCard__price--sale--amount"
  }, (props === null || props === void 0 ? void 0 : props.price) && (0, _replaceWithSpace.default)(props.price), " Kr"))), props.expiredTipio && /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/_react.default.createElement(_SecondaryOutlineButton.default, {
    text: 'Gjenopprett',
    onClick: onRestoreClick
  })), isNotActive && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null), children);
};

var _default = BindingCard;
exports.default = _default;