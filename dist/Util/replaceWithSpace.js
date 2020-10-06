"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(value) {
  return value.replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ' ');
}