"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TipioOfTheDay = _interopRequireDefault(require("./TipioOfTheDay"));

var _SecondaryOutlineButton = _interopRequireDefault(require("../Buttons/SecondaryOutlineButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TipioOfTheDayEdit = function TipioOfTheDayEdit(props) {
  return _react.default.createElement(_TipioOfTheDay.default, props, _react.default.createElement("div", {
    className: "tipioOfTheDay__content--submit"
  }, _react.default.createElement(_SecondaryOutlineButton.default, {
    text: "Rediger",
    textColor: "text-white",
    onClick: props.onClickEdit
  })));
};

var _default = TipioOfTheDayEdit;
exports.default = _default;