"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SmallPopularTipio = _interopRequireDefault(require("./SmallPopularTipio"));

var _reactI18next = require("react-i18next");

var _SecondaryButton = _interopRequireDefault(require("../Buttons/SecondaryButton"));

var _SecondaryOutlineButton = _interopRequireDefault(require("../Buttons/SecondaryOutlineButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SmallPopularVotingTipio = function SmallPopularVotingTipio(props) {
  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;

  return _react.default.createElement(_SmallPopularTipio.default, props, _react.default.createElement("h6", {
    className: "smallPopularTipio__content--interested"
  }, props.join_count, " interesserte!"), _react.default.createElement("div", {
    className: "smallPopularTipio__content__submit"
  }, props.joined ? _react.default.createElement(_SecondaryButton.default, {
    text: "Del n\xE5",
    onClick: props.shareOnClick
  }) : _react.default.createElement(_SecondaryOutlineButton.default, {
    text: "Meld interesse",
    onClick: props.voteOnClick
  })));
};

var _default = SmallPopularVotingTipio;
exports.default = _default;