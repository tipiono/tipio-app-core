"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Modal = require("../../../UI/Modal/Modal");

var _SecondaryOutlineButton = _interopRequireDefault(require("../../../UI/Buttons/SecondaryOutlineButton"));

var _GrayOutlineButton = _interopRequireDefault(require("../../../UI/Buttons/GrayOutlineButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function DeleteAccount(props) {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Modal.Modal, _extends({
    showCloseButton: !props.isLoading
  }, props), _react.default.createElement("div", {
    className: "deleteAccount"
  }, _react.default.createElement("svg", {
    className: "deleteAccount--icon",
    width: 49,
    height: 60
  }, _react.default.createElement("defs", null, _react.default.createElement("path", {
    id: "prefix__a",
    d: "M0 59.93h48.447V0H0z"
  })), _react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("path", {
    fill: "#4BBBAA",
    d: "M42.854 13.85a1.73 1.73 0 00-1.787 1.652l-1.381 38.512c0 1.16-.95 2.105-2.116 2.105H10.882c-1.168 0-2.121-.946-2.121-2.167L7.379 15.499c-.034-.942-.84-1.677-1.787-1.649a1.717 1.717 0 00-1.663 1.77l1.379 38.394c0 3.047 2.503 5.527 5.575 5.527H37.57c3.069 0 5.569-2.48 5.566-5.468l1.38-38.453a1.717 1.717 0 00-1.662-1.77zm-13.58 36.152c.937 0 1.705-.744 1.724-1.677l.69-32.73a1.72 1.72 0 00-1.69-1.745h-.034c-.938 0-1.706.741-1.725 1.677l-.69 32.727a1.717 1.717 0 001.687 1.748h.037zm-10.098 0h.038a1.721 1.721 0 001.687-1.748l-.69-32.727a1.717 1.717 0 00-1.725-1.677h-.038c-.953.019-1.71.8-1.687 1.745l.69 32.73a1.719 1.719 0 001.725 1.677z"
  }), _react.default.createElement("path", {
    stroke: "#4BBBAA",
    strokeWidth: 0.77,
    d: "M42.854 13.85a1.73 1.73 0 00-1.787 1.652l-1.381 38.512c0 1.16-.95 2.105-2.116 2.105H10.882c-1.168 0-2.121-.946-2.121-2.167L7.379 15.499c-.034-.942-.84-1.677-1.787-1.649a1.717 1.717 0 00-1.663 1.77l1.379 38.394c0 3.047 2.503 5.527 5.575 5.527H37.57c3.069 0 5.569-2.48 5.566-5.468l1.38-38.453a1.717 1.717 0 00-1.662-1.77zm-13.58 36.152c.937 0 1.705-.744 1.724-1.677l.69-32.73a1.72 1.72 0 00-1.69-1.745h-.034c-.938 0-1.706.741-1.725 1.677l-.69 32.727a1.717 1.717 0 001.687 1.748h.037zm-10.098 0h.038a1.721 1.721 0 001.687-1.748l-.69-32.727a1.717 1.717 0 00-1.725-1.677h-.038c-.953.019-1.71.8-1.687 1.745l.69 32.73a1.719 1.719 0 001.725 1.677z"
  }), _react.default.createElement("mask", {
    id: "prefix__b",
    fill: "#fff"
  }, _react.default.createElement("use", {
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("path", {
    fill: "#E34598",
    d: "M16.094 7h16.265V3.81H16.094V7zm31.962 1.714A1.72 1.72 0 0046.331 7H35.81V2.1c0-.945-.771-1.711-1.725-1.711H14.37c-.957 0-1.728.766-1.728 1.711V7H2.116A1.72 1.72 0 00.39 8.714c0 .946.772 1.712 1.725 1.712H46.33c.953 0 1.725-.766 1.725-1.712z",
    mask: "url(#prefix__b)"
  }), _react.default.createElement("path", {
    stroke: "#E34598",
    strokeWidth: 0.77,
    d: "M16.094 7h16.265V3.81H16.094V7zm31.962 1.714A1.72 1.72 0 0046.331 7H35.81V2.1c0-.945-.771-1.711-1.725-1.711H14.37c-.957 0-1.728.766-1.728 1.711V7H2.116A1.72 1.72 0 00.39 8.714c0 .946.772 1.712 1.725 1.712H46.33c.953 0 1.725-.766 1.725-1.712z",
    mask: "url(#prefix__b)"
  }))), _react.default.createElement("h4", {
    className: "deleteAccount--title"
  }, "Er du sikker p\xE5 at du vil slette\u2028", _react.default.createElement("br", null), " bedrifts kontoen din? Vil all datahistorikk ", _react.default.createElement("br", null), " \u2028bli slettet. "), _react.default.createElement("div", {
    className: "deleteAccount--action mb-4"
  }, _react.default.createElement(_SecondaryOutlineButton.default, {
    text: "Ja, slett bruker",
    onClick: props.onConfirm,
    loading: props.isLoading
  })), _react.default.createElement("div", {
    className: "deleteAccount--action mb-4"
  }, _react.default.createElement(_GrayOutlineButton.default, {
    text: "Avbryt",
    onClick: props.onCloseButtonClick,
    disabled: props.isLoading
  })))));
}

var _default = DeleteAccount;
exports.default = _default;