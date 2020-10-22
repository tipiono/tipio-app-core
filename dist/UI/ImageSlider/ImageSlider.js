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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageSlider = function ImageSlider(_ref) {
  var images = _ref.images,
      showThumbs = _ref.showThumbs,
      showTimer = _ref.showTimer,
      tipio_expires_in = _ref.tipio_expires_in,
      onClick = _ref.onClick,
      _ref$hasVideo = _ref.hasVideo,
      hasVideo = _ref$hasVideo === void 0 ? false : _ref$hasVideo;

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
    return url.substr('https://www.youtube.com/watch?v='.length, url.length);
  };

  var imageSrc = [];
  images.map(function (image) {
    imageSrc.push(image.blob_url);
  });

  if (hasVideo) {
    var videoId = getVideoId('https://www.youtube.com/watch?v=VeT16PSVjLE');

    if (videoId) {
      imageSrc.push(getVideoThumb(videoId));
    }
  }

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
    renderThumbs: customRenderThumb
  }, images && images.map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement("img", {
      src: item.blob_url,
      alt: "...",
      key: i
    });
  }), hasVideo && /*#__PURE__*/_react.default.createElement(YoutubeSlide, {
    key: "youtube-1",
    url: "https://www.youtube.com/watch?v=VeT16PSVjLE"
  })), showTimer && tipio_expires_in && /*#__PURE__*/_react.default.createElement("div", {
    className: "imageSlider__countDown"
  }, /*#__PURE__*/_react.default.createElement(_TipioCountdown.default, {
    className: "timer",
    expires_in: tipio_expires_in
  }))));
};

var _default = ImageSlider;
exports.default = _default;