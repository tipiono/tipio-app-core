"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CategoriesHeader(_ref) {
  var data = _ref.data,
      backButtonOnClick = _ref.backButtonOnClick;
  var mainTitle = data && data.length !== 0 && data[0].title;
  return _react.default.createElement(_react.default.Fragment, null, mainTitle && _react.default.createElement("div", {
    className: "choose-category-header"
  }, _react.default.createElement("div", {
    className: "category-header-title"
  }, data.length > 0 && _react.default.createElement("a", {
    className: "backward",
    href: "#",
    onClick: backButtonOnClick
  }, _react.default.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, _react.default.createElement("g", {
    className: "nc-icon-wrapper",
    fill: "#8c8f91"
  }, _react.default.createElement("path", {
    fill: "#8c8f91",
    d: "M1.293,11.293L9,3.586L10.414,5l-6,6H22c0.553,0,1,0.448,1,1s-0.447,1-1,1H4.414l6,6L9,20.414l-7.707-7.707 C0.902,12.316,0.902,11.684,1.293,11.293z"
  })))), _react.default.createElement("h3", {
    className: "mb-0"
  }, mainTitle)), _react.default.createElement("ul", {
    className: "category-types"
  }, data.slice(1).map(function (navigation) {
    return _react.default.createElement("li", {
      className: "category-type-item"
    }, navigation.title);
  }))));
}

var _default = CategoriesHeader;
exports.default = _default;