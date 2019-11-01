"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactResponsiveCarousel = require("react-responsive-carousel");

require("react-responsive-carousel/lib/styles/carousel.min.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ImageSlider(_ref) {
  var images = _ref.images,
      showThumbs = _ref.showThumbs;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "imageSlider"
  }, _react.default.createElement(_reactResponsiveCarousel.Carousel, {
    showIndicators: false,
    showArrows: false,
    showStatus: false,
    showThumbs: showThumbs
  }, images && images.map(function (item) {
    return _react.default.createElement("img", {
      src: item.blob_url,
      alt: "..."
    });
  }))));
}

var _default = ImageSlider;
exports.default = _default;