"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _LargePopularTipio = _interopRequireDefault(require("./LargePopularTipio"));

var _SecondaryOutlineButton = _interopRequireDefault(require("../Buttons/SecondaryOutlineButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LargePopularBidingTipioEdit = function LargePopularBidingTipioEdit(props) {
  return /*#__PURE__*/_react.default.createElement(_LargePopularTipio.default, props, /*#__PURE__*/_react.default.createElement("div", {
    className: "largePopularTipio__content__price"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "largePopularTipio__content__price--marketprice"
  }, "4 500 Kr"), /*#__PURE__*/_react.default.createElement("h6", {
    className: "largePopularTipio__content__price--saleprice"
  }, "2 500 Kr")), /*#__PURE__*/_react.default.createElement("div", {
    className: "largePopularTipio__content__submit"
  }, /*#__PURE__*/_react.default.createElement(_SecondaryOutlineButton.default, {
    text: "Edit"
  })));
};

var _default = LargePopularBidingTipioEdit;
exports.default = _default;