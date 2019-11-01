"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TipioCard;

var _react = _interopRequireDefault(require("react"));

var _TipioCountdown = _interopRequireDefault(require("../../UI/TipioCountdown/TipioCountdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TipioCard(_ref) {
  var tipio = _ref.tipio;
  return _react.default.createElement("div", {
    className: "card mb-4"
  }, _react.default.createElement("div", {
    className: "card-body"
  }, _react.default.createElement("p", {
    className: "card-text"
  }, "Which card should be displayed in search result?")));
}