"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _BaseCard = _interopRequireDefault(require("./BaseCard"));

var _SecondaryOutlineButton = _interopRequireDefault(require("../../UI/Buttons/SecondaryOutlineButton"));

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
      isIceTipio = _ref.isIceTipio,
      props = _objectWithoutProperties(_ref, ["children", "state", "firstRange", "secondRange", "onShareClick", "onBindClick", "bindingPercentage", "onRestoreClick", "isIceTipio"]);

  return /*#__PURE__*/_react.default.createElement(_BaseCard.default, props, children, props.expiredTipio && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_SecondaryOutlineButton.default, {
    text: 'Gjenopprett',
    onClick: onRestoreClick
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "customerSidebarCard__footer--conditon"
  }, "Dette er ikke bindende")));
};

var _default = BindingCard;
exports.default = _default;