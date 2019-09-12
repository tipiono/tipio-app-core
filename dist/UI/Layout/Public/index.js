"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../Navigation/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PublicLayout(_ref) {
  var children = _ref.children;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
    className: "header"
  }, _react.default.createElement(_index.default, null)), _react.default.createElement("main", {
    className: "main"
  }, children), _react.default.createElement("footer", {
    className: "footer"
  }));
}

var _default = PublicLayout;
exports.default = _default;