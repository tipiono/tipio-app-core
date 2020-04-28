"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _BaseCompanyCard = _interopRequireDefault(require("../BaseCompanyCard/BaseCompanyCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TipioWithOfferCompanyCard = function TipioWithOfferCompanyCard(props) {
  return _react["default"].createElement("div", null, _react["default"].createElement(_BaseCompanyCard["default"], props));
};

var _default = TipioWithOfferCompanyCard;
exports["default"] = _default;