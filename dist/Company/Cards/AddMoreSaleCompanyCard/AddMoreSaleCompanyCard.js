"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _calculateDiscountPercentage = _interopRequireDefault(require("../../../Util/calculateDiscountPercentage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddMoreSaleCompanyCard = function AddMoreSaleCompanyCard(props) {
  return _react.default.createElement("div", {
    className: "addMoreSaleCard"
  }, _react.default.createElement("div", {
    className: "d-flex flex-row"
  }, _react.default.createElement("div", {
    className: "addMoreSaleCard__preview"
  }, _react.default.createElement("a", {
    className: "addMoreSaleCard__preview--image",
    href: "",
    onClick: function onClick(e) {
      e.preventDefault();
      props.titleOnClick(props);
    }
  }, props.tipio.images && props.tipio.images.length && _react.default.createElement("img", {
    className: "img-fluid",
    src: props.tipio.images[0].blob_url,
    alt: ""
  }), _react.default.createElement("span", {
    className: "addMoreSaleCard__preview--discount"
  }, (0, _calculateDiscountPercentage.default)(props.first_price, props.company_price), "%"))), _react.default.createElement("div", {
    className: "addMoreSaleCard__content"
  }, _react.default.createElement("h5", null, _react.default.createElement("a", {
    href: "",
    className: "addMoreSaleCard__content--title",
    onClick: function onClick(e) {
      e.preventDefault();
      props.titleOnClick(props);
    }
  }, props.tipio.title)), _react.default.createElement("div", {
    className: "addMoreSaleCard__content__price"
  }, _react.default.createElement("h6", {
    className: "addMoreSaleCard__content__price--sale"
  }, props.first_price, " Kr"), _react.default.createElement("h6", {
    className: "addMoreSaleCard__content__price--cost"
  }, props.company_price, " Kr")))));
};

var _default = AddMoreSaleCompanyCard;
exports.default = _default;