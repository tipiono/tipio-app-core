"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _replaceWithSpace = _interopRequireDefault(require("../../Util/replaceWithSpace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BaseCard = function BaseCard(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "customerSidebarCard",
    id: props.id
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "customerSidebarCard__header"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "customerSidebarCard__header__content"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "customerSidebarCard__header__content--title"
  }, props.title), /*#__PURE__*/_react.default.createElement("p", {
    className: "customerSidebarCard__header__content--subtitle"
  }, props.brand ? props.brand : props.subtitle || '')), props.inventory && props.inventory > 0 && props.inventory <= 10 && !props.expiredTipio ? /*#__PURE__*/_react.default.createElement("p", {
    className: "customerSidebarCard__header__stock"
  }, "Kun ", props.inventory, " igjen") : '', props.vote ? /*#__PURE__*/_react.default.createElement("div", {
    className: "customerSidebarCard__header__cost"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "customerSidebarCard__header__cost--label",
    id: props.marketPriceId
  }, "Markedspris"), /*#__PURE__*/_react.default.createElement("h4", {
    className: "customerSidebarCard__header__cost--price"
  }, (props === null || props === void 0 ? void 0 : props.market_price) && (0, _replaceWithSpace.default)(props === null || props === void 0 ? void 0 : props.market_price), " Kr")) : /*#__PURE__*/_react.default.createElement("div", {
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
    className: "customerSidebarCard__price--sale--label"
  }, "Gruppepris")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "customerSidebarCard__footer"
  }, children));
};

var _default = BaseCard;
exports.default = _default;