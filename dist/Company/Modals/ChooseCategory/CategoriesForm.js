"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactMasonryCss = _interopRequireDefault(require("react-masonry-css"));

var _CategoryItem = _interopRequireDefault(require("./CategoryItem"));

var _CategoryItemNavigator = _interopRequireDefault(require("./CategoryItemNavigator"));

var _CategoryItemWithDropdown = _interopRequireDefault(require("./CategoryItemWithDropdown"));

var _CategoriesHeader = _interopRequireDefault(require("./CategoriesHeader"));

var _classnames = _interopRequireDefault(require("classnames"));

var _SecondaryButton = _interopRequireDefault(require("../../../UI/Buttons/SecondaryButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var breakpointColumnsObj = {
  default: 2,
  1100: 1,
  700: 1,
  500: 1
};

function CategoriesForm(_ref) {
  var active = _ref.active,
      navigation = _ref.navigation,
      parent = _ref.parent,
      buttonTitle = _ref.buttonTitle,
      withCheckbox = _ref.withCheckbox,
      onChange = _ref.onChange,
      controlDisabledButton = _ref.controlDisabledButton,
      disabledButton = _ref.disabledButton,
      selectedMap = _ref.selectedMap,
      onComplete = _ref.onComplete,
      isLoading = _ref.isLoading,
      setActiveCategory = _ref.setActiveCategory,
      goBack = _ref.goBack,
      path = _ref.path,
      isFilter = _ref.isFilter,
      clearFilter = _ref.clearFilter,
      onClickSelect = _ref.onClickSelect;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      selectedOptionId = _useState2[0],
      setSelectedOptionId = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedOption = _useState4[0],
      setSelectedOption = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedCategoryId = _useState6[0],
      setSelectedCategoryId = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      orderActive = _useState8[0],
      setOrderActive = _useState8[1];

  var ref = (0, _react.useRef)(null);

  var sort = function sort(arr) {
    return arr.sort(function (second, first) {
      if ('sub_categories' in first) sort(first.sub_categories);
      if (first.order === undefined) return 1;
      return second.order > first.order ? 1 : -1;
    });
  };

  var sorter = function sorter(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
      if ('sub_categories' in arr[i]) sort(arr[i].sub_categories);
    }

    sort(arr);
    return arr;
  };

  (0, _react.useLayoutEffect)(function () {
    var sortAktive = function sortAktive(arr) {
      return new Promise(function (resolve, reject) {
        try {
          sorter(arr);
          resolve(true);
        } catch (_unused) {
          reject(true);
        }
      });
    };

    sortAktive(active).then(function (_) {
      return setOrderActive(active);
    }).catch(function (_) {
      return setOrderActive(active);
    });
  }, [active]);

  function optionOnSelect(item) {
    var soi = 0;

    if (selectedOptionId !== item.id) {
      soi = item.id;
    }

    setSelectedOptionId(soi);
    setSelectedOption(soi === 0 ? null : item);
    setSelectedCategoryId(0);

    if (onClickSelect) {
      onComplete(soi, selectedOption);
    }
  }

  function selectedSubCategory(item) {
    var soi = 0;

    if (selectedOptionId !== item.id) {
      soi = item.id;
    }

    setSelectedOptionId(soi);

    if (_typeof(item) === 'object') {
      if (onClickSelect) {
        onComplete(soi);
      }
    }
  }

  function categoryWithDropdownOnSelect(item) {
    var sci = 0;

    if (selectedCategoryId !== item.id) {
      sci = item.id;
    }

    setSelectedCategoryId(sci);
    setSelectedOptionId(0);
    setSelectedOption(sci === 0 ? null : item);
  }

  function chooseCategoryOnClick() {
    onComplete(selectedOptionId, selectedOption);
  }

  function navigatorOnSelect(id) {
    setSelectedCategoryId(id);
    setSelectedOptionId(0);
    setSelectedOption(null);
    setActiveCategory(id);
  }

  function subCategoriesOnClick(item) {
    if (item.height >= 1 && item.height <= 3) {
      ref.current.scrollIntoView({
        x: 0,
        y: 0,
        behavior: 'smooth'
      });
      setActiveCategory(item.id);
    }
  }

  function headerSubOnClick(item) {
    setSelectedCategoryId(item.id);
    setActiveCategory(item.id);
  }

  function backButtonOnClick() {
    goBack();
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "choose-category",
    ref: ref
  }, /*#__PURE__*/_react.default.createElement(_CategoriesHeader.default, {
    data: navigation,
    parent: parent,
    backButtonOnClick: backButtonOnClick,
    subCategoriesOnClick: headerSubOnClick,
    path: path,
    clearFilter: !isLoading ? function (_) {
      return clearFilter();
    } : function (_) {},
    isFilter: isFilter
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "choose-category-body"
  }, /*#__PURE__*/_react.default.createElement(_reactMasonryCss.default, {
    breakpointCols: breakpointColumnsObj,
    className: "my-masonry-grid browse-categories",
    columnClassName: (0, _classnames.default)('my-masonry-grid_column', {
      'customer-main-categories': !withCheckbox,
      'company-main-categories': withCheckbox
    })
  }, orderActive.length && orderActive.map(function (item) {
    if (item.height === 1) {
      return /*#__PURE__*/_react.default.createElement(_CategoryItemNavigator.default, {
        key: item.id + ':' + item.title,
        item: item,
        onClick: function onClick(e) {
          navigatorOnSelect(item.id);
        },
        withCheckbox: withCheckbox,
        onChange: onChange,
        selectedMap: selectedMap
      });
    } else if (item.height > 1) {
      // height > 1
      return /*#__PURE__*/_react.default.createElement(_CategoryItemWithDropdown.default, {
        key: item.id + ':' + item.title,
        id: item.id,
        title: item.title,
        sub_categories: selectedCategoryId === item.id ? item.sub_categories : [],
        onClick: function onClick() {
          categoryWithDropdownOnSelect(item);
        },
        onSelect: function onSelect(selectedItem) {
          selectedSubCategory(selectedItem);
        },
        active: selectedCategoryId === item.id,
        subCategoriesOnClick: subCategoriesOnClick,
        icon: item.file_store && item.file_store.blob_url,
        withCheckbox: withCheckbox,
        onChange: onChange,
        selectedMap: selectedMap
      });
    } else {
      // height 0
      return /*#__PURE__*/_react.default.createElement(_CategoryItem.default, {
        key: item.id + ':' + item.title,
        id: item.id,
        icon: item.file_store && item.file_store.blob_url,
        title: item.title,
        onSelect: function onSelect(e) {
          e.preventDefault();
          optionOnSelect(item);
        },
        selected: item.id === selectedOptionId,
        withCheckbox: withCheckbox,
        onChange: onChange,
        selectedMap: selectedMap
      });
    }
  }))), !onClickSelect && /*#__PURE__*/_react.default.createElement("div", {
    className: "choose-category-footer"
  }, /*#__PURE__*/_react.default.createElement(_SecondaryButton.default, {
    className: "choose-category-footer--btn btn btn-lg btn-secondary",
    text: buttonTitle || 'Lagre',
    disabled: controlDisabledButton && disabledButton || !controlDisabledButton && !selectedOptionId,
    onClick: chooseCategoryOnClick,
    loading: isLoading
  })));
}

var _default = CategoriesForm;
exports.default = _default;