"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _CompanySidebarBaseCard = _interopRequireDefault(require("./CompanySidebarBaseCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CompanyAddBidCard = function CompanyAddBidCard(props) {
  var tipio = props.tipio,
      meta = props.meta;
  return _react.default.createElement("div", {
    className: "companyAddBidCard"
  }, _react.default.createElement(_CompanySidebarBaseCard.default, props, props.loading ? _react.default.createElement("div", {
    className: "placeholder-content companyAddBidCard--placeholder mb-4"
  }, "\xA0") : _react.default.createElement("h6", {
    className: "companyAddBidCard--interested"
  }, meta.joined_count, " p\xE5meldte!"), _react.default.createElement("div", {
    className: "companyAddBidCard__price"
  }, _react.default.createElement("div", {
    className: "companyAddBidCard__price--cost"
  }, _react.default.createElement("p", {
    className: "companyAddBidCard__price--cost--label"
  }, "Markedspris"), _react.default.createElement("h6", {
    className: "companyAddBidCard__price--cost--amount"
  }, tipio.market_price, " Kr")), _react.default.createElement("span", {
    className: "border-right"
  }), _react.default.createElement("div", {
    className: "companyAddBidCard__price--sale"
  }, _react.default.createElement("p", {
    className: "companyAddBidCard__price--sale--label"
  }, "Minimumpris"), _react.default.createElement("h6", {
    className: "companyAddBidCard__price--sale--amount"
  }, tipio.wanted_price, " Kr")))));
};

var _default = CompanyAddBidCard;
exports.default = _default;