"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SelectedCategory = _interopRequireDefault(require("./SelectedCategory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChooseCategory = function ChooseCategory(_ref) {
  var onClick = _ref.onClick,
      selectedCategory = _ref.selectedCategory;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !selectedCategory && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn-with-icon",
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement("span", null, "Legg til kategori"), /*#__PURE__*/_react.default.createElement("svg", {
    width: "23",
    height: "23",
    viewBox: "0 0 23 23"
  }, /*#__PURE__*/_react.default.createElement("g", {
    fill: "#8C8F91",
    fillRule: "nonzero",
    stroke: "#8C8F91",
    strokeWidth: ".2"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M11.5 2a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19zm0-1C17.299 1 22 5.701 22 11.5S17.299 22 11.5 22 1 17.299 1 11.5 5.701 1 11.5 1z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M12.026 10.974h3.68a.526.526 0 1 1 0 1.052h-3.68v3.68a.526.526 0 1 1-1.052 0v-3.68h-3.68a.526.526 0 1 1 0-1.052h3.68v-3.68a.526.526 0 1 1 1.052 0v3.68z"
  })))), selectedCategory && /*#__PURE__*/_react.default.createElement(_SelectedCategory.default, {
    onClick: onClick,
    title: selectedCategory.title
  }));
};

ChooseCategory.propTypes = {
  onClick: _propTypes.default.func.isRequired,
  selectedCategory: _propTypes.default.object.isRequired
};
var _default = ChooseCategory;
exports.default = _default;