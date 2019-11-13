"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _PublishedByBase = _interopRequireDefault(require("./PublishedByBase"));

var _ThreeDotsIcon = _interopRequireDefault(require("../Icons/ThreeDotsIcon"));

var _NewDropdown = require("../NewDropdown/NewDropdown");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PublishedByWithDropDown = function PublishedByWithDropDown(props) {
  return _react.default.createElement(_PublishedByBase.default, props, _react.default.createElement("div", {
    className: "publishedBy__dropdown"
  }, _react.default.createElement(_NewDropdown.NewDropdown, {
    title: _react.default.createElement(_ThreeDotsIcon.default, null),
    aligned: "dropdown-menu-right"
  }, _react.default.createElement(_NewDropdown.NewDropdownItem, {
    key: '1'
  }, "Del p\xE5 facebook"), _react.default.createElement(_NewDropdown.NewDropdownItem, {
    key: '2'
  }, "Del p\xE5 facebook"), _react.default.createElement(_NewDropdown.NewDropdownItem, {
    key: '3'
  }, "Del p\xE5 facebook"))));
};

var _default = PublishedByWithDropDown;
exports.default = _default;