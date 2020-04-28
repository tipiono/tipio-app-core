"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Modal = require("../../../UI/Modal/Modal");

var _reactResponsiveCarousel = require("react-responsive-carousel");

require("react-responsive-carousel/lib/styles/carousel.min.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ImageSliderModal(_ref) {
  var onCloseButtonClick = _ref.onCloseButtonClick,
      images = _ref.images,
      selectedItem = _ref.selectedItem,
      props = _objectWithoutProperties(_ref, ["onCloseButtonClick", "images", "selectedItem"]);

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Modal.Modal, _extends({
    showCloseButton: true,
    onCloseButtonClick: onCloseButtonClick,
    type: _Modal.ModalType.XLARGE
  }, props), _react["default"].createElement("div", {
    className: "imageSlider__modal"
  }, _react["default"].createElement("div", {
    className: "imageSlider"
  }, _react["default"].createElement(_reactResponsiveCarousel.Carousel, {
    showIndicators: images.length >= 2,
    showArrows: images.length > 0,
    showStatus: false,
    showThumbs: false,
    infiniteLoop: true,
    renderBottomCenterControls: false,
    swipeScrollTolerance: 40,
    selectedItem: selectedItem
  }, images && images.map(function (item, i) {
    return _react["default"].createElement("img", {
      src: item.blob_url,
      alt: "...",
      key: i
    });
  }))))));
}

var _default = ImageSliderModal;
exports["default"] = _default;