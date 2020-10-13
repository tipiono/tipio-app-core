"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _PublishedByBase = _interopRequireDefault(require("./PublishedByBase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PublishedByWithDate = function PublishedByWithDate(props) {
  return _react.default.createElement(_PublishedByBase.default, props, _react.default.createElement("p", {
    className: "publishedBy--date"
  }, props.date));
};

var _default = PublishedByWithDate;
exports.default = _default;