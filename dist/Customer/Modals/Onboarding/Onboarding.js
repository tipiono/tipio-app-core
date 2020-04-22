"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactSwipe = _interopRequireDefault(require("react-swipe"));

var _ = require("../../..");

var _SecondaryButton = _interopRequireDefault(require("../../../UI/Buttons/SecondaryButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var cx = require('classnames');

var steps = [{
  title: 'Å kjøpe ting sammen er lurt.',
  buttonText: 'Ok, neste tips',
  icon: function icon() {
    return _react["default"].createElement("svg", {
      width: 135,
      height: 145
    }, _react["default"].createElement("g", {
      fillRule: "nonzero",
      fill: "none"
    }, _react["default"].createElement("path", {
      d: "M43.44 89.61L60.38 74 43.44 89.61zm9.77-16.08c.26-.44 11.69.89 11.69.34 0-1.7-2.9-2.87-4.52-2.87H44.66c-1.51 0-3.39.09-5.42.09-1.7 0-3.21 0-4.64-.1h-1.42c-7.59 0-11 3.15-12 4.22-4.57 4.22-7.14 14-9.25 24-.2 1-.37 1.78-.51 2.37-.94 3.93-.6 7.27.94 9.41a5.37 5.37 0 003.94 2.25c.173.01.347.01.52 0a6 6 0 005.73-4.58s.25-.66.11.77c-.51 5.19-.56 6.28-1.11 10.25-1.22 8.76-1.92 13.66-1.94 14.57v.11c-.2 1.37-.71 5 1.49 7.55a6.39 6.39 0 005 2.14h.07a6.74 6.74 0 005.3-2.25c2-2.31 2.5-9.06 2.8-12.78.4-3.09 1.52-9.39 1.54-10.9.19 2.21.91 17.52.91 18.1 0 5.12 2.74 8.56 6.83 8.56a7.6 7.6 0 001.4-.13 6.46 6.46 0 005.29-4.65 7.84 7.84 0 00.28-3.21c-.09-.88-1.53-15.06-2.71-27.07l-1.08.93-1.8.53c1.22 12.52 2.68 26.41 2.62 27a3.54 3.54 0 01-3.11 3.39 5.52 5.52 0 01-.87.08c-3 0-3.83-3.12-3.83-5.56 0-2.66-2.05-22.3-2.05-22.3a5.2 5.2 0 00-.51-1.8 2.18 2.18 0 00-1.46-.36c-.46 0-.92.49-1.26 2-1.07 4.5-2.29 15.81-3.08 19.94-.84 4.34-.33 7.4-5.19 7.4-4.91 0-3.53-6-3.5-6.59.03-.59 4-41.62 4-41.62s.38-2.84-1.39-2.9c-.5 0-1.14 1-1.88 3.92-2 8.19-3.69 14-3.69 14s-.63 2.36-2.83 2.36h-.27c-2.42-.2-3.24-3.68-2.22-8s3.69-20.25 9-25c0 0 2.46-3.31 9.81-3.31h1.28c1.62.07 3.25.1 4.78.1 3.45 0 6.44-.14 8-.14l5.93-.26zM34.79 70.62c-5.611-.022-10.145-4.585-10.13-10.197.015-5.611 4.572-10.15 10.183-10.143C40.455 50.287 45 54.838 45 60.45a10.18 10.18 0 01-10.21 10.17zm0-17.33a7.17 7.17 0 10.08 14.34 7.17 7.17 0 00-.08-14.34zM104.69 70.62a10.17 10.17 0 1110.16-10.17c-.006 5.61-4.55 10.159-10.16 10.17zm0-17.33a7.17 7.17 0 10-.02 14.34 7.17 7.17 0 00.02-14.34zM60.38 70.62a10.17 10.17 0 1110.16-10.17c-.006 5.61-4.55 10.159-10.16 10.17zm0-17.33a7.17 7.17 0 10-.02 14.34 7.17 7.17 0 00.02-14.34z",
      fill: "#4BBCAC"
    }), _react["default"].createElement("path", {
      d: "M130 56.16a1.47 1.47 0 011.09.44c1.36 1.37 1.36 3.19 0 5.24-1.36 2.05-16.42 19.84-16.42 19.84a48.55 48.55 0 00-1.28 11.85c.14 6.38.83 18.24 1.51 19.83.5 1.16.51 3.51 1.78 3.51.49 0 1.15-.35 2.1-1.23 3.42-3.19 7.29-6.84 7.29-6.84a2 2 0 011.33-.49 3.17 3.17 0 012.09 1c2.05 1.82.46 4.56-1.37 6.38-1.83 1.82-10.25 9.8-10.25 9.8a6 6 0 01-3.38 1.26c-1.48 0-3.15-.81-4.38-3.76-2.73-6.61-3.64-8.67-3.64-8.67s-1.32-2.43-2.27-2.43c-.47 0-.85.61-.92 2.43-.23 5.47-1.37 23.94-1.37 23.94s-.65 3.43-4 3.43h-.32c-3.65-.23-2.74-2.51-2.74-4.56S96 89.43 96 89.43s-.54-5.93-4.65-9.81c-4.11-3.88-13.9-15.27-13.9-15.27a4.31 4.31 0 010-5.47 3 3 0 012.31-1.27c1.56 0 3.08 1.46 4.3 2.84 1.82 2.08 10.71 11.42 10.71 11.42s4.56 4.43 10 4.43a9.73 9.73 0 005.47-1.69c8.52-6.48 16.87-17.1 16.87-17.1a5.33 5.33 0 012.89-1.35zm0-3a7.86 7.86 0 00-4.81 2.13l-.18.17-.16.2c-.08.1-8.17 10.33-16.24 16.5a6.65 6.65 0 01-3.74 1.14c-4 0-7.55-3.22-7.91-3.55C96.17 69 88 60.4 86.34 58.47c-1.66-1.93-3.75-3.86-6.55-3.86A5.92 5.92 0 0075.17 57a7.24 7.24 0 000 9.31c.44.51 10 11.6 14.15 15.53 2.89 2.73 3.59 7 3.7 7.76-.1 3.8-1.22 45.49-1.22 47.51v.83a6.16 6.16 0 001.17 4.85 6 6 0 004.42 1.87h.51a7.11 7.11 0 007-5.88v-.37c0-.55.64-10.36 1-17.66l1.39 3.35c2 4.89 5.35 5.62 7.15 5.62a9 9 0 005.28-1.93l.08-.07.08-.08c.34-.32 8.48-8 10.31-9.86 1.24-1.23 3.3-3.73 3.21-6.62a5.65 5.65 0 00-2-4.12 6.09 6.09 0 00-4.08-1.71 5 5 0 00-3.39 1.32l-6.23 5.84-.09-.2c-.45-1.63-1.14-11.57-1.3-18.81a46.39 46.39 0 011-10.4c3.34-3.94 14.83-17.57 16.15-19.55 2.17-3.25 2-6.63-.37-9a4.51 4.51 0 00-3.09-1.37z",
      fill: "#4BBCAC"
    }), _react["default"].createElement("path", {
      d: "M59.1 73.92h1.28c5.48.26 7.8.62 9.5 1.76l.58.82 2-2.34a4 4 0 00-.91-1c-2.38-1.6-5.33-2-11-2.27h-1.42c-7.6 0-11 3.15-12 4.22-4.57 4.22-7.14 14-9.25 24-.2 1-.38 1.78-.51 2.37-.94 3.93-.6 7.27.94 9.41a5.37 5.37 0 003.94 2.25c.173.01.347.01.52 0a6 6 0 005.73-4.58s.31-1.09.81-2.94c-.26 13.19-.56 27.85-.59 29.26v.11c-.19 1.37-.71 5 1.49 7.55a6.41 6.41 0 005 2.14h.07a6.66 6.66 0 005.29-2.25 8.13 8.13 0 001.79-5v-5.7c.1 1.1-.73-15.77.33-15.83 1.06-.06 1.31 21.7 1.43 22.4.69 3.86 3.19 6.33 6.65 6.33a7.6 7.6 0 001.4-.13 6.46 6.46 0 005.25-4.5 7.84 7.84 0 00.28-3.21c-.11-1.09-3.34-20.12-4.61-33.59.18.41.34.79.49 1.12.7 1.62 1.26 2.9 1.64 3.7 1 2.15 2.79 5 6.36 5a11.05 11.05 0 003.7-.81c2.73-1 4.89-4.15 3.73-8.34a3.3 3.3 0 00-.19-.49c0-.12-5.81-12.16-10-20.06a3.37 3.37 0 00-.19-.32l-2.46 1.72c4.2 7.94 10 20 10 20s1 3.68-1.84 4.7a8.54 8.54 0 01-2.7.64c-1.38 0-2.47-.82-3.65-3.3-1.57-3.32-7.16-17.08-8.57-17.08-.25 0-.36.4-.32 1.33.3 6.34 5.68 46.16 5.68 46.16s.58 3.8-3.1 4.46a5.52 5.52 0 01-.87.08c-2.57 0-3.56-2.34-3.78-4.54 0-.35-2.07-23.38-2.07-23.38s-.32-1.38-.9-1.76a2.22 2.22 0 00-2.14-.27c-.46.15-1.14.5-1.48 2-1.07 4.5-.95 23.29-1.07 24.27-.18 1.63-1 3.8-4 3.8-3.07 0-3.68-2.35-3.71-4.24 0-1.14.29-6.28.39-11.48.25-12.45.66-33.22.66-33.22s0-3.17-1.39-2.9c-.5 0-1.14 1-1.88 3.92-2 8.19-3.69 14-3.69 14s-.63 2.36-2.83 2.36h-.41c-2.42-.2-3.24-3.68-2.22-8s3.69-20.25 9-25c0 0 2.45-3.31 9.81-3.31",
      fill: "#4BBCAC"
    }), _react["default"].createElement("path", {
      d: "M74 84.92c-2.61 0-6.11-.67-6.44-5.51a4.59 4.59 0 011.27-3.63c2-2.06 5.61-2 6-1.94h.2c.2 0 4.89 1 5.94 5.15a4.62 4.62 0 01-.44 4c-1.08 1.47-3 1.71-5 1.83-.43.07-.97.1-1.53.1zm.55-8.09c-.82 0-2.74.18-3.58 1a1.58 1.58 0 00-.42 1.33c.18 2.52 1.37 2.87 4.84 2.66.59 0 2.4-.15 2.74-.62.12-.16.17-.64 0-1.51-.52-2.08-3-2.78-3.48-2.91l-.1.05z",
      fill: "#4BBCAC"
    }), _react["default"].createElement("path", {
      d: "M14.27 38.3a1.54 1.54 0 01-1-.41L1.09 26.26a1.5 1.5 0 012.08-2.16l12.14 11.62a1.5 1.5 0 01-1 2.58h-.04zM118.35 38.3a1.46 1.46 0 01-1.08-.46 1.49 1.49 0 010-2.12l12.18-11.62a1.5 1.5 0 112.08 2.16l-12.14 11.63a1.54 1.54 0 01-1.04.41zM70.43 20.31a1.5 1.5 0 01-1.5-1.5V2a1.5 1.5 0 013 0v16.81a1.5 1.5 0 01-1.5 1.5zM100.24 23.65a1.49 1.49 0 01-.81-.23 1.51 1.51 0 01-.46-2.08L108 7.18a1.502 1.502 0 012.53 1.62L101.5 23a1.49 1.49 0 01-1.26.65zM38.38 24.17a1.5 1.5 0 01-1.38-.86l-7.17-15.2a1.503 1.503 0 012.72-1.28L39.73 22a1.49 1.49 0 01-1.35 2.14v.03z",
      fill: "#E54498"
    })));
  }
}, {
  title: 'Finn en vare, kopier lenken, lag en Tipio.',
  buttonText: 'Ok, neste tips',
  icon: function icon() {
    return _react["default"].createElement("svg", {
      width: 102,
      height: 100
    }, _react["default"].createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, _react["default"].createElement("path", {
      d: "M99.89 79.77a11.6 11.6 0 00-13.8-7H86l-17 4.9a9.82 9.82 0 00-9.3-6.8h-8.8a10 10 0 01-5.1-1.4c-3.4-2-10.1-5.1-18-4.3h-.1c-.2 0-5 .8-8.8 1.7v-1.3a2 2 0 00-2-2H4.19a2 2 0 00-2 2V92a2 2 0 002 2h12.7a2 2 0 002-2v-1.2l5.9 1.2 26.4 4.9c2.1.48 4.247.715 6.4.7a28.2 28.2 0 0010.4-1.9h.1l30.6-13.4a2.06 2.06 0 001.2-2.53z",
      stroke: "#4BBCAC",
      strokeWidth: 3
    }), _react["default"].createElement("path", {
      d: "M59.13 60.64l-6.47-6.47h-9.09a4.29 4.29 0 01-4.28-4.28v-9.08l-6.47-6.47a4.27 4.27 0 010-6l6.47-6.47v-9.11a4.29 4.29 0 014.28-4.28h9.09L59.13 2a4.27 4.27 0 016 0l6.47 6.47h9.09A4.29 4.29 0 0185 12.76v9.09l6.47 6.47a4.27 4.27 0 010 6L85 40.81V50a4.29 4.29 0 01-4.28 4.28h-9.1l-6.47 6.47A4.52 4.52 0 0162.1 62a3.91 3.91 0 01-2.97-1.36zM71 11.63a1.66 1.66 0 01-1.14-.44L63 4.29a1.22 1.22 0 00-1.66 0l-6.9 6.9a1.84 1.84 0 01-1.14.44h-9.81a1.16 1.16 0 00-1.14 1.14v9.7a1.66 1.66 0 01-.44 1.14L35 30.5a1.22 1.22 0 000 1.66l6.9 6.9c.272.319.427.721.44 1.14v9.87a1.16 1.16 0 001.14 1.14h9.79a1.66 1.66 0 011.14.44l6.9 6.9a1.22 1.22 0 001.66 0l6.9-6.9a1.84 1.84 0 011.13-.44h9.79a1.16 1.16 0 001.14-1.14v-9.78a1.66 1.66 0 01.44-1.14l6.9-6.9a1.22 1.22 0 000-1.66l-7-6.9a1.84 1.84 0 01-.44-1.14v-9.79a1.16 1.16 0 00-1.14-1.14l-9.69.01z",
      fill: "#E54498",
      fillRule: "nonzero"
    }), _react["default"].createElement("path", {
      d: "M62 29.8a2.73 2.73 0 113.06-2.71 1.575 1.575 0 103.15 0 6 6 0 00-4.63-5.68V18.7a1.575 1.575 0 10-3.15 0v2.71a5.94 5.94 0 00-4.63 5.68A6.14 6.14 0 0062.1 33a2.73 2.73 0 11-3.1 2.74 1.575 1.575 0 10-3.15 0 6 6 0 004.63 5.68v2.71a1.575 1.575 0 103.15 0v-2.71a5.94 5.94 0 004.63-5.68A6.09 6.09 0 0062 29.8z",
      fill: "#E54498",
      fillRule: "nonzero"
    }), _react["default"].createElement("path", {
      d: "M67.61 75A17.67 17.67 0 0169 80.57s-1.14 2.89-20.35 1.71l-13.26-1.71M18.89 65.57v25.2",
      stroke: "#4BBCAC",
      strokeWidth: 3,
      strokeLinecap: "round"
    })));
  }
}, {
  title: 'La leverandørene konkurrere om å gi dere \u2028den beste prisen. ',
  buttonText: 'Ok, skjønner',
  icon: function icon() {
    return _react["default"].createElement("svg", {
      width: 113,
      height: 111
    }, _react["default"].createElement("g", {
      fillRule: "nonzero",
      fill: "none"
    }, _react["default"].createElement("path", {
      d: "M90 72.44a2.59 2.59 0 112.9-2.57 1.5 1.5 0 003 0 5.66 5.66 0 00-4.4-5.39v-2.57a1.5 1.5 0 00-3 0v2.57a5.63 5.63 0 00-4.39 5.39 5.82 5.82 0 006 5.64 2.58 2.58 0 11-2.9 2.56 1.5 1.5 0 00-3 0 5.66 5.66 0 004.39 5.39V86a1.5 1.5 0 003 0v-2.57a5.63 5.63 0 004.39-5.39 5.77 5.77 0 00-5.99-5.6z",
      fill: "#E54498"
    }), _react["default"].createElement("path", {
      d: "M106.49 100.32l-3-.24 1.49.12-1.5-.11a5.24 5.24 0 00-1.31-3.65c-1.14-1.19-3-1.74-5.53-1.68-8.35.24-16.54 0-17.62 0-.63.09-3.9.81-4 5.47l-3-.08c.18-6.13 4.54-8.17 6.82-8.39H79c.09 0 8.74.26 17.57 0 3.44-.09 6.05.79 7.8 2.64a8.27 8.27 0 012.12 5.92z",
      fill: "#4BBCAC"
    }), _react["default"].createElement("path", {
      d: "M110.09 101.35v6.2H68.4v-6.2h41.69zm2.75-2.76H65.65v11.71h47.19V98.59zM52.37 3.68A3.9 3.9 0 0155.18 5c3.23 3.22-1.32 6.62-1.32 6.62l29.81 30a5.44 5.44 0 013.63-1.84 3.94 3.94 0 012.64 1.1c3.23 2.83-.93 6.5-.93 6.5S75.36 60.84 74.42 61.69c-.7.62-2.72 3.12-5 3.12A3.49 3.49 0 0167 63.73c-3.17-3 1.4-7 1.4-7S40.26 27.18 38.27 27.18a.11.11 0 00-.08 0 5.77 5.77 0 01-3.72 1.89 3.64 3.64 0 01-2.81-1.47c-2.59-3 .73-5.88.73-5.88L48.51 5.61a6 6 0 013.86-1.93zm0-3a8.9 8.9 0 00-6 2.85l-16 16a8.82 8.82 0 00-2 2.72 7 7 0 006.13 9.8 7.33 7.33 0 003.92-1.21c4 3.45 15.37 14.87 25.94 25.92a8.24 8.24 0 00-1.49 4.31 6.29 6.29 0 002 4.77 6.46 6.46 0 004.52 1.92c3.18 0 5.57-2.43 6.72-3.59l.29-.3c1-.86 13-12.8 14.65-14.42.67-.6 3.11-3 3.1-6.22a6.14 6.14 0 00-2.25-4.72 7 7 0 00-4.62-1.84 7.28 7.28 0 00-3.35.87L58 11.49a7.4 7.4 0 001.31-3.59 6.38 6.38 0 00-2-5.07A6.88 6.88 0 0052.38.68h-.01z",
      fill: "#4BBCAC"
    }), _react["default"].createElement("path", {
      d: "M66.2 58.41a1.48 1.48 0 01-1.06-.41 1.5 1.5 0 010-2.13l16.71-16.74a1.503 1.503 0 012.15 2.1L67.26 58a1.47 1.47 0 01-1.06.41zM39.12 30a1.5 1.5 0 01-1.07-2.56l16.69-16.7a1.503 1.503 0 012.12 2.13L40.18 29.51a1.53 1.53 0 01-1.06.49zM49.32 41.88c.41.32 1.09 1 1.78 1.67.85.86 1.72 1.78 2.15 2.22L8.3 91.21a2.65 2.65 0 01-1.88.77 2.76 2.76 0 01-2-.81 2.73 2.73 0 01-.08-3.84l44.98-45.45zm-.27-4l-1.86 1.88L2.24 85.21a5.59 5.59 0 00-1.62 4.08 5.82 5.82 0 005.8 5.69 5.61 5.61 0 004-1.66l44.96-45.44 2.05-2.07-2-2.11-.22-.23c-.48-.5-1.23-1.29-2-2a21.49 21.49 0 00-2.08-1.93l-2.1-1.62.02-.04z",
      fill: "#4BBCAC"
    })));
  }
}];

var Onboarding = function Onboarding() {
  var swipeRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var _setActive = function _setActive() {
    swipeRef.current.next();
    setActive(active + 1);
  };

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.Modal, {
    showCloseButton: true
  }, _react["default"].createElement("div", {
    className: "joinTipioOnboarding"
  }, _react["default"].createElement(_reactSwipe["default"], {
    className: "carousel",
    swipeOptions: {
      continuous: false
    },
    ref: swipeRef
  }, steps.map(function (step) {
    return _react["default"].createElement("div", {
      className: ""
    }, _react["default"].createElement("div", {
      className: "joinTipioOnboarding--image"
    }, step.icon()), _react["default"].createElement("h4", {
      className: "joinTipioOnboarding--title"
    }, step.title, " "), _react["default"].createElement("div", {
      className: "joinTipioOnboarding--action"
    }, _react["default"].createElement(_SecondaryButton["default"], {
      text: step.buttonText,
      onClick: _setActive
    })));
  })), _react["default"].createElement("ul", {
    className: "joinTipioOnboarding--indicators"
  }, steps.map(function (s, i) {
    return _react["default"].createElement("li", {
      className: cx("joinTipioOnboarding--indicators--item", {
        active: i === active
      })
    });
  })))));
};

var _default = Onboarding;
exports["default"] = _default;