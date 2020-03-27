"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CategoriesHeader(_ref) {
  var data = _ref.data,
      parent = _ref.parent,
      path = _ref.path,
      backButtonOnClick = _ref.backButtonOnClick,
      subCategoriesOnClick = _ref.subCategoriesOnClick;
  // const mainTitle = data && data.length !== 0 && data[0].title;
  var mainTitle = parent && parent.title;
  var currentCat = path && path.length > 0 ? path[path.length - 1] : {
    id: 0
  };
  return _react.default.createElement(_react.default.Fragment, null, mainTitle && _react.default.createElement("div", {
    className: "choose-category-header"
  }, _react.default.createElement("div", {
    className: "category-header-title"
  }, _react.default.createElement("h3", {
    className: "mb-0"
  }, mainTitle), parent && _react.default.createElement("span", {
    className: "backward",
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
  }, data.map(function (navigation) {
    return _react.default.createElement("li", {
      className: "category-type-item"
    }, _react.default.createElement("span", {
      onClick: function onClick(e) {
        e.preventDefault();
        subCategoriesOnClick(navigation);
      },
      className: (0, _classnames.default)('category-type-item-link', {
        selected: navigation.id === currentCat.id
      })
    }, navigation.title));
  }))));
}

var _default = CategoriesHeader;
exports.default = _default;