"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _PublishedByBase = _interopRequireDefault(require("./PublishedByBase"));

var _ThreeDotsIcon = _interopRequireDefault(require("../Icons/ThreeDotsIcon"));

var _NewDropdown = require("../NewDropdown/NewDropdown");

var _reactDeviceDetect = require("react-device-detect");

var _fbShare = require("../../Util/fbShare");

var _reactShare = require("react-share");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var PublishedByWithDropDown = function PublishedByWithDropDown(props) {
  var share = props.share,
      reportOnClick = props.reportOnClick;
  (0, _react.useEffect)(function () {
    (0, _fbShare.loadFbSDK)();
  }, []);
  return _react.default.createElement(_PublishedByBase.default, props, _react.default.createElement("div", {
    className: "publishedBy__dropdown"
  }, _react.default.createElement(_NewDropdown.NewDropdown, {
    title: _react.default.createElement(_ThreeDotsIcon.default, null),
    aligned: "publishedBy__dropdown--right",
    showCloseIcon: true,
    hideOnClick: true
  }, _react.default.createElement(_NewDropdown.NewDropdownItem, {
    key: '1'
  }, _react.default.createElement(_reactShare.FacebookShareButton, {
    url: share.link,
    quote: share.title,
    className: "Demo__some-network__share-button"
  }, "Del p\xE5 facebook")), _react.default.createElement(_NewDropdown.NewDropdownItem, {
    key: '2',
    href: (0, _fbShare.messengerShareUrlMobile)(share.url),
    onClick: function onClick() {
      if (!_reactDeviceDetect.isMobile) {
        (0, _fbShare.shareOnMessengerWeb)(share.url);
      }
    }
  }, "Del p\xE5 Messanger"), _react.default.createElement(_NewDropdown.NewDropdownItem, {
    key: '3'
  }, _react.default.createElement(_reactShare.TwitterShareButton, {
    url: share.link,
    title: share.title,
    className: "Demo__some-network__share-button"
  }, "Del p\xE5 Twitter")), _react.default.createElement(_NewDropdown.NewDropdownItem, {
    key: '4'
  }, _react.default.createElement(_reactShare.EmailShareButton, {
    url: share.link,
    subject: share.title,
    body: share.title
  }, "Del p\xE5 mail")), _react.default.createElement(_NewDropdown.NewDropdownItem, {
    key: '5',
    onClick: function onClick() {
      navigator.clipboard.writeText(share.link);
    }
  }, "Kopier lenke"), _react.default.createElement("br", null), _react.default.createElement(_NewDropdown.NewDropdownItem, {
    key: '7',
    onClick: reportOnClick
  }, "Rapport\xE9r ", _react.default.createElement("small", {
    className: "d-block text-gray-600"
  }, "Dette bryter med Tipio\u2019s rettningslinjer")))));
};

var _default = PublishedByWithDropDown;
exports.default = _default;