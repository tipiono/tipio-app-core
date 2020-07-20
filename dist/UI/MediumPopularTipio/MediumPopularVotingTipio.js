"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _MediumPopularTipio = _interopRequireDefault(require("./MediumPopularTipio"));

var _SecondaryButton = _interopRequireDefault(require("../Buttons/SecondaryButton"));

var _SecondaryOutlineButton = _interopRequireDefault(require("../Buttons/SecondaryOutlineButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MediumPopularVotingTipio = function MediumPopularVotingTipio(props) {
  return _react.default.createElement(_MediumPopularTipio.default, props, _react.default.createElement("h6", {
    className: "mediumPopularTipio__content--interested"
  }, props.join_count, " interesserte!"), _react.default.createElement("div", {
    className: "mediumPopularTipio__content__submit"
  }, props.joined ? _react.default.createElement(_SecondaryButton.default, {
    text: "Del n\xE5",
    onClick: props.shareOnClick
  }) : _react.default.createElement(_SecondaryOutlineButton.default, {
    text: "Meld interesse",
    onClick: props.voteOnClick
  })));
};

var _default = MediumPopularVotingTipio;
exports.default = _default;