"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CategoryItem = function CategoryItem(props) {
  return _react.default.createElement("div", {
    className: "category-item select"
  }, _react.default.createElement("a", {
    className: 'category-link ',
    href: "#",
    onClick: props.onClick
  }, props.item.file_store && _react.default.createElement("img", {
    src: props.item.file_store.blob_url
  }), _react.default.createElement("span", null, props.item.title), _react.default.createElement("span", null, " --> ")));
};

CategoryItem.propTypes = {
  name: _propTypes.default.string.isRequired,
  icon: _propTypes.default.string.isRequired,
  onSelect: _propTypes.default.func.isRequired
};
var _default = CategoryItem;
exports.default = _default;