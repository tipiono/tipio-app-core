"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = VotingCardShowInterestButton;

var _react = _interopRequireDefault(require("react"));

var _SecondaryOutlineButton = _interopRequireDefault(require("../../../UI/Buttons/SecondaryOutlineButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function VotingCardShowInterestButton() {
  return _react.default.createElement(_SecondaryOutlineButton.default, {
    text: "Meld interesse"
  });
}