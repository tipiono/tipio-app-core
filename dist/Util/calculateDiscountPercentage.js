"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.createDiscountLabel = exports.getBestPrice = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function calculateDiscountPercentage(price, salePrice) {
  var priceNumber = parseFloat(price);
  var salePriceNumber = parseFloat(salePrice);
  var diff = salePriceNumber - priceNumber;
  return Math.round(diff / priceNumber * 100);
}

var getBestPrice = function getBestPrice(priceRange) {
  if (parseInt(priceRange[0].price) < parseInt(priceRange[1].price)) {
    return parseInt(priceRange[0].price);
  } else return parseInt(priceRange[1].price);
};

exports.getBestPrice = getBestPrice;

var createDiscountLabel = function createDiscountLabel(price, salePrice) {
  var bestPrice = _typeof(salePrice) === 'object' ? getBestPrice(salePrice) : salePrice;
  var discount = calculateDiscountPercentage(price, bestPrice);
  return discount < -14 ? "".concat(discount, "%") : "Spar ".concat(price - bestPrice, " kr");
};

exports.createDiscountLabel = createDiscountLabel;
var _default = calculateDiscountPercentage;
exports.default = _default;