"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function Avatar(_ref) {
  _objectDestructuringEmpty(_ref);

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("img", {
    className: "avatar",
    src: "https://tipio.ams3.cdn.digitaloceanspaces.com/staging/4/tipios/132/1563967717745",
    alt: ""
  }));
}

var _default = Avatar;
exports.default = _default;