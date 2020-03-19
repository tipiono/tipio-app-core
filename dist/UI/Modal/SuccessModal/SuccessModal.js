"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Modal = require("../Modal");

var _classnames = _interopRequireDefault(require("classnames"));

var _ConfirmedIcon = _interopRequireDefault(require("../../Icons/ConfirmedIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SuccessModal(_ref) {
  var successTitle = _ref.successTitle,
      successDescription = _ref.successDescription,
      animationURL = _ref.animationURL,
      videoURL = _ref.videoURL,
      imageURL = _ref.imageURL,
      customStyle = _ref.customStyle,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["successTitle", "successDescription", "animationURL", "videoURL", "imageURL", "customStyle", "children"]);

  var renderVideo = function renderVideo() {
    return _react.default.createElement("div", {
      className: "successModal--video"
    }, _react.default.createElement("video", {
      autoplay: "autoplay",
      loop: true,
      muted: true,
      playsinline: true
    }, _react.default.createElement("source", {
      src: videoURL,
      type: "video/mp4"
    }), "Nettleseren din st\xF8tter ikke videokoden."));
  };

  var renderImage = function renderImage() {
    return _react.default.createElement("img", {
      className: "successModal--animation",
      src: animationURL,
      alt: ""
    });
  };

  var renderSvg = function renderSvg() {
    return _react.default.createElement("div", {
      className: "successModal--animation"
    }, _react.default.createElement(_ConfirmedIcon.default, null));
  };

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Modal.Modal, props, _react.default.createElement("div", {
    className: (0, _classnames.default)('successModal', customStyle)
  }, imageURL ? renderSvg() : videoURL ? renderVideo() : renderImage(), _react.default.createElement("h3", {
    className: "successModal--title"
  }, successTitle), _react.default.createElement("p", {
    className: "successModal--description"
  }, successDescription), children && children)));
}

var _default = SuccessModal;
exports.default = _default;