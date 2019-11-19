"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Modal = require("../Modal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SuccessModal(_ref) {
  var successTitle = _ref.successTitle,
      successDescription = _ref.successDescription,
      props = _objectWithoutProperties(_ref, ["successTitle", "successDescription"]);

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Modal.Modal, props, _react.default.createElement("div", {
    className: "successModal"
  }, _react.default.createElement("svg", {
    className: "successModal--icon",
    width: 75,
    height: 75
  }, _react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    strokeWidth: 4
  }, _react.default.createElement("path", {
    stroke: "#4BBBAB",
    d: "M64.702 23.398a33.224 33.224 0 014.049 15.946c0 18.434-14.943 33.376-33.375 33.376C16.943 72.72 2 57.778 2 39.344 2 20.912 16.943 5.969 35.376 5.969a33.215 33.215 0 0118.589 5.653"
  }), _react.default.createElement("path", {
    stroke: "#E44498",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M21.554 31.356L35.375 49.33 72.56 2.629"
  }))), _react.default.createElement("h3", {
    className: "successModal--title"
  }, successTitle), _react.default.createElement("p", {
    className: "successModal--description"
  }, successDescription))));
}

var _default = SuccessModal;
exports.default = _default;