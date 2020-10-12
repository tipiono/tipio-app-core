"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var FooterContent = function FooterContent(_ref) {
  var title = _ref.title,
      data = _ref.data;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "col-sm-12 col-md-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "customFooter__list"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "customFooter__list__title"
  }, title), /*#__PURE__*/_react.default.createElement("ul", {
    className: "customFooter__list__content"
  }, data.map(function (e, key) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: key
    }, /*#__PURE__*/_react.default.createElement("a", _extends({
      className: "customFooter__list__content__link"
    }, e.anchorProps), e.label));
  }))));
};

FooterContent.propTypes = {
  title: _propTypes.default.string.isRequired,
  data: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string.isRequired,
    anchorProps: _propTypes.default.object.isRequired
  })).isRequired
};
var _default = FooterContent;
exports.default = _default;