"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Checkbox = _interopRequireDefault(require("../../../UI/Forms/Checkbox"));

var _svgInline = _interopRequireDefault(require("../../../Hooks/svgInline"));

var _ArrowDownIcon = _interopRequireDefault(require("../../../UI/Icons/ArrowDownIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CategoryItem = function CategoryItem(props) {
  return _react.default.createElement("div", {
    className: "category-item more",
    key: props.item.id
  }, _react.default.createElement("div", {
    className: "d-flex align-items-center"
  }, props.withCheckbox && _react.default.createElement(_Checkbox.default, {
    id: props.item.id,
    onChange: props.onChange,
    value: props.item.id,
    checked: props.selectedMap[props.item.id]
  }), _react.default.createElement("span", {
    className: 'category-link ',
    onClick: props.onClick
  }, _react.default.createElement("div", {
    className: "category-left-icon"
  }, props.item.file_store && _react.default.createElement(_svgInline.default, {
    url: props.item.file_store.blob_url
  })), _react.default.createElement("span", null, props.item.title), _react.default.createElement("div", {
    className: "category-right-icon"
  }, _react.default.createElement(_ArrowDownIcon.default, null)))));
};

CategoryItem.propTypes = {
  name: _propTypes.default.string,
  icon: _propTypes.default.string,
  onSelect: _propTypes.default.func
};
var _default = CategoryItem;
exports.default = _default;