"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Modal = require("../../../UI/Modal/Modal");

var _ExportIcon = _interopRequireDefault(require("../../../UI/Icons/ExportIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExportAs = function ExportAs(_ref) {
  var onClose = _ref.onClose,
      exportExcelOnClick = _ref.exportExcelOnClick,
      exportCSVOnClick = _ref.exportCSVOnClick;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Modal.Modal, {
    showCloseButton: true,
    onCloseButtonClick: onClose
  }, _react.default.createElement("div", {
    className: "exportAs",
    onClick: exportCSVOnClick
  }, _react.default.createElement("div", {
    className: "exportAs--cvs"
  }, _react.default.createElement(_ExportIcon.default, null), _react.default.createElement("h3", {
    className: "exportAs--cvs--label"
  }, "Eksporter CSV-fil")), _react.default.createElement("div", {
    className: "exportAs--divider"
  }), _react.default.createElement("div", {
    className: "exportAs--excel",
    onClick: exportExcelOnClick
  }, _react.default.createElement(_ExportIcon.default, null), _react.default.createElement("h3", {
    className: "exportAs--excel--label"
  }, "Eksporter Excel-fil")))));
};

var _default = ExportAs;
exports.default = _default;