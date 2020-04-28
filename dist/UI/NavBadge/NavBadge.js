"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavBadge = function NavBadge(_ref) {
  var count = _ref.count;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("span", {
    className: "navBadge"
  }, count));
};

var _default = NavBadge;
exports.default = _default;