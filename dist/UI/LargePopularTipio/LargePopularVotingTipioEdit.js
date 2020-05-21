"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _LargePopularTipio = _interopRequireDefault(require("./LargePopularTipio"));

var _SecondaryButton = _interopRequireDefault(require("../Buttons/SecondaryButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LargePopularVotingTipioEdit = function LargePopularVotingTipioEdit(props) {
  return _react.default.createElement(_LargePopularTipio.default, props, _react.default.createElement("h6", {
    className: "largePopularTipio__content--interested"
  }, props.count, " interesserte!"), _react.default.createElement("div", {
    className: "largePopularTipio__content__submit"
  }, _react.default.createElement(_SecondaryButton.default, {
    text: "Gi tilbud",
    onClick: props.onClick
  })));
};

var _default = LargePopularVotingTipioEdit;
exports.default = _default;