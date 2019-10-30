"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Overlay = function Overlay(_ref) {
  var _onClick = _ref.onClick;
  return _react.default.createElement("a", {
    onClick: function onClick(e) {
      e.preventDefault();

      _onClick();
    }
  }, _react.default.createElement("div", {
    className: "overlay show"
  }));
};

var _default = Overlay;
exports.default = _default;