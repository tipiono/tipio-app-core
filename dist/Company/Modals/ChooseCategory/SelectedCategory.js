"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectedCategory = function SelectedCategory(_ref) {
  var onClick = _ref.onClick,
      title = _ref.title;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "selected-category"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn-with-icon",
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement("span", null, title), /*#__PURE__*/_react.default.createElement("svg", {
    className: "",
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("g", {
    className: "nc-icon-wrapper",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    fill: "#4ABCAC",
    stroke: "#4ABCAC"
  }, /*#__PURE__*/_react.default.createElement("polyline", {
    "data-color": "color-2",
    fill: "none",
    strokeMiterlimit: "10",
    points: " 6,12 10,16 18,8 "
  }), /*#__PURE__*/_react.default.createElement("circle", {
    fill: "none",
    stroke: "#4ABCAC",
    strokeMiterlimit: "10",
    cx: "12",
    cy: "12",
    r: "11"
  })))));
};

SelectedCategory.propTypes = {
  onClick: _propTypes.default.func.isRequired,
  title: _propTypes.default.string.isRequired
};
var _default = SelectedCategory;
exports.default = _default;