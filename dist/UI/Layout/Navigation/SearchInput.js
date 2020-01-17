"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _SearchIcon = _interopRequireDefault(require("../../Icons/SearchIcon"));

var _CloseIcon = _interopRequireDefault(require("../../Icons/CloseIcon"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Overlay = _interopRequireDefault(require("../../Overlay/Overlay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SearchInput = function SearchInput(props) {
  /**
   * State
   */
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];
  /**
   * Effects
   */


  var escFunction = (0, _react.useCallback)(function (event) {
    if (event.keyCode === 27) {
      setShow(false);
    }
  }, []);
  (0, _react.useEffect)(function () {
    document.addEventListener("keydown", escFunction, false);
    return function () {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  var _onKeyUp = function _onKeyUp(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      setShow(false);
      props.searchFormOnSubmit(e.target.value);
    }
  };

  var _onClick = function _onClick() {
    setShow(false);
  };

  return _react.default.createElement(_react.default.Fragment, null, show && _react.default.createElement(_Overlay.default, {
    onClick: _onClick
  }), _react.default.createElement("a", {
    href: "#",
    className: (0, _classnames.default)("nav-list-link", {
      "d-none": show
    }),
    onClick: function onClick(e) {
      e.preventDefault();
      setShow(true);
      props.searchFormOnShow();
    }
  }, _react.default.createElement(_SearchIcon.default, null)), _react.default.createElement("div", {
    className: (0, _classnames.default)("searchInput", {
      show: show
    })
  }, _react.default.createElement("div", {
    className: "searchInput__form"
  }, _react.default.createElement("div", {
    className: "searchInput__form--leftIcon"
  }, _react.default.createElement(_SearchIcon.default, null)), _react.default.createElement("input", {
    id: "search-layout",
    ref: function ref(input) {
      return input && input.focus();
    },
    onKeyUp: _onKeyUp,
    type: "text",
    className: "searchInput__form--input",
    placeholder: "S\xF8k produkt, navn, merke"
  }), _react.default.createElement("a", {
    className: "searchInput__form--rightIcon",
    href: "#",
    onClick: function onClick() {
      setShow(false);
    }
  }, _react.default.createElement(_CloseIcon.default, null)))));
};

var _default = SearchInput;
exports.default = _default;