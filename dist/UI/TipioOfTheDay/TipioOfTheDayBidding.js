"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _TipioOfTheDay = _interopRequireDefault(require("./TipioOfTheDay"));

var _SecondaryButton = _interopRequireDefault(require("../Buttons/SecondaryButton"));

var _reactI18next = require("react-i18next");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TipioOfTheDayBidding = function TipioOfTheDayBidding(props) {
  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;

  return _react["default"].createElement(_TipioOfTheDay["default"], props, _react["default"].createElement("div", {
    className: "tipioOfTheDay__content--submit"
  }, _react["default"].createElement(_SecondaryButton["default"], {
    text: "Legg i handlekurv"
  })));
};

var _default = TipioOfTheDayBidding;
exports["default"] = _default;