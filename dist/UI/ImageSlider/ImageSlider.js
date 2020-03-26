"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactResponsiveCarousel = require("react-responsive-carousel");

var _classnames = _interopRequireDefault(require("classnames"));

require("react-responsive-carousel/lib/styles/carousel.min.css");

var _TipioCountdown = _interopRequireDefault(require("../TipioCountdown/TipioCountdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ImageSlider(_ref) {
  var images = _ref.images,
      showThumbs = _ref.showThumbs,
      showTimer = _ref.showTimer,
      tipio_expires_in = _ref.tipio_expires_in;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: (0, _classnames.default)('imageSlider', images && {
      showIndicators: images.length >= 5
    }, images && {
      removeMargin: images.length < 5
    })
  }, _react.default.createElement(_reactResponsiveCarousel.Carousel, {
    showIndicators: images.length >= 2,
    showArrows: images.length >= 5,
    showStatus: false,
    showThumbs: showThumbs,
    infiniteLoop: true,
    renderBottomCenterControls: false,
    swipeScrollTolerance: 40
  }, images && images.map(function (item, i) {
    return _react.default.createElement("img", {
      src: item.blob_url,
      alt: "...",
      key: i
    });
  })), showTimer && tipio_expires_in && _react.default.createElement("div", {
    className: "imageSlider__countDown"
  }, _react.default.createElement(_TipioCountdown.default, {
    className: "timer",
    expires_in: tipio_expires_in
  }))));
}

var _default = ImageSlider;
exports.default = _default;