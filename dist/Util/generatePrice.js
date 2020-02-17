"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(bindCount, firstRange, secondRange) {
  return parseInt(bindCount, 10) >= 0 && parseInt(bindCount, 10) <= parseInt(firstRange.to, 10) ? firstRange.price : secondRange.price;
};

exports.default = _default;