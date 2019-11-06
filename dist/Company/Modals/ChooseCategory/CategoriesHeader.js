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
  }, _react.default.createElement("h3", {
    className: "mb-0"
  }, mainTitle), data.length > 0 && _react.default.createElement("a", {
    className: "backward",
    href: "#",
    onClick: backButtonOnClick
  }, _react.default.createElement("svg", {
    width: 15,
    height: 9
  }, _react.default.createElement("title", null, 'Mask'), _react.default.createElement("path", {
    d: "M7.243.26c.23 0 .451.09.616.252L14.131 6.7a.879.879 0 11-1.225 1.26l-5.663-5.6-5.663 5.6A.881.881 0 01.348 6.7l6.3-6.202A.868.868 0 017.243.26z",
    fill: "#4F2E90",
    fillRule: "nonzero"
  })))), _react.default.createElement("ul", {
    className: "category-types"
  }, data.slice(1).map(function (navigation) {
    return _react.default.createElement("li", {
      className: "category-type-item"
    }, navigation.title);
  }))));
}

var _default = CategoriesHeader;
exports.default = _default;