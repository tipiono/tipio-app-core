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
  }, "Del p\xE5 Facebook"), _react.default.createElement(_NewDropdown.NewDropdownItem, {
    key: '2'
  }, "Del p\xE5 Messanger"), _react.default.createElement(_NewDropdown.NewDropdownItem, {
    key: '3'
  }, "Del p\xE5 Twitter"), _react.default.createElement(_NewDropdown.NewDropdownItem, {
    key: '4'
  }, "Del p\xE5 mail"), _react.default.createElement(_NewDropdown.NewDropdownItem, {
    key: '5'
  }, "Kopier lenke"), _react.default.createElement("br", null), _react.default.createElement(_NewDropdown.NewDropdownItem, {
    key: '6'
  }, "Meld av interesse"), _react.default.createElement(_NewDropdown.NewDropdownItem, {
    key: '7'
  }, "Rapport\xE9r ", _react.default.createElement("small", {
    className: "d-block text-gray-600"
  }, "Dette bryter med Tipio\u2019s rettningslinjer")), _react.default.createElement(_NewDropdown.NewDropdownItem, {
    key: '7'
  }, "Del p\xE5 mail ", _react.default.createElement("small", {
    className: "d-block text-gray-600"
  }, "Se f\xE6rre slike Tipioer")))));
};

var _default = PublishedByWithDropDown;
exports.default = _default;