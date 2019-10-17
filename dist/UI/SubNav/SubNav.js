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
      active = _ref.active,
      avatar = _ref.avatar;
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
        active: item.title === active
      }),
      href: ""
    }, item.title));
  })));
};

var _default = SubNav;
exports.default = _default;