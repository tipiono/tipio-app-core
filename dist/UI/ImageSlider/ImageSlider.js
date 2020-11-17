"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactResponsiveCarousel = require("react-responsive-carousel");

var _reactPlayer = _interopRequireDefault(require("react-player"));

var _classnames = _interopRequireDefault(require("classnames"));

require("react-responsive-carousel/lib/styles/carousel.min.css");

var _TipioCountdown = _interopRequireDefault(require("../TipioCountdown/TipioCountdown"));

var _calculateDiscountPercentage = require("../../Util/calculateDiscountPercentage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageSlider = function ImageSlider(_ref) {
  var images = _ref.images,
      showThumbs = _ref.showThumbs,
      showTimer = _ref.showTimer,
      tipio_expires_in = _ref.tipio_expires_in,
      onClick = _ref.onClick,
      costPrice = _ref.costPrice,
      salePrice = _ref.salePrice;

  var YoutubeSlide = function YoutubeSlide(_ref2) {
    var url = _ref2.url,
        isSelected = _ref2.isSelected;
    return /*#__PURE__*/_react.default.createElement(_reactPlayer.default, {
      width: "100%",
      url: url,
      playing: isSelected
    });
  };

  var getVideoThumb = function getVideoThumb(videoId) {
    return "https://img.youtube.com/vi/".concat(videoId, "/default.jpg");
  };

  var getVideoId = function getVideoId(url) {
    return url.match(/youtu(?:.*\/v\/|.*v\=|\.be\/)([A-Za-z0-9_\-]{11})/)[1];
  };

  var imageSrc = [];
  images.map(function (image) {
    if (image.blob_url) {
      imageSrc.push(image.blob_url);
    } else {
      var videoId = getVideoId(image.url);

      if (videoId) {
        imageSrc.push(getVideoThumb(videoId));
      }
    }
  });

  var customRenderThumb = function customRenderThumb() {
    return imageSrc.map(function (item) {
      return /*#__PURE__*/_react.default.createElement("img", {
        src: item
      });
    });
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('imageSlider', images && {
      showIndicators: images.length >= 5
    }, images && {
      removeMargin: images.length < 5
    }, images && {
      removeBottomMargin: images.length === 1
    })
  }, /*#__PURE__*/_react.default.createElement(_reactResponsiveCarousel.Carousel, {
    showIndicators: images.length >= 2,
    showArrows: images.length >= 5,
    showStatus: false,
    showThumbs: showThumbs,
    infiniteLoop: true,
    renderBottomCenterControls: false,
    swipeScrollTolerance: 40,
    onClickItem: onClick && onClick,
    renderThumbs: customRenderThumb,
    useKeyboardArrows: true
  }, images && images.map(function (item, i) {
    if (item.blob_url) {
      return /*#__PURE__*/_react.default.createElement("img", {
        src: item.blob_url,
        alt: "...",
        key: i
      });
    } else {
      return /*#__PURE__*/_react.default.createElement(YoutubeSlide, {
        key: "youtube-1",
        url: item.url
      });
    }
  })), showTimer && tipio_expires_in && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, costPrice && salePrice && /*#__PURE__*/_react.default.createElement("span", {
    className: "imageSlider__discount"
  }, (0, _calculateDiscountPercentage.createDiscountLabel)(costPrice, salePrice)), /*#__PURE__*/_react.default.createElement("div", {
    className: "imageSlider__countDown"
  }, /*#__PURE__*/_react.default.createElement(_TipioCountdown.default, {
    className: "timer",
    expires_in: tipio_expires_in
  })))));
};

var _default = ImageSlider;
exports.default = _default;