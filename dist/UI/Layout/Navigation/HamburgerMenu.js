"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Overlay = _interopRequireDefault(require("../../Overlay/Overlay"));

var _DropDown = require("../../DdropDown/DropDown");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HamburgerMenu(props) {
  var menuVisible = props.menuVisible,
      toggleMenu = props.toggleMenu,
      items = props.items,
      logedIn = props.logedIn;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, menuVisible && /*#__PURE__*/_react.default.createElement(_Overlay.default, {
    onClick: toggleMenu,
    opacity: 0.5,
    top: "88px"
  }), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-list-item"
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: (0, _classnames.default)("hamburger-button", {
      show: menuVisible
    }),
    onClick: function onClick(e) {
      e.preventDefault();
      toggleMenu();
    }
  }, "Menu")), menuVisible && /*#__PURE__*/_react.default.createElement("div", {
    className: "menu-content show"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "tab-content company-menu-content"
  }, items && items.map(function (x) {
    if (x.shouldDisplay && !x.shouldDisplay({
      logedIn: logedIn
    })) {
      return null;
    }

    if (x.sub_items) {
      return /*#__PURE__*/_react.default.createElement("li", {
        key: x.name,
        className: "nav-item"
      }, /*#__PURE__*/_react.default.createElement(_DropDown.DropDown, {
        title: "Mine Tipioer"
      }, x.sub_items.map(function (y) {
        return /*#__PURE__*/_react.default.createElement(_DropDown.DropDownItem, {
          key: y.name
        }, /*#__PURE__*/_react.default.createElement("a", {
          to: "/",
          onClick: function onClick(e) {
            e.preventDefault();
            props.menuItemOnClick(y);
          }
        }, y.name));
      })));
    } else {
      {
        /* const logoutItem = x.name === "Logg ut"; */
      }
      return /*#__PURE__*/_react.default.createElement("li", {
        key: x.name,
        id: "nav-item",
        className: (0, _classnames.default)({
          "nav-item": items.sub_items // "nav-item-logout": logoutItem

        })
      }, /*#__PURE__*/_react.default.createElement("a", {
        href: "/tipio/new",
        onClick: function onClick(e) {
          e.preventDefault();
          props.menuItemOnClick(x);
        }
      }, x.name));
    }
  })))));
}

var _default = HamburgerMenu;
exports.default = _default;