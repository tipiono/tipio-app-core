"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Avatar = _interopRequireDefault(require("../Avatar/Avatar"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubNav = function SubNav(_ref) {
  var title = _ref.title,
      items = _ref.items,
      activeLink = _ref.activeLink,
      avatar = _ref.avatar,
      _onClick = _ref.onClick;
  return _react.default.createElement("div", {
    className: "subNav"
  }, _react.default.createElement("div", {
    className: "subNav__account"
  }, avatar && _react.default.createElement("div", {
    className: "subNav__account--avatar"
  }, _react.default.createElement(_Avatar.default, {
    src: avatar
  })), _react.default.createElement("h3", {
    className: "subNav__account--name"
  }, title)), _react.default.createElement("ul", {
    className: "subNav__list"
  }, items.map(function (item) {
    return _react.default.createElement("li", {
      className: "subNav__list--item"
    }, _react.default.createElement("a", {
      className: (0, _classnames.default)("subNav__list--item--link", {
        active: item.link === activeLink
      }),
      href: "",
      onClick: function onClick(e) {
        e.preventDefault();

        _onClick(item);
      }
    }, item.title), item.badgeCount > 0 ? _react.default.createElement("sup", {
      className: "subNav__list--item--badge"
    }, item.badgeCount) : null);
  })));
};

var _default = SubNav;
exports.default = _default;