"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Modal = require("../../../UI/Modal/Modal");

var _SecondaryButton = _interopRequireDefault(require("../../../UI/Buttons/SecondaryButton"));

var _SecondaryOutlineButton = _interopRequireDefault(require("../../../UI/Buttons/SecondaryOutlineButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function AddAdditionalSales(_ref) {
  var image = _ref.image,
      props = _objectWithoutProperties(_ref, ["image"]);

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Modal.Modal, {
    showCloseButton: true,
    onCloseButtonClick: props.cancel
  }, _react.default.createElement("div", {
    className: "addSales"
  }, _react.default.createElement("a", {
    href: ""
  }, _react.default.createElement("img", {
    className: "addSales--image",
    src: image,
    width: "310px",
    alt: "Tipio with offer"
  })), _react.default.createElement("h4", {
    className: "addSales--title"
  }, "Vil du legge inn mersalg?"), _react.default.createElement("p", {
    className: "addSales--description"
  }, "Du kan n\xE5 legge ut tre eksklusive mersalgs tilbud ", _react.default.createElement("br", null), " til dine kunder"), _react.default.createElement("div", {
    className: "addSales--action mb-3"
  }, _react.default.createElement(_SecondaryButton.default, {
    text: "Legg inn mersalg",
    onClick: props.postAdditionalSales
  })), _react.default.createElement("div", {
    className: "addSales--action"
  }, _react.default.createElement(_SecondaryOutlineButton.default, {
    text: "Ikke denne gangen",
    onClick: props.cancel
  })))));
}

var _default = AddAdditionalSales;
exports.default = _default;