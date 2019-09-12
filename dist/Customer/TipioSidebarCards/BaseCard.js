"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseCard = function BaseCard(_ref) {
  var children = _ref.children;
  return _react.default.createElement("div", {
    className: "sidebarCard"
  }, _react.default.createElement("div", {
    className: "sidebarCard__header"
  }, _react.default.createElement("h4", {
    className: "sidebarCard__header--title"
  }, "Long product name"), _react.default.createElement("p", {
    className: "sidebarCard__header--subtitle"
  }, "Brandname"), "Marketprice ", _react.default.createElement("br", null), "250"), _react.default.createElement("div", {
    className: "footer"
  }, children));
};

var _default = BaseCard;
exports.default = _default;