"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Categories = _interopRequireDefault(require("./Categories"));

var _Checkbox = _interopRequireDefault(require("../../../UI/Forms/Checkbox"));

var _InteriorIcon = _interopRequireDefault(require("../../../UI/Icons/InteriorIcon"));

var _ArrowDownIcon = _interopRequireDefault(require("../../../UI/Icons/ArrowDownIcon"));

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
      subSubCategoryOnClick = _ref.subSubCategoryOnClick,
      withCheckbox = _ref.withCheckbox,
      onChange = _ref.onChange,
      selectedMap = _ref.selectedMap;

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
      className: "sub-category-item",
      key: item.id
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
        key: c.id,
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
  var id = _ref2.id,
      title = _ref2.title,
      icon = _ref2.icon,
      onSelect = _ref2.onSelect,
      active = _ref2.active,
      sub_categories = _ref2.sub_categories,
      _onClick2 = _ref2.onClick,
      subCategoriesOnClick = _ref2.subCategoriesOnClick,
      withCheckbox = _ref2.withCheckbox,
      onChange = _ref2.onChange,
      selectedMap = _ref2.selectedMap;
  return _react.default.createElement("div", {
    className: "category-item dropdown"
  }, _react.default.createElement("div", {
    className: "d-flex align-items-center"
  }, withCheckbox && _react.default.createElement(_Checkbox.default, {
    id: id,
    onChange: onChange,
    value: id,
    checked: selectedMap[id]
  }), _react.default.createElement("a", {
    className: 'category-link d-flex align-items-center ' + (active ? 'active' : ''),
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();

      _onClick2();
    }
  }, _react.default.createElement("div", {
    className: "category-left-icon"
  }, _react.default.createElement(_InteriorIcon.default, null)), _react.default.createElement("span", null, title), _react.default.createElement("div", {
    className: "category-right-icon"
  }, _react.default.createElement(_ArrowDownIcon.default, null)))), active && _react.default.createElement(SubCategories, {
    sub_categories: sub_categories,
    onClick: function onClick(item) {
      subCategoriesOnClick(item);
    },
    withCheckbox: withCheckbox,
    onChange: onChange,
    selectedMap: selectedMap
  }));
};

CategoryItem.propTypes = {
  name: _propTypes.default.string.isRequired,
  icon: _propTypes.default.string.isRequired,
  onSelect: _propTypes.default.func.isRequired
};
var _default = CategoryItem;
exports.default = _default;