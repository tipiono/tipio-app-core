"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Checkbox = _interopRequireDefault(require("../../../UI/Forms/Checkbox"));

var _svgInline = _interopRequireDefault(require("../../../Hooks/svgInline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CategoryItem = function CategoryItem(_ref) {
  var id = _ref.id,
      title = _ref.title,
      icon = _ref.icon,
      onSelect = _ref.onSelect,
      selected = _ref.selected,
      sub_categories = _ref.sub_categories,
      withCheckbox = _ref.withCheckbox,
      onChange = _ref.onChange,
      selectedMap = _ref.selectedMap;
  return _react.default.createElement("div", {
    className: "category-item select"
  }, withCheckbox && _react.default.createElement(_Checkbox.default, {
    id: id,
    onChange: onChange,
    value: id,
    checked: selectedMap[id]
  }), _react.default.createElement("span", {
    className: 'category-link ' + (selected ? 'selected' : ''),
    onClick: onSelect
  }, _react.default.createElement("div", {
    className: "category-left-icon"
  }, _react.default.createElement(_svgInline.default, {
    url: icon
  })), _react.default.createElement("span", null, title), _react.default.createElement("svg", {
    className: "category-right-icon",
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, _react.default.createElement("g", {
    className: "nc-icon-wrapper",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    fill: "#371e1e",
    stroke: "#371e1e"
  }, _react.default.createElement("polyline", {
    "data-color": "color-2",
    fill: "none",
    strokeMiterlimit: "10",
    points: " 6,12 10,16 18,8 "
  }), _react.default.createElement("circle", {
    fill: "none",
    stroke: "#371e1e",
    strokeMiterlimit: "10",
    cx: "12",
    cy: "12",
    r: "11"
  })))));
};

CategoryItem.propTypes = {
  name: _propTypes.default.string,
  icon: _propTypes.default.string,
  onSelect: _propTypes.default.func
};
var _default = CategoryItem;
exports.default = _default;