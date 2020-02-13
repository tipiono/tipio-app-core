"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _LargePopularTipio = _interopRequireDefault(require("./LargePopularTipio"));

var _SecondaryButton = _interopRequireDefault(require("../Buttons/SecondaryButton"));

var _reactI18next = require("react-i18next");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LargePopularBidingTipio = function LargePopularBidingTipio(props) {
  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;

  return _react.default.createElement(_LargePopularTipio.default, props, _react.default.createElement("div", {
    className: "largePopularTipio__content__price"
  }, _react.default.createElement("h6", {
    className: "largePopularTipio__content__price--marketprice"
  }, "4 500 Kr"), _react.default.createElement("h6", {
    className: "largePopularTipio__content__price--saleprice"
  }, "2 500 Kr")), _react.default.createElement("div", {
    className: "largePopularTipio__content__submit"
  }, _react.default.createElement(_SecondaryButton.default, {
    text: "Legg i handlekurv"
  })));
};

var _default = LargePopularBidingTipio;
exports.default = _default;