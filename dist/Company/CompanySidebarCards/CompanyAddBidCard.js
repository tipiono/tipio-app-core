"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _CompanySidebarBaseCard = _interopRequireDefault(require("./CompanySidebarBaseCard"));

var _generatePrice = _interopRequireDefault(require("../../Util/generatePrice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CompanyAddBidCard = function CompanyAddBidCard(props) {
  var tipio = props.tipio,
      meta = props.meta,
      showMinimumPrice = props.showMinimumPrice,
      showNewPrice = props.showNewPrice,
      showBindingCount = props.showBindingCount,
      showOfferPrice = props.showOfferPrice,
      price = props.price;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "companyAddBidCard"
  }, /*#__PURE__*/_react.default.createElement(_CompanySidebarBaseCard.default, props, props.loading ? /*#__PURE__*/_react.default.createElement("div", {
    className: "placeholder-content companyAddBidCard--placeholder mb-4"
  }, "\xA0") : /*#__PURE__*/_react.default.createElement("h6", {
    className: "companyAddBidCard--interested"
  }, meta.joined_count, " ", showBindingCount ? 'kjøpte!' : 'påmeldte!'), /*#__PURE__*/_react.default.createElement("div", {
    className: "companyAddBidCard__price"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "companyAddBidCard__price--cost"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "companyAddBidCard__price--cost--label"
  }, "Markedspris"), /*#__PURE__*/_react.default.createElement("h6", {
    className: "companyAddBidCard__price--cost--amount"
  }, tipio.market_price, " Kr")), /*#__PURE__*/_react.default.createElement("span", {
    className: "border-right d-none d-md-block"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "companyAddBidCard__price--sale"
  }, showMinimumPrice && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "companyAddBidCard__price--sale--label",
    id: props.__onboardingMinimumPriceId || 'priceSale'
  }, "Minimumpris"), /*#__PURE__*/_react.default.createElement("h6", {
    className: "companyAddBidCard__price--sale--amount"
  }, meta.minimum_price, " Kr")), showNewPrice && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "companyAddBidCard__price--sale--label",
    id: props.__onboardingMinimumPriceId || 'priceSale'
  }, "Ny pris"), /*#__PURE__*/_react.default.createElement("h6", {
    className: "companyAddBidCard__price--sale--amount"
  }, (0, _generatePrice.default)(meta.joined_count, price), " Kr")), showOfferPrice && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "companyAddBidCard__price--sale--label",
    id: props.__onboardingMinimumPriceId || 'priceSale'
  }, "Ditt tilbud"), /*#__PURE__*/_react.default.createElement("h6", {
    className: "companyAddBidCard__price--sale--amount"
  }, price, " Kr"))))));
};

var _default = CompanyAddBidCard;
exports.default = _default;