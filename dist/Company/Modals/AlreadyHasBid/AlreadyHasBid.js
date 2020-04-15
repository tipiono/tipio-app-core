"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../../..");

var _GrayOutlineButton = _interopRequireDefault(require("../../../UI/Buttons/GrayOutlineButton"));

var _InfoIcon = _interopRequireDefault(require("../../../UI/Icons/InfoIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var AlreadyHasBid = function AlreadyHasBid(props) {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_.Modal, _extends({
    showCloseButton: !props.isLoading
  }, props, {
    onCloseButtonClick: props.onCloseButtonClick
  }), _react.default.createElement("div", {
    className: "alreadyHasBid"
  }, _react.default.createElement("div", {
    className: "alreadyHasBid--icon"
  }, _react.default.createElement(_InfoIcon.default, null)), _react.default.createElement("h4", {
    className: "alreadyHasBid--title"
  }, "Oi! Noen var vist raskere enn deg"), _react.default.createElement("p", {
    className: "alreadyHasBid--description"
  }, "En annen bedrift har akkurat sendt inn et bud p\xE5 dette ", _react.default.createElement("br", null), " produkte. Budet ditt ble derfor dessverre ikke sendt inn. "), _react.default.createElement("div", {
    className: "alreadyHasBid--action"
  }, _react.default.createElement(_GrayOutlineButton.default, {
    text: "Avbryt",
    onClick: props.onCloseButtonClick,
    disabled: props.isLoading
  })))));
};

var _default = AlreadyHasBid;
exports.default = _default;