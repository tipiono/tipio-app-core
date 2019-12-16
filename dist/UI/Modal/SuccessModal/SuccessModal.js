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
      animationURL = _ref.animationURL,
      props = _objectWithoutProperties(_ref, ["successTitle", "successDescription", "animationURL"]);

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Modal.Modal, props, _react.default.createElement("div", {
    className: "successModal"
  }, _react.default.createElement("img", {
    className: "successModal--animation",
    src: animationURL,
    alt: ""
  }), _react.default.createElement("h3", {
    className: "successModal--title"
  }, successTitle), _react.default.createElement("p", {
    className: "successModal--description"
  }, successDescription))));
}

var _default = SuccessModal;
exports.default = _default;