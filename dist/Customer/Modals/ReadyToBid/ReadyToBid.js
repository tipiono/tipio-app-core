"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Modal = require("../../../UI/Modal/Modal");

var _index = require("../../../index");

var _SecondaryButton = _interopRequireDefault(require("../../../UI/Buttons/SecondaryButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ReadyToBid(_ref) {
  var joined = _ref.joined,
      defaultValue = _ref.defaultValue;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    showCloseButton: true
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "readyToBid"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: "readyToBid--icon",
    width: 113,
    height: 111
  }, /*#__PURE__*/_react.default.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#E54498",
    d: "M90 72.44a2.59 2.59 0 112.9-2.57 1.5 1.5 0 003 0 5.66 5.66 0 00-4.4-5.39v-2.57a1.5 1.5 0 00-3 0v2.57a5.63 5.63 0 00-4.39 5.39 5.82 5.82 0 006 5.64 2.58 2.58 0 11-2.9 2.56 1.5 1.5 0 00-3 0 5.66 5.66 0 004.39 5.39V86a1.5 1.5 0 003 0v-2.57a5.63 5.63 0 004.39-5.39 5.77 5.77 0 00-5.99-5.6z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#4BBCAC",
    d: "M106.49 100.32l-3-.24 1.49.12-1.5-.11a5.24 5.24 0 00-1.31-3.65c-1.14-1.19-3-1.74-5.53-1.68-8.35.24-16.54 0-17.62 0-.63.09-3.9.81-4 5.47l-3-.08c.18-6.13 4.54-8.17 6.82-8.39H79c.09 0 8.74.26 17.57 0 3.44-.09 6.05.79 7.8 2.64a8.27 8.27 0 012.12 5.92z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#4BBCAC",
    d: "M110.09 101.35v6.2H68.4v-6.2h41.69zm2.75-2.76H65.65v11.71h47.19V98.59zM52.37 3.68A3.9 3.9 0 0155.18 5c3.23 3.22-1.32 6.62-1.32 6.62l29.81 30a5.44 5.44 0 013.63-1.84 3.94 3.94 0 012.64 1.1c3.23 2.83-.93 6.5-.93 6.5S75.36 60.84 74.42 61.69c-.7.62-2.72 3.12-5 3.12A3.49 3.49 0 0167 63.73c-3.17-3 1.4-7 1.4-7S40.26 27.18 38.27 27.18a.11.11 0 00-.08 0 5.77 5.77 0 01-3.72 1.89 3.64 3.64 0 01-2.81-1.47c-2.59-3 .73-5.88.73-5.88L48.51 5.61a6 6 0 013.86-1.93zm0-3a8.9 8.9 0 00-6 2.85l-16 16a8.82 8.82 0 00-2 2.72 7 7 0 006.13 9.8 7.33 7.33 0 003.92-1.21c4 3.45 15.37 14.87 25.94 25.92a8.24 8.24 0 00-1.49 4.31 6.29 6.29 0 002 4.77 6.46 6.46 0 004.52 1.92c3.18 0 5.57-2.43 6.72-3.59l.29-.3c1-.86 13-12.8 14.65-14.42.67-.6 3.11-3 3.1-6.22a6.14 6.14 0 00-2.25-4.72 7 7 0 00-4.62-1.84 7.28 7.28 0 00-3.35.87L58 11.49a7.4 7.4 0 001.31-3.59 6.38 6.38 0 00-2-5.07A6.88 6.88 0 0052.38.68h-.01z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#4BBCAC",
    d: "M66.2 58.41a1.48 1.48 0 01-1.06-.41 1.5 1.5 0 010-2.13l16.71-16.74a1.503 1.503 0 012.15 2.1L67.26 58a1.47 1.47 0 01-1.06.41zM39.12 30a1.5 1.5 0 01-1.07-2.56l16.69-16.7a1.503 1.503 0 012.12 2.13L40.18 29.51a1.53 1.53 0 01-1.06.49zm10.2 11.88c.41.32 1.09 1 1.78 1.67.85.86 1.72 1.78 2.15 2.22L8.3 91.21a2.65 2.65 0 01-1.88.77 2.76 2.76 0 01-2-.81 2.73 2.73 0 01-.08-3.84l44.98-45.45zm-.27-4l-1.86 1.88L2.24 85.21a5.59 5.59 0 00-1.62 4.08 5.82 5.82 0 005.8 5.69 5.61 5.61 0 004-1.66l44.96-45.44 2.05-2.07-2-2.11-.22-.23c-.48-.5-1.23-1.29-2-2a21.49 21.49 0 00-2.08-1.93l-2.1-1.62.02-.04z"
  }))), /*#__PURE__*/_react.default.createElement("h3", {
    className: "readyToBid--title"
  }, "Dere var ", joined, " som kj\xF8pte! N\xE5 kan ", /*#__PURE__*/_react.default.createElement("br", null), "leverand\xF8rene\u2028by p\xE5 orderen."), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-5"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "readyToBid--action"
  }, /*#__PURE__*/_react.default.createElement(_SecondaryButton.default, {
    text: "Sjekk status"
  })))));
}

var _default = ReadyToBid;
exports.default = _default;