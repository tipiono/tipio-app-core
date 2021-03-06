"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.createDiscountLabel = exports.getBestPrice = void 0;

var _replaceWithSpace = _interopRequireDefault(require("./replaceWithSpace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function calculateDiscountPercentage(price, salePrice) {
  var priceNumber = parseFloat(price);
  var salePriceNumber = parseFloat(salePrice);
  var diff = salePriceNumber - priceNumber;
  return Math.round(diff / priceNumber * 100);
}

var getBestPrice = function getBestPrice(priceRange) {
  var _priceRange$;

  return parseInt((_priceRange$ = priceRange[0]) === null || _priceRange$ === void 0 ? void 0 : _priceRange$.price);
};

exports.getBestPrice = getBestPrice;

var createDiscountLabel = function createDiscountLabel(price, salePrice) {
  var bestPrice = _typeof(salePrice) === 'object' ? getBestPrice(salePrice) : salePrice;
  var discount = calculateDiscountPercentage(price, bestPrice);
  var priceToShow = price - bestPrice;
  return priceToShow < 1000 ? "".concat(discount, "%") : "-" + (0, _replaceWithSpace.default)(priceToShow.toString()) + " Kr";
};

exports.createDiscountLabel = createDiscountLabel;
var _default = calculateDiscountPercentage;
exports.default = _default;