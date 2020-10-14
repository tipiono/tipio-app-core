"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectedCategoryButton = function SelectedCategoryButton(_ref) {
  var onClick = _ref.onClick,
      title = _ref.title,
      isSelected = _ref.isSelected;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "selected-category"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "addCategoryButton",
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement("span", null, title), isSelected ? /*#__PURE__*/_react.default.createElement("svg", {
    width: 25,
    height: 25,
    viewBox: "0 0 25 25",
    fill: "none"
  }, /*#__PURE__*/_react.default.createElement("g", {
    fill: "#8C8F91",
    fillRule: "nonzero",
    stroke: "#8C8F91",
    strokeWidth: 0.6
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M23 12.5C23 6.701 18.299 2 12.5 2S2 6.701 2 12.5 6.701 23 12.5 23 23 18.299 23 12.5zm-20 0a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M12.5 2.1c5.744 0 10.4 4.656 10.4 10.4h.2c0-5.854-4.746-10.6-10.6-10.6v.2zM2.1 12.5c0-5.744 4.656-10.4 10.4-10.4v-.2C6.646 1.9 1.9 6.646 1.9 12.5h.2zm10.4 10.4c-5.744 0-10.4-4.656-10.4-10.4h-.2c0 5.854 4.746 10.6 10.6 10.6v-.2zm10.4-10.4c0 5.744-4.656 10.4-10.4 10.4v.2c5.854 0 10.6-4.746 10.6-10.6h-.2zM12.5 2.9a9.6 9.6 0 00-9.6 9.6h.2a9.4 9.4 0 019.4-9.4v-.2zm9.6 9.6a9.6 9.6 0 00-9.6-9.6v.2a9.4 9.4 0 019.4 9.4h.2zm-9.6 9.6a9.6 9.6 0 009.6-9.6h-.2a9.4 9.4 0 01-9.4 9.4v.2zm-9.6-9.6a9.6 9.6 0 009.6 9.6v-.2a9.4 9.4 0 01-9.4-9.4h-.2z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M12.5 11.756l2.602-2.602a.526.526 0 01.744.744L13.244 12.5l2.602 2.602a.526.526 0 01-.744.744L12.5 13.244l-2.602 2.602a.526.526 0 01-.744-.744l2.602-2.602-2.602-2.602a.526.526 0 11.744-.744l2.602 2.602z"
  }))) : /*#__PURE__*/_react.default.createElement("svg", {
    width: 23,
    height: 23
  }, /*#__PURE__*/_react.default.createElement("g", {
    fill: "#8C8F91",
    fillRule: "nonzero",
    stroke: "#8C8F91",
    strokeWidth: 0.6
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M11.5 2a9.5 9.5 0 100 19 9.5 9.5 0 000-19zm0-1C17.299 1 22 5.701 22 11.5S17.299 22 11.5 22 1 17.299 1 11.5 5.701 1 11.5 1z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M12.026 10.974h3.68a.526.526 0 110 1.052h-3.68v3.68a.526.526 0 11-1.052 0v-3.68h-3.68a.526.526 0 110-1.052h3.68v-3.68a.526.526 0 111.052 0v3.68z"
  })))));
};

var _default = SelectedCategoryButton;
exports.default = _default;