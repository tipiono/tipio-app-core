"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _generatePrice = _interopRequireDefault(require("../../Util/generatePrice"));

var _reactCountdownNow = _interopRequireWildcard(require("react-countdown-now"));

var _SecondaryOutlineButton = _interopRequireDefault(require("../../UI/Buttons/SecondaryOutlineButton"));

var _reactShare = require("react-share");

var _fbShare = require("../../Util/fbShare");

var _reactDeviceDetect = require("react-device-detect");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _renderer = function renderer(_ref) {
  var hours = _ref.hours,
      minutes = _ref.minutes,
      seconds = _ref.seconds,
      completed = _ref.completed;
  return /*#__PURE__*/_react.default.createElement("span", {
    className: "pinky-countdown-sm-time"
  }, hours, ":", minutes, ":", seconds);
};

var VerticalTimeline = function VerticalTimeline(_ref2) {
  var isLoading = _ref2.isLoading,
      tipio = _ref2.tipio,
      stepStatus = _ref2.stepStatus,
      onClose = _ref2.onClose,
      firstRange = _ref2.firstRange,
      secondRange = _ref2.secondRange,
      share = _ref2.share;
  (0, _react.useEffect)(function () {
    (0, _fbShare.loadFbSDK)();
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, isLoading && /*#__PURE__*/_react.default.createElement("p", null, "Loading..."), !isLoading && /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-6 mx-auto"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tipio-status"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tipio-status-header"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "tipio-status-header-image",
    href: "/"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: tipio.images && tipio.images[0].blob_url,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h5", {
    className: "tipio-status-header-title"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "/"
  }, tipio.title)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "tipio-status-body"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "vertical-timeline"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "vertical-timeline-item completed step-1"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "timeline-item-title"
  }, "Kj\xF8pt")), /*#__PURE__*/_react.default.createElement("li", {
    className: 'vertical-timeline-item step-2 ' + stepStatus[2]
  }, !(stepStatus[2] === 'completed') && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "timeline-tooltip"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "timeline-tooltip-inner"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "left-text"
  }, tipio.meta.binding_count, " har kj\xF8pt!"), /*#__PURE__*/_react.default.createElement("div", {
    className: "tooltip-divider"
  }), /*#__PURE__*/_react.default.createElement("svg", {
    className: "white-countdown-sm-icon",
    width: 11,
    height: 12
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#FFF",
    d: "M2.389 10.076C.15 8.459-.535 5.386.799 2.945a.155.155 0 01-.04-.046L.443 2.5A1.458 1.458 0 01.69.44a1.487 1.487 0 012.077.265l.107.138a5.29 5.29 0 015.25 0l.107-.138A1.487 1.487 0 0110.31.439a1.459 1.459 0 01.255 2.062l-.318.398a.155.155 0 01-.04.046c1.333 2.443.646 5.516-1.595 7.13l1.064 1.083c.11.112.11.292 0 .404a.276.276 0 01-.396 0L8.148 10.41a5.302 5.302 0 01-5.216 0L1.8 11.562a.276.276 0 01-.396 0 .289.289 0 010-.404l.985-1.082zm7.495-7.644l.232-.294a.887.887 0 00-.153-1.25.933.933 0 00-1.29.156l-.062.092c.494.355.925.793 1.273 1.296zm-8.768 0a5.327 5.327 0 011.273-1.296l-.063-.086a.933.933 0 00-1.29-.156.887.887 0 00-.153 1.25l.233.288zM5.5 10.496c2.656 0 4.809-2.192 4.809-4.896C10.309 2.896 8.156.704 5.5.704S.691 2.896.691 5.6c.004 2.703 2.155 4.893 4.809 4.896zM4.007 4.16l1.516 1.601L8.13 3.094a.276.276 0 01.396 0 .29.29 0 010 .404l-2.829 2.88a.28.28 0 01-.407 0L3.594 4.54a.29.29 0 010-.409.274.274 0 01.413.029z"
  })), ' ', /*#__PURE__*/_react.default.createElement(_reactCountdownNow.default, {
    date: tipio.meta.binding_expires_in,
    renderer: function renderer(_ref3) {
      var completed = _ref3.completed;
      var result = (0, _reactCountdownNow.formatTimeDelta)((0, _reactCountdownNow.calcTimeDelta)(tipio.meta.binding_expires_in), {
        daysInHours: true
      });
      return _renderer(_objectSpread({}, result, {
        completed: completed
      }));
    }
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "timeline-item-content"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "content-title"
  }, "P\xE5melding p\xE5g\xE5r"), /*#__PURE__*/_react.default.createElement("p", {
    className: "content-description"
  }, "Flere med? bedre pris.", /*#__PURE__*/_react.default.createElement("br", null), "Del Tipioen!"), /*#__PURE__*/_react.default.createElement("ul", {
    className: "tipio__share"
  }, /*#__PURE__*/_react.default.createElement(_reactShare.FacebookShareButton, {
    url: share.link,
    quote: share.title,
    className: "Demo__some-network__share-button"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "tipio__share--item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: ""
  }, /*#__PURE__*/_react.default.createElement("svg", {
    width: 31,
    height: 31
  }, /*#__PURE__*/_react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react.default.createElement("path", {
    className: "svgBg",
    d: "M30.086 15.957C30.086 24.266 23.351 31 15.043 31 6.734 31 0 24.266 0 15.957 0 7.647 6.734.914 15.043.914c8.308 0 15.043 6.734 15.043 15.043",
    fill: "#8C8F91"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M16.274 24.14v-7.437h2.451l.46-2.928h-2.911V11.57s.081-1.062 1.223-1.062h1.784V7.901s-1.403-.194-2.935-.107c-1.694.097-3.001 1.726-3.033 3.334v2.646h-2.509v2.928h2.487v7.437h2.983z",
    fill: "#FEFEFE"
  })))))), /*#__PURE__*/_react.default.createElement(_reactShare.TwitterShareButton, {
    url: share.link,
    title: share.title,
    className: "Demo__some-network__share-button"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "tipio__share--item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: ""
  }, /*#__PURE__*/_react.default.createElement("svg", {
    width: 31,
    height: 31
  }, /*#__PURE__*/_react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react.default.createElement("path", {
    className: "svgBg",
    d: "M30.47 15.957C30.47 24.266 23.733 31 15.425 31 7.117 31 .382 24.266.382 15.957.382 7.647 7.117.914 15.426.914c8.308 0 15.043 6.734 15.043 15.043",
    fill: "#8C8F91"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M6.837 21.397s2.744.437 5.184-1.48c0 0-1.673 0-2.71-1.39-.581-.823-.56-1.086-.56-1.086s.649.186 1.563-.049c-.249-.055-2.633-.519-2.821-3.504.493.189.575.353 1.573.436-.62-.479-2.383-2.164-1.077-4.702 0 0 2.463 3.368 7.255 3.667 0-.489-.489-2.675 1.982-4.005 1.005-.516 2.743-.543 4.046.773.258-.054.95-.04 2.227-.828-.15.53-.353 1.141-1.467 1.915.706-.082 1.046-.123 1.982-.517-.583.72-.502.802-1.738 1.806 0 .761.075 5.429-3.894 8.45-3.968 3.021-8.743 2.344-11.545.514",
    fill: "#FEFEFE"
  })))))), /*#__PURE__*/_react.default.createElement("li", {
    className: "tipio__share--item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: (0, _fbShare.messengerShareUrlMobile)(share.url),
    onClick: function onClick(e) {
      if (!_reactDeviceDetect.isMobile) {
        e.preventDefault();
        (0, _fbShare.shareOnMessengerWeb)(share.url);
      }
    }
  }, /*#__PURE__*/_react.default.createElement("svg", {
    width: 31,
    height: 31
  }, /*#__PURE__*/_react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react.default.createElement("path", {
    className: "svgBg",
    d: "M30.852 15.957C30.852 24.266 24.117 31 15.81 31 7.5 31 .765 24.266.765 15.957.765 7.647 7.5.914 15.81.914c8.308 0 15.043 6.734 15.043 15.043",
    fill: "#8C8F91"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#FEFEFE",
    d: "M17.277 20.192l-3.69-3.953-7.227 3.953 7.943-8.47 3.802 3.99 7.152-3.99z"
  }))))), /*#__PURE__*/_react.default.createElement(_reactShare.EmailShareButton, {
    url: share.link,
    subject: share.title,
    body: share.title,
    className: "Demo__some-network__share-button"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "tipio__share--item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "tipio__share--item--link"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    width: "31px",
    height: "31px",
    viewBox: "0 0 31 31"
  }, /*#__PURE__*/_react.default.createElement("g", {
    id: "Desktop---Customer",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react.default.createElement("g", {
    id: "Group-35",
    transform: "translate(0.938500, 0.913600)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    className: "svgBg",
    d: "M30.086,15.043 C30.086,23.352 23.351,30.086 15.043,30.086 C6.734,30.086 1.20792265e-13,23.352 1.20792265e-13,15.043 C1.20792265e-13,6.734 6.734,-1.0658141e-13 15.043,-1.0658141e-13 C23.351,-1.0658141e-13 30.086,6.734 30.086,15.043",
    id: "Fill-7",
    fill: "#8C8F91"
  }), /*#__PURE__*/_react.default.createElement("g", {
    id: "Group-33",
    transform: "translate(7.146000, 9.976600)",
    fill: "#FEFEFE"
  }, /*#__PURE__*/_react.default.createElement("polygon", {
    id: "Fill-16",
    points: "15.794 4.17443857e-14 7.91 5.833 -7.01660952e-14 4.17443857e-14"
  }), /*#__PURE__*/_react.default.createElement("polygon", {
    id: "Fill-18",
    points: "15.794 0.9365 15.794 10.1325 -7.01660952e-14 10.1325 -7.01660952e-14 0.9365 7.91 6.8115"
  }))))))))))), stepStatus[2] === 'completed' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "timeline-tooltip"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "timeline-tooltip-inner"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "left-text"
  }, tipio.meta.binding_count, " har kj\xF8pt!"), /*#__PURE__*/_react.default.createElement("div", {
    className: "tooltip-divider"
  }), (0, _generatePrice.default)(tipio.meta.binding_count, firstRange, secondRange), ' ', "Kr")), /*#__PURE__*/_react.default.createElement("div", {
    className: "timeline-item-content"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "content-description"
  }, tipio.meta.binding_count, " andre kj\xF8pte sammen med deg! ", /*#__PURE__*/_react.default.createElement("br", null), "Dermed ble prisen kun p\xE5", ' ', (0, _generatePrice.default)(tipio.meta.binding_count, firstRange, secondRange), ' ', "Kr")))), /*#__PURE__*/_react.default.createElement("li", {
    className: 'vertical-timeline-item step-3 ' + stepStatus[3]
  }, (stepStatus[3] === 'coming' || stepStatus[3] === 'ongoing') && /*#__PURE__*/_react.default.createElement("span", {
    className: "timeline-item-title"
  }, "Levering"), (stepStatus[3] === 'completed' || stepStatus[3] === 'failed') && /*#__PURE__*/_react.default.createElement("div", {
    className: "timeline-item-content"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "content-title"
  }, "Levering"), /*#__PURE__*/_react.default.createElement("p", {
    className: "content-description"
  }, tipio && tipio.meta && tipio.meta.tipo_offer_company_name, " leverer varen til deg! Ta kontakt med leverand\xF8r for sp\xF8rsm\xE5l."))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "tipio-status-footer"
  }, /*#__PURE__*/_react.default.createElement(_SecondaryOutlineButton.default, {
    text: "G\xE5 til produkt",
    onClick: onClose
  }))))));
};

VerticalTimeline.propTypes = {
  isLoading: _propTypes.default.bool.isRequired,
  tipio: _propTypes.default.arrayOf(_propTypes.default.shape({
    mainImageUrl: _propTypes.default.string.isRequired,
    title: _propTypes.default.string.isRequired,
    subheading: _propTypes.default.string.isRequired
  })).isRequired,
  stepStatus: _propTypes.default.object.isRequired,
  onClose: _propTypes.default.func.isRequired // meta: {
  //   joinedCount: PropTypes.number.isRequired,
  //   bidCount: PropTypes.number.isRequired,
  //   bidExpiresIn: PropTypes.object.isRequired,
  //   tipioOfferPrice: PropTypes.number.isRequired,
  //   tipioOfferCompanyName:  PropTypes.string.isRequired,
  // }
  // ,

};
var _default = VerticalTimeline;
exports.default = _default;