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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    showCloseButton: true
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "wonBiddingRound"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: ""
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "wonBiddingRound--image",
    src: image,
    width: "310px",
    alt: "Tipio with offer"
  })), /*#__PURE__*/_react.default.createElement("h4", {
    className: "wonBiddingRound--title"
  }, "Gratulerer du vant budrunden!"), /*#__PURE__*/_react.default.createElement("p", {
    className: "wonBiddingRound--description"
  }, "Du kan n\xE5 legge ut tre eksklusive mersalgs tilbud ", /*#__PURE__*/_react.default.createElement("br", null), " til dine kunder"), /*#__PURE__*/_react.default.createElement("div", {
    className: "wonBiddingRound--action"
  }, /*#__PURE__*/_react.default.createElement(_SecondaryButton.default, {
    text: "Se tilbudet"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "wonBiddingRound--timeLeft"
  }))));
}

var _default = WonBiddingRound;
exports.default = _default;