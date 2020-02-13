"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _MediumPopularTipio = _interopRequireDefault(require("./MediumPopularTipio"));

var _reactI18next = require("react-i18next");

var _SecondaryButton = _interopRequireDefault(require("../Buttons/SecondaryButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MediumPopularBiddingTipio = function MediumPopularBiddingTipio(props) {
  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;

  return _react.default.createElement(_MediumPopularTipio.default, props, _react.default.createElement("div", {
    className: "mediumPopularTipio__content__price"
  }, _react.default.createElement("h6", {
    className: "mediumPopularTipio__content__price--marketprice"
  }, "4 500 Kr"), _react.default.createElement("h6", {
    className: "mediumPopularTipio__content__price--saleprice"
  }, "2 500 Kr")), _react.default.createElement("div", {
    className: "mediumPopularTipio__content__submit"
  }, _react.default.createElement(_SecondaryButton.default, {
    text: "Legg i handlekurv"
  })));
};

var _default = MediumPopularBiddingTipio;
exports.default = _default;