"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function PillTabs(_ref) {
  var items = _ref.items,
      activeIndex = _ref.activeIndex,
      onClick = _ref.onClick;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("ul", {
    className: "pillTab"
  }, items.map(function (item, i) {
    return _react["default"].createElement("li", {
      key: item,
      className: (0, _classnames["default"])("pillTab__item", {
        active: activeIndex === i
      })
    }, _react["default"].createElement("a", {
      href: "",
      className: "pillTab__item--link",
      onClick: onClick,
      "data-item": item,
      "data-index": i
    }, item));
  })));
}

var _default = PillTabs;
exports["default"] = _default;