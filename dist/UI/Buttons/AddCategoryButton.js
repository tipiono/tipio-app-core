"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AddCategoryButton = function AddCategoryButton(_ref) {
  var onClick = _ref.onClick;
  return _react["default"].createElement("div", null, _react["default"].createElement("button", {
    type: "button",
    className: "addCategoryButton",
    onClick: onClick
  }, _react["default"].createElement("span", null, "Legg til kategori"), _react["default"].createElement("svg", {
    width: 23,
    height: 23
  }, _react["default"].createElement("g", {
    fill: "#8C8F91",
    fillRule: "nonzero",
    stroke: "#8C8F91",
    strokeWidth: 0.6
  }, _react["default"].createElement("path", {
    d: "M11.5 2a9.5 9.5 0 100 19 9.5 9.5 0 000-19zm0-1C17.299 1 22 5.701 22 11.5S17.299 22 11.5 22 1 17.299 1 11.5 5.701 1 11.5 1z"
  }), _react["default"].createElement("path", {
    d: "M12.026 10.974h3.68a.526.526 0 110 1.052h-3.68v3.68a.526.526 0 11-1.052 0v-3.68h-3.68a.526.526 0 110-1.052h3.68v-3.68a.526.526 0 111.052 0v3.68z"
  })))));
};

var _default = AddCategoryButton;
exports["default"] = _default;