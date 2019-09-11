"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Categories = _interopRequireDefault(require("./Categories"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function dropdown() {}

var SubCategories = function SubCategories(_ref) {
  var sub_categories = _ref.sub_categories,
      _onClick = _ref.onClick,
      subSubCategoryOnClick = _ref.subSubCategoryOnClick;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      showSubSubcategories = _useState2[0],
      setShowSubSubcategories = _useState2[1];

  function subCategoryOnClick(item) {
    var sci = 0;

    if (showSubSubcategories !== item.id) {
      sci = item.id;
    }

    setShowSubSubcategories(sci);
  }

  return _react.default.createElement("ul", {
    className: "sub-categories "
  }, sub_categories.map(function (item) {
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("li", {
      className: "sub-category-item"
    }, _react.default.createElement("a", {
      className: "sub-category-link",
      href: "#",
      onClick: function onClick() {
        subCategoryOnClick(item);

        _onClick(item);
      }
    }, item.title)), showSubSubcategories === item.id && item.sub_categories && _react.default.createElement("ul", {
      className: "sub-sub-categories "
    }, item.sub_categories.map(function (c) {
      return _react.default.createElement("li", {
        className: "sub-sub-category-item"
      }, _react.default.createElement("a", {
        href: "#",
        className: "sub-sub-category-link",
        onClick: function onClick() {
          _onClick(c);
        }
      }, c.title));
    })));
  }));
};

var CategoryItem = function CategoryItem(_ref2) {
  var title = _ref2.title,
      icon = _ref2.icon,
      onSelect = _ref2.onSelect,
      active = _ref2.active,
      sub_categories = _ref2.sub_categories,
      _onClick2 = _ref2.onClick,
      subCategoriesOnClick = _ref2.subCategoriesOnClick;
  return _react.default.createElement("div", {
    className: "category-item dropdown"
  }, _react.default.createElement("a", {
    className: 'category-link ' + (active ? 'active' : ''),
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();

      _onClick2();
    }
  }, _react.default.createElement("svg", {
    className: "category-left-icon",
    width: "26",
    height: "26",
    viewBox: "0 0 26 26"
  }, _react.default.createElement("g", {
    fill: "#5C6265",
    fillRule: "nonzero"
  }, _react.default.createElement("path", {
    d: "M18.597 18a.6.6 0 0 1 .588.482l.73 3.647A2.328 2.328 0 0 0 22.197 24c.994 0 1.8-.806 1.803-1.74L22.797 10.2a3 3 0 0 0-3-3h-14.4c-1.657 0-3 1.343-3.003 3.06L1.197 22.2a1.8 1.8 0 0 0 1.8 1.8c1.11 0 2.065-.783 2.282-1.871l.73-3.647A.6.6 0 0 1 6.597 18h12zM7.089 19.2l-.633 3.164A3.528 3.528 0 0 1 2.997 25.2c-1.657 0-3-1.343-2.997-3.06L1.197 10.2a4.2 4.2 0 0 1 4.2-4.2h14.4c2.32 0 4.2 1.88 4.197 4.14l1.203 12.06a3 3 0 0 1-3 3 3.528 3.528 0 0 1-3.459-2.836l-.633-3.164H7.09z"
  }), _react.default.createElement("path", {
    d: "M7.2 12H9a.6.6 0 1 1 0 1.2H7.2V15A.6.6 0 1 1 6 15v-1.8H4.2a.6.6 0 1 1 0-1.2H6v-1.8a.6.6 0 1 1 1.2 0V12zM12 .6v6a.6.6 0 1 0 1.2 0v-6a.6.6 0 1 0-1.2 0zM18 10.8a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4zm0 4.8a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4zm-2.4-2.4a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4zm4.8 0a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4z"
  }))), _react.default.createElement("span", null, title), _react.default.createElement("svg", {
    className: "category-right-icon",
    width: "16px",
    viewBox: "0 0 24 24"
  }, _react.default.createElement("g", {
    className: "nc-icon-wrapper",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    fill: "#8c8f91",
    stroke: "#8c8f91"
  }, _react.default.createElement("polyline", {
    fill: "none",
    stroke: "#8c8f91",
    strokeMiterlimit: "10",
    points: "2,7 12,17 22,7 ",
    transform: "translate(0, 0)"
  })))), active && _react.default.createElement(SubCategories, {
    sub_categories: sub_categories,
    onClick: function onClick(item) {
      subCategoriesOnClick(item);
    }
  }));
};

CategoryItem.propTypes = {
  name: _propTypes.default.string.isRequired,
  icon: _propTypes.default.string.isRequired,
  onSelect: _propTypes.default.func.isRequired
};
var _default = CategoryItem;
exports.default = _default;