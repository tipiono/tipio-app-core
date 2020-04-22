"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactShimmer = _interopRequireDefault(require("react-shimmer"));

var _ContentSpinner = _interopRequireDefault(require("../Spinner/ContentSpinner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Image(_ref) {
  var image = _ref.image,
      selectedIndex = _ref.selectedIndex,
      onChange = _ref.onChange;
  return _react["default"].createElement("label", {
    className: "layout-item"
  }, _react["default"].createElement("input", {
    type: "checkbox",
    value: image.id,
    onChange: onChange,
    checked: selectedIndex > 0 ? "checked" : ""
  }), _react["default"].createElement(_reactShimmer["default"], {
    className: "layout-img",
    src: image.src,
    fallback: _react["default"].createElement(_ContentSpinner["default"], null)
  }), selectedIndex > 0 && _react["default"].createElement("span", {
    className: "selected-number"
  }, selectedIndex));
}

var _default = Image;
exports["default"] = _default;