"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _calculateDiscountPercentage = _interopRequireDefault(require("../../../Util/calculateDiscountPercentage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddMoreSaleCompanyCard = function AddMoreSaleCompanyCard(props) {
  var _props$tipio;

  var saleDiscount = 0;

  if (props.show_offer_as_percentage) {
    saleDiscount = "".concat((0, _calculateDiscountPercentage.default)(props.first_price, props.company_price), "%");
  } else {
    saleDiscount = "".concat(props.company_price - props.first_price, " kr");
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "addMoreSaleCard"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex flex-row align-items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "addMoreSaleCard__preview"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "addMoreSaleCard__preview--image lazy-image",
    href: "",
    onClick: function onClick(e) {
      e.preventDefault();
      props.titleOnClick(props);
    }
  }, props.tipio.images && props.tipio.images.length && /*#__PURE__*/_react.default.createElement("img", {
    className: "lazyload img-fluid",
    src: props.tipio.images[0].blob_url,
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "addMoreSaleCard__preview--discount"
  }, saleDiscount), ((_props$tipio = props.tipio) === null || _props$tipio === void 0 ? void 0 : _props$tipio.sustainable) && /*#__PURE__*/_react.default.createElement("div", {
    className: "addMoreSaleCard__preview--sustainable"
  }, /*#__PURE__*/_react.default.createElement("span", null, "B\xE6rekraftig")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "addMoreSaleCard__content"
  }, /*#__PURE__*/_react.default.createElement("h5", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "",
    className: "addMoreSaleCard__content--title",
    onClick: function onClick(e) {
      e.preventDefault();
      props.titleOnClick(props);
    }
  }, props.tipio.title)), /*#__PURE__*/_react.default.createElement("div", {
    className: "addMoreSaleCard__content__price"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "addMoreSaleCard__content__price--sale"
  }, props.first_price, " Kr"), /*#__PURE__*/_react.default.createElement("h6", {
    className: "addMoreSaleCard__content__price--cost"
  }, props.company_price, " Kr"))), !props.delete && /*#__PURE__*/_react.default.createElement("a", {
    onClick: function onClick(e) {
      e.preventDefault();
      props.onDelete(props.sale_offer_id);
    },
    href: "/",
    className: "addMoreSaleCard__remove"
  })));
};

var _default = AddMoreSaleCompanyCard;
exports.default = _default;