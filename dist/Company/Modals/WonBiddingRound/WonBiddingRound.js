"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Modal = require("../../../UI/Modal/Modal");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = require("../../../index");

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
  }, _react.default.createElement("button", {
    type: "button",
    className: "btn btn-secondary btn-lg"
  }, "Se tilbudet")), _react.default.createElement("div", {
    className: "wonBiddingRound--timeLeft"
  }, _react.default.createElement(_index.PinkyCountdownSM, {
    expires_in: (0, _addonKnobs.date)(defaultValue),
    type: _index.CountdownType.PINK
  })))));
}

var _default = WonBiddingRound;
exports.default = _default;