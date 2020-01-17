"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Modal = require("../../../UI/Modal/Modal");

var _reactDeviceDetect = require("react-device-detect");

var _TipioCountdown = _interopRequireDefault(require("../../../UI/TipioCountdown/TipioCountdown"));

var _fbShare = require("../../../Util/fbShare");

var _reactShare = require("react-share");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function TipioConfirmation(_ref) {
  var image = _ref.image,
      expiresIn = _ref.expiresIn,
      share = _ref.share,
      props = _objectWithoutProperties(_ref, ["image", "expiresIn", "share"]);

  (0, _react.useEffect)(function () {
    (0, _fbShare.loadFbSDK)();
  }, []);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Modal.Modal, _extends({
    showCloseButton: true
  }, props), _react.default.createElement("div", {
    className: "tipio__confirmation"
  }, _react.default.createElement("a", {
    className: "tipio__confirmation--image lazy-image",
    href: ""
  }, _react.default.createElement("img", {
    className: "img-fluid lazyload",
    src: image,
    width: "310px",
    alt: "Tipio with offer"
  }), _react.default.createElement("div", {
    className: "tipio__confirmation--timeLeft"
  }, _react.default.createElement(_TipioCountdown.default, {
    className: "timer",
    expires_in: expiresIn
  }))), _react.default.createElement("h3", {
    className: "tipio__confirmation--title"
  }, "Dere er sterkere sammen!!"), _react.default.createElement("p", {
    className: "tipio__confirmation--description"
  }, "For \xE5 \xF8ke sjansen til at Tipio skal g\xE5 igjennom kan du ", _react.default.createElement("br", null), " invitere venner som kan v\xE6re  interessert i det samme.\u2028"), _react.default.createElement("ul", {
    className: "tipio__confirmation__share"
  }, _react.default.createElement(_reactShare.FacebookShareButton, {
    url: share.link,
    quote: share.title,
    className: "Demo__some-network__share-button"
  }, _react.default.createElement("li", {
    className: "tipio__confirmation__share--item"
  }, _react.default.createElement("a", {
    href: ""
  }, _react.default.createElement("svg", {
    width: 31,
    height: 31
  }, _react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("path", {
    d: "M30.086 15.957C30.086 24.266 23.351 31 15.043 31 6.734 31 0 24.266 0 15.957 0 7.647 6.734.914 15.043.914c8.308 0 15.043 6.734 15.043 15.043",
    fill: "#8C8F91"
  }), _react.default.createElement("path", {
    d: "M16.274 24.14v-7.437h2.451l.46-2.928h-2.911V11.57s.081-1.062 1.223-1.062h1.784V7.901s-1.403-.194-2.935-.107c-1.694.097-3.001 1.726-3.033 3.334v2.646h-2.509v2.928h2.487v7.437h2.983z",
    fill: "#FEFEFE"
  })))))), _react.default.createElement(_reactShare.TwitterShareButton, {
    url: share.link,
    title: share.title,
    className: "Demo__some-network__share-button"
  }, _react.default.createElement("li", {
    className: "tipio__confirmation__share--item"
  }, _react.default.createElement("a", {
    href: ""
  }, _react.default.createElement("svg", {
    width: 31,
    height: 31
  }, _react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("path", {
    d: "M30.47 15.957C30.47 24.266 23.733 31 15.425 31 7.117 31 .382 24.266.382 15.957.382 7.647 7.117.914 15.426.914c8.308 0 15.043 6.734 15.043 15.043",
    fill: "#8C8F91"
  }), _react.default.createElement("path", {
    d: "M6.837 21.397s2.744.437 5.184-1.48c0 0-1.673 0-2.71-1.39-.581-.823-.56-1.086-.56-1.086s.649.186 1.563-.049c-.249-.055-2.633-.519-2.821-3.504.493.189.575.353 1.573.436-.62-.479-2.383-2.164-1.077-4.702 0 0 2.463 3.368 7.255 3.667 0-.489-.489-2.675 1.982-4.005 1.005-.516 2.743-.543 4.046.773.258-.054.95-.04 2.227-.828-.15.53-.353 1.141-1.467 1.915.706-.082 1.046-.123 1.982-.517-.583.72-.502.802-1.738 1.806 0 .761.075 5.429-3.894 8.45-3.968 3.021-8.743 2.344-11.545.514",
    fill: "#FEFEFE"
  })))))), _react.default.createElement("li", {
    className: "tipio__confirmation__share--item"
  }, _react.default.createElement("a", {
    href: (0, _fbShare.messengerShareUrlMobile)(share.url),
    onClick: function onClick(e) {
      if (!_reactDeviceDetect.isMobile) {
        e.preventDefault();
        (0, _fbShare.shareOnMessengerWeb)(share.url);
      }
    }
  }, _react.default.createElement("svg", {
    width: 31,
    height: 31
  }, _react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("path", {
    d: "M30.852 15.957C30.852 24.266 24.117 31 15.81 31 7.5 31 .765 24.266.765 15.957.765 7.647 7.5.914 15.81.914c8.308 0 15.043 6.734 15.043 15.043",
    fill: "#8C8F91"
  }), _react.default.createElement("path", {
    fill: "#FEFEFE",
    d: "M17.277 20.192l-3.69-3.953-7.227 3.953 7.943-8.47 3.802 3.99 7.152-3.99z"
  }))))), _react.default.createElement(_reactShare.EmailShareButton, {
    url: share.link,
    subject: share.title,
    body: share.title,
    className: "Demo__some-network__share-button"
  }, _react.default.createElement("li", {
    className: "tipio__confirmation__share--item"
  }, _react.default.createElement("a", {
    href: "tipio__confirmation__share--item--link"
  }, _react.default.createElement("svg", {
    width: 31,
    height: 31
  }, _react.default.createElement("defs", null, _react.default.createElement("path", {
    id: "prefix__a",
    d: "M.94.914h30.085V31H.939z"
  })), _react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("g", null, _react.default.createElement("mask", {
    id: "prefix__b",
    fill: "#fff"
  }, _react.default.createElement("use", {
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("path", {
    d: "M31.025 15.957C31.025 24.266 24.29 31 15.982 31 7.673 31 .94 24.266.94 15.957.94 7.647 7.673.914 15.982.914c8.308 0 15.043 6.734 15.043 15.043",
    fill: "#8C8F91",
    mask: "url(#prefix__b)"
  })), _react.default.createElement("path", {
    fill: "#FEFEFE",
    d: "M23.879 10.89l-7.884 5.833-7.91-5.833z"
  }), _react.default.createElement("path", {
    fill: "#FEFEFE",
    d: "M23.879 11.827v9.196H8.085v-9.196l7.91 5.875z"
  }))))))))));
}

var _default = TipioConfirmation;
exports.default = _default;