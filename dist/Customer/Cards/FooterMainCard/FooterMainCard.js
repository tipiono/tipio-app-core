"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _SecondaryButton = _interopRequireDefault(require("../../../UI/Buttons/SecondaryButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FooterMainCard = function FooterMainCard(_ref) {
  var title = _ref.title,
      marketPrice = _ref.marketPrice,
      firstRange = _ref.firstRange,
      secondRange = _ref.secondRange,
      bindCount = _ref.bindCount,
      onBindClick = _ref.onBindClick;

  var generateNewPrice = function generateNewPrice() {
    return bindCount >= 0 && bindCount >= firstRange.from && bindCount <= firstRange.to ? firstRange.price : secondRange.price;
  };

  return _react.default.createElement("div", {
    className: "footerMainCard"
  }, _react.default.createElement("div", {
    className: "row align-items-center"
  }, _react.default.createElement("div", {
    className: "col-5 d-none d-md-block"
  }, _react.default.createElement("h3", {
    className: "footerMainCard__title"
  }, title)), _react.default.createElement("div", {
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
  }, generateNewPrice(), " Kr"), _react.default.createElement("h6", {
    className: "footerMainCard__content__priceValue__first"
  }, marketPrice, " Kr")))), _react.default.createElement("div", {
    className: "col-4 col-md-3"
  }, _react.default.createElement(_SecondaryButton.default, {
    onClick: onBindClick,
    text: (0, _addonKnobs.text)('Label', 'Legg i handlekurv'),
    loading: (0, _addonKnobs.boolean)('Loading ', false)
  }))));
};

FooterMainCard.propTypes = {
  title: _propTypes.default.string.isRequired,
  marketPrice: _propTypes.default.string.isRequired,
  firstRange: _propTypes.default.object.isRequired,
  secondRange: _propTypes.default.object.isRequired,
  bindCount: _propTypes.default.number.isRequired,
  onBindClick: _propTypes.default.func.isRequired
};
var _default = FooterMainCard;
exports.default = _default;