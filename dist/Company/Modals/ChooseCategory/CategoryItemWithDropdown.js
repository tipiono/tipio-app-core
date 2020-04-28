"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Checkbox = _interopRequireDefault(require("../../../UI/Forms/Checkbox"));

var _ArrowDownIcon = _interopRequireDefault(require("../../../UI/Icons/ArrowDownIcon"));

var _svgInline = _interopRequireDefault(require("../../../Hooks/svgInline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function dropdown() {}

var SubCategories = function SubCategories(_ref) {
  var sub_categories = _ref.sub_categories,
      _onClick = _ref.onClick,
      subSubCategoryOnClick = _ref.subSubCategoryOnClick,
      withCheckbox = _ref.withCheckbox,
      onChange = _ref.onChange,
      selectedMap = _ref.selectedMap,
      onSelectItem = _ref.onSelectItem;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      showSubSubcategories = _useState2[0],
      setShowSubSubcategories = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedId = _useState4[0],
      setSelectedId = _useState4[1];

  function subCategoryOnClick(item) {
    var sci = 0;

    if (showSubSubcategories !== item.id) {
      sci = item.id;
    }

    setShowSubSubcategories(sci);
  }

  return _react["default"].createElement("ul", {
    className: "sub-categories "
  }, sub_categories.map(function (item) {
    return _react["default"].createElement(_react["default"].Fragment, null, ' ', item.sub_categories.length ? _react["default"].createElement("li", {
      className: "sub-category-item",
      key: (item.id, ':', item.title)
    }, withCheckbox && _react["default"].createElement(_Checkbox["default"], {
      id: item.id,
      onChange: onChange,
      value: item.id,
      checked: selectedMap[item.id]
    }), _react["default"].createElement("span", {
      className: "sub-category-link ml-4",
      onClick: function onClick(e) {
        e.preventDefault();
        subCategoryOnClick(item);

        _onClick(item);
      }
    }, item.title)) : _react["default"].createElement("li", {
      className: "sub-category-item",
      key: (item.id, ':', item.title)
    }, _react["default"].createElement("span", {
      className: 'sub-category-link ' + (selectedId === item.id ? 'selected' : ''),
      onClick: function onClick(e) {
        e.preventDefault();
        setSelectedId(item.id);
        onSelectItem(item);
      }
    }, item.title)), showSubSubcategories === item.id && item.sub_categories && _react["default"].createElement("ul", {
      className: "sub-sub-categories "
    }, item.sub_categories.map(function (c) {
      return _react["default"].createElement("li", {
        key: (c.id, ':', c.title),
        className: "sub-sub-category-item "
      }, withCheckbox && _react["default"].createElement(_Checkbox["default"], {
        id: c.id,
        onChange: onChange,
        value: c.id,
        checked: selectedMap[c.id]
      }), _react["default"].createElement("span", {
        className: "sub-sub-category-link ml-4",
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
  return _react["default"].createElement("div", {
    className: "category-item dropdown"
  }, _react["default"].createElement("div", {
    className: "d-flex align-items-center"
  }, withCheckbox && _react["default"].createElement(_Checkbox["default"], {
    id: id,
    onChange: onChange,
    value: id,
    checked: selectedMap[id]
  }), _react["default"].createElement("span", {
    className: 'category-link d-flex align-items-center ' + (active ? 'active' : ''),
    onClick: function onClick(e) {
      e.preventDefault();

      _onClick2();
    }
  }, _react["default"].createElement("div", {
    className: "category-left-icon"
  }, _react["default"].createElement(_svgInline["default"], {
    url: icon
  })), _react["default"].createElement("span", null, title), _react["default"].createElement("div", {
    className: "category-right-icon"
  }, _react["default"].createElement("svg", {
    width: 16,
    height: 10,
    viewBox: "0 0 16 10"
  }, _react["default"].createElement("path", {
    d: "M8.007 9.104a.907.907 0 01-.633-.26L.922 2.48a.904.904 0 011.26-1.296l5.825 5.76 5.825-5.76a.906.906 0 111.267 1.296L8.62 8.86a.893.893 0 01-.612.244z",
    fill: "#8C8F91",
    fillRule: "nonzero"
  }))))), active && _react["default"].createElement(SubCategories, {
    sub_categories: sub_categories,
    onClick: function onClick(item) {
      subCategoriesOnClick(item);
    },
    withCheckbox: withCheckbox,
    onChange: onChange,
    selectedMap: selectedMap,
    onSelectItem: function onSelectItem(item) {
      onSelect(item);
    }
  }));
};

CategoryItem.propTypes = {
  name: _propTypes["default"].string,
  icon: _propTypes["default"].string,
  onSelect: _propTypes["default"].func
};
var _default = CategoryItem;
exports["default"] = _default;