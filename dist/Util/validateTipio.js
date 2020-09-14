"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isValidTipio;

function isValidTipio(expireDate) {
  var today = new Date();
  var someDate = new Date(expireDate);
  return someDate.getTime() < today.getTime();
}