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
      firstRange = props.firstRange,
      secondRange = props.secondRange;
  return _react.default.createElement("div", {
    className: "companyAddBidCard"
  }, _react.default.createElement(_CompanySidebarBaseCard.default, props, props.loading ? _react.default.createElement("div", {
    className: "placeholder-content companyAddBidCard--placeholder mb-4"
  }, "\xA0") : _react.default.createElement("h6", {
    className: "companyAddBidCard--interested"
  }, meta.joined_count, " ", showBindingCount ? 'kjøpte!' : 'påmeldte!'), _react.default.createElement("div", {
    className: "companyAddBidCard__price"
  }, _react.default.createElement("div", {
    className: "companyAddBidCard__price--cost"
  }, _react.default.createElement("p", {
    className: "companyAddBidCard__price--cost--label"
  }, "Markedspris"), _react.default.createElement("h6", {
    className: "companyAddBidCard__price--cost--amount"
  }, tipio.market_price, " Kr")), _react.default.createElement("span", {
    className: "border-right d-none d-md-block"
  }), _react.default.createElement("div", {
    className: "companyAddBidCard__price--sale"
  }, showMinimumPrice && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("p", {
    className: "companyAddBidCard__price--sale--label",
    id: props.__onboardingMinimumPriceId || 'priceSale'
  }, "Minimumpris"), _react.default.createElement("h6", {
    className: "companyAddBidCard__price--sale--amount"
  }, meta.minimum_price, " Kr")), showNewPrice && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("p", {
    className: "companyAddBidCard__price--sale--label",
    id: props.__onboardingMinimumPriceId || 'priceSale'
  }, "Ny pris"), _react.default.createElement("h6", {
    className: "companyAddBidCard__price--sale--amount"
  }, tipio.new_price, " Kr")), showOfferPrice && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("p", {
    className: "companyAddBidCard__price--sale--label",
    id: props.__onboardingMinimumPriceId || 'priceSale'
  }, "Ditt tilbud"), _react.default.createElement("h6", {
    className: "companyAddBidCard__price--sale--amount"
  }, (0, _generatePrice.default)(meta.joined_count, firstRange, secondRange), " Kr"))))));
};

var _default = CompanyAddBidCard;
exports.default = _default;