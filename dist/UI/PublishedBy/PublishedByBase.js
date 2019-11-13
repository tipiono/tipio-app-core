"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PublishedBy = function PublishedBy(_ref) {
  var avatar = _ref.avatar,
      username = _ref.username,
      date = _ref.date,
      url = _ref.url,
      children = _ref.children;
  return _react.default.createElement("div", {
    className: "publishedBy"
  }, _react.default.createElement("div", {
    className: "publishedBy__user"
  }, _react.default.createElement("img", {
    className: "publishedBy__user--avatar",
    src: avatar,
    alt: ""
  }), _react.default.createElement("div", {
    className: ""
  }, _react.default.createElement("h6", {
    className: "publishedBy__user--name"
  }, username))), children);
};

var _default = PublishedBy;
exports.default = _default;