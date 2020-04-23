"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Avatar = _interopRequireDefault(require("../../UI/Avatar/Avatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ChangeAvatar = function ChangeAvatar(_ref) {
  var src = _ref.src,
      children = _ref.children;
  return _react["default"].createElement("div", {
    className: "changeAvatar"
  }, _react["default"].createElement(_Avatar["default"], {
    src: src
  }), _react["default"].createElement("svg", {
    className: "changeAvatar--icon",
    width: 36,
    height: 35
  }, _react["default"].createElement("title", null, 'Group 33'), _react["default"].createElement("g", {
    transform: "translate(1 .5)",
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("circle", {
    stroke: "#DFE3E5",
    fill: "#FFF",
    cx: 17,
    cy: 17,
    r: 17
  }), _react["default"].createElement("path", {
    d: "M22.825 13.86l-.468.468-1.873-1.874.468-.468c.5-.5 1.373-.5 1.873 0 .25.251.388.583.388.938 0 .353-.138.686-.388.936zm-8.755 8.756l-2.498.625.625-2.497 7.35-7.352 1.874 1.874-7.35 7.35zm9.692-11.565c-1-1.002-2.745-1.002-3.747 0l-8.886 8.886a.658.658 0 00-.174.307l-.935 3.746a.667.667 0 00.173.63.666.666 0 00.63.173l3.746-.937a.641.641 0 00.307-.173l8.886-8.886c.5-.5.776-1.165.776-1.873 0-.71-.275-1.373-.776-1.873z",
    fill: "#5C6265"
  }))), children);
};

var _default = ChangeAvatar;
exports["default"] = _default;