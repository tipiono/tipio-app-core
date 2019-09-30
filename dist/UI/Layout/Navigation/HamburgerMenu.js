"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _DropDown = require("../../DdropDown/DropDown");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HamburgerMenu(props) {
  var menuVisible = props.menuVisible,
      toggleMenu = props.toggleMenu,
      items = props.items;
  return _react.default.createElement("ul", {
    className: "nav-list ml-auto"
  }, _react.default.createElement("li", {
    className: "nav-list-item"
  }, _react.default.createElement("span", null, _react.default.createElement("a", {
    href: "#",
    className: (0, _classnames.default)('hamburger-button', {
      'show': menuVisible
    }),
    onClick: toggleMenu
  }, "Menu")), menuVisible && _react.default.createElement("div", {
    className: "menu-content show"
  }, _react.default.createElement("ul", {
    className: "tab-content"
  }, items && items.map(function (x) {
    if (x.sub_items) {
      return _react.default.createElement("li", {
        className: "nav-item"
      }, _react.default.createElement(_DropDown.DropDown, {
        title: 'Mine Tipioer'
      }, x.sub_items.map(function (y) {
        return _react.default.createElement(_DropDown.DropDownItem, null, _react.default.createElement("a", {
          to: "/"
        }, y.name));
      })));
    } else {
      return _react.default.createElement("li", {
        className: (0, _classnames.default)({
          'nav-item': items.sub_items
        })
      }, _react.default.createElement("a", {
        href: "/tipio/new"
      }, x.name));
    }
  })))));
}

var _default = HamburgerMenu;
exports.default = _default;