"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SecondaryButton = _interopRequireDefault(require("../../../UI/Buttons/SecondaryButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FooterMainCard = function FooterMainCard(_ref) {
  var title = _ref.title,
      marketPrice = _ref.marketPrice,
      price = _ref.price,
      bindCount = _ref.bindCount,
      onBindClick = _ref.onBindClick;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "footerMainCard"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row align-items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-6 col-lg-5"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "footerMainCard__title"
  }, title)), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-8 col-md-4 d-none d-lg-block"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "footerMainCard__content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "footerMainCard__content__priceLabel"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "footerMainCard__content__priceLabel__new"
  }, "Pris n\xE5"), /*#__PURE__*/_react.default.createElement("h6", {
    className: "footerMainCard__content__priceLabel__first"
  }, "F\xF8rpris")), /*#__PURE__*/_react.default.createElement("div", {
    className: "footerMainCard__content__priceValue"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "footerMainCard__content__priceValue__newPrice"
  }, price, " Kr"), /*#__PURE__*/_react.default.createElement("h6", {
    className: "footerMainCard__content__priceValue__first"
  }, marketPrice, " Kr")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-4 col-md-3 ml-auto"
  }, /*#__PURE__*/_react.default.createElement(_SecondaryButton.default, {
    onClick: onBindClick,
    text: 'Kjøp',
    loading: false
  }))));
};

FooterMainCard.propTypes = {
  title: _propTypes.default.string.isRequired,
  marketPrice: _propTypes.default.string.isRequired,
  price: _propTypes.default.string.isRequired,
  bindCount: _propTypes.default.number.isRequired,
  onBindClick: _propTypes.default.func.isRequired
};
var _default = FooterMainCard;
exports.default = _default;