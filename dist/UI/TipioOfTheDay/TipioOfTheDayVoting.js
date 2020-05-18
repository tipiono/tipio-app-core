"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TipioOfTheDay = _interopRequireDefault(require("./TipioOfTheDay"));

var _SecondaryButton = _interopRequireDefault(require("../Buttons/SecondaryButton"));

var _SecondaryOutlineButton = _interopRequireDefault(require("../Buttons/SecondaryOutlineButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TipioOfTheDayVoting = function TipioOfTheDayVoting(props) {
  return /*#__PURE__*/_react.default.createElement(_TipioOfTheDay.default, props, /*#__PURE__*/_react.default.createElement("div", {
    className: "tipioOfTheDay__content--submit"
  }, props.joined ? /*#__PURE__*/_react.default.createElement(_SecondaryButton.default, {
    text: "Del n\xE5",
    onClick: props.shareOnClick
  }) : /*#__PURE__*/_react.default.createElement(_SecondaryOutlineButton.default, {
    text: "Meld interesse",
    textColor: "text-white",
    onClick: props.voteOnClick
  })));
};

var _default = TipioOfTheDayVoting;
exports.default = _default;