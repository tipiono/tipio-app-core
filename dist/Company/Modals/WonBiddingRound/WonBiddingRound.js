"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Modal = require("../../../UI/Modal/Modal");

var _index = require("../../../index");

var _SecondaryButton = _interopRequireDefault(require("../../../UI/Buttons/SecondaryButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function WonBiddingRound(_ref) {
  var image = _ref.image,
      defaultValue = _ref.defaultValue;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Modal.Modal, {
    showCloseButton: true
  }, _react.default.createElement("div", {
    className: "wonBiddingRound"
  }, _react.default.createElement("a", {
    href: ""
  }, _react.default.createElement("img", {
    className: "wonBiddingRound--image",
    src: image,
    width: "310px",
    alt: "Tipio with offer"
  })), _react.default.createElement("h4", {
    className: "wonBiddingRound--title"
  }, "Gratulerer du vant budrunden!"), _react.default.createElement("p", {
    className: "wonBiddingRound--description"
  }, "Du kan n\xE5 legge ut tre eksklusive mersalgs tilbud ", _react.default.createElement("br", null), " til dine kunder"), _react.default.createElement("div", {
    className: "wonBiddingRound--action"
  }, _react.default.createElement(_SecondaryButton.default, {
    text: "Se tilbudet"
  })), _react.default.createElement("div", {
    className: "wonBiddingRound--timeLeft"
  }))));
}

var _default = WonBiddingRound;
exports.default = _default;