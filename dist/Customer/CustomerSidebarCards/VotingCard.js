"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _BaseCard = _interopRequireDefault(require("./BaseCard"));

var _ShareButton = _interopRequireDefault(require("./ShareButton"));

var _SecondaryOutlineButton = _interopRequireDefault(require("../../UI/Buttons/SecondaryOutlineButton"));

var _GrayOutlineButton = _interopRequireDefault(require("../../UI/Buttons/GrayOutlineButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var VotingCard = function VotingCard(_ref) {
  var state = _ref.state,
      props = _objectWithoutProperties(_ref, ["state"]);

  return _react.default.createElement(_BaseCard.default, props, state === 'display_interested_button' && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "customerSidebarCard__footer--action"
  }, _react.default.createElement(_SecondaryOutlineButton.default, {
    text: 'Meld interesse',
    onClick: props.voteOnClick,
    loading: props.voteLoading,
    id: props.id
  })), _react.default.createElement("p", {
    className: "customerSidebarCard__footer--alert"
  }, "Dette er ikke bindende")), state === 'interested' && _react.default.createElement("div", {
    className: "customerSidebarCard__footer--action"
  }, _react.default.createElement(_ShareButton.default, {
    onClick: props.shareOnClick
  }), _react.default.createElement(_GrayOutlineButton.default, {
    text: "Meldt av interesse",
    onClick: props.notInterestedOnClick
  })), _react.default.createElement("p", {
    className: "customerSidebarCard__footer--interestedCounter"
  }, "Allerede ", props.meta.joined_count, " Interesserte!"));
};

var _default = VotingCard;
exports.default = _default;