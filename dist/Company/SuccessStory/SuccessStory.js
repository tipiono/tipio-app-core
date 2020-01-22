"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SuccessStory(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      image = _ref.image,
      onClick = _ref.onClick;
  return _react.default.createElement("div", {
    className: "successStory"
  }, _react.default.createElement("a", {
    href: "",
    className: "successStory__preview lazy-image",
    onClick: onClick
  }, _react.default.createElement("img", {
    className: "successStory__preview--image lazyload",
    "data-src": "https://tipio.ams3.cdn.digitaloceanspaces.com/staging/6/tipios/71/1579615001435",
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'%3E%3C/svg%3E",
    alt: ""
  })), _react.default.createElement("div", {
    className: "successStory__content"
  }, _react.default.createElement("a", {
    href: "",
    onClick: onClick
  }, _react.default.createElement("h1", {
    className: "successStory__content--title"
  }, "Example heading")), _react.default.createElement("p", {
    className: "successStory__content--description"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non pugnem cum homine, cur tantum habeat in natura boni")));
}

;
var _default = SuccessStory;
exports.default = _default;