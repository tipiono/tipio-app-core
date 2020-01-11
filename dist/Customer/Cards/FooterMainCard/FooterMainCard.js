"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _SecondaryButton = _interopRequireDefault(require("../../../UI/Buttons/SecondaryButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FooterMainCard = function FooterMainCard() {
  return _react.default.createElement("div", {
    className: "footerMainCard"
  }, _react.default.createElement("div", {
    className: "row align-items-center"
  }, _react.default.createElement("div", {
    className: "col-6 d-none d-md-block"
  }, _react.default.createElement("h3", {
    className: "footerMainCard__title"
  }, "Productname")), _react.default.createElement("div", {
    className: "col-8 col-md-4"
  }, _react.default.createElement("div", {
    className: "footerMainCard__content"
  }, _react.default.createElement("div", {
    className: "footerMainCard__content__priceLabel"
  }, _react.default.createElement("h6", {
    className: "footerMainCard__content__priceLabel__new"
  }, "Pris n\xE5"), _react.default.createElement("h6", {
    className: "footerMainCard__content__priceLabel__first"
  }, "Markedspris")), _react.default.createElement("div", {
    className: "footerMainCard__content__priceValue"
  }, _react.default.createElement("h6", {
    className: "footerMainCard__content__priceValue__new"
  }, "7 990 Kr"), _react.default.createElement("h6", {
    className: "footerMainCard__content__priceValue__first"
  }, "11 070 Kr")))), _react.default.createElement("div", {
    className: "col-4 col-md-2"
  }, _react.default.createElement(_SecondaryButton.default, {
    onClick: (0, _addonActions.action)('clicked'),
    text: (0, _addonKnobs.text)('Label', 'Kjøp nå'),
    loading: (0, _addonKnobs.boolean)('Loading ', false)
  }))));
};

var _default = FooterMainCard;
exports.default = _default;