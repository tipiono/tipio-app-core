"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactI18next = require("react-i18next");

var _MediumPopularTipio = _interopRequireDefault(require("./MediumPopularTipio"));

var _SecondaryOutlineButton = _interopRequireDefault(require("../Buttons/SecondaryOutlineButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MediumPopularVotingTipioEdit = function MediumPopularVotingTipioEdit(props) {
  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;

  return /*#__PURE__*/_react.default.createElement(_MediumPopularTipio.default, props, /*#__PURE__*/_react.default.createElement("h6", {
    className: "mediumPopularTipio__content--interested"
  }, "2 789 interesserte!"), /*#__PURE__*/_react.default.createElement("div", {
    className: "mediumPopularTipio__content__submit"
  }, /*#__PURE__*/_react.default.createElement(_SecondaryOutlineButton.default, {
    text: t('admin.mainTipio.edit'),
    onClick: props.onClick
  })));
};

var _default = MediumPopularVotingTipioEdit;
exports.default = _default;