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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
      path = _ref.path;

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

  function optionOnSelect(item) {
    var soi = 0;

    if (selectedOptionId !== item.id) {
      soi = item.id;
    }

    setSelectedOptionId(soi);
    setSelectedOption(soi === 0 ? null : item);
    setSelectedCategoryId(0);
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
    if (item.height === 1) {
      setActiveCategory(item.id);
    }
  }

  function backButtonOnClick() {
    goBack();
  }

  return _react.default.createElement("div", {
    className: "choose-category"
  }, _react.default.createElement(_CategoriesHeader.default, {
    data: navigation,
    parent: parent,
    backButtonOnClick: backButtonOnClick,
    path: path
  }), _react.default.createElement("div", {
    className: "choose-category-body"
  }, _react.default.createElement(_reactMasonryCss.default, {
    breakpointCols: breakpointColumnsObj,
    className: "my-masonry-grid browse-categories",
    columnClassName: (0, _classnames.default)("my-masonry-grid_column", {
      "customer-main-categories": !withCheckbox,
      "company-main-categories": withCheckbox
    })
  }, active && active.map(function (item) {
    if (item.height === 1) {
      return _react.default.createElement(_CategoryItemNavigator.default, {
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
      return _react.default.createElement(_CategoryItemWithDropdown.default, {
        id: item.id,
        title: item.title,
        sub_categories: selectedCategoryId === item.id ? item.sub_categories : [],
        onClick: function onClick() {
          categoryWithDropdownOnSelect(item);
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
      return _react.default.createElement(_CategoryItem.default, {
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
  }))), _react.default.createElement("div", {
    className: "choose-category-footer"
  }, _react.default.createElement(_SecondaryButton.default, {
    className: "choose-category-footer--btn btn btn-lg btn-secondary",
    text: buttonTitle || 'Lagre',
    disabled: controlDisabledButton && disabledButton || !controlDisabledButton && !selectedOptionId,
    onClick: chooseCategoryOnClick,
    loading: isLoading
  })));
}

var _default = CategoriesForm;
exports.default = _default;