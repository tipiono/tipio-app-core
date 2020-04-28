"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _BaseCompanyCard = _interopRequireDefault(require("../BaseCompanyCard/BaseCompanyCard"));

var _index = require("../../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CustomerListCompanyCard = function CustomerListCompanyCard() {
  return _react["default"].createElement("div", null, _react["default"].createElement(_BaseCompanyCard["default"], null, _react["default"].createElement(_index.SecondaryOutlineButton, {
    text: 'Se kundeliste'
  })));
};

var _default = CustomerListCompanyCard;
exports["default"] = _default;