"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = VoteButton;

var _react = _interopRequireDefault(require("react"));

var _SecondaryButton = _interopRequireDefault(require("../../../UI/Buttons/SecondaryButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function VoteButton() {
  return /*#__PURE__*/_react.default.createElement(_SecondaryButton.default, {
    text: "Del n\xE5"
  });
}