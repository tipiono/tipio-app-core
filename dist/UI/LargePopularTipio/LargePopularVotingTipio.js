"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _LargePopularTipio = _interopRequireDefault(require("./LargePopularTipio"));

var _SecondaryOutlineButton = _interopRequireDefault(require("../Buttons/SecondaryOutlineButton"));

var _SecondaryButton = _interopRequireDefault(require("../Buttons/SecondaryButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LargePopularVotingTipio = function LargePopularVotingTipio(props) {
  return /*#__PURE__*/_react.default.createElement(_LargePopularTipio.default, props, /*#__PURE__*/_react.default.createElement("h6", {
    className: "largePopularTipio__content--interested"
  }, props.join_count, " interesserte!"), /*#__PURE__*/_react.default.createElement("div", {
    className: "largePopularTipio__content__submit"
  }, props.joined ? /*#__PURE__*/_react.default.createElement(_SecondaryButton.default, {
    text: "Del n\xE5",
    onClick: props.shareOnClick
  }) : /*#__PURE__*/_react.default.createElement(_SecondaryOutlineButton.default, {
    text: "F\xE5 tilbudsvarsel",
    onClick: props.voteOnClick
  })));
};

var _default = LargePopularVotingTipio;
exports.default = _default;