"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _BaseCompanyCard = _interopRequireDefault(require("../BaseCompanyCard/BaseCompanyCard"));

var _index = require("../../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function AddSaleCompanyCard(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_BaseCompanyCard.default, props, props.showAddAdditionalSaleButton && _react.default.createElement(_index.SecondaryButton, {
    text: 'Legg til mersalg'
  }), props.showSeeCustomerListButton ? _react.default.createElement(_index.SecondaryOutlineButton, {
    text: 'Se kundeliste'
  }) : null));
}

var _default = AddSaleCompanyCard;
exports.default = _default;