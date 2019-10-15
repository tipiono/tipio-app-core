"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectedCategoryButton = function SelectedCategoryButton(_ref) {
  var onClick = _ref.onClick,
      title = _ref.title;
  return _react.default.createElement("div", {
    className: "selected-category"
  }, _react.default.createElement("button", {
    type: "button",
    className: "btn-with-icon",
    onClick: onClick
  }, _react.default.createElement("span", null, title), _react.default.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24"
  }, _react.default.createElement("g", {
    fill: "none",
    stroke: "#4ABCAC"
  }, _react.default.createElement("path", {
    "data-color": "color-2",
    d: "M6 12l4 4 8-8"
  }), _react.default.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 11
  })))));
};

var _default = SelectedCategoryButton;
exports.default = _default;