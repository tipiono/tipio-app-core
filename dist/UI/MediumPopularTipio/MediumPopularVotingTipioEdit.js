"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _MediumPopularTipio = _interopRequireDefault(require("./MediumPopularTipio"));

var _SecondaryOutlineButton = _interopRequireDefault(require("../Buttons/SecondaryOutlineButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MediumPopularVotingTipioEdit = function MediumPopularVotingTipioEdit(props) {
  return /*#__PURE__*/_react.default.createElement(_MediumPopularTipio.default, props, /*#__PURE__*/_react.default.createElement("h6", {
    className: "mediumPopularTipio__content--interested"
  }, props.count, " interesserte!"), /*#__PURE__*/_react.default.createElement("div", {
    className: "mediumPopularTipio__content__submit"
  }, /*#__PURE__*/_react.default.createElement(_SecondaryOutlineButton.default, {
    text: "Rediger",
    onClick: props.onEditClick
  })));
};

var _default = MediumPopularVotingTipioEdit;
exports.default = _default;