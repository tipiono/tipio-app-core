"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ShowMoreText = _interopRequireDefault(require("../Text/ShowMoreText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ProductDetails(_ref) {
  var title = _ref.title,
      text = _ref.text;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
    className: "productDetails"
  }, _react["default"].createElement("h5", {
    className: "productDetails--title"
  }, title), _react["default"].createElement(_ShowMoreText["default"], {
    text: text
  })));
}

var _default = ProductDetails;
exports["default"] = _default;