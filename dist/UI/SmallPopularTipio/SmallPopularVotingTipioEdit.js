"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SmallPopularTipio = _interopRequireDefault(require("./SmallPopularTipio"));

var _reactI18next = require("react-i18next");

var _SecondaryOutlineButton = _interopRequireDefault(require("../Buttons/SecondaryOutlineButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SmallPopularVotingTipioEdit = function SmallPopularVotingTipioEdit(props) {
  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;

  return _react.default.createElement(_SmallPopularTipio.default, props, _react.default.createElement("h6", {
    className: "smallPopularTipio__content--interested"
  }, "2 789 interesserte!"), _react.default.createElement("div", {
    className: "smallPopularTipio__content__submit"
  }, _react.default.createElement(_SecondaryOutlineButton.default, {
    text: t('admin.mainTipio.edit'),
    onClick: props.onClick
  })));
};

var _default = SmallPopularVotingTipioEdit;
exports.default = _default;