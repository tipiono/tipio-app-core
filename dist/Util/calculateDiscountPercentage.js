"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function calculateDiscountPercentage(price, salePrice) {
  var priceNumber = parseFloat(price);
  var salePriceNumber = parseFloat(salePrice);
  var diff = salePriceNumber - priceNumber;
  return Math.round(diff / priceNumber * 100);
}

var _default = calculateDiscountPercentage;
exports["default"] = _default;