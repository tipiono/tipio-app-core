"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _calculateDiscountPercentage = _interopRequireDefault(require("../../../Util/calculateDiscountPercentage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddMoreSaleEndedCompanyCard = function AddMoreSaleEndedCompanyCard(props) {
  var _props$tipio, _props$tipio2, _props$tipio3, _props$tipio4;

  var saleDiscount = (0, _calculateDiscountPercentage.default)(props.first_price, props.company_price);
  console.log((_props$tipio = props.tipio) === null || _props$tipio === void 0 ? void 0 : _props$tipio.sustainable);
  return _react.default.createElement("div", {
    className: "addMoreSaleEndedCard mb-3"
  }, _react.default.createElement("div", {
    className: "d-flex flex-row align-items-center"
  }, _react.default.createElement("div", {
    className: "addMoreSaleEndedCard__preview"
  }, _react.default.createElement("a", {
    className: "addMoreSaleEndedCard__preview--image",
    href: "",
    onClick: function onClick(e) {
      e.preventDefault();
      props.titleOnClick();
    }
  }, ((_props$tipio2 = props.tipio) === null || _props$tipio2 === void 0 ? void 0 : _props$tipio2.images) && props.tipio.images.length && _react.default.createElement("img", {
    className: "img-fluid",
    src: props.tipio.images[0].blob_url,
    alt: ""
  }), _react.default.createElement("span", {
    className: "addMoreSaleEndedCard__preview--discount"
  }, saleDiscount, "%"), ((_props$tipio3 = props.tipio) === null || _props$tipio3 === void 0 ? void 0 : _props$tipio3.sustainable) && _react.default.createElement("div", {
    className: "addMoreSaleEndedCard__preview--sustainable"
  }, _react.default.createElement("span", null, "B\xE6rekraftig")))), _react.default.createElement("div", {
    className: "addMoreSaleEndedCard__content"
  }, _react.default.createElement("h5", null, _react.default.createElement("a", {
    href: "",
    className: "addMoreSaleCard__content--title",
    onClick: function onClick(e) {
      e.preventDefault();
      props.titleOnClick();
    }
  }, (_props$tipio4 = props.tipio) === null || _props$tipio4 === void 0 ? void 0 : _props$tipio4.title)), _react.default.createElement("ul", {
    className: "addMoreSaleEndedCard__content__stats"
  }, _react.default.createElement("li", {
    className: "addMoreSaleEndedCard__content__stats--customers"
  }, _react.default.createElement("svg", {
    width: 25,
    height: 22
  }, _react.default.createElement("g", {
    fill: "#188576",
    stroke: "#188576",
    strokeWidth: 0.1,
    fillRule: "evenodd"
  }, _react.default.createElement("path", {
    d: "M9 14.487a.5.5 0 01.5-.5h1a.5.5 0 00.5-.5v-1.993A2.494 2.494 0 008.506 9H4.494A2.493 2.493 0 002 11.494v1.993a.5.5 0 00.5.5h1a.5.5 0 01.5.5V20h5v-5.513zM6.5 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5h0zM3 14.987h-.5a1.5 1.5 0 01-1.5-1.5v-1.993A3.494 3.494 0 014.494 8h4.012A3.494 3.494 0 0112 11.494v1.993a1.5 1.5 0 01-1.5 1.5H10V20.5a.5.5 0 01-.5.5h-6a.5.5 0 01-.5-.5v-5.513zM6.5 8A3.5 3.5 0 116.501 1a3.5 3.5 0 010 7.001h0zM21 14.487a.5.5 0 01.5-.5h1a.5.5 0 00.5-.5v-1.993A2.494 2.494 0 0020.506 9h-4.012A2.493 2.493 0 0014 11.494v1.993a.5.5 0 00.5.5h1a.5.5 0 01.5.5V20h5v-5.513zM18.5 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5h0zM15 14.987h-.5a1.5 1.5 0 01-1.5-1.5v-1.993A3.494 3.494 0 0116.494 8h4.012A3.494 3.494 0 0124 11.494v1.993a1.5 1.5 0 01-1.5 1.5H22V20.5a.5.5 0 01-.5.5h-6a.5.5 0 01-.5-.5v-5.513zM18.5 8A3.5 3.5 0 1118.501 1a3.5 3.5 0 010 7.001h0z"
  }))), _react.default.createElement("span", {
    className: "addMoreSaleEndedCard__content__stats--customers--label"
  }, (props === null || props === void 0 ? void 0 : props.binding_count) || 0)), _react.default.createElement("li", {
    className: "addMoreSaleEndedCard__content__stats--earned"
  }, _react.default.createElement("svg", {
    width: 21,
    height: 23
  }, _react.default.createElement("path", {
    d: "M11 11h1.5a.5.5 0 01.5.5v.378a.5.5 0 01-.985.122H9.514a.5.5 0 00-.5.5v.5a.5.5 0 00.5.5H11.5A1.5 1.5 0 0113 15v.5a1.5 1.5 0 01-1.5 1.5H11v.491a.5.5 0 11-1 0v-.49H8.5a.5.5 0 01-.5-.517l.015-.458A.499.499 0 019.012 16H11.5a.5.5 0 00.5-.5V15a.5.5 0 00-.5-.5H9.514a1.5 1.5 0 01-1.5-1.5v-.5a1.5 1.5 0 011.5-1.5H10v-.5a.5.5 0 011 0v.5zm2.02-4.627a.294.294 0 01.017-.058l1.599-3.998-1.964.658a.495.495 0 01-.381-.027L10.5 2.06l-1.766.887a.502.502 0 01-.382.03l-1.987-.663 1.6 4.001a.625.625 0 01.018.057 8.685 8.685 0 015.037.001h0zM2.973 13.217l-.927 4.81A2.5 2.5 0 004.5 21h12.003a2.5 2.5 0 002.455-2.974l-.927-4.81a7.668 7.668 0 00-15.06 0h0zm10.98-6.502a8.67 8.67 0 015.06 6.312l.927 4.81A3.501 3.501 0 0116.503 22H4.5a3.5 3.5 0 01-3.437-4.163l.927-4.81a8.668 8.668 0 015.06-6.31c-.005-.01-.01-.02-.013-.03l-2-5a.5.5 0 01.622-.66l2.812.934 1.806-.907a.496.496 0 01.447 0l1.827.907 2.792-.935a.5.5 0 01.623.661l-2 5-.014.028h0z",
    stroke: "#4F2E90",
    strokeWidth: 0.2,
    fill: "#4F2E90",
    fillRule: "evenodd"
  })), _react.default.createElement("span", {
    className: "addMoreSaleEndedCard__content__stats--earned--label"
  }, (props === null || props === void 0 ? void 0 : props.earnings) || 0, " Kr"))))));
};

var _default = AddMoreSaleEndedCompanyCard;
exports.default = _default;