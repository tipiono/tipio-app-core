"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Modal = require("../../../UI/Modal/Modal");

var _VerticalTimeline = _interopRequireDefault(require("../../Timelines/VerticalTimeline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function VerticalTimelineModal(props) {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Modal.Modal, {
    showCloseButton: true,
    onCloseButtonClick: props.onClose
  }, _react["default"].createElement("div", {
    className: ""
  }, _react["default"].createElement(_VerticalTimeline["default"], props))));
}

var _default = VerticalTimelineModal;
exports["default"] = _default;