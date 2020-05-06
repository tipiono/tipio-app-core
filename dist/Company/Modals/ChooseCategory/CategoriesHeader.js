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
      subCategoriesOnClick = _ref.subCategoriesOnClick,
      isFilter = _ref.isFilter,
      clearFilter = _ref.clearFilter;
  var title = path && path[0] ? path[0].title : !!isFilter ? 'Velg Kategori' : '';
  var items = [];

  for (var i = 1; i < (path && path.length); i += 1) {
    items.push(path[i]);
  }

  return _react.default.createElement(_react.default.Fragment, null, title && _react.default.createElement("div", {
    className: "choose-category-header"
  }, _react.default.createElement("div", {
    className: "category-header-title"
  }, _react.default.createElement("div", {
    className: "header__title"
  }, ' ', _react.default.createElement("h3", {
    className: "mb-0"
  }, title), path && path[0] && path[0].title && _react.default.createElement("span", {
    className: "backward",
    onClick: backButtonOnClick
  }, _react.default.createElement("svg", {
    width: 15,
    height: 9
  }, _react.default.createElement("title", null, 'Mask'), _react.default.createElement("path", {
    d: "M7.243.26c.23 0 .451.09.616.252L14.131 6.7a.879.879 0 11-1.225 1.26l-5.663-5.6-5.663 5.6A.881.881 0 01.348 6.7l6.3-6.202A.868.868 0 017.243.26z",
    fill: "#4F2E90",
    fillRule: "nonzero"
  })))), !!isFilter && _react.default.createElement("div", {
    className: "clear__filters",
    onClick: clearFilter
  }, _react.default.createElement("svg", {
    width: 11,
    height: 12,
    viewBox: "0 0 11 12",
    fill: "none"
  }, _react.default.createElement("path", {
    d: "M6.484 6.2l4.296-4.32a.692.692 0 00-.978-.978L5.506 5.204 1.21.902a.692.692 0 00-.978.978L4.528 6.2.232 10.472a.69.69 0 00.489 1.181.69.69 0 00.489-.203l4.296-4.296 4.296 4.296c.13.13.307.203.492.204a.696.696 0 00.486-1.2L6.484 6.2z",
    fill: "#4F2E90"
  }), _react.default.createElement("mask", {
    id: "prefix__a",
    maskUnits: "userSpaceOnUse",
    x: 0,
    y: 0,
    width: 11,
    height: 12
  }, _react.default.createElement("path", {
    d: "M6.484 6.2l4.296-4.32a.692.692 0 00-.978-.978L5.506 5.204 1.21.902a.692.692 0 00-.978.978L4.528 6.2.232 10.472a.69.69 0 00.489 1.181.69.69 0 00.489-.203l4.296-4.296 4.296 4.296c.13.13.307.203.492.204a.696.696 0 00.486-1.2L6.484 6.2z",
    fill: "#fff"
  })), _react.default.createElement("g", {
    mask: "url(#prefix__a)"
  }, _react.default.createElement("path", {
    fill: "#4F2E90",
    d: "M-2-1h30v30H-2z"
  }))), "Nullstill")), _react.default.createElement("ul", {
    className: "category-types"
  }, items.map(function (navigation, i) {
    return _react.default.createElement("li", {
      className: "category-type-item",
      key: navigation.id + ":" + navigation.title
    }, items.length === i + 1 ? _react.default.createElement("span", {
      onClick: function onClick(e) {
        e.preventDefault();
        subCategoriesOnClick(navigation);
      },
      className: (0, _classnames.default)('category-type-item-link')
    }, navigation.title) : _react.default.createElement("span", {
      onClick: function onClick(e) {
        e.preventDefault();
        subCategoriesOnClick(navigation);
      },
      className: (0, _classnames.default)('category-type-item-link')
    }, navigation.title)); // if (items.length === i + 1) {
    //     return (
    //         <li className="category-type-item">
    //             <span
    //                 onClick={(e) => {
    //                     e.preventDefault();
    //                     subCategoriesOnClick(navigation);
    //                 }}
    //                 className={cx('category-type-item-link')}
    //             >
    //                 {navigation.title}
    //             </span>
    //         </li>
    //     );
    // } else {
    //     return (
    //         <li className="category-type-item">
    //             <span
    //                 onClick={(e) => {
    //                     e.preventDefault();
    //                     subCategoriesOnClick(navigation);
    //                 }}
    //                 className={cx('category-type-item-link')}
    //             >
    //                 {navigation.title}
    //             </span>
    //         </li>
    //     );
    // }
  }))));
}

var _default = CategoriesHeader;
exports.default = _default;