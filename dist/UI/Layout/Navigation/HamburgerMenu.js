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
    className: (0, _classnames.default)('hamburger-button', {
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
        title: 'Mine Tipioer'
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
          'nav-item': items.sub_items // "nav-item-logout": logoutItem

        })
      }, /*#__PURE__*/_react.default.createElement("a", {
        href: "/tipio/new",
        onClick: function onClick(e) {
          e.preventDefault();
          props.menuItemOnClick(x);
        }
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "nav-item__title"
      }, ' ', x.showAddButton && /*#__PURE__*/_react.default.createElement("svg", {
        width: 35,
        height: 35,
        viewBox: "0 0 35 35"
      }, /*#__PURE__*/_react.default.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/_react.default.createElement("circle", {
        fill: "#4ABCAC",
        cx: 17.28,
        cy: 17.28,
        r: 17.28
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M17.06 10a.89.89 0 01.89.89v5.279h5.288a.89.89 0 010 1.781H17.95v5.288a.89.89 0 01-1.78 0l-.001-5.288H10.89a.89.89 0 010-1.78l5.279-.001V10.89a.89.89 0 01.891-.89z",
        fill: "#381B81",
        fillRule: "nonzero"
      }))), x.name)));
    }
  })))));
}

var _default = HamburgerMenu;
exports.default = _default;