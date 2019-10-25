"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorMessage = function ErrorMessage(_ref) {
  var title = _ref.title,
      content = _ref.content,
      color = _ref.color,
      paddingY = _ref.paddingY,
      paddingX = _ref.paddingX,
      textAlign = _ref.textAlign;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)("errorMessage", color, paddingY, paddingX, textAlign)
  }, _react.default.createElement("span", {
    className: "errorMessage--title"
  }, title, " "), _react.default.createElement("span", {
    className: "errorMessage--content"
  }, content));
};

var _default = ErrorMessage;
exports.default = _default;